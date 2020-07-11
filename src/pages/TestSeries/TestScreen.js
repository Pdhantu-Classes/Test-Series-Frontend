import React, {useState, useEffect} from 'react'
import http from 'axios'
import '../../css/TestScreen.css'


export default function TestScreen() {
    const [ activeQuestionIndex, setActiveQuestionIndex ] = useState(0)
    const [ activeOptionIndex, setActiveOptionIndex ] = useState()
    const [ responses, setResponses ] = useState({})
    const [ questions, setQuestions ] = useState([])


    useEffect(() => {
        http
        .get("http://localhost:5000/getQuestions/1")
        .then(res=>{
            setQuestions(res.data.questions)
        })
        .catch(err=>console.log(err))

    },[])

    useEffect(() => {
        for(var i = 0; i < questions.length; i++){
            if(i !== activeQuestionIndex){
                if(responses[i] !== undefined){
                    document.getElementById(i.toString()).style.background = "#06AD49";
                    document.getElementById(i.toString()).style.color = "white";
                    document.getElementById(i.toString()).style.borderColor = "white";
                }
                else{
                    document.getElementById(i.toString()).style.background = "gray";
                    document.getElementById(i.toString()).style.color = "white";
                }
            }
            else{
                document.getElementById(i.toString()).style.background = "#FF4975";
                document.getElementById(i.toString()).style.color = "white";
            }

        }
    }, [activeQuestionIndex,responses,questions.length])


    function encodeOption(index){
        let result = ''
        if(index === 0 ){
            result = 'a'
        }
        else if(index === 1){
            result = 'b'
        }
        else if(index === 2){
            result = 'c'
        }
        else if(index === 3){
            result = 'd'
        }
        else{
            result = 'e'
        }
        return result
    }

    function changeOption(option, index) {
        if (responses[activeQuestionIndex]) {
            if (activeOptionIndex !== index) {
                responses[activeQuestionIndex] = option
                setResponses(responses)
                setActiveOptionIndex(index)
            }
            else {
                setActiveOptionIndex(null)
                delete responses[activeQuestionIndex]
                setResponses(responses)
            }
        }
        else {
            responses[activeQuestionIndex] = option
            setResponses(responses)
            setActiveOptionIndex(index)
        }
    }
    
    
    function prevClick() {
        if (activeQuestionIndex - 1 >= 0) {
            let incomingQuestionIndex = activeQuestionIndex - 1
            if (responses[incomingQuestionIndex]) {
                let incomingQuestion = questions[activeQuestionIndex - 1]
                let selectedOption = responses[incomingQuestionIndex]
                if (incomingQuestion.options_english.indexOf(selectedOption) !== -1) {
                    setActiveOptionIndex(incomingQuestion.options_english.indexOf(selectedOption))
                } else {
                    setActiveOptionIndex(null)
                }
            } else {
                setActiveOptionIndex(null)
            }
            setActiveQuestionIndex(activeQuestionIndex - 1)
        }
    
    }
    function nextClick() {
        if (activeQuestionIndex + 1 < questions.length) {
            let incomingQuestionIndex = activeQuestionIndex + 1
            if (responses[incomingQuestionIndex]) {
                let incomingQuestion = questions[activeQuestionIndex + 1]
                let selectedOption = responses[incomingQuestionIndex]
                if (incomingQuestion.options_english.indexOf(selectedOption) !== -1) {
                    setActiveOptionIndex(incomingQuestion.options_english.indexOf(selectedOption))
                } else {
                    setActiveOptionIndex(null)
                }
            } else {
                setActiveOptionIndex(null)
            }
            setActiveQuestionIndex(activeQuestionIndex + 1)
        }
    }
    
    function handleClick(index) {
        if (activeQuestionIndex < index || activeQuestionIndex > index) {
            let incomingQuestionIndex = index
            if (responses[incomingQuestionIndex]) {
            let incomingQuestion = questions[index]
                let selectedOption = responses[incomingQuestionIndex]
                if (incomingQuestion.options_english.indexOf(selectedOption) !== -1) {
                    setActiveOptionIndex(incomingQuestion.options_english.indexOf(selectedOption))
                } else {
                    setActiveOptionIndex(null)
                }
            } else {
                setActiveOptionIndex(null)
            }
            setActiveQuestionIndex(activeQuestionIndex + 1)
            setActiveQuestionIndex(index)
        }
    }

    function submitQuiz(){
        let arr = []
        for(var i = 0; i< questions.length; i++ ){
            if(responses[i] !== undefined) {
                let res = encodeOption(questions[i].options_english.indexOf(responses[i]))
                arr.push(res)
            }
            else{
                arr.push(null)
            }
        }
        let body = {
            responses:arr.join(','),
            mock_paper_id: 1,
            user_id: 2,
            paper_time: 4300
        }
        http
            .post("http://localhost:5000/postResponse", body)
            .then((res)=>{console.log(res.data)})
            .catch(err=>console.log(err))
        console.log("response")
    }


    var nextButton = () => {
        if (activeQuestionIndex + 1 === questions.length) {
                return (
                    <div className="next-button-quiz" onClick={submitQuiz}>
                        <div className="next-text-quiz">
                            Submit
                        </div>
                    </div>
                );
            
        } else {
            return (
                <div className="next-button-quiz" onClick={nextClick}>
                    <div className="next-text-quiz">
                        Next
                        </div>
                </div>
            );
        }
    };


    var prevButton = () => {
        if (activeQuestionIndex > 0) {
                return (
                    <div className="prev-button-quiz" onClick={prevClick}>
                        <div className="prev-text-quiz">
                            Prev
                        </div>
                    </div>
                );
        }
    };
    
    if (questions.length > 0) {

        var buttons = questions.map((question, index) => {
            return ( <button id={index.toString()} className="btn btn-secondary btn-sm testBtn" onClick={() => { handleClick(index) }}>{index+1}</button>
            )
        })

        var showQuestion = <div>
            <div className="mt-1">
                <div className=" ml-1 font-weight-bold">
                    Q{activeQuestionIndex + 1}.
                </div>
                {
                    questions[activeQuestionIndex].question_english !== "" ?
                        <div className="ml-5" style={{  marginTop:'-25px'}}>
                        {questions[activeQuestionIndex].question_english}
                        <br></br>
                        {questions[activeQuestionIndex].question_hindi}
                    </div>
                    :
                    <div className="ml-5" style={{  marginTop:'-25px'}}>
                        {questions[activeQuestionIndex].question_hindi}
                    <br></br>
                </div>
                }

            </div>
        </div>
    
        var showOptions = questions[activeQuestionIndex].options_english.map((option, index) => {
            if (activeOptionIndex === index) {
                return (
                    <div key={index} onClick={() => changeOption(option, index)}>
                        <div className="ml-3 mt-5">
                        <div style={{width:'20px', height:'20px', border:'1px solid black', borderRadius:'50%', boxShadow:'1px 1px gray'}}>
                            <div style={{width:'10px', height:'10px', border:'1px solid black', borderRadius:'50%', marginTop:'4px', marginLeft:'4px', background:'black'}}></div>
                        </div>
                        </div>
                        <div className="ml-5 " style={{ marginTop:'-30px'}}>
                            {option}
                            <br></br>
                            {questions[activeQuestionIndex].options_hindi[index]}
                        </div>
                    </div>
                    )
                }
            else {
                return (
                    <div key={index} onClick={() => changeOption(option, index)}>
                        <div  className="ml-3 mt-5">
                            <div style={{width:'20px', height:'20px', border:'2px solid black', borderRadius:'50%', background:'white'}}></div>
                        </div>
                        <div className="ml-5 " style={{ marginTop:'-30px'}}>
                            {option}
                            <br></br>
                            {questions[activeQuestionIndex].options_hindi[index]}
                        </div>
                    </div>
                )
            }
    
        })
    }
    
    return (
        <div className="container-fluid border ">
            <div className="row">
                <div className="col-8 question-root border border-primary ml-5">
                        <div>
                            {showQuestion}
                        </div>
                        <div>
                            {showOptions}
                        </div>
                        <div style={{ paddingBottom: '20px' }}>
                            <div>
                                {prevButton()}
                            </div>
                            <div>
                                {nextButton()}
                            </div>
                        </div>
                </div>
                <div className="question-panel col-4 col-sm-2 col-xs-2 mt-2 border border-danger ml-2">
                    <div className="grow mr-2">
                        {buttons}
                    </div>
                </div>
            </div>    
        </div>
    )
}
