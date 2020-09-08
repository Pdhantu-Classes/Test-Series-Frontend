import React, { useState, useEffect } from "react";
import http from 'axios'
import { useHistory, Link } from "react-router-dom";
import AdminNavBar from "../AdminCourse/AdminNavBar";
import { API_ENDPOINTS } from '../../../core/constants/apiConstantCourse'

const ADMIN_DASHBOARD = API_ENDPOINTS.ADMIN.ADMIN_DASHBOARD

const AdminDashBoard = () => {
  const history = useHistory();
  const [allUser, setAllUser] = useState(0);
  const [allPaidUser, setAllPaidUser] = useState(0);
  const [allPrelims, setAllPrelims] = useState(0);
  const [allPreMains, setAllPreMains] = useState(0);
  const [allMainsHindi, setAllMainsHindi] = useState(0);
  const [allMainsEnglish, setAllMainsEnglish] = useState(0);
  const [allBatch1, setAllBatch1] = useState(0);
  const [allBatch2, setAllBatch2] = useState(0);
  const [loading, setLoading] = useState(false);


  useEffect(() => {
    setLoading(true);
    http
    .get(ADMIN_DASHBOARD)
    .then(res=>{
        setAllUser(res.data.total_user);
        setAllPaidUser(res.data.paid_user);
        setAllPrelims(res.data.prelims)
        setAllPreMains(res.data.mains)
        setAllMainsHindi(res.data.mains_hindi)
        setAllMainsEnglish(res.data.mains_english)
        setAllBatch1(res.data.batch_1)
        setAllBatch2(res.data.batch_2)
        setLoading(false);
    })
    .catch(err=>console.log(err))

  }, []);


  return (
    <>
      <AdminNavBar />
      <div className="mt-5 pt-5 text-center">
         <Link to="/adminCourse/allUsersList"><button className="btn btn-primary">All User List</button></Link> 
      </div>
      {!loading ? (
        <div className="container mt-5 pt-5 mb-5">
          <div className="row text-center mt-5">
            <div
              className="col-lg-4 offset-lg-2 col-md-6 mt-5"
            >
              <div className="card bg-secondary">
                <div className="card-body py-5 " style={{ height: "35vh" }}>
                  <h3 className="text-white py-2">Batch-1</h3>
                  <div className="display-2 text-white">{allBatch1}</div>
                </div>
              </div>
            </div>

            <div
              className="col-lg-4 col-md-6 offset-lg-1 mt-5"
            >
              <div className="card bg-info ">
                <div className="card-body py-5" style={{ height: "35vh" }}>
                  <h3 className="text-white py-2">Batch-2</h3>
                  <div className="display-2 text-white">{allBatch2}</div>
                </div>
              </div>
            </div>
          </div>
          <div className="row text-center">
            <div
              className="col-lg-4 offset-lg-2 col-md-6 mt-5"
              onClick={() => {
                history.push("/adminCourse/allUser");
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
              className="col-lg-4 col-md-6 offset-lg-1 mt-5"
              onClick={() => {
                history.push("/adminCourse/paidUser");
              }}
            >
              <div className="card bg-success ">
                <div className="card-body py-5" style={{ height: "35vh" }}>
                  <h3 className="text-white py-2">Paid Users</h3>
                  <div className="display-2 text-white">{allPaidUser}</div>
                </div>
              </div>
            </div>
          </div>


          <div className="row text-center mt-5">
            <div
              className="col-lg-4 offset-lg-2 col-md-6 mt-5"
            >
              <div className="card bg-secondary">
                <div className="card-body py-5 " style={{ height: "35vh" }}>
                  <h3 className="text-white py-2">Prelims</h3>
                  <div className="display-2 text-white">{allPrelims}</div>
                </div>
              </div>
            </div>

            <div
              className="col-lg-4 col-md-6 offset-lg-1 mt-5"
            >
              <div className="card bg-info ">
                <div className="card-body py-5" style={{ height: "35vh" }}>
                  <h3 className="text-white py-2">Prelims+Mains</h3>
                  <div className="display-2 text-white">{allPreMains}</div>
                </div>
              </div>
            </div>
          </div>

          <div className="row text-center mt-5">
            <div
              className="col-lg-4 offset-lg-2 col-md-6 mt-5"
            >
              <div className="card bg-primary">
                <div className="card-body py-5 " style={{ height: "35vh" }}>
                  <h3 className="text-white py-2">Mains(Hindi)</h3>
                  <div className="display-2 text-white">{allMainsHindi}</div>
                </div>
              </div>
            </div>

            <div
              className="col-lg-4 col-md-6 offset-lg-1 mt-5"
            >
              <div className="card bg-danger ">
                <div className="card-body py-5" style={{ height: "35vh" }}>
                  <h3 className="text-white py-2">Mains(English)</h3>
                  <div className="display-2 text-white">{allMainsEnglish}</div>
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
