import React from 'react'
import {BrowserRouter,Switch,Route} from 'react-router-dom'
import Header from './containers/Header'
import Footer from './containers/Footer'
import LandingPage from './pages/LandingPage'
import Login  from './containers/Login'

  const Routes = () =>{

    return(
        <BrowserRouter>
        <Header />
            <Switch>
                <Route path="/login" exact component={Login} />
                {/* <Route path="/signup" exact component={Signup} /> */}
                <Route path="/" exact component={LandingPage} />

            </Switch>
          <Footer />
        </BrowserRouter>
    )
  }
  export default Routes