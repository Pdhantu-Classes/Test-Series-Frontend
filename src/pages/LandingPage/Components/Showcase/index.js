import React from 'react'
import '../../../../css/LandingPage.css'
import { Link } from "react-router-dom";
function showcase(){
  return(
    <section id="showcase" className="py-5">
    <div className="primary-overlay text-white">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 text-center">
            <h1 className="display-2 mt-5 pt-5">
              So What You Dream Of...
            </h1>
            <blockquote className="blockquote text-center">
              <p className="mb-0">The only hurdle in achieving your dream is YOU</p>
              <footer className="blockquote-footer text-white">Pdhantu Gurus</footer>
            </blockquote>
            
          </div>
          <div className="col-lg-6 py-5">
          <div className="box-shadow rounded text-center  d-none d-lg-block">
          <div className="card text-center" style={{background:'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(0,212,255,1) 0%, rgba(179,223,211,1) 0%'}} >
          <div className="card-body" >
          <h3 className="p-3 text-dark py-4">The Pdhantu Test Series</h3>
           <h3 className="text-dark">Starts on 15th july</h3>
              <h3 className="text-dark">Stay Tune For More Updates</h3>
            <Link to='/signup' className='nav-link' ><button className="btn btn-secondary btn-lg mt-5">Sign Up For Test</button></Link>
          </div>
        </div>
        </div>
          
          </div>
        </div>
      </div>
    </div>
  </section>

   )
}
export default showcase;