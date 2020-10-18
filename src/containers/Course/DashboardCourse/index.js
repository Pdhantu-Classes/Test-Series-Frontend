import React, { useState, useEffect } from "react";
import UserNavBar from '../UserNavBar'
import http from "axios";
import { useHistory } from 'react-router-dom'
import { API_ENDPOINTS } from "../../../core/constants/apiConstantCourse";
import { getUserId } from "../../../core/utility/authHeader";


const IS_USER_REGISTER = API_ENDPOINTS.USERS.IS_USER_REGISTER
const IS_PACKAGE_BUY = API_ENDPOINTS.USERS.IS_PACKAGE_BUY
const GET_BATCH = API_ENDPOINTS.USERS.GET_BATCH

const UserDashBoard = () => {

  const history = useHistory()

  const [loading, setLoading] = useState(true);
  const [isBuy, setIsBuy] = useState(false);
  const [isRegister, setIsRegister] = useState(false);
  const [courseId, setCourseId] = useState(null)
  const [batch, setBatch] = useState(null)

  useEffect(() => {
    const USER_ID = getUserId();
    setLoading(true);
    http
      .get(IS_USER_REGISTER.replace("<USER_ID>", USER_ID))
      .then((responseIsReg) => {

        http
        .get(IS_PACKAGE_BUY.replace("<USER_ID>", USER_ID))
        .then((responseIsPkgBuy) => {
          http
            .get(GET_BATCH, {
                  headers: {
                      user_id: USER_ID
                    }
                })
            .then((responseBatch) => {
              setLoading(false);
              const responseRegister = responseIsReg.data.isValid;
              const responseData = responseIsPkgBuy.data.isValid;
              setIsBuy(responseData);
              setIsRegister(responseRegister);
              setBatch(responseBatch.data.batch);
            });
        });
      });
    const COURSE_ID = window.localStorage.getItem("course")
    setCourseId(Number(COURSE_ID))
  }, []);

  // useEffect(() => {
  //   const USER_ID = getUserId();
  //   setLoading(true);
  //   http.get(IS_PACKAGE_BUY.replace("<USER_ID>", USER_ID)).then((response) => {
  //     setLoading(false);
  //     const responseData = response.data.isValid;
  //     setIsBuy(responseData);
  //   });
  // }, []);

  // useEffect(() => {
  //   const USER_ID = getUserId();
  //   setLoading(true);
  //   http
  //     .get(GET_BATCH, {
  //       headers: {
  //         user_id: USER_ID
  //       }
  //     })
  //     .then((response) => {
  //       setLoading(false)
  //       setBatch(response.data.batch);
  //     });
  // }, []);

  const handleChange = (val) => {
    window.localStorage.setItem("sectionId", val)
    history.push('/user/course/paper')
  }

  const handleClassTestPrelims = () => {
    history.push('/user/course/classTestPrelims')
  }

  const handleCurrentAffairs = () => {
    history.push('/user/course/currentAffairs')
  }
  return (
    <div>
      <UserNavBar />
      {
        !loading ?
          <div className="container mt-5 pt-5">
            <div className="mt-5 pt-5">
              {
                isRegister && isBuy && batch === 1 ?

                  <div className="row text-center">
                    <div
                      className="col-lg-4 col-md-6 mt-5"
                      onClick={() => { handleChange(1) }}
                    >
                      <div className="card bg-info ">
                        <div className="card-body py-5 " style={{ height: "35vh" }}>
                          <div className="py-5 text-white" style={{ fontSize: "45px" }}>Video/Live Class</div>
                        </div>
                      </div>
                    </div>
                    {
                      courseId === 1 || courseId === 2 ?
                        <div
                          className="col-lg-4 col-md-6 mt-5" onClick={handleClassTestPrelims}>
                          <div className="card bg-success ">
                            <div className="card-body py-5" style={{ height: "35vh" }}>
                              <div className="py-5 text-white" style={{ fontSize: "45px" }}>Pdhantu Class Test</div>
                            </div>
                          </div>
                        </div>
                        :
                        <div
                          className="col-lg-4 col-md-6 mt-5">
                          <div className="card bg-success ">
                            <div className="card-body py-5" style={{ height: "35vh" }}>
                              <div className="py-5 text-white" style={{ fontSize: "45px" }}>Pdhantu Class Test</div>
                            </div>
                          </div>
                        </div>
                    }

                    <div
                      className="col-lg-4 col-md-6  mt-5">
                      <div className="card bg-danger " onClick={handleCurrentAffairs}>
                        <div className="card-body py-5" style={{ height: "35vh" }}>
                          <div className="py-5 text-white" style={{ fontSize: "45px" }}>Current Affairs</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  :
                  isRegister && isBuy && batch === 2 ?
                    <div className="row text-center">
                      <div
                        className="col-lg-4 col-md-6 mt-5"
                        onClick={() => { handleChange(1) }}
                      >
                        <div className="card bg-info ">
                          <div className="card-body py-5 " style={{ height: "35vh" }}>
                            <div className="py-5 text-white" style={{ fontSize: "45px" }}>Video/Live Class</div>
                          </div>
                        </div>
                      </div>
                      {
                        courseId === 1 || courseId === 2 ?
                          <div
                            className="col-lg-4 col-md-6 mt-5" onClick={handleClassTestPrelims}>
                            <div className="card bg-success ">
                              <div className="card-body py-5" style={{ height: "35vh" }}>
                                <div className="py-5 text-white" style={{ fontSize: "45px" }}>Pdhantu Class Test</div>
                              </div>
                            </div>
                          </div>
                          :
                          <div
                            className="col-lg-4 col-md-6 mt-5">
                            <div className="card bg-success ">
                              <div className="card-body py-5" style={{ height: "35vh" }}>
                                <div className="py-5 text-white" style={{ fontSize: "45px" }}>Pdhantu Class Test</div>
                              </div>
                            </div>
                          </div>
                      }

                      <div
                        className="col-lg-4 col-md-6  mt-5">
                        <div className="card bg-danger" onClick={handleCurrentAffairs}>
                          <div className="card-body py-5" style={{ height: "35vh" }}>
                            <div className="py-5 text-white" style={{ fontSize: "45px" }}>Current Affairs</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    :
                    isRegister && isBuy && batch === 3 ?
                    <div className="text-center mt-3">
                      <h3 className="text-secondary font-weight-bold">Class will Starts from 26 Oct at 5 PM</h3>
                    <div className="row">
                      <div
                        className="col-lg-4 col-md-6 mt-5"
                        onClick={() => { handleChange(1) }}
                      >
                        <div className="card bg-info ">
                          <div className="card-body py-5 " style={{ height: "35vh" }}>
                            <div className="py-5 text-white" style={{ fontSize: "45px" }}>Video/Live Class</div>
                          </div>
                        </div>
                      </div>
                      {
                        courseId === 1 || courseId === 2 ?
                          <div
                            className="col-lg-4 col-md-6 mt-5" onClick={handleClassTestPrelims}>
                            <div className="card bg-success ">
                              <div className="card-body py-5" style={{ height: "35vh" }}>
                                <div className="py-5 text-white" style={{ fontSize: "45px" }}>Pdhantu Class Test</div>
                              </div>
                            </div>
                          </div>
                          :
                          <div
                            className="col-lg-4 col-md-6 mt-5">
                            <div className="card bg-success ">
                              <div className="card-body py-5" style={{ height: "35vh" }}>
                                <div className="py-5 text-white" style={{ fontSize: "45px" }}>Pdhantu Class Test</div>
                              </div>
                            </div>
                          </div>
                        }

                      <div
                        className="col-lg-4 col-md-6  mt-5">
                        <div className="card bg-danger" onClick={handleCurrentAffairs}>
                          <div className="card-body py-5" style={{ height: "35vh" }}>
                            <div className="py-5 text-white" style={{ fontSize: "45px" }}>Current Affairs</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    </div>
                    :
                    isRegister && !isBuy ?
                      <div className="display-4 text-info text-center"> Please buy the course </div>
                      :
                      <div className="display-4 text-danger text-center"> You are not registered </div>
              }
            </div>
          </div>
          :
          <div className="d-flex justify-content-center pt-5 mt-5">
            <div className="spinner-border" role="status">
              <span className="sr-only">Loading...</span>
            </div>
          </div>
      }
    </div>
  )
}
export default UserDashBoard