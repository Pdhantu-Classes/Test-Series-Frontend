import React, { useState } from "react";
import axios from "axios";
import AdminBar from "./AdminNavBar";
import { useHistory } from 'react-router-dom'
import { API_ENDPOINTS } from "../../../core/constants/apiConstantTestSeries";
const DUMPED_QUESTIONS = API_ENDPOINTS.ADMIN.DUMP_EXCEL_FILE;

export default function ExcelUploadQuestions(props) {
  const history = useHistory()
  const [files, setFiles] = useState();
  const [loading, setLoading] = useState(false)

  const handleFileChange = (e) => {
    setFiles(e.target.files[0]);
  };
  const handleDumpSheet = () => {
    console.log(files)
    if (!files) {
      alert('Please select file')
    } else {
      setLoading(true)
      const data = new FormData();
      data.append("excel_file", files);
      axios
        .post(DUMPED_QUESTIONS, data, {})
        .then((res) => {
          if (res.data) {
            setLoading(false)
            setTimeout(() => {
              console.log("Upload Successfully")
              history.push('/admin/testseries/showQuestions')
            }, 2000);
          }
        })
        .catch((err) => {
          console.log(err)
        });
    }
  };
  return (
    <div>
      <AdminBar />
      <div className="mt-5 pt-5 d-flex justify-content-center">
        <input type="file" onChange={handleFileChange} />
        <button className="btn btn-primary" onClick={handleDumpSheet}>
          Upload
      </button>
      </div>
      {loading ? <div className="d-flex justify-content-center py-5">
        <div className="spinner-border" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </div> : null}
    </div>
  );
}
