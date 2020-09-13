import React, { useState, useEffect } from 'react'
import http from "axios";
import AdminNavBar from "../AdminCourse/AdminNavBar";

import { API_ENDPOINTS } from '../../../core/constants/apiConstantCourse'

const GET_CURRENT_AFFAIRS = API_ENDPOINTS.ADMIN.GET_CURRENT_AFFAIRS
const ADD_CURRENT_AFFAIRS = API_ENDPOINTS.ADMIN.ADD_CURRENT_AFFAIRS


export default function AdminAddCurrentAffairs() {

    const [currentAffairsDetils, setCurrentAffairsDetils] = useState([])
    const [loading, setLoading] = useState(true)
    const [topic, setTopic] = useState('')
    const [videoUrl, setVideoUrl] = useState('')

    useEffect(() => {
        setLoading(true)

        http.get(GET_CURRENT_AFFAIRS)
            .then(res => {
                setLoading(false)
                setCurrentAffairsDetils(res.data.currentAffairs)
            })
            .catch(err => console.log(err))
    }, [])


    const handleTopic = (e) => {
        setTopic(e.target.value)
    }

    const handleVideoUrl = (e) => {
        setVideoUrl(e.target.value)
    }

    const handleSubmit = () => {
        setLoading(true)

        let body = {
            topics: topic,
            video_url_link: videoUrl
        }

        http.post(ADD_CURRENT_AFFAIRS, body)
            .then(res => {
                setLoading(false)
                alert(res.data.message)
                window.location.reload()
            })
            .catch(err => console.log(err))
    }

    return (
        <div>
            <AdminNavBar />
            {
                !loading ?
                    <div className="mt-5 pt-5">
                        <div className="offset-md-3 offset-sm-0">
                            <div className="form-group">
                                <label className="col-lg-3 control-label">Topic Name</label>
                                <div className="col-lg-8">
                                    <input
                                        className="form-control"
                                        type="text"
                                        value={topic}
                                        onChange={handleTopic}
                                    />
                                </div>
                            </div>
                            <div className="form-group">
                                <label className="col-lg-3 control-label">Video Url Link</label>
                                <div className="col-lg-8">
                                    <input
                                        className="form-control"
                                        type="text"
                                        value={videoUrl}
                                        onChange={handleVideoUrl}
                                    />
                                </div>
                            </div>
                            <button className="btn btn-primary offset-md-3 offset-sm-2" onClick={handleSubmit}>
                                Upload
                            </button>
                            <div className="offset-3 mt-3"><h2>Current Affairs</h2></div>
                        </div>
                        {
                            currentAffairsDetils.length > 0 ?
                                <div class="table-responsive col-10 offset-1 text-center mt-4">
                                    <table id="tablePreview" class="table table-bordered table-hover">
                                        <thead>
                                            <tr>
                                                <th>Topics</th>
                                                <th>Video Link</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {currentAffairsDetils.map((data, index) => {
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
                                null
                        }

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

