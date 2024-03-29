import React, { useState, useEffect } from 'react'
import http from "axios";
import { useHistory } from 'react-router-dom'
import AdminNavBar from "../AdminCourse/AdminNavBar";

import { API_ENDPOINTS } from '../../../core/constants/apiConstantCourse'

const GET_TOPICS = API_ENDPOINTS.ADMIN.GET_TOPICS
const UPLOAD_TOPIC = API_ENDPOINTS.ADMIN.UPLOAD_TOPIC
const DELETE_TOPIC = API_ENDPOINTS.ADMIN.DELETE_TOPIC


export default function AdminUploadSection() {

    const history = useHistory()
    const [subjectDetils, setSubjectDetails] = useState([])
    const [itemLists, setItemLists] = useState([])
    const [loading, setLoading] = useState(true)
    const [isDeleteLoading, setIsDeleteLoading] = useState(false)
    const [topic, setTopic] = useState('')
    const [videoUrl, setVideoUrl] = useState('')

    useEffect(() => {
        setLoading(true)
        const COURSE_ID = window.localStorage.getItem("adminCourseId")
        const SUBJECT_ID = window.localStorage.getItem("adminSubjectId")
        const BATCH = window.localStorage.getItem("batch")
        http.get(GET_TOPICS, {
            headers: {
                course_id: COURSE_ID,
                subject_id: SUBJECT_ID,
                batch:BATCH
            }
        })
            .then(res => {
                setLoading(false)
                setSubjectDetails(res.data.subjectDetails)
                setItemLists(res.data.topics)
            })
            .catch(err => console.log(err))
    }, [])

    const handleViewPdf = (url) => {
        console.log(url)
        window.location.href = url
    }

    const handleTopic = (e) => {
        setTopic(e.target.value)
    }

    const handleVideoUrl = (e) => {
        setVideoUrl(e.target.value)
    }

    const handleUploadPdf = (id) =>{
        window.localStorage.setItem("adminTopicId",id)
        history.push('/adminCourse/uploadTopicPdf')
    }

    const handleSubmit = () => {
        setLoading(true)
        const COURSE_ID = window.localStorage.getItem("adminCourseId")
        const SUBJECT_ID = window.localStorage.getItem("adminSubjectId")
        const BATCH = window.localStorage.getItem("batch")

        let body = {
            course_id: COURSE_ID,
            subject_id: SUBJECT_ID,
            topics: topic,
            video_url_link: videoUrl,
            batch:BATCH
        }

        http.post(UPLOAD_TOPIC, body)
            .then(res => {
                setLoading(false)
                alert(res.data.message)
                window.location.reload()
            })
            .catch(err => console.log(err))
    }

    const handleDelete = (id)=>{
        setIsDeleteLoading(true)
        const COURSE_ID = window.localStorage.getItem("adminCourseId")
        let payload = {
            topic_id:id,
            course_id: Number(COURSE_ID)
        }
        http.post(DELETE_TOPIC,payload)
            .then(res => {
                setIsDeleteLoading(false)
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
                        <div className="mt-5 pt-3">
                            {
                                subjectDetils ?
                                    <div>
                                        <h4 className="text-center text-danger">
                                            {subjectDetils.subject_name_english}
                                        </h4>
                                    </div>
                                    :
                                    null
                            }

                        </div>
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

                        </div>
                        {
                            isDeleteLoading ?
                                <div className="d-flex justify-content-center mt-5 pt-5">
                                    <div className="spinner-border mt-5 pt-2" role="status">
                                        <span className="sr-only">Loading...</span>
                                    </div>
                                </div>
                            :
                                null
                        }
                        {
                            itemLists.length > 0 ?
                                <div class="table-responsive col-10 offset-1 text-center mt-4">
                                    <table id="tablePreview" class="table table-bordered table-hover">
                                        <thead>
                                            <tr>
                                                <th>Topics</th>
                                                <th>Video Link</th>
                                                <th>Pdf Notes</th>
                                                <th>Delete</th>
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
                                                        <td>
                                                            {
                                                                data.pdf_url_link !== null ?
                                                                    <button className="btn btn-secondary" onClick={() => { handleViewPdf(data.pdf_url_link) }}>View Pdf</button>
                                                                :
                                                                    <button className="btn btn-secondary" onClick={() => { handleUploadPdf(data.id) }}>Upload Pdf</button>

                                                            }
                                                        </td>
                                                        <td><button className="btn btn-danger" onClick={()=>handleDelete(data.id)}>Delete</button></td>
                                                            
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
