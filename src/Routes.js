import React from 'react'
import {BrowserRouter,Switch,Route} from 'react-router-dom'
import Header from './containers/Header'
import Footer from './containers/Footer'
import LandingPage from './pages/LandingPage'

  const Routes = () =>{

    return(
        <BrowserRouter>
        <Header />
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