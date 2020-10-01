import React,{useState} from 'react'
import http from "axios";
import { useHistory } from 'react-router-dom'
import { API_ENDPOINTS } from '../../../core/constants/apiConstantCourse'

const UPLOAD_CLASS_SCHEDULE = API_ENDPOINTS.ADMIN.UPLOAD_CLASS_SCHEDULE

export default function AdminUploadClassSchedule() {

    const history = useHistory()
    const [pdf, setPdf] = useState(null)
    const [loading, setLoading] = useState(false)

    const handleChange = (e) =>{
        setPdf(e.target.files[0])
    }
    const handleSubmit = () =>{
        setLoading(true)
        const formData = new FormData();
        formData.append("class_schedule", pdf);
        http
        .post(UPLOAD_CLASS_SCHEDULE, formData)
        .then((response) => {
          setLoading(false);
          alert('Uploaded Successfully')
          history.push('/adminCourse/dashboard')

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
