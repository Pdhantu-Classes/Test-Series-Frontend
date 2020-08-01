import React from 'react'
import { Link } from 'react-router-dom'
import '../../../../css/DashBoard.css'

export default function CgpscCourse() {
    return (
        <div className="mt-5 pt-3 container">
            <div className="row">
            <div
                className="card text-center lg-5 offset-lg-3 mt-5"
                style={{
                    background:"linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(0,212,255,1) 0%, rgba(179,223,211,1) 0%",
                    height: "370px",
                }}
            >
                    <img className="blink" style={{width:"60px", height:"60px"}} src="https://pdhantu-classes.s3.us-east-2.amazonaws.com/miscellaneous/new.svg" alt="new"/>
                <div className="card-body">
                    <h3 className="p-3 text-dark py-4">
                        The Pdhantu CGPSC Course(Pre+Mains)
                    </h3>
                    <h3 className="text-dark">Starts on 17th August</h3>
                    <h3 className="text-danger">Stay Tuned For More Updates</h3>
                    <div className="d-flex mt-3 offset-lg-2 offset-md-2 offset-sm-2 offset-xs-2 pl-5">
                        <Link to="/signupCourse">
                            <button className="btn btn-primary btn-lg ml-5 mr-2">Register</button>
                        </Link>
                        <Link to="/cgpsc/details">
                            <button className="btn btn-primary btn-lg ml-4">Details</button>
                        </Link>
                    </div>
                </div>
            </div>               
        </div>
        </div>
    )
}
