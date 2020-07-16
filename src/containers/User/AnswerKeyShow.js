import React, { useEffect, useState } from 'react'
import '../../css/Pdf.css'
export default function AnswerKeyShow() {
    const [ pdfName, setPdfName ] = useState('')
    const [ loading, setLoading ] = useState(true)

    useEffect (()=>{
        let prefixPdf = "https://pdhantu-classes.s3.us-east-2.amazonaws.com/answer_key_pdf/"
        let suffixPdf = ".pdf#toolbar=0&navpanes=0&scrollbar=0"
        setLoading(true)
        let data = window.localStorage.getItem('answer_key')
        if(data){
            setPdfName(prefixPdf+data+suffixPdf)
            setLoading(false)
        }
       },[])
    return (
        <div>
             {
                !loading?
                <div class='issuu-embed-container'>

                <iframe src={pdfName} frameborder='0' allowfullscreen></iframe>

                </div>
                :<div>Loading...</div>
            }
        </div>
    )
}
