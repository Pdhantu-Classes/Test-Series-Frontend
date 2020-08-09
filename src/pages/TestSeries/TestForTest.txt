import React, { useState, useEffect } from "react";
import http from "axios";
import "../../css/TestScreen.css";
import { API_ENDPOINTS } from "../../core/constants/apiConstant";

const GET_MOCK_QUESTIONS = API_ENDPOINTS.TEST_SERIES.GET_MOCK_QUESTIONS;

export default function TestForTest() {

    const [questions, setQuestions] = useState([]);
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        setLoading(true);
        http
            .get(GET_MOCK_QUESTIONS.replace("<MOCK_ID>", 2))
            .then((res) => {
                setLoading(false)
                setQuestions(res.data.questions);
            })
            .catch((err) => console.log(err));
    }, []);

    var showQuestion = questions.map((data, index) => {
        return (
            <div className="mt-3 col-6 question-root jumbotron  ml-5">
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
                    <button className="btn btn-success btn-lg">Edit</button>
                    <button className="btn btn-danger btn-lg ml-5">Delete</button>
                </div>
            </div>
        )
    })

    return (
        <div>
            {
                loading ? <div>Loading</div>
                    :
                    <div>
                        {
                            questions && questions.length > 0 ? <div>{showQuestion}</div> : <div className="display-4 text-center mt-5 pt-5"> No Questions Available </div>
                        }
                    </div>
            }
        </div>
    )
}
