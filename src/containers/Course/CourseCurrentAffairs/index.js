import React, { useState, useEffect } from 'react'
import UserNavBar from '../UserNavBar'
import http from "axios";
import { API_ENDPOINTS } from "../../../core/constants/apiConstantCourse";

const GET_CURRENT_AFFAIRS = API_ENDPOINTS.USERS.GET_CURRENT_AFFAIRS
export default function CourseCurrentAffairs() {

    const [itemLists, setItemLists] = useState([])
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        setLoading(true)
        http.get(GET_CURRENT_AFFAIRS)
            .then(res => {
                setLoading(false)
                setItemLists(res.data.currentAffairs)
            })
            .catch(err => console.log(err))

    }, [])
    return (
        <div>
            <UserNavBar />
            {
                !loading ?
                    <div className="mt-5 pt-5">
                        <div className="text-center text-danger mt-3">
                            <h2>Current Affairs</h2>
                        </div>
                        <div className="mt-5">
                            {
                                itemLists.length > 0 ?
                                    <div class="table-responsive col-10 offset-1 text-center mt-4">
                                        <table id="tablePreview" class="table table-bordered table-hover">
                                            <thead>
                                                <tr>
                                                    <th>Topics</th>
                                                    <th>Video Link</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {itemLists.map((data, index) => {
                                                    return (
                                                        <tr>
                                                            <td className="font-weight-bold">
                                                                {data.topics}
                                                            </td>
                                                            <td>
                                                                <a href={data.video_url_link} target="blank">{data.video_url_link}</a>
                                                            </td>
                                                        </tr>
                                                    );
                                                })}
                                            </tbody>
                                        </table>
                                    </div>
                                    :
                                    <div className="text-center"><h2>No Current Affairs Available</h2></div>
                            }
                        </div>

                    </div>
                    :
                    <div className="d-flex justify-content-center mt-5 pt-5">
                        <div className="spinner-border mt-5 pt-2" role="status">
                            <span className="sr-only">Loading...</span>
                        </div>
                    </div>
            }
        </div>
    )
}
