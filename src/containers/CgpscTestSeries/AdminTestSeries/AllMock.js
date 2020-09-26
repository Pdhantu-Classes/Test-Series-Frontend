import React, { useState, useEffect } from 'react'
import http from 'axios'
import Modal from "react-bootstrap/Modal";
import { useAlert, types } from 'react-alert'
import { API_ENDPOINTS } from '../../../core/constants/apiConstantTestSeries'
import AdminNavBar from "./AdminNavBar";
import {useHistory} from 'react-router-dom'

const GET_ALL_MOCK = API_ENDPOINTS.ADMIN.GET_ALL_MOCK
const GO_LIVE = API_ENDPOINTS.ADMIN.GO_LIVE
const STOP_TEST = API_ENDPOINTS.ADMIN.STOP_TEST
const RELEASE_RESULT = API_ENDPOINTS.ADMIN.RELEASE_RESULT
const TEST_DETAILS = API_ENDPOINTS.ADMIN.TEST_DETAILS

export default function AllMock() {
    const history = useHistory()
    const alert = useAlert()
    const [mockPapers, setMockTestPaper] = useState([]);
    const [loading, setLoading] = useState(true);
    const [isLive, setIsLive] = useState(false);
    const [isStop, setIsStop] = useState(false);
    const [isRelease, setIsRelease] = useState(false);
    const [mockPaperId, setMockPaperId] = useState(null)
    const [action, setAction] = useState('')
    const [show, setShow] = useState(false);
    const [showAuth, setShowAuth] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [testDetails,setTestDetails] = useState({})
    
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

    useEffect(() => {
        setLoading(true);
        http
            .get(GET_ALL_MOCK)
            .then((res) => {
                setLoading(false);
                setMockTestPaper(res.data.mock_paper);
            })
            .catch((err) => console.log(err));
    }, []);

    const handleLive = (id) => {
        setAction('Go test Live')
        setMockPaperId(id)
        setIsLive(true)
        setIsStop(false)
        setIsRelease(false)
        setShowAuth(true)
        console.log(id)
    }
    const handleCloseAuth =() =>{
        setShowAuth(false)
    }

    const handleStop = (id) => {
        setAction('Stop Test')
        setMockPaperId(id)
        setIsLive(false)
        setIsStop(true)
        setIsRelease(false)
        setShowAuth(true)
    }

    const handleRelease = (id) => {
        setAction('Release Result')
        setMockPaperId(id)
        setIsLive(false)
        setIsStop(false)
        setIsRelease(true)
        setShowAuth(true)
    }
    const handleClick =(id) =>{
        setTestDetails({})
        http.get(TEST_DETAILS,{
                headers:{
                    mock_paper_id:id
                }
            })
            .then((res) => {
                console.log(res)
                setTestDetails(res.data.mock_paper)
            })
            .catch((err) => console.log(err));
            handleShow()
    }
    const handleViewRank =(id) =>{
        window.localStorage.setItem('mock_paper_id',id)
        history.push('/admin/testseries/viewRank')
    }
    const handleAddQuestion =(id)=>{
        window.localStorage.setItem('mock_paper_id',id)
        history.push('/admin/testseries/uploadQuestion')
    }
    const handleShowQuestion =(id)=>{
        window.localStorage.setItem('mock_paper_id',id)
        history.push('/admin/testseries/showQuestions')
    }

    const handleUploadPaperPdf = (id)=>{
        window.localStorage.setItem('mock_paper_id',id)
        history.push('/admin/testseries/UploadPaperPdf')
    }
    const handleSubmit = () => {
       handleCloseAuth()
        console.log(mockPaperId)
        setShow(false)
        let body = {
            mock_paper_id: mockPaperId
        }
        if (isLive && !isRelease && !isStop) {
            setLoading(true)
            http
                .post(GO_LIVE, body)
                .then((res) => {
                    setLoading(false);
                    alert.show('Test is Live Now', { type: types.SUCCESS })
                    setTimeout(() => window.location.reload(), 2000);
                    console.log("Live")
                })
                .catch((err) => console.log(err));

        }

        if (!isLive && !isRelease && isStop) {
            setLoading(true)
            http
                .post(STOP_TEST, body)
                .then((res) => {
                    setLoading(false);
                    alert.show('Test has Stop Now', { type: types.SUCCESS })
                    setTimeout(() => window.location.reload(), 2000);
                    console.log("Stop")
                })
                .catch((err) => console.log(err));
        }

        if (!isLive && isRelease && !isStop) {
            setLoading(true)
            http
                .post(RELEASE_RESULT, body)
                .then((res) => {
                    setLoading(false);
                    alert.show('Result is Released', { type: types.SUCCESS })
                    setTimeout(() => window.location.reload(), 2000);
                    console.log("Release")
                })
                .catch((err) => console.log(err));
        }

    }

    const handleViewPaperPdf = (pdf_data)=>{
        window.location.href = pdf_data
    }
    
    return (
        <div>
            <AdminNavBar />
            <Modal show={showAuth} onHide={handleCloseAuth}>
                <Modal.Header closeButton>
                    <div className="text-center ml-5">
                        <Modal.Title>Are you sure for {action}?</Modal.Title>
                    </div>
                </Modal.Header>
                <Modal.Body>
                    <div className="d-flex">
                        <button className="btn btn-danger btn-lg offset-2" onClick={handleSubmit}>
                            Yes
                        </button>

                        <button className="btn btn-primary btn-lg offset-5 " onClick={handleCloseAuth}>
                            No
                        </button>
                    </div>
                </Modal.Body>
            </Modal>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                <Modal.Title>Mock details are</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                {
                    testDetails !== null ?           
                    <div className="justify-content-center">
                        <div>Mock Description :{testDetails.mock_description}</div>
                        <div>Mock Papar Name: {testDetails.mock_paper_name}</div>
                        <div>Paper Date:{testDetails.paper_date}</div>
                        <div>Paper Time :{fancyTimeFormat(testDetails.paper_time)}</div>
                        <div>Total Question :{testDetails.total_questions}</div>
                    </div>
                    :
                    <div className="d-flex justify-content-center py-5">
                        <div className="spinner-border" role="status">
                            <span className="sr-only">Loading...</span>
                        </div>
                    </div>
                }

                </Modal.Body>
             </Modal>
            {
                !loading ?
                    <div className="mt-5 pt-5">
                        <div>
                        <h3 className="text-center text-primary">CGPSC Prelims Papers</h3>
                        <div class="table-responsive col-10 offset-1 text-center">
                            <table id="tablePreview" class="table table-bordered table-hover">
                                <thead>
                                    <tr>
                                        <th>Paper Id</th>
                                        <th>Paper Name</th>
                                        <th>Paper Date</th>
                                        <th>Status</th>
                                        <th>View Details</th>
                                        <th>Action</th>
                                        <th>Questions</th>
                                        <th>Paper Pdf </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {mockPapers.map((data, index) => {
                                        if(data.package_id === 1){
                                            return (
                                                <tr>
                                                    <th scope="row">{data.id}</th>
                                                    <td className="font-weight-bold">{data.mock_paper_name}</td>
                                                    <td>{data.paper_date}</td>
                                                    {!data.is_active && !data.is_finished ? (
                                                        <td className="text-primary font-weight-bold">
                                                            Upcoming
                                                        </td>
                                                    ) : data.is_active && !data.is_finished ? (
                                                        <td className="text-success font-weight-bold blink">
                                                            Live&#8226;{" "}
                                                        </td>
                                                    ) : !data.is_active && data.is_finished ? (
                                                        <td className="text-danger font-weight-bold">Finished</td>
                                                    ) : null}
    
                                                    <td>
                                                        <button className="btn btn-secondary" onClick={()=>handleClick(data.id)}>Click Here</button>
                                                    </td>
                                                    {
                                                        !data.is_active && !data.is_finished ?
                                                            <td>
                                                                <button className="btn btn-success btn-lg" onClick={() => handleLive(data.id)}>
                                                                    Go Live
                                                        </button>
                                                            </td>
                                                            :
                                                            data.is_active && !data.is_finished ?
                                                                <td>
                                                                    <button className="btn btn-danger btn-lg" onClick={() => handleStop(data.id)}>
                                                                        Stop Test
                                                                    </button>
                                                                </td>
                                                                :
                                                                !data.is_active && data.is_finished && data.is_result_released ?
                                                                    <td>
                                                                        <button className="btn btn-primary" onClick={()=>handleViewRank(data.id)}>View Rank List</button>
                                                                    </td>
                                                                    :
                                                                    !data.is_active && data.is_finished ?
                                                                        <td>
                                                                            <button className="btn btn-secondary btn-lg" onClick={() => handleRelease(data.id)}>
                                                                                Released Rank
                                                                            </button>
                                                                        </td>
                                                                    :
                                                                    null
                                                        }
                                                        <td><button className="btn btn-secondary" onClick={()=>handleAddQuestion(data.id)}>Add Question</button> <button className="btn btn-info" onClick={()=>handleShowQuestion(data.id)}>Show Question</button></td>
                                                        {
                                                            data.paper_pdf ?
                                                            <td><button className="btn btn-danger" onClick={()=>handleUploadPaperPdf(data.id)}>Edit Pdf</button> <button className="btn btn-success" onClick={()=>handleViewPaperPdf(data.paper_pdf)}>View Pdf</button></td>
                                                            :
                                                            <button className="btn btn-secondary" onClick={()=>handleUploadPaperPdf(data.id)}>Add Pdf</button>
                                                        }
                                                        
                                                </tr>
                                                
                                            );
                                        }
                                        else{
                                            return null
                                        }        
                                    })}
                                    
                                </tbody>
                            </table>
                        </div>

                        </div>
                        <div className="mt-5">
                        <h3 className="text-center text-primary">Chhatisgarh GK Papers</h3>
                        <div class="table-responsive col-10 offset-1 text-center">
                            <table id="tablePreview" class="table table-bordered table-hover">
                                <thead>
                                    <tr>
                                        <th>Paper Id</th>
                                        <th>Paper Name</th>
                                        <th>Paper Date</th>
                                        <th>Status</th>
                                        <th>View Details</th>
                                        <th>Action</th>
                                        <th>Questions</th>
                                        <th>Paper Pdf </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {mockPapers.map((data, index) => {
                                        if(data.package_id === 2){
                                            return (
                                                <tr>
                                                    <th scope="row">{data.id}</th>
                                                    <td className="font-weight-bold">{data.mock_paper_name}</td>
                                                    <td>{data.paper_date}</td>
                                                    {!data.is_active && !data.is_finished ? (
                                                        <td className="text-primary font-weight-bold">
                                                            Upcoming
                                                        </td>
                                                    ) : data.is_active && !data.is_finished ? (
                                                        <td className="text-success font-weight-bold blink">
                                                            Live&#8226;{" "}
                                                        </td>
                                                    ) : !data.is_active && data.is_finished ? (
                                                        <td className="text-danger font-weight-bold">Finished</td>
                                                    ) : null}
    
                                                    <td>
                                                        <button className="btn btn-secondary" onClick={()=>handleClick(data.id)}>Click Here</button>
                                                    </td>
                                                    {
                                                        !data.is_active && !data.is_finished ?
                                                            <td>
                                                                <button className="btn btn-success btn-lg" onClick={() => handleLive(data.id)}>
                                                                    Go Live
                                                        </button>
                                                            </td>
                                                            :
                                                            data.is_active && !data.is_finished ?
                                                                <td>
                                                                    <button className="btn btn-danger btn-lg" onClick={() => handleStop(data.id)}>
                                                                        Stop Test
                                                                    </button>
                                                                </td>
                                                                :
                                                                !data.is_active && data.is_finished && data.is_result_released ?
                                                                    <td>
                                                                        <button className="btn btn-primary" onClick={()=>handleViewRank(data.id)}>View Rank List</button>
                                                                    </td>
                                                                    :
                                                                    !data.is_active && data.is_finished ?
                                                                        <td>
                                                                            <button className="btn btn-secondary btn-lg" onClick={() => handleRelease(data.id)}>
                                                                                Released Rank
                                                                            </button>
                                                                        </td>
                                                                    :
                                                                    null
                                                        }
                                                        <td><button className="btn btn-secondary" onClick={()=>handleAddQuestion(data.id)}>Add Question</button> <button className="btn btn-info" onClick={()=>handleShowQuestion(data.id)}>Show Question</button></td>
                                                        {
                                                            data.paper_pdf ?
                                                            <td><button className="btn btn-danger" onClick={()=>handleUploadPaperPdf(data.id)}>Edit Pdf</button> <button className="btn btn-success" onClick={()=>handleViewPaperPdf(data.paper_pdf)}>View Pdf</button></td>
                                                            :
                                                            <button className="btn btn-secondary" onClick={()=>handleUploadPaperPdf(data.id)}>Add Pdf</button>
                                                        }
                                                        
                                                </tr>
                                                
                                            );
                                        }
                                        else{
                                            return null
                                        }        
                                    })}
                                    
                                </tbody>
                            </table>
                        </div>
                        </div>

                    </div>
                    :
                    <div className="d-flex justify-content-center py-5">
                        <div className="spinner-border" role="status">
                            <span className="sr-only">Loading...</span>
                        </div>
                    </div>
            }
        </div>
    )
}
