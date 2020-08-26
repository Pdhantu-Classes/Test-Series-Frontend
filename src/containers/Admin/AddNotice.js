import React, { useState, useEffect } from 'react'
import http from 'axios'
import AdminNavBar from "./AdminNavBar";
import { API_ENDPOINTS } from '../../core/constants/apiConstant'

const ADD_NOTICE = API_ENDPOINTS.WEBSITE.ADD_NOTICE
const GET_ALL_NOTICE = API_ENDPOINTS.WEBSITE.GET_ALL_NOTICE
const INACTIVE_NOTICE = API_ENDPOINTS.WEBSITE.INACTIVE_NOTICE

export default function AddNotice() {
    const [notice, setNotice] = useState('')
    const [listNotice, setListNotice] = useState([])
    const [loading, setLoading] = useState(true)
    const [loadingAdd, setLoadingAdd] = useState(false)


    useEffect(() => {
        setLoading(true)
        http
            .get(GET_ALL_NOTICE)
            .then(res => {
                setLoading(false)
                setListNotice(res.data.noticeData)
            })
            .catch(err => console.log(err))
    }, [])

    const handleChange = (e) => {
        setNotice(e.target.value)
    }

    const handleClick = () => {
        setLoadingAdd(true)
        let body = {
            notice: notice
        }
        http
            .post(ADD_NOTICE, body)
            .then(res => {
                setLoadingAdd(false)
                window.location.reload()
            })
            .catch(err => console.log(err))
    }

    const handleInactive = (id) => {
        setLoadingAdd(true)
        let body = {
            notice_id: id
        }
        http
            .put(INACTIVE_NOTICE, body)
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
                <div class="form-group">
                    <label for="exampleFormControlInput1">Enter Notice</label>
                    <textarea
                        class="form-control"
                        id="exampleFormControlTextarea1"
                        rows="2"
                        onChange={(e) => handleChange(e)}
                    ></textarea>
                </div>
                <button className="btn btn-primary mt-5" onClick={handleClick}>Add Notice</button>
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
                        <h3 className="text-center text-primary">All Notice</h3>
                        <div class="table-responsive col-10 offset-1 text-center">
                            <table id="tablePreview" class="table table-bordered table-hover">
                                <thead>
                                    <tr>
                                        <th>S.No</th>
                                        <th>Notice</th>
                                        <th>Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        listNotice.map((data, index) => {
                                            return (
                                                <tr>
                                                    <td>{index + 1}</td>
                                                    <td>{data.notice}</td>
                                                    <td>
                                                        {
                                                            data.is_active ?
                                                                <button className="btn btn-success" onClick={() => { handleInactive(data.id) }}>Inactive</button>
                                                                :
                                                                <button className="btn btn-danger" disabled>Inactive</button>
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
