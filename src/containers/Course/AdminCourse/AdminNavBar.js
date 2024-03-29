import React from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router";
import logo from "../../../asset/UI-Content/logo.jpeg";
import { logoutAdmin } from "../../../core/utility/authHeader";
import avatar from "../../../asset/avatar.svg";

const AdminNavBar = () => {
  const history = useHistory();

  const handleLogout = () => {
    logoutAdmin();
    history.push("/adminCourseLogin");
  };
  return (
    <nav className="navbar navbar-headers navbar-expand-lg navbar-white fixed-top py-4">
      <div className="container-fluid">
        <Link to="/adminCourse/dashboard" className="navbar-brand">
          <img src={logo} width="50" height="50" alt="" />
          <h3 className="d-inline align-middle">The Pdhantu Classes</h3>
        </Link>
        <button
          className="navbar-toggler"
          data-toggle="collapse"
          data-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link
                className="nav-link"
                onClick={() => {
                  history.push("/adminCourse/allUser");
                }}
              >
                All User
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                onClick={() => {
                  history.push("/adminCourse/paidUser");
                }}
              >
                Paid User
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                onClick={() => {
                  history.push("/adminCourse/disputePayment");
                }}
              >
                Dispute Payment
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                onClick={() => {
                  history.push("/adminCourse/uploadMaterial");
                }}
              >
                Upload
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                onClick={() => {
                  history.push("/adminCourse/allPaidUserListBatch");
                }}
              >
                Userlist
              </Link>
            </li>
          </ul>
        </div>
        <div className="ml-2 mr-2 mt-2">
          {" "}
          <h5>Welcome Admin</h5>
        </div>
        {
          <div>
            <img
              style={{ width: "60px", height: "60px", borderRadius: "50%" }}
              src={avatar}
              alt="avatar"
            />
          </div>
        }

        <button
          type="button"
          className="btn btn-primary ml-3"
          onClick={handleLogout}
        >
          Log Out
        </button>
      </div>
    </nav>
  );
};
export default AdminNavBar;
