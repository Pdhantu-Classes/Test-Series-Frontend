import React, { useState, useEffect } from "react";
import AdminNav from "./AdminNavBar";
import { useHistory, Link } from "react-router-dom";
import http from 'axios'
import { API_ENDPOINTS } from '../../../core/constants/apiConstantTestSeries'


const ADMIN_DASHBOARD = API_ENDPOINTS.ADMIN.ADMIN_DASHBOARD

const AdminDashBoard = () => {
  const history = useHistory();
  const [allUser, setAllUser] = useState(0);
  const [allPaidUser, setAllPaidUser] = useState(0);
  const [allUnpaidUser, setAllUnpaidUser] = useState(0);
  const [allCGPSCUser, setAllCGPSCUser] = useState(0);
  const [allCGACFUser, setAllCGACFUser] = useState(0);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    setLoading(true);
    http
    .get(ADMIN_DASHBOARD)
    .then((res) => {
      setAllUser(res.data.total_user);
      setAllPaidUser(res.data.paid_user);
      setAllUnpaidUser(res.data.unpaid_user);
      setAllCGACFUser(res.data.CGACF)
      setAllCGPSCUser(res.data.CGPSC)
      setLoading(false);
    })
    .catch(err=> console.log(err))
  }, []);


  return (
    <>
      <AdminNav />
      <div className="mt-5 pt-5 text-center">
         <Link to="/admin/testseries/allUserList"><button className="btn btn-primary">All User List</button></Link> 
      </div>
      {!loading ? (
        <div className="container mt-5 pt-5 mb-5">
          <div className="row text-center">
            <div
              className="col-lg-4 col-md-6 mt-5"
              onClick={() => {
                history.push("/admin/testseries/allUsers");
              }}
            >
              <div className="card bg-warning ">
                <div className="card-body py-5 " style={{ height: "35vh" }}>
                  <h3 className="text-white py-2">All Users</h3>
                  <div className="display-2 text-white">{allUser}</div>
                </div>
              </div>
            </div>

            <div
              className="col-lg-4 col-md-6 mt-5"
              onClick={() => {
                history.push("/admin/testseries/paidUsers");
              }}
            >
              <div className="card bg-success ">
                <div className="card-body py-5" style={{ height: "35vh" }}>
                  <h3 className="text-white py-2">Paid Users</h3>
                  <div className="display-2 text-white">{allPaidUser}</div>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6  mt-5"
              onClick={() => {
                history.push("/admin/testseries/unPaidUsers");
              }}
            >
              <div className="card bg-danger ">
                <div className="card-body py-5" style={{ height: "35vh" }}>
                  <h3 className="text-white py-2">Unpaid Users</h3>
                  <div className="display-2 text-white">{allUnpaidUser}</div>
                </div>
              </div>
            </div>
          </div>


          <div className="row text-center">
            <div
              className="col-lg-4 offset-lg-2 col-md-6 mt-5"
            >
              <div className="card bg-secondary">
                <div className="card-body py-5 " style={{ height: "35vh" }}>
                  <h3 className="text-white py-2">CGPSC Users</h3>
                  <div className="display-2 text-white">{allCGACFUser}</div>
                </div>
              </div>
            </div>

            <div
              className="col-lg-4 col-md-6 offset-lg-1 mt-5"
            >
              <div className="card bg-info ">
                <div className="card-body py-5" style={{ height: "35vh" }}>
                  <h3 className="text-white py-2">Chhatisgarh Language</h3>
                  <div className="display-2 text-white">{allCGPSCUser}</div>
                </div>
              </div>
            </div>

          </div>
        </div>
      ) : (
          <div className="d-flex justify-content-center py-5">
            <div className="spinner-border" role="status">
              <span className="sr-only">Loading...</span>
            </div>
          </div>
        )}
    </>
  );
};
export default AdminDashBoard;
