import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import LandingPage from "./pages/LandingPage";
import Login from "./containers/Login";
import Signup from "./containers/Signup";
import ForgotPassword from './containers/ForgotPassword'
import Profile from "./containers/User/Profile";
import Orders from "./containers/User/Orders";
import Home from "./containers/User/Home";
import { isTokenVaild, isAdminTokenValid, getModule, isTestTokenVaild } from "./core/utility/authHeader";
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
import UploadQuestion from './containers/Admin/UploadQuestion'
import UploadExcel from './containers/Admin/ExcelUpload'
import EditQuestion from './containers/Admin/EditQuestion'
import ChooseSubjects from "./containers/Course/ChooseSubject";
import ChoosePaper from "./containers/Course/ChoosePaper";
import ViewTopics from "./containers/Course/ViewTopics";
import AdminUploadMaterial from "./containers/Course/AdminCourse/AdminUploadMaterial";
import AdminChoosePaper from "./containers/Course/AdminCourse/AdminChoosePaper";
import AdminChooseSubject from "./containers/Course/AdminCourse/AdminChooseSubject";
import AdminUploadSection from "./containers/Course/AdminCourse/AdminUploadSection";
import PaidUserList from "./containers/Course/AdminCourse/PaidUserList";
import UploadTopicPdf from "./containers/Course/AdminCourse/UploadTopicPdf";
import Notice from "./pages/LandingPage/Components/NewWebsite/Notice";
import CurrentAffairs from "./pages/LandingPage/Components/NewWebsite/CurrentAffairs";
import Faculties from "./pages/LandingPage/Components/NewWebsite/Faculties";
import Features from "./pages/LandingPage/Components/NewWebsite/Features";
import AddCurrentAffairs from "./containers/Admin/AddCurrentAffairs";
import AddNotice from "./containers/Admin/AddNotice";
import AdminPrelimsClassTest from "./containers/Course/AdminCourse/AdminPrelimsClassTest";
import AdminClassTestUpload from "./containers/Course/AdminCourse/AdminClassTestUpload";
import AdminClassTestShow from "./containers/Course/AdminCourse/AdminClassTestShow";
import AdminEditTestQuestions from "./containers/Course/AdminCourse/AdminEditTestQuestions";
import ClassTestPrelims from "./containers/Course/ClassTestPrelims"
import ClassTestPrelimsChoose from "./containers/Course/ClassTestPrelimsChoose"
import InstructionScreenClassTest from "./containers/Course/InstructionScreenClassTest";
import ClassTestScreen from "./containers/Course/ClassTestScreen";
import ClassTestSubmitResponse from './containers/Course/ClassTestSubmitResponse'
import ClassTestResponse from "./containers/Course/ClassTestResponse";
import ClassTestRank from "./containers/Course/ClassTestRank";
import AdminClassTestRankList from "./containers/Course/AdminCourse/AdminClassTestRankList";
import AdminAllUserList from "./containers/Course/AdminCourse/AdminAllUserList";
import AllUsersList from './containers/Admin/AllUsersList'
import ClassSchedule from "./pages/LandingPage/Components/NewWebsite/ClassSchedule";
import AdminSelectBatchUserLists from "./containers/Course/AdminCourse/AdminSelectBatchUserLists";
import AdminSelectBatchPaidUserLists from "./containers/Course/AdminCourse/AdminSelectBatchPaidUserLists";
import AdminChooseBatchUpload from "./containers/Course/AdminCourse/AdminChooseBatchUpload";
import AdminAddCurrentAffairs from "./containers/Course/AdminCourse/AdminAddCurrentAffairs";
import CourseCurrentAffairs from "./containers/Course/CourseCurrentAffairs";


import LoginTestSeries from '../src/containers/CgpscTestSeries/UserTestSeries/Login'
import SignupTestSeries from '../src/containers/CgpscTestSeries/UserTestSeries/SignUp'
import ForgetPasswordTestSeries from '../src/containers/CgpscTestSeries/UserTestSeries/ForgetPassword'
import HomeTestSeries from '../src/containers/CgpscTestSeries/UserTestSeries/Home'
import DashboardTestSeries from '../src/containers/CgpscTestSeries/UserTestSeries/Dashboard'
import ProfileTestSeries from '../src/containers/CgpscTestSeries/UserTestSeries/Profile'
import OrdersTestSeries from '../src/containers/CgpscTestSeries/UserTestSeries/Orders'
// import AllTestTestSeries from './containers/CgpscTestSeries/UserTestSeries/AllTest'
import TestScreenTestSeries from '../src/containers/CgpscTestSeries/UserTestSeries/TestScreen'
import TestInstructionTestSeries from '../src/containers/CgpscTestSeries/UserTestSeries/TestInstruction'
import TestResponseTestSeries from '../src/containers/CgpscTestSeries/UserTestSeries/TestResponse'
import TestSubmitResponseTestSeries from '../src/containers/CgpscTestSeries/UserTestSeries/TestSubmitResponse'
import TestRankTestSeries from '../src/containers/CgpscTestSeries/UserTestSeries/TestRank'
import MyTestSeries from '../src/containers/CgpscTestSeries/UserTestSeries/MyTestSeries'


import AdminSeriesLogin from './containers/CgpscTestSeries/AdminTestSeries/Login'
import AdminSeriesDashboard from './containers/CgpscTestSeries/AdminTestSeries/AdminDashBoard'
import AdminSeriesPaidUser from './containers/CgpscTestSeries/AdminTestSeries/PaidUsers'
import AdminSeriesUnpaidUser from './containers/CgpscTestSeries/AdminTestSeries/UnPaidUsers'
import AdminSeriesAllUser from './containers/CgpscTestSeries/AdminTestSeries/AllUser'
import AdminSeriesAllUserList from './containers/CgpscTestSeries/AdminTestSeries/AllUsersList'
import AdminSeriesUploadQuestion from './containers/CgpscTestSeries/AdminTestSeries/UploadQuestion'
import AdminSeriesExcelUpload from './containers/CgpscTestSeries/AdminTestSeries/ExcelUploadQuestions'
import AdminSeriesAllMock from './containers/CgpscTestSeries/AdminTestSeries/AllMock'
import AdminSeriesShowQuestions from './containers/CgpscTestSeries/AdminTestSeries/ShowQuestions'
import AdminSeriesEditQuestion from './containers/CgpscTestSeries/AdminTestSeries/EditQuestion'
import AdminSeriesAddToPaymentList from './containers/CgpscTestSeries/AdminTestSeries/AddToPaymentList'
import AdminSeriesQuestionPaperPdf from './containers/CgpscTestSeries/AdminTestSeries/UploadQuestionPaperPdf'
import AdminSeriesViewRank from './containers/CgpscTestSeries/AdminTestSeries/ViewRank'
import AdminSeriesViewMockStatus from './containers/CgpscTestSeries/AdminTestSeries/ViewMockStatus'
import AdminSeriesViewMockStatusUsers from './containers/CgpscTestSeries/AdminTestSeries/ViewMockUsers'

import TestSeriesSchedule from './pages/LandingPage/Components/TestSeriesSchedule'

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
          path="/login"
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
         <Route
          path='/admin/uploadQuestion'
          render={() =>!isAdminTokenValid() ? <Redirect to="/adminLogin" /> : <UploadQuestion />}
        />
         <Route
          path='/admin/excelUpload'
          render={() =>!isAdminTokenValid() ? <Redirect to="/adminLogin" /> : <UploadExcel />}
        />
         <Route
          path='/admin/editQuestion'
          render={() =>!isAdminTokenValid() ? <Redirect to="/adminLogin" /> : <EditQuestion />}
        />

      <Route
          path='/admin/allUsersList'
          render={() =>!isAdminTokenValid() ? <Redirect to="/adminLogin" /> : <AllUsersList />}
        />



        {/*------------------------------- Miscellaneous ------------------------------------*/}
        <Route path='/testViewDetails' component={TestDetails} />
        <Route path='/admin/upload-question-images' component={UploadQuestionImage} />
        <Route path='/user/questionPaper' component={QuestionPaperShow} />
        <Route path='/user/answerKey' component={AnswerKeyShow} />
        <Route path='/admin/questionPaper' component={QuestionPaperShow} />
        <Route path='/admin/answerKey' component={AnswerKeyShow} />
        <Route path='/cgpsc/details' component={CgpscViewDetails} />
        <Route path='/notice' component={Notice} />
        <Route path='/current-affairs' component={CurrentAffairs} />
        <Route path='/faculties' component={Faculties} />
        <Route path='/classSchedule' component={ClassSchedule} />
        <Route path='/features' component={Features} />
        <Route path='/admin/addNotice' component={AddNotice} />
        <Route path='/admin/addCurrentAffairs' component={AddCurrentAffairs} />
        <Route path='/testSeriesSchedule' component={TestSeriesSchedule} />



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

        <Route
          path="/user/course/paper"
          render={() => (!isTokenVaild()? <Redirect to="/" /> : <ChoosePaper />)}
        />

        <Route
          path="/user/course/subjects"
          render={() => (!isTokenVaild()? <Redirect to="/" /> : <ChooseSubjects />)}
        />

        <Route
          path="/user/course/viewTopics"
          render={() => (!isTokenVaild()? <Redirect to="/" /> : <ViewTopics />)}
        />

      <Route
          path="/user/course/classTestPrelims"
          render={() => (!isTokenVaild()? <Redirect to="/" /> : < ClassTestPrelims/>)}
        />

      <Route
          path="/user/course/classTestPrelimsChoose"
          render={() => (!isTokenVaild()? <Redirect to="/" /> : < ClassTestPrelimsChoose/>)}
        />
        <Route
          path="/user/course/classTestPrelimsInstructions"
          render={() => (!isTokenVaild()? <Redirect to="/" /> : < InstructionScreenClassTest/>)}
        />
        <Route
          path="/user/course/classTestScreen"
          render={() => (!isTokenVaild()? <Redirect to="/" /> : < ClassTestScreen/>)}
        />
        <Route
          path="/user/course/classTestSubitResponse"
          render={() => (!isTokenVaild()? <Redirect to="/" /> : < ClassTestSubmitResponse/>)}
        />
        <Route
          path="/user/course/classTestResponse"
          render={() => (!isTokenVaild()? <Redirect to="/" /> : < ClassTestResponse/>)}
        />
        <Route
          path="/user/course/classTestRank"
          render={() => (!isTokenVaild()? <Redirect to="/" /> : < ClassTestRank/>)}
        />
        <Route
          path="/user/course/currentAffairs"
          render={() => (!isTokenVaild()? <Redirect to="/" /> : < CourseCurrentAffairs/>)}
        />

        {/* ---------------------------------Admin Course--------------------------------------------- */}
        <Route path="/adminCourseLogin" component ={AdminLoginCourse}/>
        <Route path="/adminCourse/dashboard" component ={AdminDashboardCourse}/>
        <Route path="/adminCourse/allUser" component ={AdminAllUserCourse}/>
        <Route path="/adminCourse/paidUser" component ={AdminPaidUserCourse}/>
        <Route path="/adminCourse/disputePayment" component ={AdminDisputePaymentCourse}/>
        <Route path="/adminCourse/resolvePayment" component ={AdminResolvePaymentCourse}/>
        <Route path="/adminCourse/userDetails" component ={UserDetails}/>
        <Route path="/adminCourse/uploadMaterial" component ={AdminUploadMaterial}/>
        <Route path="/adminCourse/choosePaper" component ={AdminChoosePaper}/>
        <Route path="/adminCourse/chooseSubject" component ={AdminChooseSubject}/>
        <Route path="/adminCourse/upload" component ={AdminUploadSection}/>
        <Route path="/adminCourse/paidUserList" component ={PaidUserList}/>
        <Route path="/adminCourse/uploadTopicPdf" component ={UploadTopicPdf}/>
        <Route path="/adminCourse/addTopicsClassTest" component ={AdminPrelimsClassTest}/>
        <Route path="/adminCourse/uploadClassTestQuestions" component ={AdminClassTestUpload}/>
        <Route path="/adminCourse/showClassTestQuestions" component ={AdminClassTestShow}/>
        <Route path="/adminCourse/editClassTestQuestions" component ={AdminEditTestQuestions}/>
        <Route path="/adminCourse/classTestRankList" component ={AdminClassTestRankList}/>
        <Route path="/adminCourse/allUsersList" component ={AdminAllUserList}/>
        <Route path="/adminCourse/allUsersListBatch" component ={AdminSelectBatchUserLists}/>
        <Route path="/adminCourse/allPaidUserListBatch" component ={AdminSelectBatchPaidUserLists}/>
        <Route path="/adminCourse/chooseBatchUpload" component ={AdminChooseBatchUpload}/>
        <Route path="/adminCourse/currentAffairs" component ={AdminAddCurrentAffairs}/>




        {/*  ------------------------------ Test Series CGPSC ---------------------------------------  */}

        <Route
          path="/loginTestseries"
          render={() =>
            isTestTokenVaild() ? <Redirect to="/user/testseries/home" /> : <LoginTestSeries />}
        />

        <Route
          path="/forgotPasswordTestseries"
          render={() =>
            isTestTokenVaild() ? <Redirect to="/user/testseries/home" /> : <ForgetPasswordTestSeries />}
        />

        <Route
          path="/signupTestseries"
          render={() =>
            isTestTokenVaild()? <Redirect to="/user/testseries/home" /> : <SignupTestSeries />}
        />

        <Route
          path="/user/testseries/home"
          render={() => (isTestTokenVaild()? <HomeTestSeries/>:<Redirect to="/" />)}
        />

        <Route
          path="/user/testseries/dashboard"
          render={() => (isTestTokenVaild()? <MyTestSeries/>:<Redirect to="/" />)}
        />

      <Route
          path="/user/testseries/myTestSeries"
          render={() => (isTestTokenVaild()? <DashboardTestSeries/>:<Redirect to="/" />)}
        />

        <Route
          path="/user/testseries/profile"
          render={() => (isTestTokenVaild()? <ProfileTestSeries/>:<Redirect to="/" />)}
        />

        <Route
          path="/user/testseries/orders"
          render={() => (isTestTokenVaild()? <OrdersTestSeries/>:<Redirect to="/" />)}
        />

        <Route
          path="/user/testseries/testscreen"
          render={() => (!isTestTokenVaild()? <Redirect to="/" /> : <TestScreenTestSeries />)}
        />

         <Route
          path="/user/testseries/testresponse"
          render={() => (!isTestTokenVaild()? <Redirect to="/" /> : <TestResponseTestSeries />)}
        />

         <Route
          path="/user/testseries/testrank"
          render={() => (!isTestTokenVaild()? <Redirect to="/" /> : <TestRankTestSeries />)}
        />

        <Route
          path="/user/testseries/testinstruction"
          render={() => (!isTestTokenVaild()? <Redirect to="/" /> : <TestInstructionTestSeries />)}
        />

         <Route
          path="/user/testseries/submitResponse"
          render={() => (!isTokenVaild()? <Redirect to="/" /> : <TestSubmitResponseTestSeries />)}
        />


          {/*----------------------------------CGPSC Admin Routes --------------------------------- */}

          <Route path="/admin/testseries/login" component={AdminSeriesLogin} />
          <Route path="/admin/testseries/dashboard" component={AdminSeriesDashboard} />
          <Route path="/admin/testseries/allUsers" component={AdminSeriesAllUser} />
          <Route path="/admin/testseries/paidUsers" component={AdminSeriesPaidUser} />
          <Route path="/admin/testseries/unPaidUsers" component={AdminSeriesUnpaidUser} />
          <Route path="/admin/testseries/allMock" component={AdminSeriesAllMock} />
          <Route path="/admin/testseries/uploadQuestion" component={AdminSeriesUploadQuestion} />
          <Route path="/admin/testseries/dumpExcelQuestion" component={AdminSeriesExcelUpload} />
          <Route path="/admin/testseries/showQuestions" component={AdminSeriesShowQuestions} />
          <Route path="/admin/testseries/editQuestion" component={AdminSeriesEditQuestion} />
          <Route path="/admin/testseries/mockStatus" component={AdminSeriesViewMockStatus} />
          <Route path="/admin/testseries/viewRank" component={AdminSeriesViewRank} />
          <Route path="/admin/testseries/addToPaymentList" component={AdminSeriesAddToPaymentList} />
          <Route path="/admin/testseries/allUserList" component={AdminSeriesAllUserList} />
          <Route path="/admin/testseries/UploadPaperPdf" component={AdminSeriesQuestionPaperPdf} />
          <Route path="/admin/testseries/viewmockusers" component={AdminSeriesViewMockStatusUsers} />
      </Switch>
    </BrowserRouter>
  );
};
export default Routes;
