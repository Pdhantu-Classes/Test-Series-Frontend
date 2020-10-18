import React, { useEffect, useState } from "react";
import http from "axios";
import Modal from "react-bootstrap/Modal";
import { useHistory } from "react-router-dom";
import jwtDecode from "jwt-decode";
// import "../../../css/LandingPage.css";
// import "../../../css/DashBoard.css";
import NavBar from "./Navbar";
import { API_ENDPOINTS } from '../../../core/constants/apiConstantTestSeries'

const GET_ALL_MOCK = API_ENDPOINTS.TEST_SERIES.GET_ALL_MOCK
const IS_USER_PAID = API_ENDPOINTS.USERS.IS_USER_PAID
const TEST_DETAILS = API_ENDPOINTS.ADMIN.TEST_DETAILS

const Dashboard = (props) => {
  const history = useHistory();
  const [mockPapers, setMockTestPaper] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isValidUser, setIsValidUser] = useState(false)
  const handleClose = () => setShow(false);
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const [testDetails, setTestDetails] = useState({})


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
    const token = window.localStorage.getItem("tokenTest");
    const packageId = window.localStorage.getItem("packageId");
    let { user_id } = jwtDecode(token);
    http
      .get(IS_USER_PAID, {
        headers: {
          user_id: user_id
        }
      })
      .then((res) => {
        http
        .get(GET_ALL_MOCK, {
          headers: {
            user_id: user_id,
            package_id:packageId
          },
        })
        .then((resp) => {
          setLoading(false);
          setMockTestPaper(resp.data.mock_paper);
          setIsValidUser(res.data.isValid)
        })
        .catch((err) => console.log(err));
      })
      .catch((err) => console.log(err));
  }, [])


  const handleChangeMock = (id,paperTime,noQuestion) => {
    // console.log(id,noQuestion,paperTime)
    window.localStorage.setItem("mock_paper_id", id);
    window.localStorage.setItem('noQuestion', noQuestion)
    window.localStorage.setItem('paperTime', paperTime)
    history.push("/user/testseries/testinstruction");
  };

  const handleViewRank = (id) => {
    window.localStorage.setItem('mock_paper_id', id)
    history.push('/user/testseries/testrank')
  }

  const handleViewResult = (id) => {
    window.localStorage.setItem('mock_paper_id', id)
    history.push('/user/testseries/testresponse')
  }
  const handleClick = (id) => {
    setTestDetails({})
    http.get(TEST_DETAILS, {
      headers: {
        mock_paper_id: id
      }
    })
      .then((res) => {
        console.log(res)
        setTestDetails(res.data.mock_paper)
      })
      .catch((err) => console.log(err));
    handleShow()
  }

  const handleDownload = (pdfUrl) =>{
    if(pdfUrl !== null){
      window.location.href = pdfUrl
    }
    else{
      alert("Pdf file Not Found")
    }
  }


  return (
    <div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Paper details are</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="justify-content-center">
            <div> <b>Mock Description</b> :{testDetails.mock_description}</div>
            <div> <b>Mock Papar Name </b>: {testDetails.mock_paper_name}</div>
            <div> <b>Paper Date</b>:{testDetails.paper_date}</div>
            <div><b>Paper Time</b> :{fancyTimeFormat(testDetails.paper_time)}</div>
            <div><b>Total Question</b> :{testDetails.total_questions}</div>
          </div>
        </Modal.Body>
      </Modal>
      <NavBar />
      {
        !loading ?
          isValidUser ?
            <div class="table-responsive col-10 offset-1 text-center mt-5 pt-5">
              <table id="tablePreview" class="table table-bordered table-hover mt-5">
                <thead>
                  <tr>
                    <th>S.No</th>
                    <th>Paper Name</th>
                    <th>Paper Date</th>
                    <th>Status</th>
                    <th>View Details</th>
                    <th
                      className="text-primary"
                      style={{ fontSize: "16px", fontStyle: "italic" }}
                    >
                      *Rank will released next day of exam
                      </th>
                    <th>Question/Answer Key Pdf</th>
                  </tr>
                </thead>
                <tbody>
                  {mockPapers.map((data, index) => {
                    return (
                      <tr>
                        <th scope="row">{index + 1}</th>
                        <td className="font-weight-bold">{data.mock_paper_name}</td>
                        <td>{data.paper_date}</td>
                        {
                          !data.is_active && !data.is_finished ? (
                            <td className="text-primary font-weight-bold">
                              Upcoming
                            </td>
                          )
                              : data.is_active && !data.is_finished && data.is_attempted ? (
                                <td className="text-info font-weight-bold">
                                  Completed
                                </td>
                              )
                                : !data.is_active && data.is_finished && !data.is_attempted ? (
                                  <td className="text-danger font-weight-bold">
                                    Not Attempted
                                  </td>
                                )
                                  : !data.is_active && data.is_finished && data.is_attempted ? (
                                    <td className="text-info font-weight-bold">
                                      Completed
                                    </td>
                                  )
                                  : data.is_active && !data.is_finished ? (
                                    <td className="text-success font-weight-bold blink">
                                      Live&#8226;{" "}
                                    </td>
                                  )
                                    : null
                        }

                        <td>
                          <button className="btn btn-secondary" onClick={() => handleClick(data.id)}>Click Here</button>
                        </td>
                        {
                          !data.is_attempted && !data.is_live_attempted && !data.is_active && !data.is_finished && !data.is_result_released ?
                            <td><button className="btn btn-primary" disabled>Coming Soon</button></td>
                            :
                            !data.is_attempted && !data.is_live_attempted && data.is_active && !data.is_finished && !data.is_result_released ?
                              <td><button className="btn btn-success" onClick={() => { handleChangeMock(data.id) }}>Start Test</button></td>
                              :
                              data.is_attempted && data.is_live_attempted && data.is_active && !data.is_finished && !data.is_result_released ?
                                <td><button className="btn btn-info" onClick={() => { handleViewResult(data.id) }}>View Response</button></td>
                                :
                                data.is_attempted && data.is_live_attempted && !data.is_active && data.is_finished && !data.is_result_released ?
                                  <td><button className="btn btn-info" onClick={() => { handleViewResult(data.id) }}>View Response</button></td>
                                  :
                                  data.is_attempted && data.is_live_attempted && !data.is_active && data.is_finished && data.is_result_released ?
                                    <td>
                                      <button className="btn btn-info mr-2 mt-1" onClick={() => { handleViewResult(data.id) }}> View Response</button>
                                      <button className="btn btn-danger mt-1" onClick={() => { handleViewRank(data.id) }}>View Rank</button>
                                    </td>
                                    :
                                    !data.is_attempted && !data.is_live_attempted && !data.is_active && data.is_finished && !data.is_result_released ?
                                      <td><button className="btn btn-success" onClick={() => { handleChangeMock(data.id, data.paper_time, data.total_questions) }}>Attempt Now</button></td>
                                      :
                                      !data.is_attempted && !data.is_live_attempted && !data.is_active && data.is_finished && data.is_result_released ?
                                        <td><button className="btn btn-success" onClick={() => { handleChangeMock(data.id,data.paper_time, data.total_questions) }}>Attempt Now</button></td>
                                        :
                                        data.is_attempted && !data.is_live_attempted && !data.is_active && data.is_finished && data.is_result_released ?
                                          <td><button className="btn btn-info" onClick={() => { handleViewResult(data.id) }}>View Response</button></td>
                                          :
                                          null
                        }

                        {
                          data.is_attempted && data.is_result_released && data.paper_pdf ?
                            <td>
                              <button className="btn btn-primary mt-1" onClick={()=>handleDownload(data.paper_pdf)}>Download pdf</button>
                            </td>
                            :
                            <td>
                            <button className="btn btn-primary mt-1" disabled>Download pdf</button>
                            </td>
                        }
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
            :
            <div>
              {
                !isValidUser ?
                  <div className="container text-center py-5">
                    <div className="info-header mb-5">
                      <h1 className="text-primary pb-3">You are not register for any test</h1>
                    </div>
                  </div> :
                  null
              }

            </div>
          :
          <div style={{ position: 'absolute', transform: 'translate(-50%,-50%)', top: '20%', left: '50%' }}>
            <div className="d-flex justify-content-center">
              <div className="spinner-border" role="status">
                <span className="sr-only">Loading...</span>
              </div>
            </div>
          </div>
      }
    </div>
  );
};
export default Dashboard;
