import React, { useState, useEffect } from 'react'
import UserNavBar from '../UserNavBar'
import http from "axios";
import { useHistory } from 'react-router-dom'
import { API_ENDPOINTS } from "../../../core/constants/apiConstantCourse";

const GET_SUBJECTS = API_ENDPOINTS.USERS.GET_SUBJECTS

export default function ChooseSubjects() {
    const history = useHistory()
    const [ subjectList, setSubjectList] = useState([])
    const [ loading, setLoading ] = useState(true)

    useEffect(() => {
        setLoading(true)
        const PAPER_ID = window.localStorage.getItem("paperId")
        http.get(GET_SUBJECTS,{
            headers:{
                paper_id: PAPER_ID
            }
        })
        .then(res=>{
            setLoading(false)
            setSubjectList(res.data.subjects)
        })
        .catch(err=>console.log(err))
    }, [])

    const handleChangeSubject = (id) =>{
        window.localStorage.setItem("subjectId", id)
        history.push('/user/course/viewTopics')
    }

    console.log(subjectList)

    return (
        <div>
            <UserNavBar />
            {
                !loading ?
                <div className="mt-5 pt-5">
                    <div className="mt-5 pt-3">
                        <h3 className="text-center text-primary">Subjects</h3>
                    </div>
                        <div class="table-responsive col-10 offset-1 text-center">
                            <table id="tablePreview" class="table table-bordered table-hover">
                                <thead>
                                    <tr>
                                        <th>Subject</th>
                                        <th>Paper</th>
                                        <th>Paper Code</th>
                                        <th>Part</th>
                                        <th>Link</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {subjectList.map((data, index) => {
                                        return (
                                            <tr>
                                                <td className="font-weight-bold">
                                                    {data.subject_name_english} 
                                                    <br></br>
                                                    {data.subject_name_hindi}
                                                </td>
                                                <td>
                                                    {data.paper_name_english}
                                                    <br></br>
                                                    {data.paper_name_hindi}
                                                </td>
                                                <td>
                                                    {data.paper_code}
                                                </td>
                                                <td>
                                                    {data.paper_part}
                                                </td>                                               
                                                <td><button className="btn btn-secondary" onClick={()=>{handleChangeSubject(data.id)}}>Click here</button></td>
                                            </tr>
                                            
                                        );
                                       
                                    })}
                                    
                                </tbody>
                            </table>
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
