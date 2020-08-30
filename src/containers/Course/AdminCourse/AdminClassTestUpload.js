import React, { useState } from "react";
import axios from "axios";
import { useHistory } from 'react-router-dom'
import AdminNavBar from "../AdminCourse/AdminNavBar";

import { API_ENDPOINTS } from '../../../core/constants/apiConstantCourse'
const DUMP_CLASS_TEST_PRELIMS = API_ENDPOINTS.ADMIN.DUMP_CLASS_TEST_PRELIMS

export default function AdminClassTestUpload() {
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
                .post(DUMP_CLASS_TEST_PRELIMS, data, {})
                .then((res) => {
                    if (res.data) {
                        setLoading(false)
                        setTimeout(() => {
                            console.log("Upload Successfully")
                            history.push('/adminCourse/showClassTestQuestions')
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
            <AdminNavBar />
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
    )
}
