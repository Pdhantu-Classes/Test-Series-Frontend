import React from 'react'
import Showcase from './Subcomponent/showcase'
import Boxes from './Subcomponent/boxes'
import WhyUs from './Subcomponent/whyus'
import Teachers from './Subcomponent/teachers'
import ContactUs from './Subcomponent/contactus'

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