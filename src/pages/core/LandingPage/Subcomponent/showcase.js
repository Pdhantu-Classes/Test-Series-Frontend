import React from 'react'

import '../landingpage.css'
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
            <p className="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum, quas.</p>
            <a href="index.html" className="btn btn-outline-secondary btn-lg text-white">
              <i className="fa fa-arrow-right"></i> Read More</a>
          </div>
          <div className="col-lg-6">
            {/* <img src= {book} alt="" className="img-fluid d-none d-lg-block"/> */}
          </div>
        </div>
      </div>
    </div>
  </section>

   )
}
export default showcase;