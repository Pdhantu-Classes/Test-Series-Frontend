import React from "react";
import AdminNavbar from './AdminNavBar'
import {useHistory} from 'react-router-dom'
export default function UploadQuestion() {
    const history = useHistory()
  return (
    <div className="container">
        <AdminNavbar />
        <div className="mt-5 pt-5 d-flex justify-content-center">
        <span>
        <button  className="btn btn-primary mt-5" onClick={()=>history.push('/admin/excelUpload')}>Dump Excel File </button>
      </span>
      <span>
        <button className="btn btn-primary ml-5 mt-5" disabled>Add Question </button>
      </span>
        </div>
    </div>
  );
}
