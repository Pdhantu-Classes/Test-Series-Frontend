import React from "react";
import UserNavBar from "../UserNavBar";
import "../../../css/AllTest.css";
import testImage from '../../../asset/course.jpeg'
export default function index() {
  let isRegister = true;
  let isBuy = false;

  let testName = "test";
  let courseId = 1;
  return (
    <div>
      <UserNavBar />
      <div className="container mt-4 pt-5">
        {!isRegister ?<div>
          <div
            className="text-center py-5 text-danger"
            style={{ fontSize: "20px" }}
          >
            Please Fill the Registion Form First
          </div>

          <div className="d-flex justify-content-center">
            <button className="btn btn-primary">Click Here</button>
          </div>
        </div>:null}
        { isRegister && courseId==1?
            <div
          className="card offset-md-2 offset-xs-2  offset-lg-2 mb-5 card-width-package"
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
                    <div className="text-success blink">
                      <b> &#8226; Test is Live Now</b>
                    </div>
                  </li>
                </ul>
                {isBuy ? (
                  <button className="btn btn-info">Go to Dashboard</button>
                ) : (
                  <div>
                    <button className="btn btn-primary mr-2">
                      View Details
                    </button>
                    {isRegister ? (
                      <button />
                    ) : (
                      <button class="btn btn-primary ml-md-3 ml-sm-5">
                        Buy @ &#8377;240 only
                      </button>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>:null}

        {isRegister && courseId==2 ?<div
          className="card offset-md-2 offset-xs-2  offset-lg-2 mb-5 card-width-package"
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
                    <div className="text-success blink">
                      <b> &#8226; Test is Live Now</b>
                    </div>
                  </li>
                </ul>
                {isBuy ? (
                  <button className="btn btn-info">Go to Dashboard</button>
                ) : (
                  <div>
                    <button className="btn btn-primary mr-2">
                      View Details
                    </button>
                    {isRegister ? (
                      <button />
                    ) : (
                      <button class="btn btn-primary ml-md-3 ml-sm-5">
                        Buy @ &#8377;240 only
                      </button>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>:null}
      </div>
    </div>
  );
}
