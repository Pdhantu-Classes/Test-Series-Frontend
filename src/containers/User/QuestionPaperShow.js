import React, { useEffect, useState } from 'react'


// let innerWidth = window.innerWidth
// var width;
// if(innerWidth >=320){
//     width = 270
// }
// if(innerWidth >=360){
//     width = 280
// }
// if(innerWidth >=410){
//     width = 300
// }
// if(innerWidth >=768){
//     width = 550
// }
// if(innerWidth >=1024){
//     width = 800
// }
// if(innerWidth >=1500){
//     width = 1000
// }
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
                <div className="offset-2" style={{marginTop:'-50px'}}>
                    <embed src={pdfName} width="300px" height="800" className="responsive"></embed></div>
                :<div>Loading...</div>
            }
        </div>
    )
}
