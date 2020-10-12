import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import http from 'axios'
import Modal from "react-bootstrap/Modal";
import tag from '../assets/tag.svg'
import { API_ENDPOINTS } from '../../../../core/constants/apiConstantCourse'
const GET_CLASS_SCHEDULE = API_ENDPOINTS.USERS.GET_CLASS_SCHEDULE



export default function CGPSC() {

    const [showModalCourse, setShowModalCourse] = useState(false);
    const handleCloseCourse = () => setShowModalCourse(false)
    const handleOpenCourse = () => setShowModalCourse(true)
    const [isLoading, setIsLoading ] = useState(false)

    const handleDownloadSchedule = ()=>{
        setIsLoading(true)
        http
            .get(GET_CLASS_SCHEDULE)
            .then(res=>{
                setIsLoading(false)
                let pdf = res.data.pdf_link
                window.location.href = pdf
            })
            .catch(err=> console.log(err))
    }

    return (
        <div className="container mt-5 pt-2 text-center">
            <Modal show={showModalCourse} onHide={handleCloseCourse}>
            <Modal.Header closeButton>
            <Modal.Title>Fee Structures</Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <div className="d-flex justify-content-center font-weight-bold text-success">CGPSC Prelims @ &#8377;2940</div>
            <div className="d-flex justify-content-center font-weight-bold text-info">CGPSC Pre+Mains @ &#8377;6940</div>
            <div className="d-flex justify-content-center font-weight-bold text-danger">CGPSC Mains(Hindi)  @ &#8377;4940</div>
            <div className="d-flex justify-content-center font-weight-bold text-secondary">CGPSC Mains(English)  @ &#8377;4940</div>
        </Modal.Body>
        </Modal>
            <h1 className="text-primary">Online Course for CGPSC</h1>
            <hr></hr>
            <div className="row">
                <div className="col-md-3 col-sm-12 ">
                    <div className="d-flex">
                        <div className="mt-2">
                            <img src={tag} style={{ width: "50px" }} alt="tag1" />
                        </div>
                        <div className="mt-2 ml-2" style={{ fontSize: "30px" }}>
                            Prelims
                        </div>
                    </div>
                </div>
                <div className="col-md-4 col-sm-12">
                    <div className="d-flex">
                        <div className="mt-2">
                            <img src={tag} style={{ width: "50px" }} alt="tag1" />
                        </div>
                        <div className="mt-2 ml-2" style={{ fontSize: "30px" }}>
                            Prelims+Mains
                        </div>
                    </div>
                </div>
                <div className="col-md-4 col-sm-12">
                    <div className="d-flex">
                        <div className="mt-2">
                            <img src={tag} style={{ width: "50px" }} alt="tag1" />
                        </div>
                        <div className="mt-2 ml-2" style={{ fontSize: "30px" }}>
                            Mains(Hindi+Eng)
                        </div>
                    </div>
                </div>
            </div>
            <div className="row mt-4">
                <div className="col-md-3 col-sm-12 offset-md-2 offset-sm-0 ">
                    <Link to="/signupCourse"><button className="btn btn-info mt-3" style={{ width: "180px", height: "60px", borderRadius: "32px", fontSize: "20px", backgroundColor: "#0599F0", border: "1px solid white", boxShadow: " 1px 1px #888888" }}>Register</button></Link>
                </div>
                <div className="col-md-3 col-sm-12  offset-md-1 offset-sm-0">
                    <Link to="/loginCourse"><button className="btn btn-primary mt-3" style={{ width: "180px", height: "60px", borderRadius: "32px", fontSize: "20px", backgroundColor: "#F00565", border: "1px solid white", boxShadow: " 1px 1px #888888" }}>Login</button></Link>
                </div>
            </div>
            <div className="row mt-5 pt-2">
                <div className="col-md-3 mb-2 box-shadow ">
                    <div className="card text-center bg-info text-white" style={{ background: 'linear-gradient(180deg, #6A93CB 0%, rgba(255, 252, 253, 0) 96.35%)', height: '20vh' }}>
                        <Link to="/features"><div className="card-body" >
                            <h3 className="p-3 mt-4 text-white">Features</h3>
                        </div>
                        </Link>
                    </div>
                </div>
                <div className="col-md-3 mb-2 ">
                    <div className="card text-center  bg-danger  text-white " style={{ background: 'linear-gradient(180deg, #6A93CB 0%, rgba(255, 252, 253, 0) 96.35%)', height: '20vh' }}>
                        <div className="card-body" onClick={()=>handleOpenCourse(true)}>
                            <h3 className="p-3 mt-3">Fee Structure </h3>
                        </div>style={{textDecoration:"none"}}
                    </div>
                </div>
                <div className="col-md-3 mb-2 ">
                    <div className="card text-center bg-success text-white" style={{ background: 'linear-gradient(180deg, #6A93CB 0%, rgba(255, 252, 253, 0) 96.35%)', height: '20vh' }}>
                        <Link to="/faculties"><div className="card-body">
                            <h3 className="p-3 mt-3 text-white" >Subjects & Faculties</h3>
                        </div>
                        </Link>
                    </div>
                </div>
                <div className="col-md-3 mb-2 ">
                    <div className="card text-center bg-secondary text-white" style={{ background: 'linear-gradient(180deg, #6A93CB 0%, rgba(255, 252, 253, 0) 96.35%)', height: '20vh' }}>
                        <div className="card-body"  onClick={handleDownloadSchedule}>
                            {
                                !isLoading ?
                                    <h3 className="p-3 mt-3 text-white" >Class Schedule</h3>
                                    :
                                    <h4 className="p-3 mt-3 text-white" >Downloading...</h4>
                            }                       
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
