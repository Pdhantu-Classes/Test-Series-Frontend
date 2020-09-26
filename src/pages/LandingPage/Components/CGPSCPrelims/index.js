import React from 'react'
import { Link } from 'react-router-dom'

export default function CgpscPrelims() {
    const handleDownloadSyllabus = ()=>{
        window.location.href = "https://pdhantu-classes.s3.us-east-2.amazonaws.com/miscellaneous/cgpscPrelimsSyllabus.pdf"
    }
    return (
        <div className="mt-5 text-center container">
            <div className="row">
            <div className="card bg-secondary mt-5 pt-4 offset-md-3 offset-sm-0 md-5" style={{height:"300px", width:"400px"}}>
               <h3 className="text-white">CGPSC Prelims/Chhattisgarh GK Test Series Section</h3>
               <div className="mt-5">
               <Link to="/signupTestseries"><button className="btn btn-primary btn-lg">Register</button></Link>
               <Link to="/loginTestseries"><button className="btn btn-danger btn-lg ml-5">Login</button></Link>      
               <br></br>
               <button className="btn btn-info mt-4 btn-lg" onClick={handleDownloadSyllabus}>Full Syllabus</button>
               <Link to="/testSeriesSchedule"><button className="btn btn-success ml-2 mt-4 btn-lg">Test Schedule</button></Link>
               </div>          
           </div>
            </div>

        </div>
    )
}
