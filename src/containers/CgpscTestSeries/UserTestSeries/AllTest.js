import React, { useState, useEffect } from "react";
import { Link, useHistory } from 'react-router-dom'
import jwtDecode from "jwt-decode";
import "../../../css/AllTest.css";
import http from "axios";
import testImage from '../../../asset/course.png'
import Payment from './Payment'
import { API_ENDPOINTS } from "../../../core/constants/apiConstantTestSeries";

const IS_USER_REGISTER = API_ENDPOINTS.USERS.IS_USER_REGISTER
const IS_PACKAGE_BUY = API_ENDPOINTS.USERS.IS_PACKAGE_BUY
const DEMO_TEST = API_ENDPOINTS.USERS.DEMO_TEST
const AllTest = () => {

  const [loading, setLoading] = useState(true);
  const [isBuy, setIsBuy] = useState();
  const [isRegister, setIsRegister] = useState();
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userMobile, SetUserMobile] = useState(0);
  const [packageId, setPackageId] = useState('')
  const [userId, setUserId] = useState('')
  const [ isDemoTestFinished, setIsDemoTestFinished] = useState(undefined)

  const history = useHistory()

  useEffect(() => {
    const token = window.localStorage.getItem("tokenTest");
    let { firstname,email,user_id, mobile } = jwtDecode(token);
    console.log(firstname,email,user_id, mobile)
    setUserId(user_id)
    setUserName(firstname);
    setUserEmail(email);
    SetUserMobile(mobile);
    setLoading(true);

    http
      .get(IS_USER_REGISTER.replace("<USER_ID>", user_id))
      .then((response) => {
        http
        .get(IS_PACKAGE_BUY.replace("<USER_ID>", user_id))
        .then((res) => {
          http
          .get(DEMO_TEST, {
            headers:{
              user_id: user_id
            }
          })
          .then(resp=>{
            const responseData = res.data.isValid;
            const responseRegister = response.data.isValid;
            const packageId = response.data.package_id
            setPackageId(packageId)
            setIsRegister(responseRegister);
            setIsBuy(responseData);
            setIsDemoTestFinished(resp.data.isValid)
            setLoading(false);
          })
        });
      });
  }, []);

  const handleDemoTest =()=>{
    window.localStorage.setItem("mock_paper_id", 49);
    window.localStorage.setItem('noQuestion', 40)
    window.localStorage.setItem('paperTime', 3600)
    history.push("/user/testseries/testinstruction");
  }

  const handleViewRank = () => {
    window.localStorage.setItem('mock_paper_id', 49)
    history.push('/user/testseries/testrank')
  }

  const handleViewResponse = (id) => {
    window.localStorage.setItem('mock_paper_id', 49)
    history.push('/user/testseries/testresponse')
  }

  return (
    <div>
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
            <Link to='/user/testseries/profile'> <button className="btn btn-primary">Click Here</button></Link>
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
                    <h3 className="card-title">The Pdhantu CGPSC Prelims Test Series</h3>
                    <ul className="list-unstyled mt-2 mb-4">
                      <li style={{ fontSize: "20px" }}>
                        <b>&#8226; 22 Subject Wise Mock Paper</b>
                      </li>
                      <li style={{ fontSize: "20px" }}>
                        <b>&#8226; 4 Modal Paper</b>
                      </li>
                      <li style={{ fontSize: "20px" }}>
                        <b>&#8226; Question Paper Pdf </b>
                      </li>
                    </ul>
                    {isBuy ? (
                      <Link to="/user/testseries/dashboard">
                        <button className="btn btn-info">Go to Dashboard</button>
                      </Link>
                    ) : (
                        <div>
                          <div><Payment payload={{ packageId, userId, userName, userEmail, userMobile }} /></div>

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
                    <h3 className="card-title">The Pdhantu Chhattisgarh General Knowledge Test Series</h3>
                    <ul className="list-unstyled mt-2 mb-4">
                      <li style={{ fontSize: "20px" }}>
                        <b>&#8226; 20 Topic Wise Mock Paper</b>
                      </li>
                      <li style={{ fontSize: "20px" }}>
                        <b>&#8226; 2 Modal Paper(Full Syllabus)</b>
                      </li>
                      <li style={{ fontSize: "20px" }}>
                        <b>&#8226; Question Paper Pdf </b>
                      </li>
                    </ul>
                    {isBuy ? (
                      <Link to="/user/testseries/dashboard">
                        <button className="btn btn-info">Go to Dashboard</button>
                      </Link>
                    ) : (
                        <div>
                          <Payment payload={{ packageId, userId, userName, userEmail, userMobile }} />
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
                    <h3 className="card-title">The Pdhantu CGPSC Prelims+Chhattisgarh GK Test Series</h3>
                    <ul className="list-unstyled mt-2 mb-4">
                      <li style={{ fontSize: "20px" }}>
                        <b>&#8226; 22 + 22 Subjectwise/Topicwise Mock Paper</b>
                      </li>
                      <li style={{ fontSize: "20px" }}>
                        <b>&#8226; 4 + 2 Modal Paper</b>
                      </li>
                      <li style={{ fontSize: "20px" }}>
                        <b>&#8226; Question Paper Pdf </b>
                      </li>
                    </ul>
                    {isBuy ? (
                      <Link to="/user/testseries/dashboard">
                        <button className="btn btn-info">Go to Dashboard</button>
                      </Link>
                    ) : (
                        <div>
                          <Payment payload={{ packageId, userId, userName, userEmail, userMobile }} />
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
           isRegister ?
            <div
            className="card offset-md-2 offset-xs-2  offset-lg-2 mb-5 card-width-package mt-5 pt-5"
            style={{
              background:
                "linear-gradient(270.9deg, #FFBFBF 3.13%, rgba(255, 252, 253, 0) 95.62%)",
            }}
          >
           <div className="row no-gutters">
             <div className="col-sm-4 col-md-4 mb-4">
               <img
                 className="card-img mt-4 ml-md-5 ml-sm-5 ml-lg-5 card-image-package"
                 style={{ width: "200px", height: "200px", marginTop: "25px" }}
                 src={testImage}
                 alt="TESTICON"
               />
             </div>
             <div className="col-sm-8">
               <div className="card-body">
                 <h3 className="card-title">Demo Test</h3>
                 <ul className="list-unstyled mt-2 mb-4">
                   <li style={{ fontSize: "20px" }}>
                     <b>&#8226; 40 Questions</b>
                   </li>
                   <li style={{ fontSize: "20px" }}>
                     <b>&#8226; Duration: 1 hr</b>
                   </li>
                 </ul>
                 {
                   isDemoTestFinished ?
                      <button onClick={handleDemoTest} className="btn btn-primary btn-lg">Start Test</button>
                   :
                   <div>
                        <button onClick={handleViewResponse} className="btn btn-success btn-lg ml-1">View Response</button>
                        <button onClick={handleViewRank} className="btn btn-danger btn-lg ml-1">View Rank</button>
                   </div>


                 }

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
export default AllTest
