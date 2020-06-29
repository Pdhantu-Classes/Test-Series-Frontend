import React from 'react'
import {Link,withRouter}  from 'react-router-dom'
import logo from '../../asset/logo.jpeg'
const Menu=() =>(
    <nav class="navbar navbar-expand-md navbar-light fixed-top py-4">
        <div className='container'>
            <Link  to="/" className='navbar-brand'>
            <img src={logo} width="50" height="50" alt=""/><h3 className="d-inline align-middle">The Pdhantu Classes</h3>
            </Link>
            <button class="navbar-toggler" data-toggle="collapse" data-target="#navbarNav"><span class="navbar-toggler-icon"></span></button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ml-auto">
                 <li class="nav-item">
                    <a href="#about" className="nav-link">About</a>
                  </li>
                  <li class="nav-item">
                    <a href="#authors" className="nav-link">Meet The Teachers</a>
                  </li>
                  <li class="nav-item">
                    <a href="#contact" className="nav-link">Contact</a>
                  </li>
                  <li class="nav-item">
                    <Link to='/videos' className='nav-link'>Videos</Link>
                  </li>
                  <li class="nav-item">
                    <Link to='/signup' className='nav-link'><button type="button" class="btn btn-primary">Sign Up</button></Link>
                  </li>
                  <li class="nav-item">
                    <Link to='/signin' className='nav-link'><button type="button" class="btn btn-primary">Sign In</button></Link>
                  </li>
                </ul>
      </div>
        </div>
    </nav>
)
export default withRouter(Menu)