import React, { useEffect, useState } from "react";
import http from "axios";
import { useHistory } from "react-router-dom";
import jwtDecode from "jwt-decode";
import NavBar from "./Navbar";
import { API_ENDPOINTS } from '../../../core/constants/apiConstantTestSeries'

const IS_USER_PAID = API_ENDPOINTS.USERS.IS_USER_PAID
const MY_TEST_SERIES_PACKAGE = API_ENDPOINTS.USERS.MY_TEST_SERIES_PACKAGE

export default function MyTestSeries() {
    const history = useHistory();
    const [packageId, setPackageId] = useState([]);
    const [isValidUser, setIsValidUser] = useState(false)
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        const token = window.localStorage.getItem("tokenTest");
        let { user_id } = jwtDecode(token);
        http
          .get(IS_USER_PAID, {
            headers: {
              user_id: user_id
            }
          })
          .then((res) => {
            http
            .get(MY_TEST_SERIES_PACKAGE, {
              headers: {
                user_id: user_id,
              },
            })
            .then((resp) => {
              setLoading(false);
              setPackageId(resp.data.package_id);
              setIsValidUser(res.data.isValid)
            })
            .catch((err) => console.log(err));
          })
          .catch((err) => console.log(err));
      }, [])

    const handleChange = (packageIds) =>{
        window.localStorage.setItem("packageId", packageIds)
        history.push('/user/testseries/myTestSeries')
    }
    return (
        <div>
             <NavBar />
             {
                         !loading ?
                            isValidUser ?
                                <div>
                                    {
                                        packageId === 1 ?
                                        <div className="offset-lg-3 offset-sm-0 offset-xs-0 mt-5 pt-5 container">
                                            <div className="row text-center">
                                                <div
                                                    className="col-lg-4 col-md-6 mt-5"
                                                    onClick={() => { handleChange(1) }}
                                                >
                                                    <div className="card bg-info ">
                                                        <div className="card-body py-5 " style={{ height: "35vh" }}>
                                                            <div className="py-2 text-white" style={{fontSize:"40px"}}>CGPSC Prelims Test Series</div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div
                                                    className="col-lg-4 col-md-6 mt-5"
                                                >
                                                    <div className="card bg-primary ">
                                                        <div className="card-body py-5 " style={{ height: "35vh" }}>
                                                            <div className="py-4 text-white" style={{fontSize:"40px"}}>Current Affairs</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        :
                                        packageId === 2 ?
                                            <div className="offset-lg-3 offset-sm-0 offset-xs-0 mt-5 pt-5 container">
                                                <div className="row text-center">
                                                    <div
                                                        className="col-lg-4 col-md-6 mt-5"
                                                        onClick={() => { handleChange(2) }}
                                                    >
                                                        <div className="card bg-info ">
                                                            <div className="card-body py-5 " style={{ height: "35vh" }}>
                                                                <div className="py-2 text-white" style={{fontSize:"40px"}}>Chhattisgarh GK Test Series </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div
                                                        className="col-lg-4 col-md-6 mt-5"
                                                    >
                                                        <div className="card bg-primary ">
                                                            <div className="card-body py-5 " style={{ height: "35vh" }}>
                                                                <div className="py-4 text-white" style={{fontSize:"40px"}}>Current Affairs</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        :
                                        packageId === 3 ?
                                            <div className="offset-lg-3 offset-sm-0 offset-xs-0 mt-5 pt-5 container">
                                                <div className="row text-center">
                                                    <div
                                                        className="col-lg-4 col-md-6 mt-5"
                                                        onClick={() => { handleChange(1) }}
                                                    >
                                                        <div className="card bg-danger ">
                                                            <div className="card-body py-5 " style={{ height: "35vh" }}>
                                                                <div className="py-2 text-white" style={{fontSize:"40px"}}>CGPSC Prelims Test Series</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div
                                                        className="col-lg-4 col-md-6 mt-5"
                                                        onClick={() => { handleChange(2) }}
                                                    >
                                                        <div className="card bg-info ">
                                                            <div className="card-body py-5 " style={{ height: "35vh" }}>
                                                                <div className="py-2 text-white" style={{fontSize:"40px"}}>Chhattisgarh GK Test Series </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div
                                                        className="col-lg-4 col-md-6 mt-5"
                                                    >
                                                        <div className="card bg-primary ">
                                                            <div className="card-body py-5 " style={{ height: "35vh" }}>
                                                                <div className="py-4 text-white" style={{fontSize:"40px"}}>Current Affairs</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        :
                                        null
                                    }
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
                    <div className="mt-5 pt-5" style={{ position: 'absolute', transform: 'translate(-50%,-50%)', top: '20%', left: '50%' }}>
                    <div className="d-flex justify-content-center">
                      <div className="spinner-border" role="status">
                        <span className="sr-only">Loading...</span>
                      </div>
                    </div>
                  </div>
             }
        </div>
    )
}
