import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import UserNavBar from '../UserNavBar'

export default function ChoosePaper() {

    const history = useHistory()

    const [courseId, setCourseId] = useState(null)

    useEffect(() => {
        const COURSE_ID = window.localStorage.getItem("course")
        setCourseId(Number(COURSE_ID))
    }, []);

    const handleChange = (val) =>{
        window.localStorage.setItem("paperId", val)
        history.push("/user/course/subjects")
    }

    console.log(courseId)

    return (
        <div>
            <UserNavBar />
            <div className="offset-lg-3 offset-sm-0 offset-xs-0 mt-5 pt-5 container">
            {
                courseId > 0 ?
                    <div>
                        {
                            courseId === 1 ?
                                <div className="row text-center">
                                    <div
                                        className="ccol-lg-4 col-md-6 mt-5"
                                        onClick={() => { handleChange(2) }}
                                    >
                                        <div className="card bg-info ">
                                            <div className="card-body py-5 " style={{ height: "35vh" }}>
                                                <div className="py-5 text-white" style={{fontSize:"45px"}}>Prelims</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                :
                                courseId === 2 ?
                                    <div className="row text-center">
                                        <div
                                            className="col-lg-4 col-md-6 mt-5"
                                            onClick={() => { handleChange(2) }}
                                        >
                                            <div className="card bg-info ">
                                                <div className="card-body py-5 " style={{ height: "35vh" }}>
                                                    <div className="py-5 text-white" style={{fontSize:"45px"}}>Prelims</div>
                                                </div>
                                            </div>
                                        </div>

                                        <div
                                            className="col-lg-4 col-md-6 mt-5"
                                            onClick={() => { handleChange(1) }}>
                                            <div className="card bg-success ">
                                                <div className="card-body py-5" style={{ height: "35vh" }}>
                                                    <div className="py-5 text-white" style={{fontSize:"45px"}}>Mains</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    :
                                    courseId === 3 ?
                                        <div className="row text-center">
                                            <div
                                                className="col-lg-4 col-md-6 mt-5"
                                                onClick={() => { handleChange(1) }}
                                            >
                                                <div className="card bg-info ">
                                                    <div className="card-body py-5 " style={{ height: "35vh" }}>
                                                        <div className="py-5 text-white" style={{fontSize:"45px"}}>Mains(Hindi)</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        :
                                        courseId === 4 ?
                                            <div className="row text-center">
                                                <div
                                                    className="col-lg-4 col-md-6 mt-5"
                                                    onClick={() => { handleChange(1) }}
                                                >
                                                    <div className="card bg-info ">
                                                        <div className="card-body py-5 " style={{ height: "35vh" }}>
                                                            <div className="py-5 text-white" style={{fontSize:"45px"}}>Mains(English)</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            :
                                            null
                        }
                    </div>
                    :
                    <div className="d-flex justify-content-center pt-5 mt-5">
                        <div className="spinner-border" role="status">
                            <span className="sr-only">Loading...</span>
                        </div>
                    </div>
            }
            </div>
        </div>
    )
}
