import React from 'react'
import {BrowserRouter,Switch,Route} from 'react-router-dom'

import LandingPage from './pages/LandingPage'
import Login  from './containers/Login'
import Signup from './containers/Signup'
import DashBoard from './containers/User/UserDashborad'
  const Routes = () =>{

    return(
        <BrowserRouter>
            <Switch>
                <Route path="/login" exact component={Login} />
                <Route path="/signup" exact component={Signup} /> 
                <Route path="/" exact component={LandingPage} />
                <Route path="/user/dashboard" component={DashBoard}/>
            </Switch>
         
        </BrowserRouter>
    )
  }
  export default Routes