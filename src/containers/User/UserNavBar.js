import React from 'react'
import {Route} from 'react-router-dom'
import { Link } from "react-router-dom";
import { useHistory } from "react-router"
import logo from  '../../asset/UI-Content/logo.jpeg'
import {logout} from '../../core/utility/authHeader'
const UserNavBar =() =>{
    const history = useHistory()
    const handleLogout =() =>{
        logout()
        history.push('/')
    }
    return(
        <nav className="navbar navbar-expand-md navbar-light fixed-top py-4">
        <div className='container'>
            <Link  to="/user/home" className='navbar-brand'>
            <img  src={logo} width="50" height="50" alt=""/><h3 className="d-inline align-middle">The Pdhantu Classes</h3>
            </Link>
            <button className="navbar-toggler" data-toggle="collapse" data-target="#navbarNav"><span className="navbar-toggler-icon"></span></button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                   <Link className='nav-link' onClick ={() => { history.push('/user/dashboard') }}>DashBoard</Link>
                  </li>
                  <li className="nav-item">
                   <Link className='nav-link'  onClick ={()=> {history.push('/user/profile') }}>Profile</Link>
                  </li>
                  <li className="nav-item">
                   <Link   className='nav-link'  onClick ={()=>{ history.push('/user/orders') }}>Orders</Link>
                  </li>
                  <li className="nav-item">
                   <button type="button" className="btn btn-primary" onClick ={handleLogout}>Log Out</button>
                  </li>
                </ul>
              </div>
        </div>
      
    </nav>
    )
}
export default UserNavBar;