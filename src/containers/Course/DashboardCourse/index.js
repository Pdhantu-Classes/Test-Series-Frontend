import React, { useState, useEffect } from "react";
import UserNavBar from '../UserNavBar'
import http from "axios";

import { API_ENDPOINTS } from "../../../core/constants/apiConstantCourse";
import {
    getUserId,
   
  } from "../../../core/utility/authHeader";
const IS_USER_REGISTER = API_ENDPOINTS.USERS.IS_USER_REGISTER
const IS_PACKAGE_BUY =API_ENDPOINTS.USERS.IS_PACKAGE_BUY
const UserDashBoard =() => {

  const [loading, setLoading] = useState(true);
  const [isBuy, setIsBuy] = useState(false);
  const [isRegister, setIsRegister] = useState(false);
 
 
  
    useEffect(() => {
        const USER_ID = getUserId();
        
        
    
        setLoading(true);
    
        http
          .get(IS_USER_REGISTER.replace("<USER_ID>", USER_ID))
          .then((response) => {
            setLoading(false)
            const responseRegister = response.data.isValid;
            
            setIsRegister(responseRegister);
          });
        http.get(IS_PACKAGE_BUY.replace("<USER_ID>", USER_ID)).then((response) => {
          setLoading(false);
          const responseData = response.data.isValid;
          setIsBuy(responseData);
        });
    
        
        
      }, []);
    return (
        <div>
        <UserNavBar />
        {!loading ?
        <div className="container mt-5 pt-5">
            {isRegister && isBuy ?  <div className="display-4 text-success text-center"> Class will start at 17th August </div>:null}
            {isRegister && !isBuy ?  <div className="display-4 text-info text-center"> Please buy the course </div>:null}
            {!isRegister && !isBuy ? <div className="display-4 text-danger text-center"> You are not registered </div>:null}
           
        </div>:(<div className="d-flex justify-content-center pt-5 mt-5">
          <div className="spinner-border" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        </div>)}
        </div>
    )
}
export default UserDashBoard