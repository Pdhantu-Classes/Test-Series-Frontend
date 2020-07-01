import React from 'react'
import Showcase from './Components/Showcase'
import Boxes from './Components/Boxes'
import WhyUs from './Components/Why-Us'
import Teachers from './Components/Instructor'
import ContactUs from './Components/Contact-Us'
import Header from '../../containers/Header'
import Footer from '../../containers/Footer'
import Videos from './Components/Videos'

function landingPage(){
    return(
        <div>
        
       <Header />
        <Showcase />
        <Boxes />
        <WhyUs />
        <Teachers />
        <Videos />
        <ContactUs />
       <Footer/>
        </div>
    )
}
export default landingPage