import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import LandingPage from "./pages/LandingPage";
import Login from "./containers/Login";
import Signup from "./containers/Signup";
import ForgotPassword from './containers/ForgotPassword'
import Profile from "./containers/User/Profile";
import Orders from "./containers/User/Orders";
import Home from "./containers/User/Home";
import { isTokenVaild, isAdminTokenValid, getModule } from "./core/utility/authHeader";
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
import UploadQuestionImage from "./containers/Admin/UploadQuestionImage";
import QuestionPaperShow from "./containers/User/QuestionPaperShow";
import AnswerKeyShow from "./containers/User/AnswerKeyShow";
import AdminViewRank from './containers/Admin/ViewRank'
import MockStatus from './containers/Admin/MockStatus'
import AddToPayment from './containers/Admin/AddToPaymentList'
import ViewMockStatus from "./containers/Admin/ViewMockStatus";
import UploadQuestionPaperPdf from "./containers/Admin/UploadQuestionPaperPdf";
import UploadAnswerKeyPdf from "./containers/Admin/UploadAnswerKeyPdf";
import LoginCourse from './containers/Course/LoginCourse'
import ForgotPasswordCourse from './containers/Course/ForgetPasswordCourse'
import SignupCourse from './containers/Course/SignupCourse'
import HomeCourse from './containers/Course/HomeCourse'
import ProfileCourse from './containers/Course/ProfileCourse'
import OrdersCourse from './containers/Course/OrdersCourse'
import DashboardCourse from './containers/Course/DashboardCourse'
import CgpscViewDetails from "./pages/LandingPage/Components/CgpscViewDetails";
import AdminLoginCourse from "./containers/Course/AdminCourse/AdminLogin";
import AdminDashboardCourse from "./containers/Course/AdminCourse/AdminDashboard";
import AdminAllUserCourse from "./containers/Course/AdminCourse/AllUser";
import AdminPaidUserCourse from "./containers/Course/AdminCourse/PaidUser";
import AdminDisputePaymentCourse from "./containers/Course/AdminCourse/DisputePayment";
import AdminResolvePaymentCourse from "./containers/Course/AdminCourse/ResolvePayment";
import UserDetails from "./containers/Course/AdminCourse/UserDetails";
import ShowQuestion from './containers/Admin/ShowQuestion'

const Routes = () => {
 
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={MainLandingPage} />
        <Route path="/adminLogin" component={AdminLogin} />
        <Route path="/adminLoginCourse" component={AdminLoginCourse} />

        {/* ------------------------User TEST_SERIES  and Course Both------------------------------*/}
        <Route
          path="/loginSeries"
          render={() =>
            isTokenVaild() ? <Redirect to="/user/home" /> : <Login />}
        />
        <Route
          path="/forgotPasswordSeries"
          render={() =>
            isTokenVaild() ? <Redirect to="/user/home" /> : <ForgotPassword />}
        />
        <Route
          path="/signupSeries"
          render={() =>
            isTokenVaild()? <Redirect to="/user/home" /> : <Signup />}
        />
        <Route
          path="/home"
          render={() =>isTokenVaild()? <Redirect to="/user/home" /> : <LandingPage />}
        />
        <Route
          path="/user/home/viewdetails"
          render={() =>!isTokenVaild()? <Redirect to="/" /> : <ViewDetails />}
        />
        <Route
          path="/user/dashboard"
          render={() => (!isTokenVaild()? <Redirect to="/" /> : getModule() === "TEST_SERIES" ?<Dashboard />:getModule() === "COURSE"?<DashboardCourse/>:<Redirect to="/" />)}
        />
        <Route
          path="/user/home"
          render={() => (!isTokenVaild()? <Redirect to="/" /> : getModule() === "TEST_SERIES" ? <Home />: getModule() === "COURSE" ?<HomeCourse/>:<Redirect to="/" />)}
        />
        <Route
          path="/user/profile"
          render={() => (!isTokenVaild()? <Redirect to="/" /> : getModule() === "TEST_SERIES" ? <Profile />: getModule() === "COURSE" ? <ProfileCourse/>:<Redirect to="/" />)}
        />
        <Route
          path="/user/orders"
          render={() => (!isTokenVaild()? <Redirect to="/" /> : getModule() === "TEST_SERIES" ? <Orders />:getModule() === "COURSE" ? <OrdersCourse/>:<Redirect to="/" />)}
        />
        <Route
          path="/user/testscreen"
          render={() => (!isTokenVaild()? <Redirect to="/" /> : <TestScreen />)}
        />
         <Route
          path="/user/testresponse"
          render={() => (!isTokenVaild()? <Redirect to="/" /> : <TestResponse />)}
        />
         <Route
          path="/user/testrank"
          render={() => (!isTokenVaild()? <Redirect to="/" /> : <TestRank />)}
        />
        <Route
          path="/user/testinstruction"
          render={() => (!isTokenVaild()? <Redirect to="/" /> : <TestInstruction />)}
        />
         <Route
          path="/user/demoInstruction"
          render={() => (!isTokenVaild()? <Redirect to="/" /> : <DemoTestInstruction />)}
        />
         <Route
          path="/user/submitResponse"
          render={() => (!isTokenVaild()? <Redirect to="/" /> : <Response />)}
        />
        


        {/* ------------------------------------Admin Test-Series------------------------------------------ */}
        <Route
          path="/admin/dashboard"
          render={() =>!isAdminTokenValid() ? (<Redirect to="/adminLogin" />) : (<AdminDashBoard />)}
        />

        <Route
          path="/admin/paiduser"
          render={() =>!isAdminTokenValid() ? <Redirect to="/adminLogin" /> : <PaidUser />}
        />

        <Route
          path="/admin/alluser"
          render={() =>
            !isAdminTokenValid() ? <Redirect to="/adminLogin" /> : <AllUser />}
        />

        <Route
          path="/admin/unpaiduser"
          render={() =>!isAdminTokenValid() ? (<Redirect to="/adminLogin" />) : (<UnPaidUser />)}
        />

        <Route
          path="/admin/allmock"
          render={() =>!isAdminTokenValid() ? <Redirect to="/adminLogin" /> : <AllMock />}
        />

        <Route
          path="/admin/mockstatus"
          render={() =>!isAdminTokenValid() ? <Redirect to="/adminLogin" /> : <MockStatus />}
        />

        <Route
          path="/admin/viewmockusers"
          render={() =>!isAdminTokenValid() ? <Redirect to="/adminLogin" /> : <ViewMockStatus />}
        />

         <Route
          path="/admin/viewrank"
          render={() =>!isAdminTokenValid() ? <Redirect to="/adminLogin" /> : <AdminViewRank />}
        />

        <Route
          path="/admin/addToPaymentList"
          render={() =>!isAdminTokenValid() ? <Redirect to="/adminLogin" /> : <AddToPayment />}
        />

        <Route
          path='/admin/uploadQuestionPdf'
          render={() =>!isAdminTokenValid() ? <Redirect to="/adminLogin" /> : <UploadQuestionPaperPdf />}
        />

        <Route
          path='/admin/uploadAnswerPdf'
          render={() =>!isAdminTokenValid() ? <Redirect to="/adminLogin" /> : <UploadAnswerKeyPdf />}
        />
         <Route
          path='/admin/showQuestion'
          render={() =>!isAdminTokenValid() ? <Redirect to="/adminLogin" /> : <ShowQuestion />}
        />



        {/*------------------------------- Miscellaneous ------------------------------------*/}
        <Route path='/testViewDetails' component={TestDetails} />
        <Route path='/admin/upload-question-images' component={UploadQuestionImage} />
        <Route path='/user/questionPaper' component={QuestionPaperShow} />
        <Route path='/user/answerKey' component={AnswerKeyShow} />
        <Route path='/admin/questionPaper' component={QuestionPaperShow} />
        <Route path='/admin/answerKey' component={AnswerKeyShow} />
        <Route path='/cgpsc/details' component={CgpscViewDetails} />
        



        {/*------------------------------- COURSE USERS ------------------------------------*/}
        <Route
          path="/loginCourse"
          render={() =>
            isTokenVaild() ? <Redirect to="/user/home" /> : <LoginCourse />}
        />
        <Route
          path="/forgotPasswordCourse"
          render={() =>
            isTokenVaild() ? <Redirect to="/user/home" /> : <ForgotPasswordCourse />}
        />
        <Route
          path="/signupCourse"
          render={() =>
            isTokenVaild() ? <Redirect to="/user/home" /> : <SignupCourse />}
        />

        {/* ---------------------------------Admin Course--------------------------------------------- */}
        <Route path="/adminCourseLogin" component ={AdminLoginCourse}/>
        <Route path="/adminCourse/dashboard" component ={AdminDashboardCourse}/>
        <Route path="/adminCourse/allUser" component ={AdminAllUserCourse}/>
        <Route path="/adminCourse/paidUser" component ={AdminPaidUserCourse}/>
        <Route path="/adminCourse/disputePayment" component ={AdminDisputePaymentCourse}/>
        <Route path="/adminCourse/resolvePayment" component ={AdminResolvePaymentCourse}/>
        <Route path="/adminCourse/userDetails" component ={UserDetails}/>

      </Switch>
    </BrowserRouter>
  );
};
export default Routes;
