import React from 'react'
import Showcase from './Components/Showcase'
import Boxes from './Components/Boxes'
import WhyUs from './Components/Why-Us'
import Teachers from './Components/Instructor'
import ContactUs from './Components/Contact-Us'
import Header from '../../containers/Header'
import Footer from '../../containers/Footer'
import Videos from './Components/Videos'
import CgpscCourse from './Components/CgpscCourse'
import ModuleLog from './Components/ModuleLog'

function landingPage(){
    return(
        <div>
        
       <Header />
        <Showcase />
        <ModuleLog/>
        <CgpscCourse/>
        <WhyUs />
        <Boxes />
        <Teachers />
        <Videos />
        <ContactUs />
       <Footer/>
        </div>
    )
}
export default landingPage