import React, { useEffect, useState } from 'react'
import '../../css/Pdf.css'


// console.log(innerWidth)

export default function QuestionPaperShow() {
    const [ pdfName, setPdfName ] = useState('')
    const [ loading, setLoading ] = useState(true)

    useEffect (()=>{
        let prefixPdf = "https://pdhantu-classes.s3.us-east-2.amazonaws.com/question_paper_pdf/"
        let suffixPdf = ".pdf#toolbar=0&navpanes=0&scrollbar=0"
        setLoading(true)
        let data = window.localStorage.getItem('question_paper')
        if(data){
            setPdfName(prefixPdf+data+suffixPdf)
            setLoading(false)
        }
       },[])
    return (
        <div>
            {
                !loading?
                // <div className="offset-2" style={{marginTop:'-50px'}}>
                //     <embed src={pdfName} width="300px" height="800" className="responsive"></embed></div>
                <div class='issuu-embed-container'>

                <iframe src={pdfName} frameborder='0' allowfullscreen></iframe>

                </div>
                :<div>Loading...</div>
            }
        </div>
    )
}
