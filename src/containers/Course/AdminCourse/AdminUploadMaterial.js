import React from 'react'
import { useHistory } from 'react-router-dom'
import AdminNavBar from "../AdminCourse/AdminNavBar";

export default function AdminUploadMaterial() {
    const history = useHistory()

    const handleChange = (id) =>{
        console.log(id);
        if(id === 3){
          // alert("Current Affairs")
          history.push('/adminCourse/currentAffairs')

        }
        else{
          window.localStorage.setItem("adminSectionId", id)
          history.push('/adminCourse/chooseBatchUpload')
        }


    }
    return (
        <div>
            <AdminNavBar />
        <div className="container mt-5 pt-5">
          <div className="mt-5 pt-5">
            <div className="row text-center">
              <div
                className="col-lg-4 col-md-6 mt-5"
                onClick={() => {handleChange(1)}}
              >
                <div className="card bg-info ">
                  <div className="card-body py-5 " style={{ height: "35vh" }}>
                    <div className="display-4 py-4 text-white">Video/Live Class</div>
                  </div>
                </div>
              </div>
  
              <div
                className="col-lg-4 col-md-6 mt-5"
                onClick={() => {handleChange(2)}}
                >
                <div className="card bg-success ">
                  <div className="card-body py-5" style={{ height: "35vh" }}>
                  <div className="display-4 py-4 text-white">Pdhantu Class Test</div>
                  </div>
                </div>
              </div>
              <div
                className="col-lg-4 col-md-6  mt-5"
                onClick={() => {handleChange(3)}}
                >
                <div className="card bg-danger ">
                  <div className="card-body py-5" style={{ height: "35vh" }}>
                    <div className="display-4 py-4 text-white" >Current Affairs</div>
                  </div>
                </div>
              </div>
              </div>
              </div>
            </div>
        </div>
    )
}
