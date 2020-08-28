import React, { useState, useEffect } from 'react'
import http from 'axios'
import AdminNavBar from "./AdminNavBar";
import { API_ENDPOINTS } from '../../core/constants/apiConstant'

const ADD_CURRENT_AFFAIRS = API_ENDPOINTS.WEBSITE.ADD_CURRENT_AFFAIRS
const GET_ALL_CURRENT_AFFAIRS = API_ENDPOINTS.WEBSITE.GET_ALL_CURRENT_AFFAIRS
const INACTIVE_CURRENT_AFFAIRS = API_ENDPOINTS.WEBSITE.INACTIVE_CURRENT_AFFAIRS

export default function AddCurrentAffairs() {
    const [currentAffairs, setCurrentAffairs] = useState('')
    const [link, setLink] = useState('')
    const [listCurrentAffairs, setListCurrentAffairs] = useState([])
    const [loading, setLoading] = useState(true)
    const [loadingAdd, setLoadingAdd] = useState(false)


    useEffect(() => {
        setLoading(true)
        http
            .get(GET_ALL_CURRENT_AFFAIRS)
            .then(res => {
                setLoading(false)
                setListCurrentAffairs(res.data.currentAffairsData)
            })
            .catch(err => console.log(err))
    }, [])

    const handleChange = (e) => {
        setCurrentAffairs(e.target.value)
    }

    const handleChangeLink = (e)=>{
        setLink(e.target.value)
    }

    const handleClick = () => {
        if(currentAffairs !== ""){
            setLoadingAdd(true)
            let body = {
                current_affairs: currentAffairs,
                link:link
            }
            http
                .post(ADD_CURRENT_AFFAIRS, body)
                .then(res => {
                    setLoadingAdd(false)
                    window.location.reload()
                })
                .catch(err => console.log(err))
        }
        else{
            alert("Current Affairs is required")
        }

    }

    const handleInactive = (id) => {
        setLoadingAdd(true)
        let body = {
            current_affairs_id: id
        }
        http
            .put(INACTIVE_CURRENT_AFFAIRS, body)
            .then(res => {
                setLoadingAdd(false)
                window.location.reload()
            })
            .catch(err => console.log(err))
    }


    return (
        <div>
            <AdminNavBar />
            <div className="text-center mt-5 pt-5 container">
                <div class="form-group mt-5 pt-5">
                    <label for="exampleFormControlInput1">Enter Current Affairs</label>
                    <textarea
                        class="form-control"
                        id="exampleFormControlTextarea1"
                        rows="5"
                        onChange={(e) => handleChange(e)}
                    ></textarea>
                </div>
                <div class="form-group mt-2">
                    <label for="exampleFormControlInput1">Enter Link</label>
                    <input
                        class="form-control"
                        onChange={(e) => handleChangeLink(e)}
                    />
                </div>
                <button className="btn btn-primary mt-5" onClick={handleClick}>Add Current Affairs</button>
            </div>



            {
                loadingAdd ?
                    <div className="d-flex justify-content-center mt-5 pt-5">
                        <div className="spinner-border" role="status">
                            <span className="sr-only">Loading...</span>
                        </div>
                    </div>
                    :
                    null
            }

            {
                !loading ?

                    <div className="mt-5 pt-5">
                        <h3 className="text-center text-primary">All Current Affairs</h3>
                        <div class="table-responsive col-10 offset-1 text-center">
                            <table id="tablePreview" class="table table-bordered table-hover">
                                <thead>
                                    <tr>
                                        <th>S.No</th>
                                        <th>Current Affairs</th>
                                        <th>Link</th>
                                        <th>Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        listCurrentAffairs.map((data, index) => {
                                            return (
                                                <tr>
                                                    <td>{index + 1}</td>
                                                    <td>{data.current_affairs}</td>
                                                    <td>{data.link}</td>
                                                    <td>
                                                        {
                                                            data.is_active ?
                                                                <button className="btn btn-success" onClick={() => { handleInactive(data.id) }}>Inactive</button>
                                                                :
                                                                <button className="btn btn-danger" disabled>Not Active</button>
                                                        }
                                                    </td>
                                                </tr>
                                            )
                                        })
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                    :
                    <div className="d-flex justify-content-center py-5">
                        <div className="spinner-border" role="status">
                            <span className="sr-only">Loading...</span>
                        </div>
                    </div>
            }
        </div>
    )
}
