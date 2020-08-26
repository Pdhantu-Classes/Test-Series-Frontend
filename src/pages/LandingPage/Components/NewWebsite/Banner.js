import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';
import {isMobile} from 'react-device-detect'
import bannerWeb1 from '../assets/Web_Banner_1.jpg'
import bannerWeb2 from '../assets/Web_Banner_2.jpg'
import bannerMobile1 from '../assets/Mobile_Banner_1.jpg'
import bannerMobile2 from '../assets/Mobile_Banner_2.jpg'

export default function Banner() {
    if(isMobile){
        return (
            <div className="mt-5 pt-5">
                <Carousel autoPlay infiniteLoop showThumbs={false} showStatus={false}>
                    <div>
                        <img src={bannerMobile1} style={{height:"300px"}} alt="banner1"/>
                    </div>
                    <div>
                        <img src={bannerMobile2} style={{height:"300px"}} alt="banner2"/>
                    </div>
                </Carousel>
            </div>
        );
    }
    else{
        return (
            <div className="mt-5 pt-1">
                <Carousel autoPlay infiniteLoop showThumbs={false} showStatus={false}>
                    <div>
                        <img src={bannerWeb1} style={{height:"600px"}} alt="banner1"/>
                    </div>
                    <div>
                        <img src={bannerWeb2} style={{height:"600px"}} alt="banner2"/>
                    </div>
                </Carousel>
            </div>
        );
    }

}
