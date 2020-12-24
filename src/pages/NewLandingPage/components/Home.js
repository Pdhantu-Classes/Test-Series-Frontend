import React, { useState } from 'react'
import Modal from "react-bootstrap/Modal";
import { Link } from 'react-router-dom'
import http from 'axios'
import { useAlert, types } from 'react-alert'
import logo from '../assets/logo.png'
import onlineClass from '../assets/online-class.svg'
import notes from '../assets/notebook.svg'
import classTest from '../assets/test.svg'
import t1 from '../assets/t1.jpg'
import t2 from '../assets/t2.png'
import t3 from '../assets/t3.jpg'
import t4 from '../assets/t4.jpeg'
import t5 from '../assets/t5.jpeg'
import t6 from '../assets/t6.jpg'
import fb from '../assets/facebook.svg'
import ig from '../assets/instagram.svg'
import tg from '../assets/telegram.svg'
import yt from '../assets/youtube.svg'
import github from '../assets/github.svg'
import linkedin from '../assets/linkedin.svg'
import '../css/Home.css'
import { API_ENDPOINTS } from '../../../core/constants/apiConstantCourse'

const GET_CLASS_SCHEDULE = API_ENDPOINTS.USERS.GET_CLASS_SCHEDULE
const USER_QUERY = "https://thephdantu.in/query"

export default function Home() {

    const alert = useAlert()
    const [showSignIn, setShowSignIn] = useState(false);
    const [showSignUp, setShowSignUp] = useState(false);
    const handleCloseSignUp = () => setShowSignUp(false);
    const handleCloseSignIn = () => setShowSignIn(false);
    const handleShowSignIn = () => setShowSignIn(true);
    const handleShowSignUp = () => setShowSignUp(true)
    const [isLoading, setIsLoading] = useState(false)
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

    const handleDownloadSchedule = () => {
        setIsLoading(true)
        http
            .get(GET_CLASS_SCHEDULE)
            .then(res => {
                setIsLoading(false)
                let pdf = res.data.pdf_link
                window.location.href = pdf
            })
            .catch(err => console.log(err))
    }

    const handleDownloadSyllabus = () => {
        window.location.href = "https://pdhantu-classes.s3.us-east-2.amazonaws.com/miscellaneous/cgpscPrelimsSyllabus.pdf"
    }

    const handleClick = () => {
        if (name && email && message) {
            let mailformat = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/
            if (email.match(mailformat)) {
                let body = {
                    name: name,
                    email: email,
                    message: message
                }
                http
                    .post(USER_QUERY, body)
                    .then((res) => {
                        alert.show("Success", { type: types.SUCCESS })
                        setName('')
                        setEmail('')
                        setMessage('')
                    })
                    .catch((err) => console.log(err))
            }
            else {
                alert.show("Enter Valid Email", { type: types.ERROR })
            }
        }
        else {
            alert.show("Please fill all details", { type: types.INFO })
        }

    }

    return (
        <div style={{ textAlign: "center" }}>
            <Modal show={showSignIn} onHide={handleCloseSignIn}>
                <Modal.Header closeButton>
                    <Modal.Title>Select Option</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="d-flex justify-content-center mb-3">

                        <Link to='/signupSeries'><button className="btn btn-secondary" onClick={handleCloseSignIn}>
                            Test Series CGACF
                            </button>
                        </Link>

                        <Link to="/signupCourse" >
                            <button className="btn btn-primary ml-2 " onClick={handleCloseSignIn}>
                                Course
                            </button>
                        </Link>

                        <Link to="/signupTestseries">
                            <button className="btn btn-info ml-2 " onClick={handleCloseSignIn}>
                                Test Series CGPSC/GK
                            </button>
                        </Link>
                    </div>
                </Modal.Body>
            </Modal>
            <Modal show={showSignUp} onHide={handleCloseSignUp}>
                <Modal.Header closeButton>
                    <Modal.Title>Select Option</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="d-flex justify-content-center mb-3">
                        <Link to='/loginSeries'>
                            <button className="btn btn-secondary" onClick={handleCloseSignUp}>
                                Test Series CGACF
                            </button>
                        </Link>
                        <Link to='/loginCourse'>
                            <button className="btn btn-primary ml-2 " onClick={handleCloseSignUp}>
                                Course
                            </button>
                        </Link>
                        <Link to='/loginTestseries'>
                            <button className="btn btn-info ml-2" onClick={handleCloseSignUp}>
                                Test Series CGPSC/GK
                            </button>
                        </Link>
                    </div>
                </Modal.Body>
            </Modal>
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
                                    <span class="nav-link font-weight-bold px-4 text-danger" onClick={handleShowSignIn}>Signup</span>
                                </li>
                                <li role="presentation" class="nav-item d-block d-sm-none">
                                    <span class="nav-link font-weight-bold px-4 text-success" onClick={handleShowSignUp}>Login </span>
                                </li>
                                <li role="presentation" class="nav-item d-none d-md-block d-lg-block d-xl-block">
                                    <span class="nav-link btn btn-danger btn-md font-weight-bold text-white" style={{ width: "100px" }} onClick={handleShowSignIn}>Signup </span>
                                </li>
                                <li role="presentation" class="nav-item ml-lg-2 d-none d-md-block d-lg-block d-xl-block">
                                    <span class="nav-link btn btn-md font-weight-bold text-white" style={{ background: "#6d49a7", width: "100px" }} onClick={handleShowSignUp}>Login </span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
            <section id="introduction" style={{ height: "700px" }} class="d-none d-md-block d-lg-block d-xl-block d-sm-block">
                <div class="container">
                    <div class="row pt-5 mt-5 align-items-center">
                        <div class="col-12 col-md-12 pt-5">
                            <h1 class="text-white display-4 font-weight-bold mb-2 pt-3">Admission Open in Batch-IV</h1>
                            <h2 class="h2 text-white mb-2">For CGPSC Online Course</h2>
                            <h2 class="h2 text-white mb-5 font-weight-bold">अभी Registration करे</h2>
                            <Link to="/signupCourse" style={{ textDecoration: "none" }}><span class="btn-light shadow rounded text-danger font-weight-bold p-3 text-decoration-none mb-4"
                            >Register Now
                            </span></Link>
                            <h2 class="h2 text-white mb-5 mt-5 font-weight-bold">Prelims | Pre+Mains | Mains(Hindi+English Medium)</h2>
                            <div className="h2 blink">
                                <span className="badge badge-success">Offline Classes COMING SOON... @ Raipur</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section id="introduction-sm" style={{ height: "400px" }} class="d-block d-sm-none">
                <div class="container">
                    <div class="row pt-5 align-items-center">
                        <div class="col-12 col-md-12 col-sm-12 col-lg-12">
                            <h2 class="text-white font-weight-bold mt-5">Admission Open in Batch-IV</h2>
                            <h4 class="h4 text-white mb-2">For CGPSC Online Course</h4>
                            <h2 class="h4 text-white mb-4 font-weight-bold">अभी Registration करे</h2>
                            <div class="col-md-4 mt-3 ">
                                <Link to="/signupCourse" style={{ textDecoration: "none" }}><span class="btn-light btn-sm shadow rounded text-danger font-weight-bold p-2 text-decoration-none"
                                >Register Now
                                </span>
                                </Link>
                            </div>
                            <h6 class=" text-white mb-3 mt-3 font-weight-bold">Prelims | Pre+Mains | Mains(Hindi+English)</h6>
                            <div className="h6 blink">
                                <span className="badge badge-success">Offline Classes COMING SOON... @ Raipur</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section style={{ background: "#F3FCFD" }}>
                <div className="container mb-5">
                    <div class="card-deck">
                        <div class="card shadow intro-card-1" style={{ height: "230px" }}>
                            <img class="card-img-top mt-5" src={onlineClass} style={{ height: '65px' }} alt="cap1" />
                            <div class="card-body">
                                <h5 class="card-title">Online/Live Classes</h5>
                            </div>
                        </div>
                        <div class="card shadow intro-card-2" style={{ height: "230px" }}>
                            <img class="card-img-top mt-5" src={notes} style={{ height: '65px' }} alt="cap2" />
                            <div class="card-body">
                                <h5 class="card-title">Topicwise Pdf Notes</h5>
                            </div>
                        </div>
                        <div class="card shadow intro-card-3" style={{ height: "230px" }}>
                            <img class="card-img-top mt-5" src={classTest} style={{ height: '65px' }} alt="cap3" />
                            <div class="card-body">
                                <h5 class="card-title">Pdhantu Online Class Test </h5>
                            </div>
                        </div>
                    </div>
                </div>
                <hr></hr>
                <div id="testSeries" className="text-center mt-2">
                    <h3 className="font-weight-bold">TEST SERIES 2020</h3>
                </div>

                <div className="text-center mt-3">
                    <h3>
                        <span class="badge badge-primary">CGPSC/GK</span>
                    </h3>
                </div>

                <div className="container mt-2 mb-5">
                    <div className="row">
                        <div className="col-md-5 col-sm-12 col-xs-12 offset-md-1 offset-sm-0">
                            <div class="card shadow border border-success" style={{ height: "550px" }}>
                                <img class="card-img-top mt-5" src={classTest} style={{ height: '150px' }} alt="cap3" />
                                <div class="card-body">
                                    <h5 class="card-title mt-3">CGPSC Prelims/Chhattisgarh GK Test Series</h5>
                                    <h6 class="badge badge-success">Registration Open</h6>
                                    <div className="text-center">
                                        <Link to="/signupTestseries" style={{ textDecoration: "none" }}><span class="btn btn-danger btn-md font-weight-bold text-white mt-2" style={{ width: "75%" }}>Register Now </span></Link>
                                        <Link to="/loginTestseries" style={{ textDecoration: "none" }}>  <span class="btn btn-primary btn-md font-weight-bold text-white mt-3" style={{ width: "75%" }}>Login </span> </Link>
                                        <Link to="/testSeriesSchedule" style={{ textDecoration: "none" }}>   <span class="btn btn-success btn-md font-weight-bold text-white mt-3" style={{ width: "75%" }}>Test Schedule </span></Link>
                                        <span class="btn btn-info btn-md font-weight-bold text-white mt-3" style={{ width: "75%" }} onClick={handleDownloadSyllabus}>Full Syllabus </span>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-sm-12 col-xs-12" >
                            <div className="text-center">
                                <h5 className="font-weight-bold">Description</h5>
                            </div>
                            <div className="row">
                                <div className="col-md-6 col-sm-6 col-xs-6 mt-3">
                                    <div className="card shadow border-info" style={{ height: "150px" }}>
                                        <div className="align-items-center mt-5 pt-2 font-weight-bold">
                                            Entire Syllabus covered
                                            </div>
                                    </div>
                                </div>
                                <div className="col-md-6 col-sm-6 col-xs-6 mt-3">
                                    <div className="card shadow border-info" style={{ height: "150px" }}>
                                        <div className="align-items-center mt-5 font-weight-bold">
                                            22 Subjectwise test with 4 Model Paper(CGPSC Prelims)
                                            </div>
                                    </div>
                                </div>
                                <div className="col-md-6 col-sm-6 col-xs-6 mt-3">
                                    <div className="card shadow border-danger" style={{ height: "150px" }}>
                                        <div className="align-items-center mt-5 font-weight-bold">
                                            20 Topicwise test with 2 Model Paper(Chhattisgarh GK)
                                            </div>
                                    </div>
                                </div>
                                <div className="col-md-6 col-sm-6 col-xs-6 mt-3">
                                    <div className="card shadow border-danger" style={{ height: "150px" }}>
                                        <div className="align-items-center mt-5 pt-2 font-weight-bold">
                                            Billingual questions
                                            </div>
                                    </div>
                                </div>
                                <div className="col-md-6 col-sm-6 col-xs-6 mt-3">
                                    <div className="card shadow border-success" style={{ height: "150px" }}>
                                        <div className="align-items-center mt-5 pt-2 font-weight-bold">
                                            Subject Wise Test
                                            </div>
                                    </div>
                                </div>
                                <div className="col-md-6 col-sm-6 col-xs-6 mt-3">
                                    <div className="card shadow border-success" style={{ height: "150px" }}>
                                        <div className="align-items-center mt-5 pt-2 font-weight-bold">
                                            Question Design by experts
                                            </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* ---------------------------------------Test Series Section------------------------------------ */}

                <div className="text-center mt-3">
                    <h3>
                        <span class="badge badge-primary">CGACF</span>
                    </h3>
                </div>
                <div className="container mt-3 mb-5">
                    <div className="row">
                        <div className="col-md-5 col-sm-12 col-xs-12 offset-md-1 offset-sm-0">
                            <div class="card shadow border border-danger" style={{ height: "550px" }}>
                                <img class="card-img-top mt-5" src={classTest} style={{ height: '150px' }} alt="cap3" />
                                <div class="card-body">
                                    <h5 class="card-title">CGACF Test Series</h5>
                                    <h6 class="badge badge-danger">Test End</h6>
                                    <div className="text-center mt-4">
                                        <Link to="/signupSeries" style={{ textDecoration: "none" }}> <span class="btn btn-danger btn-md font-weight-bold text-white mt-2" style={{ width: "75%" }}>Register Now </span></Link>
                                        <Link to="/loginSeries" style={{ textDecoration: "none" }}> <span class="btn btn-primary btn-md font-weight-bold text-white mt-3" style={{ width: "75%" }}>Login </span></Link>
                                        <Link to="/testViewDetails" style={{ textDecoration: "none" }}>  <span class="btn btn-success btn-md font-weight-bold text-white mt-3" style={{ width: "75%" }}>Test Details </span></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-sm-12 col-xs-12" >
                            <div className="text-center">
                                <h5 className="font-weight-bold">Description</h5>
                            </div>
                            <div className="row">
                                <div className="col-md-6 col-sm-6 col-xs-6 mt-3">
                                    <div className="card shadow border-info" style={{ height: "150px" }}>
                                        <div className="align-items-center mt-5 pt-2 font-weight-bold">
                                            Entire Syllabus covered
                                            </div>
                                    </div>
                                </div>
                                <div className="col-md-6 col-sm-6 col-xs-6 mt-3">
                                    <div className="card shadow border-info" style={{ height: "150px" }}>
                                        <div className="align-items-center mt-5 pt-2 font-weight-bold">
                                            18 Mock test with 4 Model Paper
                                            </div>
                                    </div>
                                </div>
                                <div className="col-md-6 col-sm-6 col-xs-6 mt-3">
                                    <div className="card shadow border-danger" style={{ height: "150px" }}>
                                        <div className="align-items-center mt-5 font-weight-bold">
                                            Match Level and Orientation of ACF/Ranger
                                            </div>
                                    </div>
                                </div>
                                <div className="col-md-6 col-sm-6 col-xs-6 mt-3">
                                    <div className="card shadow border-danger" style={{ height: "150px" }}>
                                        <div className="align-items-center mt-5 pt-2 font-weight-bold">
                                            Billingual questions
                                            </div>

                                    </div>
                                </div>
                                <div className="col-md-6 col-sm-6 col-xs-6 mt-3">
                                    <div className="card shadow border-success" style={{ height: "150px" }}>
                                        <div className="align-items-center mt-5 pt-2 font-weight-bold">
                                            Subject Wise Test
                                            </div>

                                    </div>
                                </div>
                                <div className="col-md-6 col-sm-6 col-xs-6 mt-3">
                                    <div className="card shadow border-success" style={{ height: "150px" }}>
                                        <div className="align-items-center mt-5 pt-2 font-weight-bold">
                                            Question Design by experts
                                            </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div style={{ visibility: "hidden" }}>Hidden Text</div>
            </section>

            {/* ---------------------------------------Course Section------------------------------------ */}

            <section id="cgpscCourse">
                <div className="text-center">
                    <h3 className="font-weight-bold">COURSE</h3>
                </div>
                <div className="text-center mt-3">
                    <h3>
                        <span class="badge badge-danger">CGPSC ONLINE COURSE</span>
                    </h3>
                </div>
                <div className="container mt-3 mb-5">
                    <div className="row">

                        {/* <div className="col-md-5 col-sm-12 col-xs-12 mt-4 mb-3 batch-3-card">
                            <div class="card shadow border border-success" style={{ height: "580px" }}>
                                <img class="card-img-top mt-5" src={onlineClass} style={{ height: '150px' }} alt="cap3" />
                                <div class="card-body">
                                    <h5 class="card-title font-weight-bold" style={{ textDecoration: "underline" }}>Batch-III</h5>
                                    <h6 class="badge badge-success">Admission Open</h6>
                                    <div>
                                        <h5>Prelims <span className="badge badge-info">₹2940</span></h5>
                                        <h5>Prelims+Mains <span className="badge badge-info">₹6940</span> </h5>
                                        <h5>Mains(हिंदी) <span className="badge badge-info">₹4940</span> </h5>
                                        <h5>Mains(English) <span className="badge badge-info">₹4940</span> </h5>
                                    </div>
                                    <div className="text-center mt-3">
                                    <Link to="/signupCourse" style={{textDecoration:"none"}}><span class="btn btn-danger btn-md font-weight-bold text-white mt-2" style={{ width: "75%" }}>Register Now </span></Link>
                                    <Link to="/loginCourse" style={{textDecoration:"none"}}>   <span class="btn btn-primary btn-md font-weight-bold text-white mt-3" style={{ width: "75%" }}>Login </span></Link>
                                    </div>
                                </div>
                            </div>
                        </div> */}

                        <div className="col-md-5 col-sm-12 col-xs-12 offset-md-1 offset-sm-0 mt-2">
                            <div class="card shadow border border-success" style={{ height: "580px" }}>
                                <img class="card-img-top mt-5" src={onlineClass} style={{ height: '150px' }} alt="cap3" />
                                <div class="card-body">
                                    <h5 class="card-title font-weight-bold" style={{ textDecoration: "underline" }}>Batch-IV</h5>
                                    <h6 class="badge badge-success">Admission Open</h6>
                                    <div>
                                        <h5>Prelims <span className="badge badge-info">₹2940</span></h5>
                                        <h5>Prelims+Mains <span className="badge badge-info">₹6940</span> </h5>
                                        <h5>Mains(हिंदी) <span className="badge badge-info">₹4940</span> </h5>
                                        <h5>Mains(English) <span className="badge badge-info">₹4940</span> </h5>
                                    </div>
                                    <div className="text-center mt-3">
                                        <Link to="/signupCourse" style={{ textDecoration: "none" }}><span class="btn btn-danger btn-md font-weight-bold text-white mt-2" style={{ width: "75%" }}>Register Now </span></Link>
                                        <Link to="/loginCourse" style={{ textDecoration: "none" }}>   <span class="btn btn-primary btn-md font-weight-bold text-white mt-3" style={{ width: "75%" }}>Login </span></Link>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-5 col-sm-12 col-xs-12 mt-2">
                            <div class="card shadow border border-danger" style={{ height: "580px" }}>
                                <img class="card-img-top mt-5" src={onlineClass} style={{ height: '150px' }} alt="cap3" />
                                <div class="card-body">
                                    <h5 class="card-title font-weight-bold" style={{ textDecoration: "underline" }}>Batch-III</h5>
                                    <h6 class="badge badge-danger">Admission Closed</h6>
                                    <div className="text-center mt-3">
                                        <span class="btn btn-danger btn-md font-weight-bold text-white mt-2 disabled" style={{ width: "75%" }}>Register Now </span>
                                        <Link to="/loginCourse" style={{ textDecoration: "none" }}>   <span class="btn btn-primary btn-md font-weight-bold text-white mt-3" style={{ width: "75%" }}>Login </span></Link>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-5 col-sm-12 col-xs-12 offset-md-1 offset-sm-0 mt-2">
                            <div class="card shadow border border-danger" style={{ height: "580px" }}>
                                <img class="card-img-top mt-5" src={onlineClass} style={{ height: '150px' }} alt="cap3" />
                                <div class="card-body">
                                    <h5 class="card-title font-weight-bold" style={{ textDecoration: "underline" }}>Batch-II</h5>
                                    <h6 class="badge badge-danger">Admission Closed</h6>
                                    <div className="text-center mt-4">
                                        <span class="btn btn-danger btn-md font-weight-bold text-white mt-2 disabled" style={{ width: "75%" }}>Register Now </span>
                                        <Link to="/loginCourse" style={{ textDecoration: "none" }}> <span class="btn btn-primary btn-md font-weight-bold text-white mt-3" style={{ width: "75%" }}>Login </span></Link>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-5 col-sm-12 col-xs-12 mt-2">
                            <div class="card shadow border border-danger" style={{ height: "580px" }}>
                                <img class="card-img-top mt-5" src={onlineClass} style={{ height: '150px' }} alt="cap3" />
                                <div class="card-body">
                                    <h5 class="card-title font-weight-bold" style={{ textDecoration: "underline" }}>Batch-I</h5>
                                    <h6 class="badge badge-danger">Admission Closed</h6>
                                    <div className="text-center mt-3">
                                        <span class="btn btn-danger btn-md font-weight-bold text-white mt-2 disabled" style={{ width: "75%" }}>Register Now </span>
                                        <Link to="/loginCourse" style={{ textDecoration: "none" }}>   <span class="btn btn-primary btn-md font-weight-bold text-white mt-3" style={{ width: "75%" }}>Login </span></Link>
                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
                <div className="container mt-5" >
                    <div className="row">
                        <div className="col-md-4 col-sm-12 col-xs-12 mt-3">
                            <div className="card shadow bg-info btn" style={{ height: "170px" }}>
                                <Link to="/features" style={{ textDecoration: "none" }}><div className="h4 align-items-center mt-5 pt-3 font-weight-bold text-white">
                                    Features
                                </div>
                                </Link>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-12 col-xs-12 mt-3">
                            <div className="card shadow btn" style={{ height: "170px", background: "#E0205A" }}>
                                <Link to="/faculties" style={{ textDecoration: "none" }}>
                                    <div className="h4 align-items-center mt-5 pt-3 font-weight-bold text-white">
                                        Subjects & Faculties
                                </div>
                                </Link>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-12 col-xs-12 mt-3">
                            <div className="card shadow btn" style={{ height: "170px", background: "#6d49a7" }}>
                                <div className="h4 align-items-center mt-5 pt-3 font-weight-bold text-white" onClick={handleDownloadSchedule}>
                                    {
                                        !isLoading ?
                                            <span>Class Schedule</span>
                                            :
                                            <span>Downloading...</span>
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section style={{ marginTop: "50px", background: "#FFF7FA" }}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 col-sm-12 col-xs-12">
                            <div className="h1 mt-5"><span className="badge badge-danger">Why Us?</span></div>
                            <div className="text-left mt-4 h5" >
                                “The Pdhantu” is an initiative to reach every corner of India providing education via online as well as offline. The main motive is to connect every individual who wants to learn, achieve or have a dream to reach a goal. We are here to provide education at a very nominal cost so that every individual of the society can get benefits from it. Our theme of work is “Invest Time not Money” which truly shows that our target is only those who want to learn or achieve but some hurdles stop them to get it so we named as “The Pdhantu”.
                                </div>
                            <br></br>
                            <div className="text-left h5">
                                The pdhantu class will be a leader in preparing public service examination who provide exemplary educational and related services to improve the educational quality of whole india as well as villages also and contributing for better society.
                                </div>
                        </div>
                        <div className="col-md-6 col-sm-12 col-xs-12 mt-5 pt-1">
                            <div className="text-left h5 mt-md-5 mt-sm-0 pt-3 text-info">
                                "To succeed in your mission, you must have single-minded devotion to your goal.”<span className="badge badge-success">-A. P. J. Abdul Kalam</span>
                            </div>
                            <div className="text-left h5 mt-5 text-info">
                                "The highest education is that which does not merely give us information but makes our life in harmony with all existence."<span className="badge badge-success">-A. P. J. Abdul Kalam</span>
                            </div>
                            <div className="text-left h5 mt-5 text-info">
                                उच्चतम शिक्षा वह है जो हमें केवल जानकारी नहीं देती है बल्कि हमारे जीवन को सभी अस्तित्व के साथ सामंजस्य बिठाती है|<span className="badge badge-success">-रविंद्रनाथ टैगोर</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div style={{ visibility: "hidden", marginBottom: "40px" }}>
                    Hidden text
                </div>
            </section>
            <section style={{ marginTop: "50px" }}>
                <div className="text-center h1">
                    <span className="badge badge-info">पdhantu Gurus</span>
                </div>
                <div className="text-center h5 w-75 mt-3 margin-guru-section" >
                    The faculties here called as “पdhantu Gurus” who are highly experienced in the field of teaching as well making pdhantu a successful individual in the field of competitive exams. We believe in two-way communication between faculties and pdhantu, So that hesitation of asking or learning in this fast-growing world vanishes.
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-3 col-sm-6 col-xs-6 mt-5">
                            <img src={t1} alt="t1" style={{ height: "150px", width: "150px", borderRadius: "50%" }} className="border border-info" />
                            <div className="h4 mt-1">Satish Tripati</div>
                            <div className="h5 mt-1"><span className="badge badge-info">Teacher</span></div>
                            <div style={{ fontSize: "15px", fontWeight: "bold" }}> Experience : 10 Years</div>
                        </div>
                        <div className="col-md-3 col-sm-6 col-xs-6 mt-5">
                            <img src={t2} alt="t1" style={{ height: "150px", width: "150px", borderRadius: "50%" }} className="border border-info" />
                            <div className="h4 mt-1">Girish Kumar Sahu</div>
                            <div className="h5 mt-1"><span className="badge badge-info">Teacher</span></div>
                            <div style={{ fontSize: "15px", fontWeight: "bold" }}> Experience : 10 Years</div>
                        </div>
                        <div className="col-md-3 col-sm-6 col-xs-6 mt-5">
                            <img src={t3} alt="t1" style={{ height: "150px", width: "150px", borderRadius: "50%" }} className="border border-info" />
                            <div className="h4 mt-1">Jaynendra Patel</div>
                            <div className="h5 mt-1"><span className="badge badge-info">Teacher</span></div>
                            <div style={{ fontSize: "15px", fontWeight: "bold" }}> Experience : 10 Years</div>
                        </div>
                        <div className="col-md-3 col-sm-6 col-xs-6 mt-5">
                            <img src={t4} alt="t1" style={{ height: "150px", width: "150px", borderRadius: "50%" }} className="border border-info" />
                            <div className="h4 mt-1">Dr. Animesh Sharma</div>
                            <div className="h5 mt-1"><span className="badge badge-info">Teacher</span></div>
                            <div style={{ fontSize: "15px", fontWeight: "bold" }}> Experience : 16 Years</div>
                        </div>

                        <div className="col-md-3 col-sm-6 col-xs-6 mt-5 offset-md-3 offset-sm-0 offset-xs-0">
                            <img src={t5} alt="t1" style={{ height: "150px", width: "150px", borderRadius: "50%" }} className="border border-info" />
                            <div className="h4 mt-1">Praveen Dewangan</div>
                            <div className="h5 mt-1"><span className="badge badge-info">Teacher</span></div>
                            <div style={{ fontSize: "15px", fontWeight: "bold" }}> Experience : 5 Years</div>
                        </div>
                        <div className="col-md-3 col-sm-6 col-xs-6 mt-5">
                            <img src={t6} alt="t1" style={{ height: "150px", width: "150px", borderRadius: "50%" }} className="border border-info" />
                            <div className="h4 mt-1">Amit Pandey</div>
                            <div className="h5 mt-1"><span className="badge badge-info">IT Head</span></div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="mt-5" style={{ background: "#FAFBF0 " }}>
                <div className="text-center h1">
                    <span className="badge badge-danger mt-5">Students Feedback</span>
                </div>
                <div className="container mt-5">
                    <div class="card-deck">
                        <div class="card shadow">
                            <div class="card-body">
                                <p class="card-text">U r such an amazing teacher….Thnk u for the energy u put into work that found its way into our brains somehow, some way.</p>
                                <p class="card-text"><small class="font-weight-bold"> - Priya Markam</small></p>
                            </div>
                        </div>
                        <div class="card shadow">
                            <div class="card-body">
                                <p class="card-text">Thank you sir for the great explanation ….. your lecture helps us a lot</p>
                                <p class="card-text"><small class="font-weight-bold"> - Sonali Soni </small></p>
                            </div>
                        </div>
                        <div class="card shadow">
                            <div class="card-body">
                                <p class="card-text">Thanku so much for explaining so nicely in English and even hindi too….</p>
                                <p class="card-text"><small class="font-weight-bold">- Neha Dwivedi</small></p>
                            </div>
                        </div>
                        <div class="card shadow">
                            <div class="card-body">
                                <p class="card-text">Thank u sir… for supporting every students by online free classes….Ur every lectures r usefull and important ….thank u so much… THE pdhantu</p>
                                <p class="card-text"><small class="font-weight-bold"> - Bhagwati Verma</small></p>
                            </div>
                        </div>
                    </div>
                </div>
                <div style={{ visibility: "hidden", marginBottom: "40px" }}>
                    Hidden text
                </div>
                <div style={{ visibility: "hidden" }}>
                    Hidden text
                </div>
            </section>

            <section className="" style={{ background: "#464545 " }}>
                <div className="text-center h1">
                    <span className="badge badge-warning mt-5">Get In Touch</span>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-7 col-sm-12 col-xs-12 w-100 offset-md-3 offset-sm-0">
                            <div className="card rounded shadow mt-5" style={{ background: "#F2F9FC " }}>
                                <div className="text-left mt-5 pl-4 ml-5 h5">
                                    Please Fill the Form
                                </div>
                                <div className="text-left ml-5 pl-4 h6 mt-3 font-weight-bold text-muted">
                                    FULL NAME
                                </div>
                                <div className="text-left ml-5 pl-4 mt-0 input-group mb-3 w-75 ">
                                    <input
                                        type="text"
                                        className="form-control "
                                        placeholder="Full Name"
                                        value={name}
                                        onChange={(e) => { setName(e.target.value) }}
                                    />
                                </div>
                                <div className="text-left ml-5 pl-4 h6 mt-3 font-weight-bold text-muted">
                                    EMAIL
                                </div>
                                <div className="text-left ml-5 pl-4 mt-0 input-group mb-3 w-75">
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Email"
                                        value={email}
                                        onChange={(e) => { setEmail(e.target.value) }}
                                    />
                                </div>
                                <div className="text-left ml-5 pl-4 h6 mt-3 font-weight-bold text-muted">
                                    MESSAGE
                                </div>
                                <div className="text-left ml-5 pl-4 mt-0 input-group mb-3 w-75">
                                    <textarea class="form-control" aria-label="With textarea" value={message} onChange={(e) => { setMessage(e.target.value) }}></textarea>
                                </div>
                                <div className="text-center mt-2 mb-5">
                                    <span class="btn btn-md btn-md font-weight-bold text-white mt-3" style={{ width: "180px", background: "#464545 " }} onClick={handleClick}>SEND MESSAGE </span>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
                <div style={{ visibility: "hidden", marginBottom: "40px" }}>
                    Hidden text
                </div>
                <div style={{ visibility: "hidden" }}>
                    Hidden text
                </div>
            </section>
            <section>
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 col-sm-12 col-xs-12 offset-md-0 lets-touch">
                            <div className="h3 text-left mt-5">
                                Let's keep in touch!
                            </div>
                            <div style={{ display: "flex" }} className="mt-3">
                                <div className="ml-1 ">
                                    <a class="fb-ic" style={{ color: 'white' }} href="https://www.facebook.com/pdhantu/" target="blank"><img src={fb} alt="fb" style={{ height: "35px" }} /></a>
                                </div>
                                <div className="ml-4">
                                    <a class="ins-ic" style={{ color: 'white' }} href="https://www.instagram.com/thepadhantu/" target="blank"> <img src={ig} alt="ig" style={{ height: "35px" }} /></a>
                                </div>
                                <div className="ml-4">
                                    <a class="ins-ic" style={{ color: 'white' }} href="https://t.me/thepdhantuclass" target="blank"><img src={tg} alt="tg" style={{ height: "35px" }} /></a>
                                </div>
                                <div className="ml-4">
                                    <a class="ins-ic" style={{ color: 'white' }} href="https://www.youtube.com/channel/UCiT6Zmqf7MI6bsQ4XonsVYQ" target="blank"><img src={yt} alt="yt" style={{ height: "40px" }} /></a>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4 col-sm-12 col-xs-12 mt-5">
                            <div className="h4">
                                ADDRESS:
                            </div>
                            <div>
                                SHANTI NAGAR
                            </div>
                            <div>
                                RAIPUR (C.G)
                            </div>
                            <div>
                                492001
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-12 col-xs-12 mt-5">
                            <div className="h4">
                                CONTACT US:
                            </div>
                            <div>
                                <span><span className="font-weight-bold">Mobile:</span> +91-7999393665</span>
                            </div>
                            <div>
                                <span><span className="font-weight-bold">Email:</span> pdhantu3@gmail.com</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div style={{ visibility: "hidden" }}>
                    Hidden text
                </div>
            </section>
            <hr></hr>
            <section>
                <div className="pt-2 pb-2 h4"><span className="badge badge-success ">Developed by</span></div>
                <div className="container mt-3">
                    <div className="row">
                        <div className="col-md-3 col-sm-6 col-xs-6 mt-3 developed-by-1 offset-md-2">
                            <div className="h4 text-left">
                                Amit Kumar
                            </div>
                            <div className="row">
                                <div className="ml-5"><a class="ins-ic" style={{ color: 'white' }} href="https://github.com/amit036" target="blank"><img src={github} alt="g1" style={{ height: "30px" }} /></a></div>
                                <div className="ml-3"><a class="ins-ic" style={{ color: 'white' }} href="https://www.linkedin.com/in/amit-kumar-4a4345159/" target="blank"><img src={linkedin} alt="l1" style={{ height: "30px" }} /></a></div>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-12 col-xs-12 mt-3 developed-by-2">
                            <div className="h4 text-left">
                                Ashish Umrey
                            </div>
                            <div className="row text-center">
                                <div className="ml-5"><a class="ins-ic" style={{ color: 'white' }} href="https://github.com/ashishumrey009" target="blank"><img src={github} alt="g2" style={{ height: "30px" }} /></a></div>
                                <div className="ml-3"><a class="ins-ic" style={{ color: 'white' }} href="https://www.linkedin.com/in/ashishumreymnnit/" target="blank"><img src={linkedin} alt="l2" style={{ height: "30px" }} /></a></div>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-12 col-xs-12 mt-3 developed-by-2">
                            <div className="h4 text-left">
                                Nitu Kumari
                            </div>
                            <div className="row">
                                <div className="ml-5"><a class="ins-ic" style={{ color: 'white' }} href="https://github.com/nitu023" target="blank"><img src={github} alt="g2" style={{ height: "30px" }} /></a></div>
                                <div className="ml-3"><a class="ins-ic" style={{ color: 'white' }} href="https://www.linkedin.com/in/nitusingh023/" target="blank"><img src={linkedin} alt="l2" style={{ height: "30px" }} /></a></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div style={{ visibility: "hidden" }}>
                    Hidden text
                </div>
            </section>
            <section style={{ background: "#464545" }}>
                <div className="pt-2 pb-2 text-white font-weight-bold">© 2020 Copyright:The Pdhantu Classes</div>
            </section>
        </div>
    )
}
