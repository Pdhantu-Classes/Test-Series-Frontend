import React from 'react'
import {BrowserRouter,Switch,Route} from 'react-router-dom'
import Menu from './pages/core/Menu'
import LandingPage from './pages/core/LandingPage/LandingPage'
import Footer from './pages/core/footer'
  const Routes = () =>{

    return(
        <BrowserRouter>
        <Menu />
            <Switch>
                {/* <Route path="/signin" exact component={Signin} />
                <Route path="/signup" exact component={Signup} /> */}
                <Route path="/" exact component={LandingPage} />

            </Switch>
          <Footer />
        </BrowserRouter>
    )
  }
  export default Routes