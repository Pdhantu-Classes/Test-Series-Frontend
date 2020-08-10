import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom'
import UserNavBar from "../UserNavBar";
import "../../../css/AllTest.css";
import http from "axios";
import testImage from '../../../asset/course.png'
import CoursePay from '../CoursePay'
import {
  getUserId,
  getFirstName,
  getMobile,
  getEmail,
} from "../../../core/utility/authHeader";
import { API_ENDPOINTS } from "../../../core/constants/apiConstantCourse";

const IS_USER_REGISTER = API_ENDPOINTS.USERS.IS_USER_REGISTER
const IS_PACKAGE_BUY = API_ENDPOINTS.USERS.IS_PACKAGE_BUY
const Home = () => {

  const [loading, setLoading] = useState(true);
  const [isBuy, setIsBuy] = useState();
  const [isRegister, setIsRegister] = useState();
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userMobile, SetUserMobile] = useState(0);
  const [packageId, setPackageId] = useState('')
  const [userId, setUserId] = useState('')

  useEffect(() => {
    const USER_ID = getUserId();
    setUserId(USER_ID)
    setUserName(getFirstName);
    setUserEmail(getEmail);
    SetUserMobile(getMobile);
    setLoading(true);

    http
      .get(IS_USER_REGISTER.replace("<USER_ID>", USER_ID))
      .then((response) => {
        setLoading(false)
        const responseRegister = response.data.isValid;
        const packageId = response.data.package_id
        setPackageId(packageId)
        setIsRegister(responseRegister);
      });
  }, []);

  useEffect(() => {
    setLoading(true);
    const USER_ID = getUserId();
    http
      .get(IS_PACKAGE_BUY.replace("<USER_ID>", USER_ID)).then((response) => {
        setLoading(false);
        const responseData = response.data.isValid;
        setIsBuy(responseData);
      });
  }, []);

  return (
    <div>
      <UserNavBar />
      {!loading ? 
      <div className="container mt-5 pt-5">
        {!isRegister ? <div>
          <div
            className="text-center py-5 text-danger"
            style={{ fontSize: "20px" }}
          >
            Please Fill the Registion Form First
          </div>

          <div className="d-flex justify-content-center">
            <Link to='/user/profile'> <button className="btn btn-primary">Click Here</button></Link>
          </div>
        </div> : null}
        {
          isRegister && packageId === 1 ?
            <div
              className="card offset-md-2 offset-xs-2  offset-lg-2 mb-5 card-width-package mt-5 pt-5"
              style={{
                background:
                  "linear-gradient(270.9deg, #FFBFBF 3.13%, rgba(255, 252, 253, 0) 95.62%)",
              }}
            >
              <div className="row no-gutters">
                <div className="col-sm-4 col-md-4">
                  <img
                    className="card-img mt-4 ml-md-5 ml-sm-5 ml-lg-5 card-image-package"
                    style={{ width: "200px", height: "200px", marginTop: "25px" }}
                    src={testImage}
                    alt="TESTICON"
                  />
                </div>
                <div className="col-sm-8">
                  <div className="card-body">
                    <h3 className="card-title">Pdhantu CGPSC Prelims Course</h3>
                    <ul className="list-unstyled mt-3 mb-4">
                      <li style={{ fontSize: "20px" }}>
                        <b>&#8226; Live Online Video Lecture</b>
                      </li>
                      <li style={{ fontSize: "20px" }}>
                        <b>&#8226; Pdhantu Test</b>
                      </li>
                      <li style={{ fontSize: "20px" }}>
                        <b>&#8226; Topic Wise Test</b>
                      </li>
                      <li style={{ fontSize: "20px" }}>
                        <b>&#8226; Pdf Notes</b>
                      </li>

                    </ul>
                    {isBuy ? (
                      <Link to="/user/dashboard">
                        <button className="btn btn-info">Go to Dashboard</button>
                      </Link>
                    ) : (
                        <div>
                          <div><CoursePay payload={{ packageId, userId, userName, userEmail, userMobile }} /></div>

                        </div>
                      )}
                  </div>
                </div>
              </div>
            </div> : null
        }

        {
          isRegister && packageId === 2 ?
            <div
              className="card offset-md-2 offset-xs-2  offset-lg-2 mb-5 card-width-package mt-5 pt-5"
              style={{
                background:
                  "linear-gradient(270.9deg, #FFBFBF 3.13%, rgba(255, 252, 253, 0) 95.62%)",
              }}
            >
              <div className="row no-gutters">
                <div className="col-sm-4 col-md-4">
                  <img
                    className="card-img mt-4 ml-md-5 ml-sm-5 ml-lg-5 card-image-package"
                    style={{ width: "200px", height: "200px", marginTop: "25px" }}
                    src={testImage}
                    alt="TESTICON"
                  />
                </div>
                <div className="col-sm-8">
                  <div className="card-body">
                    <h3 className="card-title">Pdhantu CGPSC Prelims + Mains Course</h3>
                    <ul className="list-unstyled mt-3 mb-4">
                      <li style={{ fontSize: "20px" }}>
                        <b>&#8226; Live Online Video Lecture (Pre+Mains)</b>
                      </li>
                      <li style={{ fontSize: "20px" }}>
                        <b>&#8226; Pdhantu Test (Pre+Mains)</b>
                      </li>
                      <li style={{ fontSize: "20px" }}>
                        <b>&#8226; Topic Wise Test (Pre+Mains)</b>
                      </li>
                      <li style={{ fontSize: "20px" }}>
                        <b>&#8226; Pdf Notes (Pre+Mains)</b>
                      </li>
                    </ul>
                    {isBuy ? (
                      <Link to="/user/dashboard">
                        <button className="btn btn-info">Go to Dashboard</button>
                      </Link>
                    ) : (
                        <div>

                          <CoursePay payload={{ packageId, userId, userName, userEmail, userMobile }} />
                        </div>
                      )}
                  </div>
                </div>
              </div>
            </div>
            :
            null
        }
        {
          isRegister && packageId === 3 ?
            <div
              className="card offset-md-2 offset-xs-2  offset-lg-2 mb-5 card-width-package mt-5 pt-5"
              style={{
                background:
                  "linear-gradient(270.9deg, #FFBFBF 3.13%, rgba(255, 252, 253, 0) 95.62%)",
              }}
            >
              <div className="row no-gutters">
                <div className="col-sm-4 col-md-4">
                  <img
                    className="card-img mt-4 ml-md-5 ml-sm-5 ml-lg-5 card-image-package"
                    style={{ width: "200px", height: "200px", marginTop: "25px" }}
                    src={testImage}
                    alt="TESTICON"
                  />
                </div>
                <div className="col-sm-8">
                  <div className="card-body">
                    <h3 className="card-title">Pdhantu CGPSC Mains Course (Hindi)</h3>
                    <ul className="list-unstyled mt-3 mb-4">
                      <li style={{ fontSize: "20px" }}>
                        <b>&#8226; Live Online Video Lecture(Mains)</b>
                      </li>
                      <li style={{ fontSize: "20px" }}>
                        <b>&#8226; Pdhantu Test(Mains)</b>
                      </li>
                      <li style={{ fontSize: "20px" }}>
                        <b>&#8226; Topic Wise Test(Mains)</b>
                      </li>
                      <li style={{ fontSize: "20px" }}>
                        <b>&#8226; Pdf Notes(Mains)</b>
                      </li>
                    </ul>
                    {isBuy ? (
                      <Link to="/user/dashboard">
                        <button className="btn btn-info">Go to Dashboard</button>
                      </Link>
                    ) : (
                        <div>

                          <CoursePay payload={{ packageId, userId, userName, userEmail, userMobile }} />
                        </div>
                      )}
                  </div>
                </div>
              </div>
            </div>
            :
            null
        }
        {
          isRegister && packageId === 4 ?
            <div
              className="card offset-md-2 offset-xs-2  offset-lg-2 mb-5 card-width-package mt-5 pt-5"
              style={{
                background:
                  "linear-gradient(270.9deg, #FFBFBF 3.13%, rgba(255, 252, 253, 0) 95.62%)",
              }}
            >
              <div className="row no-gutters">
                <div className="col-sm-4 col-md-4">
                  <img
                    className="card-img mt-4 ml-md-5 ml-sm-5 ml-lg-5 card-image-package"
                    style={{ width: "200px", height: "200px", marginTop: "25px" }}
                    src={testImage}
                    alt="TESTICON"
                  />
                </div>
                <div className="col-sm-8">
                  <div className="card-body">
                    <h3 className="card-title">Pdhantu CGPSC Mains Course (English)</h3>
                    <ul className="list-unstyled mt-3 mb-4">
                      <li style={{ fontSize: "20px" }}>
                        <b>&#8226; Live Online Video Lecture(Mains)</b>
                      </li>
                      <li style={{ fontSize: "20px" }}>
                        <b>&#8226; Pdhantu Test(Mains)</b>
                      </li>
                      <li style={{ fontSize: "20px" }}>
                        <b>&#8226; Topic Wise Test(Mains)</b>
                      </li>
                      <li style={{ fontSize: "20px" }}>
                        <b>&#8226; Pdf Notes(Mains)</b>
                      </li>
                    </ul>
                    {isBuy ? (
                      <Link to="/user/dashboard">
                        <button className="btn btn-info">Go to Dashboard</button>
                      </Link>
                    ) : (
                        <div>

                          <CoursePay payload={{ packageId, userId, userName, userEmail, userMobile }} />
                        </div>
                      )}
                  </div>
                </div>
              </div>
            </div>
            :
            null
        }

      </div>
        :
        <div className="d-flex justify-content-center pt-5 mt-5">
          <div className="spinner-border" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      }
    </div>
  );
}
export default Home