import React, { useEffect, useState } from 'react'

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
                <div className="offset-2" style={{marginTop:'-50px'}}>
                    <embed src={pdfName} width="1000" height="700"></embed></div>
                :<div>Loading...</div>
            }
        </div>
    )
}
