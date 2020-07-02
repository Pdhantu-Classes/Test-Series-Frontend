import React, { useState } from 'react';
import { Link } from "react-router-dom";
import '../../css/LandingPage.css'
import '../../css/DashBoard.css';
import logo from '../../asset/UI-Content/logo.jpeg'
import Profile from '../User/Profile'
import Alltest from '../User/AllTest'
import Orders from '../User/Orders'
import Report from '../User/Report';
import UserNavBar from '../User/UserNavBar'
const Home = () => {
  return(
 
    <div >
       <UserNavBar />
       <Alltest />
    </div>
   )
};
export default Home;