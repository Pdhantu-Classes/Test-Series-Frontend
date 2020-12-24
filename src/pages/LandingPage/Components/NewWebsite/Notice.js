import React, { useState, useEffect } from 'react'
import http from 'axios'
import { Link } from 'react-router-dom'
import { API_ENDPOINTS } from '../../../../core/constants/apiConstant'
import '../../../NewLandingPage/css/Home.css'
import logo from '../../../NewLandingPage/assets/logo.png'

const GET_ACTIVE_NOTICE = API_ENDPOINTS.WEBSITE.GET_ACTIVE_NOTICE

export default function Notice() {

    const [notice, setNotice] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setLoading(true)
        http
            .get(GET_ACTIVE_NOTICE)
            .then(res => {
                setLoading(false)
                setNotice(res.data.noticeData)
            })
            .catch(err => console.log(err))
    }, [])
    return (
        <div>
            <header>
                <nav class="navbar navbar-expand-lg navbar-light bg-light better-bootstrap-nav-left bg-white shadow-sm fixed-top py-1">
                    <div class="container-fluid">
                        <button class="navbar-toggler border-0" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <a class="navbar-brand mx-auto" href="/" style={{ padding: "0.5rem 0" }}>
                            <img src={logo} alt="The Pdhantu Classes" style={{ height: "55px", marginTop:'-5px' }} /><span style={{ fontSize: "25px", marginLeft:'-10px' }}>The <span style={{ fontWeight: "bold", fontSize: "28px", color: "orange" }}>प</span>dhantu Classes</span>
                        </a>
                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul class="navbar-nav ml-auto ">
                                <li role="presentation" class="nav-item">
                                    <a href="#testSeries" class="nav-link font-weight-bold px-4 text-dark">Test Series
                                    <span class="badge badge-success">New</span></a>
                                </li>
                                <li role="presentation" class="nav-item">
                                    <a href="#cgpscCourse" class="nav-link font-weight-bold px-4 text-dark">Course
                                    <span class="badge badge-warning">New</span>
                                    </a>
                                </li>
                                <li role="presentation" class="nav-item">
                                <Link to="/notice"> <span class="nav-link font-weight-bold px-4 text-dark">Notice</span></Link>
                                </li>
                                <li role="presentation" class="nav-item">
                                <Link to="/current-affairs"><span class="nav-link font-weight-bold px-4 text-dark">Current Affairs</span></Link>
                                </li>
                                <li role="presentation" class="nav-item d-block d-sm-none">
                                    <span class="nav-link font-weight-bold px-4 text-danger">Signup</span>
                                </li>
                                <li role="presentation" class="nav-item d-block d-sm-none">
                                    <span class="nav-link font-weight-bold px-4 text-success">Login </span>
                                </li>
                                <li role="presentation" class="nav-item d-none d-md-block d-lg-block d-xl-block">
                                    <span class="nav-link btn btn-danger btn-md font-weight-bold text-white" style={{ width: "100px" }}>Signup </span>
                                </li>
                                <li role="presentation" class="nav-item ml-lg-2 d-none d-md-block d-lg-block d-xl-block">
                                    <span class="nav-link btn btn-md font-weight-bold text-white" style={{ background: "#6d49a7", width: "100px" }}>Login </span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
            {
                !loading ?
                    <div>
                        <div className="text-danger display-4 text-center mt-5 pt-5">
                            Notice
                    </div>
                        {
                            notice.length > 0 ?
                                <div className="text-center mt-3 list-group container">
                                    {
                                        notice.map((ele => {
                                            return (
                                                <div className="text-success list-group-item" style={{ fontSize: "20px" }}>
                                                    {ele.notice}
                                                    <div className="mt-2">
                                                        {
                                                            ele.link !== "" ? <a href={ele.link} target="blank">{ele.link}</a> : null
                                                        }
                                                    </div>
                                                </div>
                                            )
                                        }))
                                    }
                                </div>
                                :
                                <div className="text-center display-4 mt-5 pt-5">
                                    No Notice Available
                        </div>
                        }
                    </div>
                    :
                    <div className="mt-5 pt-5">
                        <div style={{ position: 'absolute', transform: 'translate(-50%,-50%)', top: '20%', left: '50%' }}>
                            <div className="d-flex justify-content-center">
                                <div className="spinner-border" role="status">
                                    <span className="sr-only">Loading...</span>
                                </div>
                            </div>
                        </div>
                    </div>
            }
        </div>
    )
}
