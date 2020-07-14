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
import TestDetails from "./pages/LandingPage/Components/View-Details"
import TestScreen from "./pages/TestSeries/TestScreen" 
import TestResponse from "./pages/TestSeries/TestResponse"
import TestRank from "./pages/TestSeries/TestRank"
import TestInstruction from './pages/TestSeries/TestInstruction'
import AllMock from './containers/Admin/AllMock'
import DemoTestInstruction from './pages/DemoTest/DemoTestInstruction'
import Response from './pages/TestSeries/SubmitScreen'

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
          path="/user/testscreen"
          render={() => (!isTokenVaild() ? <Redirect to="/" /> : <TestScreen />)}
        />
         <Route
          path="/user/testresponse"
          render={() => (!isTokenVaild() ? <Redirect to="/" /> : <TestResponse />)}
        />
         <Route
          path="/user/testrank"
          render={() => (!isTokenVaild() ? <Redirect to="/" /> : <TestRank />)}
        />
        <Route
          path="/user/testinstruction"
          render={() => (!isTokenVaild() ? <Redirect to="/" /> : <TestInstruction />)}
        />
         <Route
          path="/user/demoInstruction"
          render={() => (!isTokenVaild() ? <Redirect to="/" /> : <DemoTestInstruction />)}
        />
         <Route
          path="/user/submitResponse"
          render={() => (!isTokenVaild() ? <Redirect to="/" /> : <Response />)}
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
        <Route
          path="/admin/allmock"
          render={() =>
            !isAdminTokenValid() ? <Redirect to="/adminLogin" /> : <AllMock />
          }
        />
        <Route path='/testViewDetails' component={TestDetails} />
      </Switch>
    </BrowserRouter>
  );
};
export default Routes;
