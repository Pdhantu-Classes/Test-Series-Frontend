import React, { useState } from 'react';
import '../../css/LandingPage.css'
import '../../css/DashBoard.css';
import UserNavBar from '../User/UserNavBar'
const Dashboard = () => {
    const[sideBarData,SetSideBar]=useState({
        profile:false,
        orders:false,
        test:true,
        report:false
    })
  
   return(
 
    <div >
       <UserNavBar />
    
       <div className="container text-center py-5">
        <div className="info-header mb-5">
            <h1 className="text-primary pb-3">
              Test Will Start From 15th July
            </h1>
           
          </div>
          
        </div>
        
       
     
    </div>
    
   )
};
export default Dashboard;