import React, { useState, useEffect } from "react";
import http from "axios";
import AdminNavBar from './AdminNavBar'
import { useHistory } from 'react-router-dom'
import { API_ENDPOINTS } from "../../../core/constants/apiConstantTestSeries";

const GET_QUESTIONS = API_ENDPOINTS.ADMIN.GET_QUESTIONS
const DELETE_QUESTION = API_ENDPOINTS.ADMIN.DELETE_QUESTION
const DEELETE_ALL_QUESTION = API_ENDPOINTS.ADMIN.DELETE_ALL_QUESTION

export default function TestForTest() {
    const history = useHistory()
    const [questions, setQuestions] = useState([]);
    const [loading, setLoading] = useState(true);
    const [loadingDelete, setLoadingDelete] = useState(false);

    useEffect(() => {
        setLoading(true);
        http
            .get(GET_QUESTIONS, {
                headers: {
                    mock_paper_id: window.localStorage.getItem('mock_paper_id')
                }
            })
            .then((res) => {
                setLoading(false)
                showAlert(true)
                setQuestions(res.data.questions);
            })
            .catch((err) => console.log(err));
    }, []);

    const handleDelete = (id) => {
        console.log('delete', id)
        setLoadingDelete(true)
        http
            .delete(DELETE_QUESTION, {
                headers: {
                    question_id: id
                }
            }).then((res) => {
                setLoadingDelete(false)
                window.location.reload()
            })
            .catch((err) => console.error(err))
    }

    const deleteAllQuestion = () => {
        setLoadingDelete(true)
        http
            .delete(DEELETE_ALL_QUESTION, {
                headers: {
                    mock_paper_id: window.localStorage.getItem('mock_paper_id')
                }
            })
            .then((res) => {
                setLoadingDelete(false)
                window.location.reload()
            })
            .catch((err) => console.error(err))

    }
    console.log(loadingDelete)
    const handleEdit = (id) => {
        console.log('edit', id)
        window.localStorage.setItem('question_id', id)
        history.push('/admin/testseries/editQuestion')
    }
    const showAlert = () => (
        <div class="alert alert-danger" role="alert">
            This is a danger alert—check it out!
        </div>
    )
    var showQuestion = questions.map((data, index) => {
        return (
            <div className="mt-3 col-6 question-root jumbotron  ml-5 mt-5 ">
                <div className="mt-1">
                    <div className=" ml-1 font-weight-bold">
                        Q{index + 1}.
                    </div>
                    {
                        data.question_type === 1 ?
                            <div>
                                {data.question_english.length > 0 ? (
                                    <div className="ml-5" style={{ marginTop: "-25px" }}>
                                        <span className="font-weight-bold" >
                                            {
                                                data.question_english.map(e => {
                                                    return (
                                                        <div style={{ fontSize: '14px' }}>
                                                            {e}
                                                        </div>
                                                    )
                                                })
                                            }
                                        </span>
                                        <span className="font-weight-bold" >
                                            {
                                                data.question_hindi.length > 0 ?
                                                    <div>
                                                        {
                                                            data.question_hindi.map(e => {
                                                                return (
                                                                    <div style={{ fontSize: '14px' }}>
                                                                        {e}
                                                                    </div>
                                                                )
                                                            })
                                                        }
                                                    </div>
                                                    :
                                                    null
                                            }
                                        </span>
                                    </div>
                                ) : (
                                        <div className="ml-5" style={{ marginTop: "-25px" }}>
                                            <span className="font-weight-bold">
                                                {
                                                    data.question_hindi.length > 0 ?
                                                        <div>
                                                            {
                                                                data.question_hindi.map(e => {
                                                                    return (
                                                                        <div style={{ fontSize: '14px' }}>
                                                                            {e}
                                                                        </div>
                                                                    )
                                                                })
                                                            }
                                                        </div>
                                                        :
                                                        null
                                                }
                                            </span>
                                        </div>
                                    )}
                            </div>
                            :
                            <div>
                                <img className="image-responsive" src={data.question_english[0]} alt="Loading..."></img>
                            </div>
                    }
                </div>
                <div>
                    <div className="mt-1">
                        {
                            data.extras_question.length > 0 ?
                                data.extras_question.map((data, index) => {
                                    return (
                                        <div className="font-weight-bold ml-5" style={{ fontSize: '14px' }}>
                                            {data}
                                        </div>
                                    )
                                })
                                :
                                null
                        }
                        {
                            data.extras_option.length > 0 ?
                                data.extras_option.map((data, index) => {
                                    return (
                                        <div className="font-weight-bold ml-5" style={{ fontSize: '14px' }}>
                                            {data}
                                        </div>
                                    )
                                })
                                :
                                null
                        }
                    </div>
                </div>
                <div>
                    {
                        data.options_english.map((option, index) => {
                            return (
                                <div key={index}>
                                    <div className="ml-3 mt-5">
                                        <div
                                            style={{
                                                width: "20px",
                                                height: "20px",
                                                border: "2px solid black",
                                                borderRadius: "50%",
                                                background: "white",
                                            }}
                                        ></div>
                                    </div>
                                    <div className="ml-5 " style={{ marginTop: "-20px", fontSize: "14px" }}>
                                        {option}
                                        {option !== "" ? <br></br> : null}
                                        {data.options_hindi[index]}
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
                <div className="mr-5 mr-5 pt-3 font-italic float-right" style={{ fontSize: "20px" }}>
                    Answer: <b>{data.answer}</b>
                </div>
                <div className="ml-5 pt-3">
                    <button className="btn btn-success btn-lg" onClick={() => handleEdit(data.id)}>Edit</button>
                    <button className="btn btn-danger btn-lg ml-5" onClick={() => handleDelete(data.id)}>Delete</button>
                </div>
            </div>
        )
    })

    return (
        <div>
            <AdminNavBar />
            {/* { alert && showAlert()} */}
            {
                loadingDelete ? (<div className="d-flex justify-content-center py-5">
                    <div className="spinner-border" role="status">
                        <span className="sr-only">Loading...</span>
                    </div>
                </div>) : null
            }
            {
                loading ? <div className="d-flex justify-content-center py-5">
                    <div className="spinner-border" role="status">
                        <span className="sr-only">Loading...</span>
                    </div>
                </div>
                    :
                    <div className="container mt-5 pt-5">

                        {
                            questions && questions.length > 0 ? <div>
                                <div className="pt-5 mt-5">
                                    <button className="btn btn-danger float-right mb-3" onClick={deleteAllQuestion}>Delete Question</button>

                                </div>
                                {showQuestion}</div> : <div><div className="display-4 text-center mt-5 pt-5"> No Questions Available</div> <div className="offset-5"><button className="btn btn-success" onClick={() => history.push('/admin/testseries/uploadQuestion')}>Add Question</button></div></div>
                        }
                    </div>
            }

        </div>
    )
}