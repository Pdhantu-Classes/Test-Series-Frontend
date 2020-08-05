import React from 'react'
import { Link } from 'react-router-dom'

export default function ModuleLog() {
    return (
        <div className="mt-5 pt-5 text-center">
           <div className="card mt-5 pt-4" style={{height:"250px"}}>
               <h4>Test Series Section</h4>
               <div className="mt-5 pt-2">
               <Link to="/signupSeries"><button className="btn btn-primary">Register</button></Link>
               <Link to="/testViewDetails"><button className="btn btn-info ml-2">Details</button></Link>
               <Link to="/loginSeries"><button className="btn btn-danger ml-2">Login</button></Link>

               </div>
              
           </div>
           <div className="card mt-5 pt-4">
               <h4> Course Section</h4>
               <div className="mt-5 pt-2">
               <Link to="/signupCourse"><button className="btn btn-primary">Register</button></Link>
               <Link to="/cgpsc/details"><button className="btn btn-info ml-2">Details</button></Link>
               <Link to="/loginCourse"><button className="btn btn-danger ml-2">Login</button></Link>
               </div>
           </div>
        </div>
    )
}
