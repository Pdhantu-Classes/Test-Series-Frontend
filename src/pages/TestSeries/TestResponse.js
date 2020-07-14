import React, { useState, useEffect } from "react";
import http from "axios";
import { Doughnut, Pie } from "react-chartjs-2";
import { getUserId } from "../../core/utility/authHeader";
import UserNavBar from "../../containers/User/UserNavBar";
import { API_ENDPOINTS } from '../../core/constants/apiConstant'

const GET_RESPONSE = API_ENDPOINTS.TEST_SERIES.GET_RESPONSE
export default function TestResponse() {
    const [questions, setQuestions] = useState([]);
    const [userResponse, setUserResponse] = useState([]);
    const [totalQuestion, setTotalQuestion] = useState(0);
    const [correct, setCorrect] = useState(0);
    const [incorrect, setIncorrect] = useState(0);
    const [attempted, setAttempted] = useState(0);
    const [notAttempted, setNotAttempted] = useState(0);
    const [totalMarks, setTotalMarks] = useState(0);
    const [accuracy, setAccuracy] = useState(0);
    const [paperTime, setPaperTime] = useState(0);
    const [mockPaperName, setMockPaperName] = useState("");
    const [mockPaperDesc, setMockPaperDesc] = useState("");
    const [loading, setLoading] = useState(true);

    function fancyTimeFormat(time) {
        var hrs = ~~(time / 3600);
        var mins = ~~((time % 3600) / 60);
        var secs = ~~time % 60;
        var ret = "";

        if (hrs > 0) {
            ret += "" + hrs + "h " + (mins < 10 ? "0" : "");
        }

        ret += "" + mins + "m " + (secs < 10 ? "0" : "");
        ret += "" + secs + "s";
        return ret;
    }
   
    

    useEffect(() => {
        setLoading(true);
        const mockPaperId = window.localStorage.getItem("mock_paper_id");
        const userId = getUserId();
        http
            .get(GET_RESPONSE, {
                headers: {
                    user_id: userId,
                    mock_paper_id: mockPaperId,
                },
            })
            .then((res) => {
                const resData = res.data;
                setLoading(false);
                setQuestions(resData.questions);
                setUserResponse(resData.user_response.responses);
                setTotalQuestion(resData.user_response.total_questions);
                setCorrect(resData.user_response.correct);
                setIncorrect(resData.user_response.incorrect);
                setAttempted(resData.user_response.attempted);
                setNotAttempted(resData.user_response.not_attempted);
                setTotalMarks(resData.user_response.total_marks);
                setAccuracy(resData.user_response.accuracy);
                setPaperTime(resData.user_response.paper_time_taken);
                setMockPaperName(resData.user_response.mock_paper_name);
                setMockPaperDesc(resData.user_response.mock_description);
                console.log(res.data);
            })
            .catch((err) => console.log(err));
    }, []);

    function decodeOption(str) {
        let result = 0;
        if (str === "a") {
            result = 0;
        } else if (str === "b") {
            result = 1;
        } else if (str === "c") {
            result = 2;
        } else if (str === "d") {
            result = 3;
        } else {
            result = 4;
        }
        return result;
    }

    if (questions && userResponse) {
        var viewResponse = questions.map((data, index) => {
            console.log(userResponse[index], questions[index].answer);

            if (userResponse[index] !== questions[index].answer) {
                // Not Attempted

                if (userResponse[index] === "") {
                    let correctOption = decodeOption(questions[index].answer);
                    console.log(correctOption, "Not Atempted");
                    return (
                        <div
                            key={index}
                            style={{ marginTop: "10px", border: "2px solid blue" }}
                            className="jumbotron"
                        >
                            <div style={{ color: "blue", fontStyle: "italic" }}>
                                Not Attempted
              </div>
                            <div>
                                <div
                                    style={{ float: "left" }}
                                    className="font-weight-bold mr-2"
                                >
                                    Q{index + 1}.
                </div>
                                <div></div>

                                {questions[index].question_english}
                                {questions[index].question_english !== "" ? <br></br> : null}
                                {questions[index].question_hindi}
                            </div>
                            {correctOption === 0 ? (
                                <div className="d-flex">
                                    <div className="mr-2">&#8226;</div>
                                    <div style={{ color: "green" }}>
                                        <div>
                                            {questions[index].options_english[0]}
                                            {questions[index].options_english[0] !== "" ? (
                                                <br></br>
                                            ) : null}

                                            {questions[index].options_hindi[0]}
                                        </div>
                                    </div>
                                    <div class="right" style={{ color: "green" }}>
                                        &#10004;
                  </div>
                                </div>
                            ) : (
                                    <div className="d-flex">
                                        <div className="mr-2">&#8226;</div>
                                        <div>
                                            <div>
                                                {questions[index].options_english[0]}
                                                {questions[index].options_english[0] !== "" ? (
                                                    <br></br>
                                                ) : null}
                                                {questions[index].options_hindi[0]}
                                            </div>
                                        </div>
                                    </div>
                                )}
                            {correctOption === 1 ? (
                                <div className="d-flex">
                                    <div className="mr-2">&#8226;</div>
                                    <div style={{ color: "green" }}>
                                        <div>
                                            {questions[index].options_english[1]}
                                            {questions[index].options_english[1] !== "" ? (
                                                <br></br>
                                            ) : null}
                                            {questions[index].options_hindi[1]}
                                        </div>
                                    </div>
                                    <div class="right" style={{ color: "green" }}>
                                        &#10004;
                  </div>
                                </div>
                            ) : (
                                    <div className="d-flex">
                                        <div className="mr-2">&#8226;</div>
                                        <div>
                                            <div>
                                                {questions[index].options_english[1]}
                                                {questions[index].options_english[1] !== "" ? (
                                                    <br></br>
                                                ) : null}
                                                {questions[index].options_hindi[1]}
                                            </div>
                                        </div>
                                    </div>
                                )}
                            {correctOption === 2 ? (
                                <div className="d-flex">
                                    <div className="mr-2">&#8226;</div>
                                    <div style={{ color: "green" }}>
                                        <div>
                                            {questions[index].options_english[2]}
                                            {questions[index].options_english[2] !== "" ? (
                                                <br></br>
                                            ) : null}
                                            {questions[index].options_hindi[2]}
                                        </div>
                                    </div>
                                    <div class="right" style={{ color: "green" }}>
                                        &#10004;
                  </div>
                                </div>
                            ) : (
                                    <div className="d-flex">
                                        <div className="mr-2">&#8226;</div>
                                        <div>
                                            <div>
                                                {questions[index].options_english[2]}
                                                {questions[index].options_english[2] !== "" ? (
                                                    <br></br>
                                                ) : null}
                                                {questions[index].options_hindi[2]}
                                            </div>
                                        </div>
                                    </div>
                                )}
                            {correctOption === 3 ? (
                                <div className="d-flex">
                                    <div className="mr-2">&#8226;</div>
                                    <div style={{ color: "green" }}>
                                        <div>
                                            {questions[index].options_english[3]}
                                            {questions[index].options_english[3] !== "" ? (
                                                <br></br>
                                            ) : null}
                                            {questions[index].options_hindi[3]}
                                        </div>
                                    </div>
                                    <div class="right" style={{ color: "green" }}>
                                        &#10004;
                  </div>
                                </div>
                            ) : (
                                    <div className="d-flex">
                                        <div className="mr-2">&#8226;</div>
                                        <div>
                                            <div>
                                                {questions[index].options_english[3]}
                                                {questions[index].options_english[3] !== "" ? (
                                                    <br></br>
                                                ) : null}
                                                {questions[index].options_hindi[3]}
                                            </div>
                                        </div>
                                    </div>
                                )}
                        </div>
                    );
                } else {
                    let indexOption = decodeOption(userResponse[index]);
                    let correctOption = decodeOption(questions[index].answer);
                    console.log(indexOption, correctOption, "Incorrect");
                    return (
                        <div
                            key={index}
                            style={{ marginTop: "10px", border: "2px solid red" }}
                            className="jumbotron"
                        >
                            <div style={{ color: "red", fontStyle: "italic" }}>Incorrect</div>
                            <div>
                                <span className="font-weight-bold  mr-2">Q{index + 1}.</span>
                                {questions[index].question_english}
                                {questions[index].question_english !== "" ? <br></br> : null}
                                {questions[index].question_hindi}
                            </div>
                            {indexOption === 0 ? (
                                <div className="d-flex">
                                    <div className="mr-2">&#8226;</div>
                                    <div style={{ color: "red" }}>
                                        <div>
                                            {questions[index].options_english[0]}
                                            {questions[index].options_english[0] !== "" ? (
                                                <br></br>
                                            ) : null}
                                            {questions[index].options_hindi[0]}
                                        </div>
                                    </div>
                                    <div class="right" style={{ color: "red" }}>
                                        &#10006;
                  </div>
                                </div>
                            ) : correctOption === 0 ? (
                                <div className="d-flex">
                                    <div className="mr-2">&#8226;</div>
                                    <div style={{ color: "green" }}>
                                        <div>
                                            {questions[index].options_english[0]}
                                            {questions[index].options_english[0] !== "" ? (
                                                <br></br>
                                            ) : null}
                                            {questions[index].options_hindi[0]}
                                        </div>
                                    </div>
                                    <div class="right" style={{ color: "green" }}>
                                        &#10004;
                  </div>
                                </div>
                            ) : (
                                        <div className="d-flex">
                                            <div className="mr-2">&#8226;</div>
                                            <div>
                                                <div>
                                                    {questions[index].options_english[0]}
                                                    {questions[index].options_english[0] !== "" ? (
                                                        <br></br>
                                                    ) : null}
                                                    {questions[index].options_hindi[0]}
                                                </div>
                                            </div>
                                        </div>
                                    )}
                            {indexOption === 1 ? (
                                <div className="d-flex">
                                    <div className="mr-2">&#8226;</div>
                                    <div style={{ color: "red" }}>
                                        <div>
                                            {questions[index].options_english[1]}
                                            {questions[index].options_english[1] !== "" ? (
                                                <br></br>
                                            ) : null}
                                            {questions[index].options_hindi[1]}
                                        </div>
                                    </div>
                                    <div class="right" style={{ color: "red" }}>
                                        &#10006;
                  </div>
                                </div>
                            ) : correctOption === 1 ? (
                                <div className="d-flex">
                                    <div className="mr-2">&#8226;</div>
                                    <div style={{ color: "green" }}>
                                        <div>
                                            {questions[index].options_english[1]}
                                            {questions[index].options_english[1] !== "" ? (
                                                <br></br>
                                            ) : null}
                                            {questions[index].options_hindi[1]}
                                        </div>
                                    </div>
                                    <div class="right" style={{ color: "green" }}>
                                        &#10004;
                  </div>
                                </div>
                            ) : (
                                        <div className="d-flex">
                                            <div className="mr-2">&#8226;</div>
                                            <div>
                                                <div>
                                                    {questions[index].options_english[1]}
                                                    {questions[index].options_english[1] !== "" ? (
                                                        <br></br>
                                                    ) : null}
                                                    {questions[index].options_hindi[1]}
                                                </div>
                                            </div>
                                        </div>
                                    )}
                            {indexOption === 2 ? (
                                <div className="d-flex">
                                    <div className="mr-2">&#8226;</div>
                                    <div style={{ color: "red" }}>
                                        <div>
                                            {questions[index].options_english[2]}
                                            {questions[index].options_english[2] !== "" ? (
                                                <br></br>
                                            ) : null}
                                            {questions[index].options_hindi[2]}
                                        </div>
                                    </div>
                                    <div class="right" style={{ red: "red" }}>
                                        &#10006;
                  </div>
                                </div>
                            ) : correctOption === 2 ? (
                                <div className="d-flex">
                                    <div className="mr-2">&#8226;</div>
                                    <div style={{ color: "green" }}>
                                        <div>
                                            {questions[index].options_english[2]}
                                            {questions[index].options_english[2] !== "" ? (
                                                <br></br>
                                            ) : null}
                                            {questions[index].options_hindi[2]}
                                        </div>
                                    </div>
                                    <div class="right" style={{ color: "green" }}>
                                        &#10004;
                  </div>
                                </div>
                            ) : (
                                        <div className="d-flex">
                                            <div className="mr-2">&#8226;</div>
                                            <div>
                                                <div>
                                                    {questions[index].options_english[2]}
                                                    {questions[index].options_english[2] !== "" ? (
                                                        <br></br>
                                                    ) : null}
                                                    {questions[index].options_hindi[2]}
                                                </div>
                                            </div>
                                        </div>
                                    )}
                            {indexOption === 3 ? (
                                <div className="d-flex">
                                    <div className="mr-2">&#8226;</div>
                                    <div style={{ color: "red" }}>
                                        <div>
                                            {questions[index].options_english[3]}
                                            {questions[index].options_english[3] !== "" ? (
                                                <br></br>
                                            ) : null}
                                            {questions[index].options_hindi[3]}
                                        </div>
                                    </div>
                                    <div class="right" style={{ color: "red" }}>
                                        &#10006;
                  </div>
                                </div>
                            ) : correctOption === 3 ? (
                                <div className="d-flex">
                                    <div className="mr-2">&#8226;</div>
                                    <div style={{ color: "green" }}>
                                        <div>
                                            {questions[index].options_english[3]}
                                            {questions[index].options_english[3] !== "" ? (
                                                <br></br>
                                            ) : null}
                                            {questions[index].options_hindi[3]}
                                        </div>
                                    </div>
                                    <div class="right" style={{ color: "green" }}>
                                        &#10004;
                  </div>
                                </div>
                            ) : (
                                        <div className="d-flex">
                                            <div className="mr-2">&#8226;</div>
                                            <div>
                                                <div>
                                                    {questions[index].options_english[3]}
                                                    {questions[index].options_english[3] !== "" ? (
                                                        <br></br>
                                                    ) : null}
                                                    {questions[index].options_hindi[3]}
                                                </div>
                                            </div>
                                        </div>
                                    )}
                        </div>
                    );
                }
            } else if (userResponse[index] === questions[index].answer) {
                let correctOption = decodeOption(userResponse[index]);
                console.log(correctOption, "Correct");
                return (
                    <div
                        key={index}
                        style={{ marginTop: "10px", border: "2px solid green" }}
                        className="jumbotron"
                    >
                        <div style={{ color: "green", fontStyle: "italic" }}>Correct</div>
                        <div>
                            <span className="font-weight-bold mr-2">Q{index + 1}.</span>{" "}
                            {questions[index].question_english}
                            {questions[index].question_english !== "" ? <br></br> : null}
                            {questions[index].question_hindi}
                        </div>
                        {correctOption === 0 ? (
                            <div className="d-flex mb-1">
                                <div className="mr-2">&#8226;</div>
                                <div style={{ color: "green" }}>
                                    <div>
                                        {questions[index].options_english[0]}
                                        {questions[index].options_english[0] !== "" ? (
                                            <br></br>
                                        ) : null}
                                        {questions[index].options_hindi[0]}
                                    </div>
                                </div>
                                <div class="right" style={{ color: "green" }}>
                                    &#10004;
                </div>
                            </div>
                        ) : (
                                <div className="d-flex mb-1">
                                    <div className="mr-2">&#8226;</div>
                                    <div>
                                        <div>
                                            {questions[index].options_english[0]}
                                            {questions[index].options_english[0] !== "" ? (
                                                <br></br>
                                            ) : null}
                                            {questions[index].options_hindi[0]}
                                        </div>
                                    </div>
                                </div>
                            )}
                        {correctOption === 1 ? (
                            <div className="d-flex mb-1">
                                <div className="mr-2">&#8226;</div>
                                <div style={{ color: "green" }}>
                                    <div>
                                        {questions[index].options_english[1]}
                                        {questions[index].options_english[1] !== "" ? (
                                            <br></br>
                                        ) : null}
                                        {questions[index].options_hindi[1]}
                                    </div>
                                </div>
                                <div class="right" style={{ color: "green" }}>
                                    &#10004;
                </div>
                            </div>
                        ) : (
                                <div className="d-flex mb-1">
                                    <div className="mr-2">&#8226;</div>
                                    <div>
                                        <div>
                                            {questions[index].options_english[1]}
                                            {questions[index].options_english[1] !== "" ? (
                                                <br></br>
                                            ) : null}
                                            {questions[index].options_hindi[1]}
                                        </div>
                                    </div>
                                </div>
                            )}
                        {correctOption === 2 ? (
                            <div className="d-flex mb-1">
                                <div className="mr-2">&#8226;</div>
                                <div style={{ color: "green" }}>
                                    <div>
                                        {questions[index].options_english[2]}
                                        {questions[index].options_english[2] !== "" ? (
                                            <br></br>
                                        ) : null}
                                        {questions[index].options_hindi[2]}
                                    </div>
                                </div>
                                <div class="right" style={{ color: "green" }}>
                                    &#10004;
                </div>
                            </div>
                        ) : (
                                <div className="d-flex mb-1">
                                    <div className="mr-2">&#8226;</div>
                                    <div>
                                        <div>
                                            {questions[index].options_english[2]}
                                            {questions[index].options_english[2] !== "" ? (
                                                <br></br>
                                            ) : null}
                                            {questions[index].options_hindi[2]}
                                        </div>
                                    </div>
                                </div>
                            )}
                        {correctOption === 3 ? (
                            <div className="d-flex mb-1">
                                <div className="mr-2">&#8226;</div>
                                <div style={{ color: "green" }}>
                                    <div>
                                        {questions[index].options_english[3]}
                                        {questions[index].options_english[3] !== "" ? (
                                            <br></br>
                                        ) : null}
                                        {questions[index].options_hindi[3]}
                                    </div>
                                </div>
                                <div class="right" style={{ color: "green" }}>
                                    &#10004;
                </div>
                            </div>
                        ) : (
                                <div className="d-flex mb-1">
                                    <div className="mr-2">&#8226;</div>
                                    <div>
                                        <div>
                                            {questions[index].options_english[3]}
                                            {questions[index].options_english[3] !== "" ? (
                                                <br></br>
                                            ) : null}
                                            {questions[index].options_hindi[3]}
                                        </div>
                                    </div>
                                </div>
                            )}
                    </div>
                );
            }
        });
    }
    console.log(userResponse);
    console.log(
        paperTime,
        mockPaperDesc,
        mockPaperName,
        totalQuestion,
        correct,
        incorrect,
        attempted,
        notAttempted,
        totalMarks,
        accuracy
    );
    var responeQuizData = {
        labels: ["Correct", "Incorrect", "Not Attempted"],
        datasets: [
            {
                data: [correct, incorrect, notAttempted],
                backgroundColor: ["#5cb85c", "#d9534f", "#0275d8"],
                borderWidth: 0,
            },
        ],
    };
    var responeAccuracyData = {
        labels: ["Accuracy", "Not Accurate"],
        datasets: [
            {
                data: [accuracy, 100 - accuracy],
                backgroundColor: ["#3090C7", "#D4A017"],
                borderWidth: 0,
            },
        ],
    };
    const result = () => (
        <div class="jumbotron">
            <h1 class="display-4">{mockPaperName}</h1>
            <div className="d-flex justify-content-between">
                <div>
                    <h1>Total Maks : {totalMarks}</h1>
                </div>
                <div>
                    <h1>Time Taken :{fancyTimeFormat(paperTime)}</h1>
                </div>
            </div>
            <hr class="my-4" />
            <div className="d-flex justify-content-between">
                <div>
                    <Doughnut
                        data={responeQuizData}
                        options={{
                            legend: {
                                display: true,
                                position: "right",
                            },
                        }}
                    />
                </div>
                <div>
                    <Pie
                        data={responeAccuracyData}
                        options={{
                            legend: {
                                display: true,
                                position: "right",
                            },
                        }}
                    />
                </div>
                <div>
                    <div>
                        <ul class="list-group">
                            <li class="list-group-item list-group-item-primary">
                                Correct : {correct}
                            </li>
                            <li class="list-group-item list-group-item-danger">
                                Incorrect : {incorrect}
                            </li>
                            <li class="list-group-item list-group-item-success">
                                Attempted :{attempted}
                            </li>
                            <li class="list-group-item list-group-item-secondary">
                                Not Attempted :{notAttempted}
                            </li>

                            <li class="list-group-item list-group-item-info">
                                Accuracy :{accuracy}
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
    return (
        <div>
            <UserNavBar />
            {!loading ? (
                <div className="container py-5">
                    {result()}
                    {viewResponse}
                </div>
            ) : (
                    <div
                        style={{
                            position: "absolute",
                            transform: "translate(-50%,-50%)",
                            top: "20%",
                            left: "50%",
                        }}
                    >
                        <div className="d-flex justify-content-center">
                            <div className="spinner-border" role="status">
                                <span className="sr-only">Loading...</span>
                            </div>
                        </div>
                    </div>
                )}
        </div>
    );
}
