import React, { useState, useEffect } from 'react'
import UserNavBar from '../UserNavBar'
import http from "axios";
import { API_ENDPOINTS } from "../../../core/constants/apiConstantCourse";

const GET_TOPICS = API_ENDPOINTS.USERS.GET_TOPICS

export default function ViewTopics() {
    const [ subjectDetils, setSubjectDetails] = useState([])
    const [ itemLists, setItemLists] = useState([])
    const [ loading, setLoading ] = useState(true)

    useEffect(() => {
        setLoading(true)
        const COURSE_ID = window.localStorage.getItem("course")
        const SUBJECT_ID = window.localStorage.getItem("subjectId")
        http.get(GET_TOPICS,{
            headers:{
                course_id: COURSE_ID,
                subject_id: SUBJECT_ID
            }
        })
        .then(res=>{
            setLoading(false)
            setSubjectDetails(res.data.subjectDetails)
            setItemLists(res.data.topics)
        })
        .catch(err=>console.log(err))
    }, [])

    const handleDownloadPdf = (url) =>{
        console.log(url)
        window.location.href = url
    }

    console.log(itemLists)

    return (
        <div>
            <UserNavBar />
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
                    {
                        itemLists.length > 0 ?
                        <div class="table-responsive col-10 offset-1 text-center">
                            <table id="tablePreview" class="table table-bordered table-hover">
                                <thead>
                                    <tr>
                                        <th>Topics</th>
                                        <th>Video Link</th>
                                        <th>Pdf Notes</th>
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
                                                   <a href= {data.video_url_link} target="blank">View Video</a>
                                                </td>                                          
                                                <td><button className="btn btn-secondary" onClick={()=>{handleDownloadPdf(data.pdf_url_link)}}>Download Pdf</button></td>
                                            </tr>
                                            
                                        );                                     
                                    })}
                                    
                                </tbody>
                            </table>
                        </div>
                        :
                        <div className="display-4 text-center">Coming Soon..</div>
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