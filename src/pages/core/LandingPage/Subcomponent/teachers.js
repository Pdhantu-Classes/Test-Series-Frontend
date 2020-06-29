import React from 'react'
import person1 from '../../../../asset/person1.jpeg'
import person2 from '../../../../asset/person2.jpeg'
import person3 from '../../../../asset/person3.jpeg'
import person4 from '../../../../asset/person4.jpeg'
function techers()
{
   return(
    <section id="authors" className="my-5 text-center">
    <div className="container">
    <div className="row">
    <div className="col">
      <div className="info-header mb-5">
        <h1 className="text-primary pb-3">
          Meet The Teachers
        </h1>
        <p className="lead pb-3">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet omnis fuga maiores excepturi dolores explicabo.
        </p>
      </div>
    </div>
  </div>
 
  <div className="row">
    <div className="col-lg-3 col-md-6">
          <div className="card">
            <div className="card-body">
              <img src={person1} alt="" className="img-fluid rounded-circle w-50 mb-3"/>
              <h3>Satish Tripathi</h3>
              <h5 className="text-muted">Lead Writer</h5>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae molestiae alias expedita quae esse ut.</p>
              
            </div>
          </div>
    </div>
    <div className="col-lg-3 col-md-6">
          <div className="card">
            <div className="card-body">
              <img src={person2} alt="" className="img-fluid rounded-circle w-50 mb-3"/>
              <h3>Praveen Dewangan</h3>
              <h5 className="text-muted">Lead Writer</h5>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae molestiae alias expedita quae esse ut.</p>
              
            </div>
          </div>
    </div>
    <div className="col-lg-3 col-md-6">
          <div className="card">
            <div className="card-body">
              <img src={person3} alt="" className="img-fluid rounded-circle w-50 mb-3"/>
              <h3>Grish Kumar Sahu</h3>
              <h5 className="text-muted">Lead Writer</h5>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae molestiae alias expedita quae esse ut.</p>
              
            </div>
          </div>
    </div>
    <div className="col-lg-3 col-md-6">
          <div className="card">
            <div className="card-body">
              <img src={person4} alt="" className="img-fluid rounded-circle w-50 mb-3"/>
              <h3>Jaynendra Patel</h3>
              <h5 className="text-muted">Lead Writer</h5>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae molestiae alias expedita quae esse ut.</p>
              
            </div>
          </div>
    </div>
    </div>
    </div>
  </section>
   )
}
export default techers