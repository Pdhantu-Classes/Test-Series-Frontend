import React, { useState, useEffect } from 'react'
import http from 'axios'
import { useAlert } from 'react-alert'
import { API_ENDPOINTS } from '../../core/constants/apiConstant'

const UPLOAD_BULK_QUESTION_PDF = API_ENDPOINTS.ADMIN.UPLOAD_BULK_QUESTION_PDF
const DUMPED_QUESTION_PDF = API_ENDPOINTS.ADMIN.DUMPED_QUESTION_PDF
const GET_MOCK_PAPER_QUESTION = API_ENDPOINTS.ADMIN.GET_MOCK_PAPER_QUESTION

export default function UploadQuestionPaperPdf() {
    const alert = useAlert()
    const [files, setFiles] = useState([])
    const [imageUrls, setImageUrls] = useState([])
    const [loading, setLoading] = useState(false)
    const [mockPapers, setMockPapers] = useState([])
    const [mockPaperId, setMockPaperId] = useState(0)
    const [loadingSubmit, setLoadingSubmit] = useState(false)


    useEffect(() => {
        http
            .get(GET_MOCK_PAPER_QUESTION)
            .then(res => {
                setMockPapers(res.data.result)
            })
            .catch(err => console.log(err))
    }, [])

    const handleChange = (e) => {
        e.preventDefault()
        setFiles([...files, ...e.target.files])
    }

    const handleUploadToStorage = (e) => {
        e.preventDefault()
        setLoading(true)
        const data = new FormData()
        files.forEach(file => {
            data.append("file", file)
            console.log(file)
        })
        http
            .post(UPLOAD_BULK_QUESTION_PDF, data)
            .then(res => {
                setLoading(false)
                setImageUrls(res.data.imageUrl)
                console.log(res.data)
            })
            .catch(err => console.log(err))
    }

    const handleMockChange = (e) => {
        e.preventDefault()
        setMockPaperId(e.target.value)

    }
    console.log(mockPaperId)

    const handleConfirm = () => {
        if (Number(mockPaperId) > 0) {
            setLoadingSubmit(true)
            let body = {
                mock_paper_id: mockPaperId,
                images: imageUrls
            }
            http
                .post(DUMPED_QUESTION_PDF, body)
                .then(res => {
                    setLoadingSubmit(false)
                    if (res.data.isUpload) {
                        alert.show("Upload Successfully")
                        setImageUrls([])
                    }
                })
                .catch(err => console.log(err))
        }
        else {
            alert.show("Please Select Mock Paper")
        }

    }

    console.log(mockPapers)

    return (
        <div>
            <div className="offsset-md-4 offset-sm-2 offset-xs-1">
            {
                imageUrls.length === 0 ?
                    <div>
                        <h1>
                            Upload All PDF Images
                    </h1>
                        <div className="mt-3 mb-3">
                            <input className="form-control w-25" type="file" multiple accept="image/png, image/jpeg" onChange={handleChange} />
                        </div>
                        <div className="ml-2 mb-3 d-flex">
                            <div>
                                <button className="btn btn-primary btn-lg" onClick={handleUploadToStorage}>Upload to Storage</button>
                            </div>
                            <div className="ml-5">
                                <button className="btn btn-info btn-lg" onClick={() => window.location.reload()}>Refresh</button>
                            </div>
                        </div>
                    </div>
                    :
                    null
            }
            </div>

            {
                !loading ?
                    imageUrls.length > 0 ?
                        <div>
                            <div  className="offsset-md-4 offset-sm-2 offset-xs-1">
                                <h2>Please Review and Confirm</h2>
                                <select onChange={handleMockChange}>
                                    <option value="0" selected>Select Mock Paper</option>
                                    {
                                        mockPapers.map(e => {
                                            return (
                                                <option value={e.id}>{e.mock_paper_name}</option>
                                            )
                                        })
                                    }
                                </select>
                            </div>
                            <div className="d-flex">
                                {
                                    imageUrls.map((url, index) => {
                                        return (
                                            <img src={url} style={{ width: '600px', height: '800px' }} alt={index + 1} />
                                        )
                                    })
                                }
                            </div>
                            <div className="offsset-md-4 offset-sm-2 offset-xs-1">
                                <button className="btn btn-success mr-5" onClick={handleConfirm}>Reviewed and Submit</button>
                                <button className="btn btn-danger" onClick={() => window.location.reload()}>Refresh</button>
                            </div>
                        </div>
                        :
                        null
                    :
                    <div className="d-flex justify-content-center" style={{ position: 'absolute', transform: 'translate(-50%,-50%)', left: '50%', top: '40%' }}>
                        <div className="spinner-border" role="status">
                            <span className="sr-only">Loading...</span>
                        </div>
                    </div>
            }
            {
                loadingSubmit ?
                    <div className="d-flex justify-content-center" style={{ position: 'absolute', transform: 'translate(-50%,-50%)', left: '50%', top: '40%' }}>
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
