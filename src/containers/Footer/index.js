import React from 'react'
import Facebook from '../../asset/facebook.svg'
import Instagram from '../../asset/instagram-sketched.svg'
import YouTube from '../../asset/youtube.svg'

function footer (){
    return(
     
     <div>
      <footer class="page-footer font-small cyan darken-3 bg-primary" style={{ boxShadow: '5px 10px 10px 10px gray'}}>
      <div class="container">
        <div class="row" style={{display:'flex'}}>
          <div class="col-md-12 py-5">
            <div class="mb-5 flex-center">
              <a class="fb-ic" style={{color:'white'}} href="https://www.facebook.com/pdhantu/" target="blank">
                <img style= {{ width: '50px', marginLeft:"20px"}} src={Facebook} alt="img"></img>
              </a>
              <a class="ins-ic"  style={{color:'white'}} href="https://www.instagram.com/thepadhantu/" target="blank">
              <img style= {{ width: '50px', marginLeft:'20px'}} src={Instagram} alt="img"></img>
              </a>
              <a class="ins-ic"  style={{color:'white'}} href="https://www.youtube.com/channel/UCiT6Zmqf7MI6bsQ4XonsVYQ" target="blank">
              <img style= {{ width: '50px', marginLeft:'20px'}} src={YouTube} alt="img"></img>
              </a>
              <div style={{float: 'right', color: 'white'}}>
                Address here 
          </div>
            </div>
          </div>  
        </div>
      </div>
      <div class="footer-copyright text-center py-3" style={{background: 'blue'}}><span style={{color:'white'}}> © 2020 Copyright:The Pdhnatu Classes </span>
        <a  style={{color: 'white'}} href="https://www.thepdhantu.com/"></a>
        <div style={{color: 'white'}}>DEVLEOPER:NITU,AMIT & ASHISH</div>
      </div>
      </footer>
     </div>
     
    )
}
export default footer;