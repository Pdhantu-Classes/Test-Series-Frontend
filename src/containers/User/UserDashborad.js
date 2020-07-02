import React, { useState } from 'react';
import { Link } from "react-router-dom";
import '../../css/LandingPage.css'
import '../../css/DashBoard.css';
import logo from '../../asset/UI-Content/logo.jpeg'
import Profile from '../User/Profile'
import Alltest from '../User/AllTest'
import Orders from '../User/Orders'
import Report from '../User/Report';
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
        <nav className="navbar navbar-expand-md navbar-light fixed-top py-4">
        <div className='container'>
            <Link  to="/" className='navbar-brand'>
            <img  src={logo} width="50" height="50" alt=""/><h3 className="d-inline align-middle">The Pdhantu Classes</h3>
            </Link>
            <button className="navbar-toggler" data-toggle="collapse" data-target="#navbarNav"><span className="navbar-toggler-icon"></span></button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                   <Link className='nav-link' onClick ={handleClick('test')}>DashBoard</Link>
                  </li>
                  <li className="nav-item">
                   <Link className='nav-link'  onClick ={handleClick('profile')}>Profile</Link>
                  </li>
                  <li className="nav-item">
                   <Link className='nav-link'  onClick ={handleClick('orders')}>Orders</Link>
                  </li>
                  <li className="nav-item">
                    <Link to='/signup' className='nav-link'><button type="button" className="btn btn-primary">Log Out</button></Link>
                  </li>
                </ul>
              </div>
        </div>
      
    </nav>
    
     <div class="container-fluid ">
        {profile &&<Profile/>}
        {orders && <Orders/>} 
        {test && <Alltest />}
     
    </div>
    </div>
   )
};
export default Dashboard;