import React from 'react'
import Showcase from './Components/Showcase'
import Boxes from './Components/Boxes'
import WhyUs from './Components/Why-Us'
import Teachers from './Components/Instructor'
import ContactUs from './Components/Contact-Us'

function landingPage(){
    return(
        <div>
       
        <Showcase />
        <Boxes />
        <WhyUs />
        <Teachers />
        <ContactUs />
       
        </div>
    )
}
export default landingPage