import React, { useState } from 'react'
import http from "axios";
import { useHistory } from 'react-router-dom'
import { API_ENDPOINTS } from '../../../core/constants/apiConstantTestSeries'

const ADD_QUESTION_PAPER_PDF = API_ENDPOINTS.ADMIN.ADD_QUESTION_PAPER_PDF

export default function UploadQuestionPaperPdf() {

    const history = useHistory()
    const [pdf, setPdf] = useState(null)
    const [loading, setLoading] = useState(false)

    const handleChange = (e) =>{
        setPdf(e.target.files[0])
    }
    const handleSubmit = () =>{
        setLoading(true)
        const MOCK_PAPER_ID = window.localStorage.getItem("mock_paper_id")
        const formData = new FormData();
        formData.append("question_paper_pdf", pdf);
        http
        .post(ADD_QUESTION_PAPER_PDF, formData,{
            headers:{
                mock_paper_id: MOCK_PAPER_ID
            }
        })
        .then((response) => {
          setLoading(false);
          history.push('/admin/testseries/allMock')

        })
        .catch((err) => console.log(err));
    }
    return (
        <div>
        <div className="col-lg-8 offset-md-3 offset-sm-0">
              <input id="file-input" type="file" onChange={handleChange} className="form-control"/>
        </div>
        <div className="text-center">
            <button className="btn btn-primary" onClick={handleSubmit}>Upload</button>
        </div>
        {
            loading ?
                <div className="d-flex justify-content-center mt-5 pt-5">
                    <div className="spinner-border mt-5 pt-2" role="status">
                        <span className="sr-only">Loading...</span>
                    </div>
                </div>
            :
                null
        }
       
    </div>
    )
}
