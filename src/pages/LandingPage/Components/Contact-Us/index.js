import React from 'react'
function conactus(){
    return(
        <section id="contact" className="bg-light py-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-9">
              <h3>Get In Touch</h3>
              <p className="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus, et.</p>
              <form>
                <div className="form-group">
                  <div className="input-group input-group-lg">
                    <span className="input-group-addon"><i className="fa fa-user"></i></span>
                    <input type="text" className="form-control" placeholder="Name"/>
                  </div>
                </div>
                <div className="form-group">
                  <div className="input-group input-group-lg">
                    <span className="input-group-addon"><i className="fa fa-envelope"></i></span>
                    <input type="email" className="form-control" placeholder="Email"/>
                  </div>
                </div>
                <div className="form-group">
                  <div className="input-group input-group-lg">
                    <span className="input-group-addon"><i className="fa fa-pencil"></i></span>
                    <textarea className="form-control" placeholder="Message" rows="5"></textarea>
                  </div>
                </div>
                <input type="submit" value="Submit" className="btn btn-primary btn-block btn-lg"/>
              </form>
            </div>
            <div className="col-lg-3 align-self-center">
              <img src="img/mlogo.png" alt="" className="img-fluid"/>
            </div>
          </div>
        </div>
      </section>
    )
}
export default conactus