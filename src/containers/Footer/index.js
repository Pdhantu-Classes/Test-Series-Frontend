import React from 'react'
import Facebook from '../../asset/facebook.svg'
import Instagram from '../../asset/instagram-sketched.svg'
import YouTube from '../../asset/youtube.svg'
import Telegram from '../../asset/telegram.svg'
import Github from '../../asset/github.svg'
import { Link } from 'react-router-dom'

function footer() {
  return (

    <div>
      <footer class="page-footer font-small cyan darken-3 bg-primary">
      <div className="text-white offset-md-4">
        <div className="mt-5 font-weight-bold">
          Follow Us on:
        </div>
       </div>
        <div class="container">
          <div class="row" style={{ display: 'flex' }}>
            <div class="col-md-12 pt-2">
              <div class="mb-5 flex-center">
                <a class="fb-ic" style={{ color: 'white' }} href="https://www.facebook.com/pdhantu/" target="blank">
                  <img style={{ width: '40px', marginLeft: "70px" }} src={Facebook} alt="img"></img>
                </a>
                <a class="ins-ic" style={{ color: 'white' }} href="https://www.instagram.com/thepadhantu/" target="blank">
                  <img style={{ width: '40px', marginLeft: '20px' }} src={Instagram} alt="img"></img>
                </a>
                <a class="ins-ic" style={{ color: 'white' }} href="https://www.youtube.com/channel/UCiT6Zmqf7MI6bsQ4XonsVYQ" target="blank">
                  <img style={{ width: '40px', marginLeft: '20px' }} src={YouTube} alt="img"></img>
                </a>
                <a class="ins-ic" style={{ color: 'white' }} href="https://t.me/thepdhantuclass" target="blank">
                  <img style={{ width: '40px', marginLeft: '20px' }} src={Telegram} alt="img"></img>
                </a>
                <div style={{ float: 'right', marginRight: '120px', marginTop: '20px', color: 'white' }}>
                  <h5><b>Address:</b><br></br></h5>
              SHANTI NAGAR<br></br>
              RAIPUR (C.G)<br></br>
              492001
          </div>
              </div>
            </div>
          </div>
        </div>
        <div class="footer-copyright text-center py-3" style={{ background: 'blue' }}><span style={{ color: 'white' }}> © 2020 Copyright:The Pdhantu Classes </span>
          <Link style={{ color: 'white' }} href="https://www.thepdhantu.com/"></Link>
        </div>
        <div className="text-white text-center">
          <div>
          <span>
          Developed by
          </span>
         <span> 
            <a class="fb-ic" style={{ color: 'white' }} href="https://github.com/ashishumrey009" target="blank" data-toggle="tooltip" title="Ashish Umrey">
                <img style={{ width: '25px', marginLeft: "25px", color:"white" }} src={Github} alt="img"></img>
              </a>
              <span className="ml-1">Ashish</span>
         </span>
         <span>
            <a class="fb-ic" style={{ color: 'white' }} href="https://github.com/amit036" target="blank" data-toggle="tooltip" title="Amit Kumar">
                <img style={{ width: '25px', marginLeft: "25px", color:"white" }} src={Github} alt="img"></img>
              </a>
              <span className="ml-1">Amit</span>
         </span>
         <span>
            <a class="fb-ic" style={{ color: 'white' }} href="https://github.com/nitu023" target="blank" data-toggle="tooltip" title="Nitu Kumari">
                <img style={{ width: '25px', marginLeft: "25px", color:"white" }} src={Github} alt="img"></img>
              </a>
              <span className="ml-1">Nitu</span>
         </span>
          </div>
        </div>
      </footer>
    </div>

  )
}
export default footer;