import React, { useState, useEffect } from "react";
import AdminNav from "./AdminNavBar";

import { useHistory } from "react-router";
import {
  getAllUser,
  getUnpaidUser,
  getPaidUser,
  getAdminDashboard,
} from "../../containers/auth";
const AdminDashBoard = () => {
  const history = useHistory();
  const [allUser, SetAllUser] = useState(0);
  const [allPaidUser, SetAllPaidUser] = useState(0);
  const [allUnpaidUser, SetAllUnpaidUser] = useState(0);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true);
    getAdminDashboard().then((res) => {
      SetAllUser(res.total_user);
      SetAllPaidUser(res.paid_user);
      SetAllUnpaidUser(res.unpaid_user);
      setLoading(false);
    });
  }, []);
  return (
    <>
      <AdminNav />
      {!loading ? (
        <div className="container mt-5 pt-5 ">
          <div className="row text-center">
            <div
              className="col-lg-4 col-md-6 mt-5"
              onClick={() => {
                history.push("/admin/alluser");
              }}
            >
              <div className="card bg-warning ">
                <div className="card-body py-5 " style={{ height: "35vh" }}>
                  <h3 className="text-white">All Users</h3>
                  <div className="display-2 text-white">{allUser}</div>
                </div>
              </div>
            </div>

            <div
              className="col-lg-4 col-md-6 mt-5"
              onClick={() => {
                history.push("/admin/paiduser");
              }}
            >
              <div className="card bg-success ">
                <div className="card-body py-5" style={{ height: "35vh" }}>
                  <h3 className="text-white">Paid Users</h3>
                  <div className="display-2 text-white">{allPaidUser}</div>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6  mt-5"
              onClick={() => {
                history.push("/admin/unpaiduser");
              }}
            >
              <div className="card bg-danger ">
                <div className="card-body py-5" style={{ height: "35vh" }}>
                  <h3 className="text-white">Unpaid Users</h3>
                  <div className="display-2 text-white">{allUnpaidUser}</div>
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
