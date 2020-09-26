import React from 'react'
// import Showcase from './Components/Showcase'
import Boxes from './Components/Boxes'
import WhyUs from './Components/Why-Us'
import Teachers from './Components/Instructor'
import ContactUs from './Components/Contact-Us'
import Header from '../../containers/Header'
import Footer from '../../containers/Footer'
import Videos from './Components/Videos'
// import CgpscCourse from './Components/CgpscCourse'
import ModuleLog from './Components/ModuleLog'
import Banner from './Components/NewWebsite/Banner'
import SubMenu from './Components/NewWebsite/SubMenu'
import CGPSC from './Components/NewWebsite/CGPSC'
import CgpscPrelims from './Components/CGPSCPrelims'

function landingPage(){
    return(
        <div>
        
       <Header />
       <Banner/>
       <SubMenu/>
        {/* <Showcase /> */}
        <CgpscPrelims/>
        <CGPSC/>
        <ModuleLog/>
        {/* <CgpscCourse/> */}
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