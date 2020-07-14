import React, { useState, useEffect } from "react";
import { useHistory } from "react-router";
import { useAlert, types } from "react-alert";
import http from "axios";
import "../../css/AllTest.css";
import {
  getUserId,
  getFirstName,
  getMobile,
  getEmail,
} from "../../core/utility/authHeader";
import PayButton from "../Payment";
import { API_ENDPOINTS } from "../../core/constants/apiConstant";
import testImage from "../../asset/CGPSC/Icon.svg";

const IS_PACKAGE_BUY = API_ENDPOINTS.USERS.IS_PACKAGE_BUY;
const IS_USER_REGISTER = API_ENDPOINTS.USERS.IS_USER_REGISTER;
const DEMO_TEST = API_ENDPOINTS.TEST_SERIES.DEMO_TEST;

const testName = "Pdhantu Test Series";

const Alltest = () => {
  const history = useHistory();
  const alert = useAlert();

  const [loading, setLoading] = useState(true);
  const [isBuy, setIsBuy] = useState();
  const [isRegister, setIsRegister] = useState();
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userMobile, SetUserMobile] = useState(0);
  const [isDemoAttempted, setIsDemoAttempted] = useState(false);

  useEffect(() => {
    const USER_ID = getUserId();
    setUserName(getFirstName);
    setUserEmail(getEmail);
    SetUserMobile(getMobile);

    setLoading(true);
    http.get(IS_PACKAGE_BUY.replace("<USER_ID>", USER_ID)).then((response) => {
      setLoading(false);
      const responseData = response.data.isValid;
      setIsBuy(responseData);
    });

    http
      .get(IS_USER_REGISTER.replace("<USER_ID>", USER_ID))
      .then((response) => {
        const responseRegister = response.data.isValid;
        setIsRegister(responseRegister);
      });
    http
      .get(DEMO_TEST, {
        headers: {
          user_id: USER_ID,
        },
      })
      .then((response) => {
        setIsDemoAttempted(response.data.isValid);
      });
  }, []);

  const handleComplete = () => {
    alert.show("Please Complete your Profile", { type: types.INFO });
    setTimeout(() => {
      history.push("/user/profile");
    }, 2000);
  };
  const handleDemoTest = (id) => {
    window.localStorage.setItem("mock_paper_id", id);
    history.push("/user/demoInstruction");
  };
  const handleViewResponse = (id) => {
    window.localStorage.setItem("mock_paper_id", id);
    history.push("/user/testresponse");
  };
  const handleViewRank = (id) => {
    window.localStorage.setItem("mock_paper_id", id);
    history.push("/user/testrank");
  };
  return (
    <div>
      <div className="mb-5 text-white">All Test</div>

      <div className="container mt-5"></div>

      {!loading ? (
        <div
          className="card offset-md-2 offset-xs-2  offset-lg-3 mb-5 card-width-package"
          style={{
            background:
              "linear-gradient(270.9deg, #FFBFBF 3.13%, rgba(255, 252, 253, 0) 95.62%)",
          }}
        >
          <div className="row no-gutters">
            <div className="col-sm-4 col-md-4">
              <img
                className="card-img mt-4 ml-md-5 ml-sm-5 ml-lg-5 card-image-package"
                style={{ width: "250px", height: "250px" }}
                src={testImage}
                alt="TESTICON"
              />
            </div>
            <div className="col-sm-8">
              <div className="card-body">
                <h3 className="card-title">{testName}</h3>
                <ul className="list-unstyled mt-3 mb-4">
                  <li style={{ fontSize: "20px" }}>
                    <b>18</b> Mock Test
                  </li>
                  <li style={{ fontSize: "20px" }}>
                    <b>14</b> Subject-Wise Test
                  </li>
                  <li style={{ fontSize: "20px" }}>
                    <b>4</b> Modal Mock Test
                  </li>
                  <li style={{ fontSize: "20px" }}>
                    Starts From <b>15th July</b>
                  </li>
                </ul>
                {isBuy ? (
                  <button
                    className="btn btn-info"
                    onClick={() => {
                      history.push("/user/dashboard");
                    }}
                  >
                    Go to Dashboard
                  </button>
                ) : (
                  <div>
                    <button
                      className="btn btn-primary mr-2"
                      onClick={() => {
                        history.push("/user/home/viewdetails");
                      }}
                    >
                      View Details
                    </button>
                    {isRegister ? (
                      <PayButton
                        testName={{ testName, userName, userEmail, userMobile }}
                      />
                    ) : (
                      <button
                        class="btn btn-primary ml-md-3 ml-sm-5"
                        onClick={handleComplete}
                      >
                        Buy @ &#8377;240 only
                      </button>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
          <div class="card w-md-50 w-sm-75 bg-light mt-3 text-center">
            <div class="card-body">
              <div class="card-title text-center display-4  mt-sm-3 pt-sm-3">
                Demo Test
              </div>
              <p class="card-text text-center">
               {!isDemoAttempted?<div> Click Here To attempt Demo Test</div>:<div>You have attempted the Test</div>}
              </p>
              {!isDemoAttempted ? (
                <button
                  class="btn btn-primary btn-lg mt-2"
                  onClick={() => {
                    handleDemoTest(19);
                  }}
                >
                  Start Test
                </button>
              ) : (
                <div>
                  <button
                    class="btn btn-secondary btn-md-lg btn-sm-sm mt-2 "
                    onClick={() => {
                      handleViewResponse(19);
                    }}
                  >
                    View Response
                  </button>
                  <button
                    class="btn btn-danger btn-md-lg btn-sm-sm  mt-2 ml-5 "
                    onClick={() => {
                      handleViewRank(19);
                    }}
                  >
                    View Rank List
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      ) : (
        <div className="d-flex justify-content-center">
          <div className="spinner-border" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      )}
    </div>
  );
};
export default Alltest;
