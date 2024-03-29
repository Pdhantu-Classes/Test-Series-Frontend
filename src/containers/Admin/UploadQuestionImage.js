import React, { useState } from 'react'
import http from 'axios'
import { useAlert, types } from 'react-alert'

import { API_ENDPOINTS } from '../../core/constants/apiConstant'
const UPLOAD_IMAGE = API_ENDPOINTS.ADMIN.UPLOAD_IMAGE
export default function UploadQuestionImage() {
    const alert = useAlert()

    const [ imageUrl, setImageUrl ] = useState('')
    const [ imgFile, setImgFile ] = useState(null)
    const [ loading, setLoading ] = useState(false)

    const handleImage = (e) => {
        e.preventDefault();
        setImgFile(e.target.files[0])
    }

    const handleSubmit = (e) => {
        if(imgFile){
            setLoading(true)
            e.preventDefault();
            const formData = new FormData();
            formData.append('file',imgFile )
            http
              .post(UPLOAD_IMAGE, formData)
              .then(response => {
                setLoading(false)
                const responseData = response.data.imageUrl
                setImgFile(null)
                setImageUrl(responseData)
                alert.show('Upload Successful', { type: types.SUCCESS })
              })
              .catch(err => console.log(err))
        }
        else{
            alert.show('Please Choose Image File', { type: types.ERROR })
        }
       
      };
    return (
        <div className="offset-4">
            <h3>Upload Image to Server and Get Image Link</h3>
            <div>
                <input id="file-input" accept="image/*" type="file" onChange={handleImage}/>
            </div>
            <button className="btn btn-secondary mt-2 offset-2" onClick={handleSubmit}>Upload Images</button>
            <button className="btn btn-primary mt-2 ml-3" onClick={()=>{window.location.reload()}}>Refresh</button>
           
                {
                    !loading ? 
                    <div>
                        {
                             imageUrl !==""?
                             <div className="mt-5">
                                <h4>Image Link</h4>
                                <div className="border w-50 ">
                                    {imageUrl}
                                </div>
                             </div>
                             :
                             null
                        }          
                        {
                            imageUrl !==""?
                            <div className="border border-primary w-50 mt-5 mb-5">
                                <img style={{width:'500px'}} src={imageUrl} alt="Loading..."/>
                            </div>
                            :
                            null
                        }                    
                     
                    </div>
                    :
                    <div className="d-flex justify-content-center" style={{position:'absolute', transform:'translate(-50%,-50%)', left:'50%', top:'40%'}}>
                        <div className="spinner-border" role="status">
                            <span className="sr-only">Loading...</span>
                        </div>
                  </div>
                }

            </div>
    )
}
