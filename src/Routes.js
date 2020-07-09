import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import LandingPage from "./pages/LandingPage";
import Login from "./containers/Login";
import Signup from "./containers/Signup";
import ForgotPassword from './containers/ForgotPassword'
import Profile from "./containers/User/Profile";
import Orders from "./containers/User/Orders";
import Home from "./containers/User/Home";
import { isTokenVaild, isAdminTokenValid } from "./core/utility/authHeader";
import Dashboard from "./containers/User/UserDashborad";
import MainLandingPage from "./MainLandingPage";
import ViewDetails from "./containers/User/ViewDetails";
import AdminLogin from "./containers/Admin/AdminLogin";
import AdminDashBoard from "./containers/Admin/AdminDashBoard";
import AllUser from "./containers/Admin/AllUser";
import PaidUser from "./containers/Admin/PaidUser";
import UnPaidUser from "./containers/Admin/UnPaidUser";
const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={MainLandingPage} />
        <Route path="/adminLogin" component={AdminLogin} />
        <Route
          path="/login"
          render={() =>
            isTokenVaild() ? <Redirect to="/user/home" /> : <Login />
          }
        />
        <Route
          path="/forgotPassword"
          render={() =>
            isTokenVaild() ? <Redirect to="/user/home" /> : <ForgotPassword />
          }
        />
        <Route
          path="/signup"
          render={() =>
            isTokenVaild() ? <Redirect to="/user/home" /> : <Signup />
          }
        />
        <Route
          path="/home"
          render={() =>
            isTokenVaild() ? <Redirect to="/user/home" /> : <LandingPage />
          }
        />
        <Route
          path="/user/home/viewdetails"
          render={() =>
            !isTokenVaild() ? <Redirect to="/" /> : <ViewDetails />
          }
        />
        <Route
          path="/user/dashboard"
          render={() => (!isTokenVaild() ? <Redirect to="/" /> : <Dashboard />)}
        />
        <Route
          path="/user/home"
          render={() => (!isTokenVaild() ? <Redirect to="/" /> : <Home />)}
        />
        <Route
          path="/user/profile"
          render={() => (!isTokenVaild() ? <Redirect to="/" /> : <Profile />)}
        />
        <Route
          path="/user/orders"
          render={() => (!isTokenVaild() ? <Redirect to="/" /> : <Orders />)}
        />
        <Route
          path="/admin/dashboard"
          render={() =>
            !isAdminTokenValid() ? (
              <Redirect to="/adminLogin" />
            ) : (
                <AdminDashBoard />
              )
          }
        />
        <Route
          path="/admin/paiduser"
          render={() =>
            !isAdminTokenValid() ? <Redirect to="/adminLogin" /> : <PaidUser />
          }
        />
        <Route
          path="/admin/alluser"
          render={() =>
            !isAdminTokenValid() ? <Redirect to="/adminLogin" /> : <AllUser />
          }
        />
        <Route
          path="/admin/unpaiduser"
          render={() =>
            !isAdminTokenValid() ? (
              <Redirect to="/adminLogin" />
            ) : (
                <UnPaidUser />
              )
          }
        />
      </Switch>
    </BrowserRouter>
  );
};
export default Routes;
