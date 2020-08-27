import React, { useState } from 'react'
import Modal from "react-bootstrap/Modal";
import { Link } from 'react-router-dom'

export default function SubMenu() {

    const [showModalCourse, setShowModalCourse] = useState(false);
    const handleCloseCourse = () => setShowModalCourse(false)
    const handleOpenCourse = () => setShowModalCourse(true)

    const [showModalTSeries, setShowModalTSeries] = useState(false);
    const handleCloseTSeries = () => setShowModalTSeries(false)
    const handleOpenTSeries = () => setShowModalTSeries(true)

    return (
        <div className="container mt-3 text-center">
        <Modal show={showModalCourse} onHide={handleCloseCourse}>
            <Modal.Header closeButton>
            <Modal.Title>Courses Offered</Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <div className="d-flex justify-content-center font-weight-bold text-success">CGPSC</div>
            <div className="d-flex justify-content-center font-weight-bold text-info">CGVYAPAM</div>
            <div className="d-flex justify-content-center font-weight-bold text-danger">RAILWAY</div>
            <div className="d-flex justify-content-center font-weight-bold text-secondary">SSC</div>
            <div className="d-flex justify-content-center font-weight-bold text-primary">OTHERS...</div>
        </Modal.Body>
        </Modal>
        <Modal show={showModalTSeries} onHide={handleCloseTSeries}>
            <Modal.Header closeButton>
            <Modal.Title>Test Series Offered</Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <div className="d-flex justify-content-center font-weight-bold text-success">CGPSC</div>
            <div className="d-flex justify-content-center font-weight-bold text-info">CGVYAPAM</div>
            <div className="d-flex justify-content-center font-weight-bold text-danger">RAILWAY</div>
            <div className="d-flex justify-content-center font-weight-bold text-secondary">SSC</div>
            <div className="d-flex justify-content-center font-weight-bold text-primary">OTHERS...</div>
        </Modal.Body>
        </Modal>
            <div className="row">
                <div className="col-md-3 col-sm-12"> 
                <Link to="/notice">
                    <button className="btn btn-danger mt-3" style={{width:"185px",height:"60px", borderRadius:"32px", fontSize:"20px"}}>Notice</button>
                </Link>
                </div>
                <div className="col-md-3 col-sm-12">
                    <button className="btn btn-success mt-3" style={{width:"185px",height:"60px", borderRadius:"32px",fontSize:"20px"}} onClick={handleOpenTSeries}>Test Series</button>
                </div>
                <div className="col-md-3 col-sm-12">
                    <button className="btn btn-secondary mt-3" style={{width:"185px",height:"60px", borderRadius:"32px", fontSize:"20px"}} onClick={handleOpenCourse}>Courses Offered</button>
                </div>
                <div className="col-md-3 col-sm-12"> 
                <Link to="/current-affairs">
                    <button className="btn btn-info mt-3 ml-2" style={{width:"185px",height:"60px", borderRadius:"32px", fontSize:"20px"}}>Current Affairs</button>
                </Link>
                </div>

            </div>
        </div>
    )
}
