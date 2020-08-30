import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import AdminNavBar from "../AdminCourse/AdminNavBar";

export default function AdminChoosePaper() {

  const history = useHistory()
  const [sectionId, setSectionId] = useState(null)

  useEffect(() => {
    const SECTION_ID = window.localStorage.getItem("adminSectionId")
    setSectionId(SECTION_ID)
  }, [])

  const handleChange = (id) => {
    console.log(id);

    if(sectionId === "1"){
      window.localStorage.setItem("adminCourseId", id)
      history.push('/adminCourse/chooseSubject')
    }
    else{
      history.push('/adminCourse/addTopicsClassTest')
    }
  }
  return (
    <div>
      <AdminNavBar />
      <div className="container mt-5 pt-5">
        <div className="mt-5 pt-5">
          <div className="row text-center">
            {
              sectionId === "1" || sectionId === "2" ?
                <div
                  className="col-lg-4 col-md-6 mt-5"
                  onClick={() => { handleChange(1) }}
                >
                  <div className="card bg-info ">
                    <div className="card-body py-5 " style={{ height: "35vh" }}>
                      <div className="py-5 text-white" style={{ fontSize: "45px" }}>Prelims</div>
                    </div>
                  </div>
                </div> :
                null
            }

            {
              sectionId === "1" ?
                <div
                  className="col-lg-4 col-md-6 mt-5"
                  onClick={() => { handleChange(3) }}>
                  <div className="card bg-success ">
                    <div className="card-body py-5" style={{ height: "35vh" }}>
                      <div className="py-5 text-white" style={{ fontSize: "45px" }}>Mains (Hindi)</div>
                    </div>
                  </div>
                </div>
                :
                null
            }

            {
              sectionId === "1" ?
                <div
                  className="col-lg-4 col-md-6  mt-5"
                  onClick={() => { handleChange(4) }}>
                  <div className="card bg-danger ">
                    <div className="card-body py-5" style={{ height: "35vh" }}>
                      <div className="py-5 text-white" style={{ fontSize: "45px" }}>Mains (English)</div>
                    </div>
                  </div>
                </div>
                :
                null
            }

          </div>
        </div>
      </div>
    </div>
  )
}
