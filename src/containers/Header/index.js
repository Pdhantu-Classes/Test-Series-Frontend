import React from 'react'
import {Link,withRouter}  from 'react-router-dom'
import logo from '../../asset/UI-Content/logo.jpeg'
// import {getUserId,getFirstName,getLastName,isTokenVaild} from '../../core/utility/authHeader'
import "../../css/LandingPage.css"
const isActive = (history, path) => {
  if (history.location.hash === path) {
      return { color: "blue" };
  } else {
      return { color: "black" };
  }
};
const Menu=({history}) =>{
  const isToken = false
  // const userId= null
  // const firstName = getFirstName()
  // const lastName = getLastName()
  
  
  // console.log(userId)
   return(
    <nav className="navbar navbar-expand-md navbar-light fixed-top py-4">
        <div className='container'>
            <a  href ="/" className='navbar-brand'>
            <img src={logo} width="50" height="50" alt=""/><h3 className="d-inline align-middle">The Pdhantu Classes</h3>
            </a>
            <button className="navbar-toggler" data-toggle="collapse" data-target="#navbarNav"><span className="navbar-toggler-icon"></span></button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ml-auto">
                 <li className="nav-item">
                    <a href="#about"  style={isActive(history, "#about")}  className="nav-link">About</a>
                  </li>
                  <li className="nav-item">
                    <a href="#authors"  style={isActive(history,"#authors")} className="nav-link">Meet The Teachers</a>
                  </li>
                  <li className="nav-item">
                    <a href='#videos' style={isActive(history,"#videos")} className='nav-link'>Videos</a>
                  </li>
                  <li className="nav-item">
                    <a href="#contact" style={isActive(history,"#contact")} className="nav-link">Contact</a>
                  </li>
                 
                 {!isToken && <li className="nav-item">
                    <Link to='/signup' className='nav-link'><button type="button" className="btn btn-primary">Sign Up</button></Link>
                  </li>}
                  {!isToken && <li className="nav-item">
                    <Link to='/login' className='nav-link'><button type="button" className="btn btn-primary">Sign In</button></Link>
                  </li>}
                  {/* {isToken && <div>{firstName}</div>} */}
                  {isToken && <li className="nav-item">
                    <Link to='/login' className='nav-link'><button type="button" className="btn btn-primary">Log out</button></Link>
                  </li>}
                </ul>
              </div>
        </div>
    </nav>
   )
}
export default withRouter(Menu)