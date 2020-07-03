import React, { useEffect,useState } from 'react'
import {Route} from 'react-router-dom'
import { Link } from "react-router-dom";
import { useHistory } from "react-router"
import logo from  '../../asset/UI-Content/logo.jpeg'
import {logout,userImage,getFirstName} from '../../core/utility/authHeader'
import avatar from '../../asset/avatar.png'
const UserNavBar =() =>{
    
    const history = useHistory()
    const [firstName,setFirstName] = useState('')
    const [imgUrl,SetImgUrl] =useState('')
    useEffect(() => {
        setFirstName(getFirstName())
        SetImgUrl(userImage())
    }, [])
    console.log(imgUrl)
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
                  
                </ul>
              </div>
              <div className="ml-2 mr-2 mt-2"> <h5>Welcome {firstName}</h5></div>
              {imgUrl !== "null"? <div><img style ={{width:'60px',height:'60px',borderRadius:'50%'}} src ={imgUrl}alt="profile" /></div>
              : <div><img style ={{width:'60px',height:'60px',borderRadius:'50%'}} src ={avatar} alt="avatar" /></div>}
             
              <button type="button" className="btn btn-primary ml-3" onClick ={handleLogout}>Log Out</button>
        </div>
      
    </nav>
    )
}
export default UserNavBar;