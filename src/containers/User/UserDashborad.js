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
const Dashboard = () => {
    const[sideBarData,SetSideBar]=useState({
        profile:false,
        orders:false,
        test:true,
        report:false
    })
    const {profile,orders,test,report} =sideBarData
    const handleClick = name =>event=>{
        SetSideBar({[name]:true})
       
    }
     
   return(
 
    <div >
       <UserNavBar />
    
     <div class="container-fluid ">
        
       
     
    </div>
    </div>
   )
};
export default Dashboard;