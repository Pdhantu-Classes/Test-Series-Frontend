import React, { useState, useEffect } from 'react'
import http from 'axios'
import { useAlert } from 'react-alert'
import { API_ENDPOINTS } from '../../core/constants/apiConstant'

const UPLOAD_ANSWER_PDF = API_ENDPOINTS.ADMIN.UPLOAD_ANSWER_PDF
const DUMPED_ANSWER_PDF = API_ENDPOINTS.ADMIN.DUMPED_ANSWER_PDF
const GET_MOCK_PAPER_ANSWER = API_ENDPOINTS.ADMIN.GET_MOCK_PAPER_ANSWER

export default function UploadAnswerKeyPdf() {
    const alert = useAlert()
    const [ file, setFile ] = useState()
    const [ imageUrl, setImageUrl ] = useState('')
    const [ loading, setLoading ] = useState(false)
    const [ mockPapers, setMockPapers ] = useState([])
    const [ mockPaperId, setMockPaperId ] = useState(0)
    const [ loadingSubmit, setLoadingSubmit ] = useState(false)


    useEffect(() => {
        http
            .get(GET_MOCK_PAPER_ANSWER)
            .then(res=>{
                setMockPapers(res.data.result)
                console.log(res.data.result)
            })
            .catch(err=>console.log(err))
    }, [])

    console.log(mockPapers)

    const handleChange = (e) =>{
        e.preventDefault()
        setFile(e.target.files[0])
    }

    const handleUploadToStorage = (e) =>{
        e.preventDefault()
        setLoading(true)
        const data = new FormData()  
        data.append("file", file)
        console.log(file)
        http
            .post(UPLOAD_ANSWER_PDF,data)
            .then(res=>{
                setLoading(false)
                setImageUrl(res.data.imageUrl)
                console.log(res.data)
            })
            .catch(err=>console.log(err))
    }

    const handleMockChange = (e) =>{
        e.preventDefault()
        setMockPaperId(e.target.value)
    }

    const handleConfirm = () =>{
        if(Number(mockPaperId) > 0){
            setLoadingSubmit(true)
            let body = {
                mock_paper_id: mockPaperId,
                images:imageUrl
            }
            http
            .post(DUMPED_ANSWER_PDF, body)
            .then(res=>{
                setLoadingSubmit(false)
               if(res.data.isUpload){
                    alert.show("Upload Successfully")
                    setTimeout(() => window.location.reload(), 2000);
               }
            })
            .catch(err=>console.log(err))
        }
        else{
            alert.show("Please Select Mock Paper")
        }
        
    }

    console.log(mockPapers)

    return (
        <div>
            <div className="offsset-md-4 offset-sm-2 offset-xs-1">
            {
                imageUrl === ""? 
                <div>
                    <h1>
                        Upload Answer Key
                    </h1>
                    <div>
                        <input className="form-control w-25" type="file" multiple accept="image/png, image/jpeg" onChange={handleChange}/>
                    </div>
                    <div>
                        <button className="btn btn-primary" onClick={handleUploadToStorage}>Upload to Storage</button>
                    </div>
                    <div>
                        <button className="btn btn-info" onClick={()=>window.location.reload()}>Refresh</button>
                    </div>
                </div>
                :
                null
            }
            </div>
            
            {
                !loading ?
                 imageUrl !== ""?
                    <div>
                        <h2>Please Review and Confirm</h2>
                        <select onChange={handleMockChange}>
                            <option value="0" selected>Select Mock Paper</option>
                            {
                                mockPapers.map(e=>{
                                    return(
                                        <option value={e.id}>{e.mock_paper_name}</option>
                                    )
                                })
                            }
                        </select>
                        <div  className="offsset-md-4 offset-sm-2 offset-xs-1">
                            <img src={imageUrl} style={{width:'300px', height:'400px'}} alt="Answer-Key" />       
                        </div>  
                        <button className="btn btn-success mr-5" onClick={handleConfirm}>Reviewed and Submit</button>
                        <button className="btn btn-danger" onClick={()=>window.location.reload()}>Refresh</button>
                    </div>
                    :   
                    null
                :
                <div className="d-flex justify-content-center" style={{position:'absolute', transform:'translate(-50%,-50%)', left:'50%', top:'40%'}}>
                    <div className="spinner-border" role="status">
                        <span className="sr-only">Loading...</span>
                    </div>
                </div>
            }
            {
                loadingSubmit ?
                <div className="d-flex justify-content-center" style={{position:'absolute', transform:'translate(-50%,-50%)', left:'50%', top:'40%'}}>
                    <div className="spinner-border" role="status">
                        <span className="sr-only">Loading...</span>
                    </div>
                </div>
                :
                null
            }
        </div>
    )
}
