import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import http from 'axios'
import UserNavBar from '../UserNavBar'
import { getUserId } from "../../../core/utility/authHeader";
import { API_ENDPOINTS } from "../../../core/constants/apiConstantCourse";

const GET_CLASS_TEST_TOPIC_PRELIMS = API_ENDPOINTS.USERS.GET_CLASS_TEST_TOPIC_PRELIMS

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

export default function ClassTestPrelimsChoose() {
    const history = useHistory()
    const [classTestPaper, setClassTestPaper] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const USER_ID = getUserId();
        setLoading(true);
        http
            .get(GET_CLASS_TEST_TOPIC_PRELIMS, {
                headers: {
                    user_id: USER_ID
                }
            })
            .then((response) => {
                setLoading(false)
                setClassTestPaper(response.data.test_paper)
            })
            .catch(err => console.log(err))
    }, []);

    const handleChangeTest = (id, noOfQuestions, paperTime) => {
        window.localStorage.setItem("testPaperId", id)
        window.localStorage.setItem("noOfQuestions", noOfQuestions)
        window.localStorage.setItem("paperTime", paperTime)
        history.push('/user/course/classTestPrelimsInstructions')
    }

    const handleViewResult = (id) => {
        window.localStorage.setItem("testPaperId", id)
        history.push('/user/course/classTestResponse')
    }

    const handleViewRank = (id) => {
        window.localStorage.setItem("testPaperId", id)
        history.push('/user/course/classTestRank')
    }

    return (
        <div>
            <UserNavBar />
            <div className="mt-5 pt-5">
                {
                    !loading ?
                        <div>
                            {
                                classTestPaper && classTestPaper.length > 0 ?
                                    <div>
                                        <div className="mt-5 pt-3">
                                            <h3 className="text-center text-primary">Class Test Topics</h3>
                                        </div>
                                        <div class="table-responsive col-10 offset-1 text-center">
                                            <table id="tablePreview" class="table table-bordered table-hover">
                                                <thead>
                                                    <tr>
                                                        <th>Topics</th>
                                                        <th>Subject</th>
                                                        <th>No. Of Questions </th>
                                                        <th>Paper Time</th>
                                                        <th>Paper Date</th>
                                                        <th>Status</th>
                                                        <th>Actions</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {classTestPaper.map((data, index) => {
                                                        return (
                                                            <tr>
                                                                <td className="font-weight-bold">
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
                                                                {
                                                                    !data.is_active && !data.is_rank_released ? (
                                                                        <td className="text-primary font-weight-bold">
                                                                            Upcoming
                                                                        </td>
                                                                    )
                                                                        : data.is_active && !data.is_rank_released && data.is_attempted ? (
                                                                            <td className="text-info font-weight-bold">
                                                                                Completed
                                                                            </td>
                                                                        )
                                                                            : !data.is_active && data.is_rank_released && !data.is_attempted ? (
                                                                                <td className="text-danger font-weight-bold">
                                                                                    Not Attempted
                                                                                </td>
                                                                            )
                                                                                : !data.is_active && data.is_rank_released && data.is_attempted ? (
                                                                                    <td className="text-info font-weight-bold">
                                                                                        Completed
                                                                                    </td>
                                                                                )
                                                                                    : data.is_active && !data.is_rank_released ? (
                                                                                        <td className="text-success font-weight-bold blink">
                                                                                            Live&#8226;{" "}
                                                                                        </td>
                                                                                    )
                                                                                        : null
                                                                }
                                                                {
                                                                    !data.is_attempted && !data.is_active && !data.is_rank_released ?
                                                                        <td><button className="btn btn-primary" disabled>Coming Soon</button></td>
                                                                        :
                                                                        !data.is_attempted && data.is_active && !data.is_rank_released ?
                                                                            <td><button className="btn btn-success" onClick={() => { handleChangeTest(data.id, data.no_of_questions, data.paper_time) }}>Start Test</button></td>
                                                                            :
                                                                            data.is_attempted && data.is_active && !data.is_rank_released ?
                                                                                <td><button className="btn btn-info" onClick={() => { handleViewResult(data.id) }}>View Response</button></td>
                                                                                :
                                                                                data.is_attempted && !data.is_active && data.is_rank_released ?
                                                                                    <td>
                                                                                        <button className="btn btn-info mr-2 mt-1" onClick={() => { handleViewResult(data.id) }}> View Response</button>
                                                                                        <button className="btn btn-danger mt-1" onClick={() => { handleViewRank(data.id) }}>View Rank</button>
                                                                                    </td>
                                                                                    :
                                                                                    !data.is_attempted && !data.is_active && data.is_rank_released ?
                                                                                        <td><button className="btn btn-danger" disabled>Test End</button></td>
                                                                                        :
                                                                                        null
                                                                }
                                                            </tr>
                                                        );
                                                    })}
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                    :
                                    <div className="text-center text-info display-4">
                                        No Topic Available
                            </div>
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
        </div>
    )
}
