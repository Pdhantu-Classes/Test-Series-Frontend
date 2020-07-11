import React, {useState, useEffect} from 'react'
import http from 'axios'

const MOCK_PAPER_ID =1
const USER_ID =2

export default function TestResponse() {
    const [ questions, setQuestions ] = useState([])
    const [ userResponse, setUserResponse ] = useState([])
    const [ totalQuestion, setTotalQuestion] = useState(0)
    const [ correct, setCorrect ] = useState(0)
    const [ incorrect, setIncorrect ] = useState(0)
    const [ attempted, setAttempted] = useState(0)
    const [ notAttempted, setNotAttempted ] = useState(0)
    const [ totalMarks, setTotalMarks ] = useState(0)
    const [ accuracy, setAccuracy ] = useState(0)
    const [ paperTime, setPaperTime ] = useState(0)
    const [ mockPaperName, setMockPaperName ] = useState('')
    const [ mockPaperDesc, setMockPaperDesc ] = useState('')
    const [ loading, setLoading ] = useState(true)

    useEffect(() => {
        setLoading(true)
        http
            .get('http://localhost:5000/getResponses',{
                headers:{
                    user_id:USER_ID,
                    mock_paper_id:MOCK_PAPER_ID
                }
            })
            .then((res)=>{
                const resData = res.data
                setLoading(false)
                setQuestions(resData.questions)
                setUserResponse(resData.user_response.responses)
                setTotalQuestion(resData.user_response.total_questions)
                setCorrect(resData.user_response.correct)
                setIncorrect(resData.user_response.incorrect)
                setAttempted(resData.user_response.attempted)
                setNotAttempted(resData.user_response.not_attempted)
                setTotalMarks(resData.user_response.total_marks)
                setAccuracy(resData.user_response.accuracy)
                setPaperTime(resData.user_response.paper_time_taken)
                setMockPaperName(resData.user_response.mock_paper_name)
                setMockPaperDesc(resData.user_response.mock_description)
                console.log(res.data)

            })
            .catch(err=>console.log(err))
    }, [])


    function decodeOption(str){
        let result = 0
        if(str === 'a' ){
            result = 0
        }
        else if(str === 'b'){
            result = 1
        }
        else if(str === 'c'){
            result = 2
        }
        else if(str === 'd') {
            result = 3
        }
        else{
            result = 4
        }
        return result
    }

    if(questions && userResponse){
        var viewResponse = questions.map((data,index)=>{
            console.log(userResponse[index],questions[index].answer)

            if(userResponse[index] !== questions[index].answer){

                // Not Attempted

                if(userResponse[index] === ""){
                    let correctOption = decodeOption(questions[index].answer)         
                    console.log( correctOption, "Not Atempted")
                    return(
                        <div key={index} style={{marginTop:"10px"}}>
                            <div style={{color:'blue', fontStyle:'italic'}}>Not Attempted</div>
                            <div className="quiz-question">
                                Q{index+1}. {questions[index].question_english}<br></br>
                                            {questions[index].question_hindi}
                            </div>
                {
                    correctOption === 0?
                        <div>
                            <div className="quiz-correct-option" style={{color:'green'}}>
                                <div className="quiz-options-text-v1-correct">
                                        {questions[index].options_english[0]}<br></br>
                                        {questions[index].options_hindi[0]}   
                                </div>
                            </div>
                        </div>
                        :
                        <div>
                            <div className="quiz-option">
                            <div className="quiz-options-text-v1">
                                        {questions[index].options_english[0]}<br></br>
                                        {questions[index].options_hindi[0]} 
                                </div>
                            </div>
                        </div>
                }
                {
                    correctOption === 1?
                        <div>
                            <div className="quiz-correct-option" style={{color:'green'}}>
                                <div className="quiz-options-text-v1-correct">
                                        {questions[index].options_english[1]}<br></br>
                                        {questions[index].options_hindi[1]} 
                                </div>
                            </div>
                        </div>
                        :
                        <div>
                            <div className="quiz-option">
                            <div className="quiz-options-text-v1">
                                        {questions[index].options_english[1]}<br></br>
                                        {questions[index].options_hindi[1]} 
                                </div>
                            </div>
                        </div>

                }
                {
                    correctOption === 2?
                        <div>
                            <div className="quiz-correct-option" style={{color:'green'}}>
                                <div className="quiz-options-text-v1-correct">
                                        {questions[index].options_english[2]}<br></br>
                                        {questions[index].options_hindi[2]} 
                                </div>
                            </div>
                        </div>
                        :
                        <div>
                            <div className="quiz-option">
                            <div className="quiz-options-text-v1">
                                        {questions[index].options_english[2]}<br></br>
                                        {questions[index].options_hindi[2]} 
                                </div>
                            </div>
                        </div>

                }
                {
                    correctOption === 3?
                        <div>
                            <div className="quiz-correct-option" style={{color:'green'}}>
                                <div className="quiz-options-text-v1-correct">
                                         {questions[index].options_english[3]}<br></br>
                                        {questions[index].options_hindi[3]} 
                                </div>
                            </div>
                        </div>
                        :
                        <div>
                            <div className="quiz-option">
                                <div className="quiz-options-text-v1">
                                        {questions[index].options_english[3]}<br></br>
                                        {questions[index].options_hindi[3]} 
                                </div>
                            </div>
                        </div>

                }
                {
                    correctOption === 4?
                        <div>
                            <div className="quiz-correct-option" style={{color:'green'}}>
                                <div className="quiz-options-text-v1-correct">
                                         {questions[index].options_english[4]}<br></br>
                                        {questions[index].options_hindi[4]} 
                                </div>
                            </div>
                        </div>
                        :
                        <div>
                            <div className="quiz-option">
                                <div className="quiz-options-text-v1">
                                        {questions[index].options_english[4]}<br></br>
                                        {questions[index].options_hindi[4]} 
                                </div>
                            </div>
                        </div>

                }
            </div>
            )
                }
                else{
                    let indexOption = decodeOption(userResponse[index])
                    let correctOption = decodeOption(questions[index].answer)
                    console.log(indexOption, correctOption, "Incorrect")
                    return(
                        <div key={index} style={{marginTop:"10px"}}>
                             <div style={{color:'red', fontStyle:'italic'}}>Incorrect</div>
                             <div className="quiz-question">Q{index+1}. 
                             {questions[index].question_english}<br></br>
                            {questions[index].question_hindi}</div>
                            {
                                indexOption === 0?
                                    <div>
                                        <div className="quiz-incorrect-option" style={{color:'red'}}>
                                            <div className="quiz-options-text-v1-correct">
                                                    {questions[index].options_english[0]}<br></br>
                                                    {questions[index].options_hindi[0]}
                                            </div>
                                        </div>
                                    </div>
                                    :
                                    correctOption === 0?
                                        <div>
                                            <div className="quiz-correct-option" style={{color:'green'}}>
                                                <div className="quiz-options-text-v1-correct">
                                                        {questions[index].options_english[0]}<br></br>
                                                        {questions[index].options_hindi[0]}
                                                </div>
                                            </div>
                                        </div>
                                        :
                                        <div>
                                            <div className="quiz-option">
                                            <div className="quiz-options-text-v1">
                                                        {questions[index].options_english[0]}<br></br>
                                                        {questions[index].options_hindi[0]}
                                                </div>
                                            </div>
                                        </div>
                            }
                            {
                                indexOption === 1?
                                    <div>
                                        <div className="quiz-incorrect-option" style={{color:'red'}}>
                                            <div className="quiz-options-text-v1-correct">
                                                    {questions[index].options_english[1]}<br></br>
                                                    {questions[index].options_hindi[1]}
                                            </div>
                                        </div>
                                    </div>
                                    :
                                    correctOption === 1?
                                        <div>
                                            <div className="quiz-correct-option" style={{color:'green'}}>
                                                <div className="quiz-options-text-v1-correct">
                                                        {questions[index].options_english[1]}<br></br>
                                                        {questions[index].options_hindi[1]}
                                                </div>
                                            </div>
                                        </div>
                                        :
                                        <div>
                                            <div className="quiz-option">
                                                <div className="quiz-options-text-v1">
                                                        {questions[index].options_english[1]}<br></br>
                                                        {questions[index].options_hindi[1]}
                                                </div>
                                            </div>
                                        </div>
                            }
                            {
                                indexOption === 2?
                                    <div>
                                        <div className="quiz-incorrect-option" style={{color:'red'}}>
                                            <div className="quiz-options-text-v1-correct">
                                                    questions[index].options_english[2]}<br></br>
                                                    {questions[index].options_hindi[2]}
                                            </div>
                                        </div>
                                    </div>
                                    :
                                    correctOption === 2?
                                        <div>
                                            <div className="quiz-correct-option" style={{color:'green'}}>
                                                <div className="quiz-options-text-v1-correct">
                                                        questions[index].options_english[2]}<br></br>
                                                        {questions[index].options_hindi[2]}
                                                </div>
                                            </div>
                                        </div>
                                        :
                                        <div>
                                            <div className="quiz-option">
                                                <div className="quiz-options-text-v1">
                                                        questions[index].options_english[2]}<br></br>
                                                        {questions[index].options_hindi[2]}
                                                </div>
                                            </div>
                                        </div>
                            }
                            {
                                indexOption === 3?
                                    <div>
                                        <div className="quiz-incorrect-option" style={{color:'red'}}>
                                            <div className="quiz-options-text-v1-correct">
                                                    {questions[index].options_english[3]}<br></br>
                                                    {questions[index].options_hindi[3]}
                                            </div>
                                        </div>
                                    </div>
                                    :
                                    correctOption === 3?
                                        <div>
                                            <div className="quiz-correct-option" style={{color:'green'}}>
                                                <div className="quiz-options-text-v1-correct">
                                                        {questions[index].options_english[3]}<br></br>
                                                        {questions[index].options_hindi[3]}
                                                </div>
                                            </div>
                                        </div>
                                        :
                                        <div>
                                            <div className="quiz-option">
                                                <div className="quiz-options-text-v1">
                                                        {questions[index].options_english[3]}<br></br>
                                                        {questions[index].options_hindi[3]}
                                                </div>
                                            </div>
                                        </div>
                            }
                            {
                                indexOption === 4?
                                    <div>
                                        <div className="quiz-incorrect-option" style={{color:'red'}}>
                                            <div className="quiz-options-text-v1-correct">
                                                    {questions[index].options_english[4]}<br></br>
                                                    {questions[index].options_hindi[4]}
                                            </div>
                                        </div>
                                    </div>
                                    :
                                    correctOption === 4?
                                        <div>
                                            <div className="quiz-correct-option" style={{color:'green'}}>
                                                <div className="quiz-options-text-v1-correct">
                                                        {questions[index].options_english[4]}<br></br>
                                                        {questions[index].options_hindi[4]}
                                                </div>
                                            </div>
                                        </div>
                                        :
                                        <div>
                                            <div className="quiz-option">
                                                <div className="quiz-options-text-v1">
                                                        {questions[index].options_english[4]}<br></br>
                                                        {questions[index].options_hindi[4]}
                                                </div>
                                            </div>
                                        </div>
                            }
                        </div>
                    )
                }

            }
            else if(userResponse[index] === questions[index].answer){
                let correctOption = decodeOption(userResponse[index])
                console.log(correctOption,"Correct")
                return(
                    <div key={index} style={{marginTop:"10px"}}>
                         <div style={{color:'green', fontStyle:'italic'}}>Correct</div>
                        <div className="quiz-question">
                            Q{index+1}. {questions[index].question_english}<br></br>
                                        {questions[index].question_hindi}
                        </div>
            {
                correctOption === 0?
                    <div>
                        <div className="quiz-correct-option" style={{color:'green'}}>
                            <div className="quiz-options-text-v1-correct">
                                    {questions[index].options_english[0]}<br></br>
                                    {questions[index].options_hindi[0]}   
                            </div>
                        </div>
                    </div>
                    :
                    <div>
                        <div className="quiz-option">
                        <div className="quiz-options-text-v1">
                                    {questions[index].options_english[0]}<br></br>
                                    {questions[index].options_hindi[0]} 
                            </div>
                        </div>
                    </div>
            }
            {
                correctOption === 1?
                    <div>
                        <div className="quiz-correct-option" style={{color:'green'}}>
                            <div className="quiz-options-text-v1-correct">
                                    {questions[index].options_english[1]}<br></br>
                                    {questions[index].options_hindi[1]} 
                            </div>
                        </div>
                    </div>
                    :
                    <div>
                        <div className="quiz-option">
                        <div className="quiz-options-text-v1">
                                    {questions[index].options_english[1]}<br></br>
                                    {questions[index].options_hindi[1]} 
                            </div>
                        </div>
                    </div>

            }
            {
                correctOption === 2?
                    <div>
                        <div className="quiz-correct-option" style={{color:'green'}}>
                            <div className="quiz-options-text-v1-correct">
                                    {questions[index].options_english[2]}<br></br>
                                    {questions[index].options_hindi[2]} 
                            </div>
                        </div>
                    </div>
                    :
                    <div>
                        <div className="quiz-option">
                        <div className="quiz-options-text-v1">
                                    {questions[index].options_english[2]}<br></br>
                                    {questions[index].options_hindi[2]} 
                            </div>
                        </div>
                    </div>

            }
            {
                correctOption === 3?
                    <div>
                        <div className="quiz-correct-option" style={{color:'green'}}>
                            <div className="quiz-options-text-v1-correct">
                                     {questions[index].options_english[3]}<br></br>
                                    {questions[index].options_hindi[3]} 
                            </div>
                        </div>
                    </div>
                    :
                    <div>
                        <div className="quiz-option">
                            <div className="quiz-options-text-v1">
                                    {questions[index].options_english[3]}<br></br>
                                    {questions[index].options_hindi[3]} 
                            </div>
                        </div>
                    </div>

            }
            {
                correctOption === 4?
                    <div>
                        <div className="quiz-correct-option" style={{color:'green'}}>
                            <div className="quiz-options-text-v1-correct">
                                     {questions[index].options_english[4]}<br></br>
                                    {questions[index].options_hindi[4]} 
                            </div>
                        </div>
                    </div>
                    :
                    <div>
                        <div className="quiz-option">
                            <div className="quiz-options-text-v1">
                                    {questions[index].options_english[4]}<br></br>
                                    {questions[index].options_hindi[4]} 
                            </div>
                        </div>
                    </div>

            }
        </div>
        )
            }
    })
}
console.log(userResponse)
    return (
        <div>
            {
                !loading ? 
                    <div>
                        {viewResponse}
                    </div>
                :
                <div style={{position:'absolute',transform:'translate(-50%,-50%)', top:'20%', left:'50%'}}>
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
