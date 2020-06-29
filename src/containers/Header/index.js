import React from 'react'
import {Link,withRouter}  from 'react-router-dom'
import logo from '../../asset/UI-Content/logo.jpeg'
const Menu=() =>(
    <nav className="navbar navbar-expand-md navbar-light fixed-top py-4">
        <div className='container'>
            <Link  to="/" className='navbar-brand'>
            <img src={logo} width="50" height="50" alt=""/><h3 className="d-inline align-middle">The Pdhantu Classes</h3>
            </Link>
            <button className="navbar-toggler" data-toggle="collapse" data-target="#navbarNav"><span className="navbar-toggler-icon"></span></button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ml-auto">
                 <li className="nav-item">
                    <a href="#about" className="nav-link">About</a>
                  </li>
                  <li className="nav-item">
                    <a href="#authors" className="nav-link">Meet The Teachers</a>
                  </li>
                  <li className="nav-item">
                    <a href="#contact" className="nav-link">Contact</a>
                  </li>
                  <li className="nav-item">
                    <Link to='/videos' className='nav-link'>Videos</Link>
                  </li>
                  <li className="nav-item">
                    <Link to='/signup' className='nav-link'><button type="button" className="btn btn-primary">Sign Up</button></Link>
                  </li>
                  <li className="nav-item">
                    <Link to='/login' className='nav-link'><button type="button" className="btn btn-primary">Sign In</button></Link>
                  </li>
                </ul>
      </div>
        </div>
    </nav>
)
export default withRouter(Menu)