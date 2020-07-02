import React from 'react'
import person1 from '../../../../asset/Instructor/person1.jpeg'
import person2 from '../../../../asset/Instructor/person2.jpeg'
import person3 from '../../../../asset/Instructor/person3.jpeg'
import person4 from '../../../../asset/Instructor/person4.jpeg'
import person5 from '../../../../asset/Instructor/person5.jpeg'
import person6 from '../../../../asset/Instructor/person6.jpg'
function techers()
{
   return(
    <section id="authors" className="my-5 text-center">
    <div className="container">
    <div className="row">
    <div className="col">
      <div className="info-header mb-5">
        <h1 className="text-primary pb-3">
        Meet the pdhantu Gurus
        </h1>
        
      </div>
      <p className="lead pb-3">
        The faculties here called as “pdhantu gurus” who are highly experienced in the field of teaching as well making pdhantu a successful individual in the field of competitive exams. We believe in two-way communication between faculties and pdhantu, So that hesitation of asking or learning in this fast-growing world vanishes. 
        </p>
    </div>
  </div>
 
  <div className="row">
  <div className="col-lg-3 col-md-6">
            <div className="card">
                <div className="card-body" style={{height:'40vh'}}>
                <img src={person5} alt="" className="img-fluid rounded-circle w-50 mb-3"/>
                <h3>Dr. Animesh kumar sharma</h3>
                <h5 className="text-muted">Teacher</h5>
                <p>TEACHING EXPERIENCE : 16</p>
              
            </div>
          </div>
          </div>
    <div className="col-lg-3 col-md-6">
          <div className="card">
            <div className="card-body" style={{height:'40vh'}}>
              <img src={person1} alt="" className="img-fluid rounded-circle w-50 mb-3"/>
              <h3>Satish Tripathi</h3>
              <h5 className="text-muted">Teacher</h5>
              <p>TEACHING EXPERIENCE : 10</p>
              
            </div>
          </div>
    </div>
   
    <div className="col-lg-3 col-md-6">
          <div className="card">
            <div className="card-body" style={{height:'40vh'}}>
              <img src={person3} alt="" className="img-fluid rounded-circle w-50 mb-3"/>
              <h3>Girish Kumar Sahu</h3>
              <h5 className="text-muted">Teacher</h5>
              <p>TEACHING EXPERIENCE : 10</p>
              
            </div>
          </div>
    </div>
    <div className="col-lg-3 col-md-6">
          <div className="card">
            <div className="card-body" style={{height:'40vh'}}>
              <img src={person4} alt="" className="img-fluid rounded-circle w-50 mb-3"/>
              <h3>Jaynendra Patel</h3>
              <h5 className="text-muted">Teacher</h5>
              <p>TEACHING EXPERIENCE : 10</p>
              
            </div>
          </div>
    </div>
   
    </div>
    <div>
    <div className="row mb-3 my-5 align-items-center justify-content-center">
    <div className="col-lg-3 col-md-6">
          <div className="card">
            <div className="card-body" style={{height:'40vh'}} >
              <img src={person2} alt="" className="img-fluid rounded-circle w-50 mb-3"/>
              <h3>Praveen Dewangan</h3>
              <h5 className="text-muted">Teacher</h5>
              <p>TEACHING EXPERIENCE : 5</p>
              
            </div>
          </div>
    </div>
            
          <div className="col-lg-3 col-md-6">
            <div className="card">
                <div className="card-body" style={{height:'40vh'}}>
                <img src={person6} alt="" className="img-fluid rounded-circle w-50 mb-3" />
                <h3>Amit Pandey</h3>
                <h5 className="text-muted">IT Head</h5>
                <p></p>
              
            </div>
          </div>
          </div>
    </div>
    </div>
    </div>
  </section>
   )
}
export default techers