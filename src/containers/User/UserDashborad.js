import React, { useEffect, useState } from "react";
import http from "axios";
import "../../css/LandingPage.css";
import "../../css/DashBoard.css";
import UserNavBar from "../User/UserNavBar";
import Modal from "react-bootstrap/Modal";
import { useHistory } from "react-router-dom";
import { getUserId } from "../../core/utility/authHeader";
import { API_ENDPOINTS } from '../../core/constants/apiConstant'

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
  const [testDetails,setTestDetails] = useState([])

  useEffect(() => {
    window.history.pushState(null, document.title, window.location.href);
    window.addEventListener('popstate', function (event) {
      window.history.pushState(null, document.title, window.location.href);
    });
  }, [])
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
    const userId = getUserId();
    setLoading(true);
    http
      .get(GET_ALL_MOCK, {
        headers: {
          user_id: userId,
        },
      })
      .then((res) => {
        setLoading(false);
        setMockTestPaper(res.data.mock_paper);
      })
      .catch((err) => console.log(err));

    http
      .get(IS_USER_PAID, {
        headers: {
          user_id: userId
        }
      })
      .then((res) => {
        setIsValidUser(res.data.isValid)
      })
      .catch((err) => console.log(err));
  }, []);



  const handleChangeMock = (id) => {
    window.localStorage.setItem("mock_paper_id", id);
    history.push("/user/testinstruction");
  };

  const handleViewRank = (id) => {
    window.localStorage.setItem('mock_paper_id', id)
    history.push('/user/testrank')
  }

  const handleViewResult = (id) => {
    window.localStorage.setItem('mock_paper_id', id)
    history.push('/user/testresponse')
  }
  const handleClick =(id) =>{
    setTestDetails([])
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

  return (
    <div>
      <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                <Modal.Title>Mock Details Are</Modal.Title>
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
      <UserNavBar />
      {
        !loading ?
          isValidUser ?
            <div class="table-responsive col-10 offset-1 text-center">
              <table id="tablePreview" class="table table-bordered table-hover">
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
                      *Result will released next day of exam
                      </th>
                  </tr>
                </thead>
                <tbody>
                  {mockPapers.map((data, index) => {
                    return (
                      <tr>
                        <th scope="row">{index + 1}</th>
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

                        {!data.is_active &&
                          data.is_finished &&
                          data.is_attempted &&
                          data.is_result_released ? (
                            <td>
                              <button className="btn btn-success mr-2" onClick={() => { handleViewResult(data.id) }}> View Response</button>
                              <button className="btn btn-danger" onClick={() => { handleViewRank(data.id) }}>View Rank</button>
                            </td>
                          )
                           : !data.is_active &&
                            data.is_finished &&
                            !data.is_attempted ? (
                              <td>
                                <button className="btn btn-success mr-2" disabled>
                                  Not Attempted
                              </button>
                              </td>
                            )
                            // ) : !data.is_active &&
                            //   data.is_finished &&
                            //   data.is_attempted ? (
                            //     <td>
                            //       <button className="btn btn-success mr-2" disabled>
                            //         Attempted
                            //   </button>
                            //     </td>
                            //   )
                               : 
                                data.is_active &&
                                !data.is_finished &&
                                data.is_attempted ? (
                                  <td>
                                    <button className="btn btn-danger" 
                                      onClick={() => { 
                                        handleViewResult(data.id) 
                                      }}>
                                      View Response
                              </button>
                                  </td>
                                ) : data.is_active && 
                                  !data.is_finished ? (
                                  <td>
                                    <button
                                      className="btn btn-success"
                                      onClick={() => {
                                        handleChangeMock(data.id);
                                      }}
                                    >
                                      Start Test
                                    </button>
                                  </td>
                                )
                                : !data.is_active && 
                                   data.is_finished ? (
                                  <td>
                                    <button
                                      className="btn btn-danger"
                                      onClick={() => {
                                        handleViewResult(data.id)
                                      }}
                                    >
                                      View Response
                                    </button>
                                  </td>
                                ) : 
                                  !data.is_active &&
                                  !data.is_finished ? (
                                  <td>
                                    <button className="btn btn-primary" disabled>
                                      Coming Soon
                              </button>
                                  </td>
                                ) : null}
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
            :
            <div className="container text-center py-5">
              <div className="info-header mb-5">
                <h1 className="text-primary pb-3">You are not register for any test</h1>
              </div>
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
