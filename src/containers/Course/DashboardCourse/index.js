import React, { useState, useEffect } from "react";
import UserNavBar from '../UserNavBar'
import http from "axios";
import { useHistory } from 'react-router-dom'
import { API_ENDPOINTS } from "../../../core/constants/apiConstantCourse";
import { getUserId } from "../../../core/utility/authHeader";


const IS_USER_REGISTER = API_ENDPOINTS.USERS.IS_USER_REGISTER
const IS_PACKAGE_BUY = API_ENDPOINTS.USERS.IS_PACKAGE_BUY

const UserDashBoard = () => {

  const history = useHistory()

  const [loading, setLoading] = useState(true);
  const [isBuy, setIsBuy] = useState(false);
  const [isRegister, setIsRegister] = useState(false);

  useEffect(() => {
    const USER_ID = getUserId();
    setLoading(true);
    http
      .get(IS_USER_REGISTER.replace("<USER_ID>", USER_ID))
      .then((response) => {
        setLoading(false)
        const responseRegister = response.data.isValid;

        setIsRegister(responseRegister);
      });
  }, []);

  useEffect(() => { 
    const USER_ID = getUserId();
    setLoading(true); 
    http.get(IS_PACKAGE_BUY.replace("<USER_ID>", USER_ID)).then((response) => {
      setLoading(false);
      const responseData = response.data.isValid;
      setIsBuy(responseData);
    });
  }, []);

  const handleChange = (val)  =>{
    window.localStorage.setItem("sectionId", val)
    history.push('/user/course/paper')
  }
  return (
    <div>
      <UserNavBar />
      {
        !loading ?
        <div className="container mt-5 pt-5">
          <div className="mt-5 pt-5">
            {
              isRegister && isBuy ? 

              <div className="row text-center">
              <div
                className="col-lg-4 col-md-6 mt-5"
                onClick={() => {handleChange(1)}}
              >
                <div className="card bg-info ">
                  <div className="card-body py-5 " style={{ height: "35vh" }}>
                    <div className="display-4 py-4 text-white">Video/Live Class</div>
                  </div>
                </div>
              </div>
  
              <div
                className="col-lg-4 col-md-6 mt-5"
                onClick={() => {handleChange(2)}}>
                <div className="card bg-success ">
                  <div className="card-body py-5" style={{ height: "35vh" }}>
                  <div className="display-4 py-4 text-white">Pdhantu Class Test</div>
                  </div>
                </div>
              </div>
              <div
                className="col-lg-4 col-md-6  mt-5"
                onClick={() => {handleChange(3)}}>
                <div className="card bg-danger ">
                  <div className="card-body py-5" style={{ height: "35vh" }}>
                    <div className="py-5 text-white" style={{fontSize:"45px"}}>Assignments</div>
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