import React from 'react'
import {BrowserRouter,Switch,Route,Redirect} from 'react-router-dom'

import LandingPage from './pages/LandingPage'
import Login  from './containers/Login'
import Signup from './containers/Signup'
import DashBoard from './containers/User/UserDashborad'

import Profile from './containers/User/Profile'
import Orders from './containers/User/Orders'
import Home from './containers/User/Home'
import {isTokenVaild} from './core/utility/authHeader'
import Dashboard from './containers/User/UserDashborad'
import MainLandingPage from './MainLandingPage'
import ViewDetails from './containers/User/ViewDetails'
  const Routes = () =>{
    console.log(isTokenVaild())
    return(
        <BrowserRouter>
            <Switch>
              <Route path="/" exact component={MainLandingPage}/>
                <Route path="/login" render ={()=>isTokenVaild()?(<Redirect to="/user/home" />):<Login />} />
                <Route path="/signup" render ={()=>isTokenVaild()?(<Redirect to="/user/home" />):<Signup />} /> 
                <Route path="/home"  render ={()=>isTokenVaild()?(<Redirect to="/user/home" />):<LandingPage />} />
                <Route path="/home"  render ={()=>isTokenVaild()?(<Redirect to="/user/home/viewdetails" />):<ViewDetails />} />
                <Route path="/user/dashboard" render ={()=>!isTokenVaild()?(<Redirect to="/" />):<Dashboard />}/>
                <Route path="/user/home" render ={()=>!isTokenVaild()?(<Redirect to="/" />):<Home />}/>
                <Route path="/user/profile" render ={()=>!isTokenVaild()?(<Redirect to="/" />):<Profile />} />
                <Route path="/user/orders" render ={()=>!isTokenVaild()?(<Redirect to="/" />):<Orders />}/>
            </Switch>
         
        </BrowserRouter>
    )
  }
  export default Routes