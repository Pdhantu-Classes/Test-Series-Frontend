import React, { useEffect, useState } from 'react'
import '../../css/Pdf.css'
import {API_ENDPOINTS} from '../../core/constants/apiConstant'
import Axios from 'axios'

const  GET_ANSWER_KEY_PDF =API_ENDPOINTS.TEST_SERIES.GET_ANSWER_KEY_PDF
export default function AnswerKeyShow() {
    const [ pdfImages, setPdfImages ] = useState([])
    const [ loading, setLoading ] = useState(false)
  
    useEffect (()=>{
        setLoading(true)
        let data = window.localStorage.getItem('mock_paper_id')
        Axios.get(GET_ANSWER_KEY_PDF,{
            headers:{
                mock_paper_id:data
            }
        }).then((res)=>{
            console.log(res)
            setLoading(false)
            setPdfImages(res.data)
        })
       
       },[])
    return (
        <div>
             { !loading ?
                pdfImages.length >0 ?
                
                <div>
                {pdfImages.map((img)=><div className="border"><img src=  {img.answer_image_url} class=" img-fluid rounded mx-auto d-block w-75"  alt={"Answer image" +img.id} /></div>)}
                </div>
                :<div>Coming Soon..</div>
                : <div style={{ position: 'absolute', transform: 'translate(-50%,-50%)', top: '20%', left: '50%' }}>
                <div className="d-flex justify-content-center">
                  <div className="spinner-border" role="status">
                    <span className="sr-only">Loading...</span>
                  </div>
                </div>
              </div>
            }
        </div>
    )
}
