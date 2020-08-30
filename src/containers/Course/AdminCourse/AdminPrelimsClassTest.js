import React, { useState, useEffect } from 'react'
import http from 'axios'
import { useHistory } from 'react-router-dom'
import AdminNavBar from "../AdminCourse/AdminNavBar";

import { API_ENDPOINTS } from '../../../core/constants/apiConstantCourse'

const ADD_CLASS_TEST_PRELIMS = API_ENDPOINTS.ADMIN.ADD_CLASS_TEST_PRELIMS
const GET_CLASS_TEST_PRELIMS = API_ENDPOINTS.ADMIN.GET_CLASS_TEST_PRELIMS
const GO_LIVE_CLASS_TEST_PRELIMS = API_ENDPOINTS.ADMIN.GO_LIVE_CLASS_TEST_PRELIMS
const STOP_CLASS_TEST_PRELIMS = API_ENDPOINTS.ADMIN.STOP_CLASS_TEST_PRELIMS

function fancyTimeFormat(time) {
    var hrs = ~~(time / 3600);
    var mins = ~~((time % 3600) / 60);
    var secs = ~~time % 60;
    var ret = "";

    if (hrs > 0) {
      ret += "" + hrs + "h " + (mins < 10 ? "0" : "");
    }

    ret += "" + mins + "m " + (secs < 10 ? "0" : "");
    ret += "" + secs + "s";
    return ret;
  }

export default function AdminPrelimsClassTest() {

    const history = useHistory()
    const [topicsData, setTopicsData] = useState([])
    const [loading, setLoading] = useState(false)
    const [loadingAdd, setLoadingAdd] = useState(false)
    const [topics, setTopics] = useState("")
    const [subject, setSubject] = useState("")
    const [noOfQuestions, setNoOfQuestions] = useState(0)
    const [paperTime, setPaperTime] = useState(0)
    const [paperDate, setPaperDate] = useState("")

    useEffect(() => {
        setLoading(true)
        http
            .get(GET_CLASS_TEST_PRELIMS)
            .then(res => {
                setLoading(false)
                setTopicsData(res.data.testData)
            })
            .catch(err => console.log(err))

    }, [])

    const handleChangeSubject = (e) => {
        setSubject(e.target.value)
    }

    const handleChangeTopics = (e) => {
        setTopics(e.target.value)
    }

    const handleChangeNoQuestion = (e) => {
        setNoOfQuestions(e.target.value)
    }

    const handleChangePaperTime = (e) => {
        let time = e.target.value
        setPaperTime(60*Number(time))
    }

    const handleChangePaperDate = (e) =>{
        setPaperDate(e.target.value)
    }
 

    const handleSubmitTest = () => {
        console.log(topics,subject,paperDate,paperTime,noOfQuestions)
        if(topics && subject && paperTime && paperDate && noOfQuestions){
            setLoadingAdd(true)
            let body = {
                topic_name: topics,
                subject_name: subject,
                no_of_questions: noOfQuestions,
                paper_time: paperTime,
                paper_date: paperDate
            }
            http
                .post(ADD_CLASS_TEST_PRELIMS, body)
                .then(res=>{
                    setLoadingAdd(false)
                    alert("Added Successfully")
                    window.location.reload()
                })
                .catch(err=>console.log(err))
        }
        else{
            alert("Please Fill All Details")
        }
    }

   const handleLive = (id) =>{
    setLoadingAdd(true)
       let body = {
           class_test_id: id
       }
        http
            .put(GO_LIVE_CLASS_TEST_PRELIMS,body)
            .then(res=>{
                setLoadingAdd(false)
                alert("Test is Live Now")
                window.location.reload()
            })
            .catch(err=>console.log(err))
   }

   const handleStop = (id) =>{

    setLoadingAdd(true)
    let body = {
        class_test_id: id
    }
     http
         .put(STOP_CLASS_TEST_PRELIMS,body)
         .then(res=>{
             setLoadingAdd(false)
             alert("Test has Stoped")
             window.location.reload()
         })
         .catch(err=>console.log(err))
   }

   const handleUpload = (id) =>{
    window.localStorage.setItem("testPaperId", id)
    history.push('/adminCourse/uploadClassTestQuestions')
   }

   const handleShow = (id) =>{
    window.localStorage.setItem("testPaperId", id)
    history.push('/adminCourse/showClassTestQuestions')
   }

   const handleViewRank = (id) =>{
    window.localStorage.setItem("testPaperId", id)
    history.push('/adminCourse/classTestRankList')
   }
    return (
        <div>
            <AdminNavBar />

            <div className="mt-5 pt-5 container w-75">
                <div className="mt-5 pt-5">
                    <div className="text-center text-primary">
                        <h2>
                            Add Class Test(Prelims)
                        </h2>  
                        </div>
                    <div class="form-group mt-2">
                        <label for="exampleFormControlInput1">Enter Subjects Name</label>
                        <input
                            type="text"
                            class="form-control"
                            onChange={(e) => handleChangeSubject(e)}
                        />
                    </div>

                    <div class="form-group mt-2">
                        <label for="exampleFormControlInput1">Enter Topics Name</label>
                        <input
                            type="text"
                            class="form-control"
                            onChange={(e) => handleChangeTopics(e)}
                        />
                    </div>

                    <div class="form-group mt-2">
                        <label for="exampleFormControlInput1">Enter Number of Question</label>
                        <input
                            type="number"
                            class="form-control"
                            onChange={(e) => handleChangeNoQuestion(e)}
                        />
                    </div>

                    <div class="form-group mt-2">
                        <label for="exampleFormControlInput1">Enter Paper Time(in min)</label>
                        <input
                            type="number"
                            class="form-control"
                            onChange={(e) => handleChangePaperTime(e)}
                        />
                    </div>


                    <div class="form-group mt-2">
                        <label for="exampleFormControlInput1">Enter Paper Date</label>
                        <input
                            type="date"
                            class="form-control"
                            onChange={(e) => handleChangePaperDate(e)}
                        />
                    </div>
                    <div className="text-center">
                        <button className="btn btn-success btn-lg" onClick={handleSubmitTest}>Submit</button>
                    </div>
                </div>
            </div>
            <div>
            {
            loadingAdd ?
                <div style={{ position: 'absolute', transform: 'translate(-50%,-50%)', top: '85%', left: '50%' }}>
                    <div className="d-flex justify-content-center">
                        <div className="spinner-border" role="status">
                            <span className="sr-only">Loading...</span>
                        </div>
                    </div>
                </div>
                :
                null
            }
            </div>
            <div className="mt-5">
                        {
                            !loading ?
                                <div className="mt-5 pt-1">
                                    <div>
                                        <h3 className="text-center text-primary">Class Test List</h3>
                                    </div>
                                    <div class="table-responsive col-10 offset-1 text-center">
                                        <table id="tablePreview" class="table table-bordered table-hover">
                                            <thead>
                                                <tr>
                                                    <th>Paper Id</th>
                                                    <th>Topics</th>
                                                    <th>Subject</th>
                                                    <th>No. of Questions</th>
                                                    <th>Paper Time</th>
                                                    <th>Paper Date</th>
                                                    <th>Upload</th>
                                                    <th>Status</th>
                                                </tr>
                                            </thead>
                                            {
                                                topicsData && topicsData.length > 0 ?

                                                <tbody>
                                                {topicsData.map((data, index) => {
                                            return (
                                                <tr>
                                                    <td className="font-weight-bold">
                                                        {index+1}
                                                    </td>
                                                    <td>
                                                        {data.topic_name}
                                                    </td>
                                                    <td>
                                                        {data.subject_name}
                                                    </td>
                                                    <td>
                                                        {data.no_of_questions}
                                                    </td>
                                                    <td>
                                                        {fancyTimeFormat(data.paper_time)}
                                                    </td>
                                                    <td>
                                                        {data.paper_date}
                                                    </td>
                                                    <td>
                                                        <div>
                                                        <button className="btn btn-info mt-1 ml-1" onClick={() => { handleShow(data.id) }}>Show</button>
                                                        <button className="btn btn-info mt-1 ml-1" onClick={() => { handleUpload(data.id) }}>Upload</button>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        {
                                                            !data.is_active && !data.is_rank_released?
                                                            <div>
                                                                <button className="btn btn-success mt-1" onClick={() => { handleLive(data.id) }}>Go Live</button>
                                                            </div>
                                                            :
                                                            data.is_active && !data.is_rank_released?
                                                            <div>
                                                                <button className="btn btn-danger mt-1" onClick={() => { handleStop(data.id) }}>Stop Test</button>
                                                            </div>
                                                            :
                                                            <div>
                                                            <button className="btn btn-primary mt-1" onClick={() => { handleViewRank(data.id) }}>View Rank</button>
                                                            </div>
                                                        }
                                                    </td>

                                                </tr>
                                            );
                                        })}
                                            </tbody>
                                        :
                                        null

                                            }

                                        </table>
                                    </div>
                                </div>
                                :
                                <div style={{ position: 'absolute', transform: 'translate(-50%,-50%)', top: '20%', left: '50%' }}>
                                    <div className="d-flex justify-content-center">
                                        <div className="spinner-border" role="status">
                                            <span className="sr-only">Loading...</span>
                                        </div>
                                    </div>
                                </div>
                        }
                    </div>
        </div>
    )
}
