import React, { useState } from 'react';
import { Link } from "react-router-dom";
import '../../css/LandingPage.css'
import '../../css/DashBoard.css';
import logo from '../../asset/UI-Content/logo.jpeg'
import Profile from '../user/Profile'
import Alltest from '../user/AllTest'
import Orders from '../user/Orders'
import Report from '../user/Report';
const Dashboard = () => {
    const[sideBarData,SetSideBar]=useState({
        profile:true,
        orders:false,
        test:false,
        report:false
    })
    const {profile,orders,test,report} =sideBarData
    const handleClick = name =>event=>{
        SetSideBar({[name]:true})
        
    }
     
   return(
 
    <div >
        <nav className="navbar navbar-expand-md navbar-light fixed-top ">
        <div className='container'>
            <Link  to="/" className='navbar-brand'>
            <img  src={logo} width="50" height="50" alt=""/><h3 className="d-inline align-middle">The Pdhantu Classes</h3>
            </Link>
            <button className="navbar-toggler" data-toggle="collapse" data-target="#navbarNav"><span className="navbar-toggler-icon"></span></button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ml-auto">
                  <li className="nav-item">
                    <Link to='/signup' className='nav-link'><button type="button" className="btn btn-primary">Log Out</button></Link>
                  </li>
                  
                </ul>
              </div>
        </div>
      
    </nav>
    
     <div class="container-fluid ">
         
      <div class="row">
        <nav class="col-md-2 d-none d-md-block bg-light py-1 sidebar">
          <div class="sidebar-sticky  py-5">
            <ul class="nav flex-column">
              <li class="nav-item">
                <Link  onClick={handleClick('profile')} class="nav-link " >
                  <span data-feather="home"></span>
                  Profile 
                </Link>
              </li>
              <li class="nav-item">
                <Link onClick={handleClick('orders')} class="nav-link" >
                  <span data-feather="file"></span>
                  Orders
                </Link>
              </li>
              <li class="nav-item">
                <Link onClick={handleClick('test')} class="nav-link" >
                  <span data-feather="shopping-cart"></span>
                  My Test
                </Link>
              </li>
              
              <li class="nav-item">
                <Link onClick={handleClick('report')} class="nav-link" >
                  <span data-feather="bar-chart-2"></span>
                  Reports
                </Link>
              </li>
              
            </ul>
            </div>
        </nav>
        </div>
        <main role="main" class="col-md-9 ml-sm-auto col-lg-10 pt-3 px-4 py-0">
          <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pb-2 mb-3 border-bottom">
            </div> 
           {profile &&  <Profile />}
           {orders &&  <Orders/>}
           {test  &&  <Alltest />}
           {report  && <Report />}
     

        </main>
      </div>
    
    </div>
   )
};
export default Dashboard;