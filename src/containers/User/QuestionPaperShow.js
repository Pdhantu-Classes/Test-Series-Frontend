import React, { useEffect, useState } from 'react'
import '../../css/Pdf.css'
import {API_ENDPOINTS} from '../../core/constants/apiConstant'
import Axios from 'axios'

const  GET_QUESTION_PAPER_PDF =API_ENDPOINTS.TEST_SERIES.GET_QUESTION_PAPER_PDF
export default function QuestionPaperShow() {
    const [ pdfImages, setPdfImages ] = useState([])
    const [ loading, setLoading ] = useState(false)
  
    useEffect (()=>{
        setLoading(true)
        let data = window.localStorage.getItem('mock_paper_id')
        Axios.get(GET_QUESTION_PAPER_PDF,{
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
                {pdfImages.map((img)=><div key={img.id} className="border"><img src=  {img.question_image_url} class=" img-fluid rounded mx-auto d-block" alt={"Question image" +img.id} /></div>)}
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
