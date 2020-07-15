import React, { useState, useEffect } from "react";
import http from "axios";
import Modal from "react-bootstrap/Modal";
import { useAlert, types } from 'react-alert'
import "../../css/TestScreen.css";
import { getUserId } from "../../core/utility/authHeader";
import { API_ENDPOINTS } from "../../core/constants/apiConstant";
import { useHistory } from "react-router-dom";

const GET_MOCK_QUESTIONS = API_ENDPOINTS.TEST_SERIES.GET_MOCK_QUESTIONS;
const GET_MOCK_TIME = API_ENDPOINTS.TEST_SERIES.GET_MOCK_TIME;
const POST_RESPONSE = API_ENDPOINTS.TEST_SERIES.POST_RESPONSE;

var minutes = 0;
var second = 0;
var hours = 0;
var intervalId = 0;

export default function TestScreen(props) {
  const history = useHistory();
  const alert = useAlert()

  const [activeQuestionIndex, setActiveQuestionIndex] = useState(0);
  const [activeOptionIndex, setActiveOptionIndex] = useState();
  const [responses, setResponses] = useState({});
  const [questions, setQuestions] = useState([]);
  const [userId, setUserId] = useState(null);
  const [mockPaperId, setMockPaperId] = useState(null);
  const [mockPaperTime, setMockPaperTime] = useState(null);
  const [loading, setLoading] = useState(true);
  const [timeLeft, setTimeLeft] = useState(null);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
  useEffect(() => {
    window.history.pushState(null, document.title, window.location.href);
    window.addEventListener('popstate', function (event) {
      window.history.pushState(null, document.title, window.location.href);
    });
  }, [])

  useEffect(() => {
    if (!timeLeft) return;
    intervalId = setInterval(() => {
      setTimeLeft(timeLeft - 1);
    }, 1000);

    return () => {
      clearInterval(intervalId);
      if (timeLeft === 10) {
       alert.show('You have only 5 minutes Left!', { type: types.ERROR })
       document.getElementById("timerId").style.color = "red"
      }
      hours = Math.floor(timeLeft / (60 * 60));

      let divisor_for_minutes = timeLeft % (60 * 60);
      minutes = Math.floor(divisor_for_minutes / 60);

      let divisor_for_seconds = divisor_for_minutes % 60;
      second = Math.ceil(divisor_for_seconds) - 2;
    };
  }, [timeLeft,alert]);

  useEffect(() => {
    setLoading(true);
    const MOCK_PAPER_ID = window.localStorage.getItem("mock_paper_id");
    setMockPaperId(MOCK_PAPER_ID);
    setUserId(getUserId());

    http
      .get(GET_MOCK_QUESTIONS.replace("<MOCK_ID>", MOCK_PAPER_ID))
      .then((res) => {
        setQuestions(res.data.questions);
      })
      .catch((err) => console.log(err));

    http
      .get(GET_MOCK_TIME, {
        headers: {
          mock_paper_id: MOCK_PAPER_ID,
        },
      })
      .then((res) => {
        let timeNxt = Number(res.data.paper_time) + 2;
        setMockPaperTime(timeNxt);
        setTimeLeft(timeNxt);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);


  useEffect(() => {
    if(questions && questions.length>0){
    for (var i = 0; i < questions.length; i++) {
      if(document.getElementById(i.toString())){
      if (i !== activeQuestionIndex) {
        if (responses[i] !== undefined) {
          document.getElementById(i.toString()).style.background = "#06AD49";
          document.getElementById(i.toString()).style.color = "white";
          document.getElementById(i.toString()).style.borderColor = "white";
        } else {
          document.getElementById(i.toString()).style.background = "gray";
          document.getElementById(i.toString()).style.color = "white";
        }
      } else {
        document.getElementById(i.toString()).style.background = "#FF4975";
        document.getElementById(i.toString()).style.color = "white";
      }
    }
  }
  }
  }, [activeQuestionIndex, responses, questions]);


  useEffect (()=>{
    if(timeLeft-1===0){
        submitResponse()
    }
}, [timeLeft])


  function encodeOption(index) {
    let result = "";
    if (index === 0) {
      result = "a";
    } else if (index === 1) {
      result = "b";
    } else if (index === 2) {
      result = "c";
    } else if (index === 3) {
      result = "d";
    } else {
      result = "e";
    }
    return result;
  }
  
  console.log(mockPaperTime);

  function changeOption(option, index) {
    if (responses[activeQuestionIndex]) {
      if (activeOptionIndex !== index) {
        responses[activeQuestionIndex] = option;
        setResponses(responses);
        setActiveOptionIndex(index);
      } else {
        setActiveOptionIndex(null);
        delete responses[activeQuestionIndex];
        setResponses(responses);
      }
    } else {
      responses[activeQuestionIndex] = option;
      setResponses(responses);
      setActiveOptionIndex(index);
    }
  }

  function prevClick() {
    if (activeQuestionIndex - 1 >= 0) {
      let incomingQuestionIndex = activeQuestionIndex - 1;
      if (responses[incomingQuestionIndex]) {
        let incomingQuestion = questions[activeQuestionIndex - 1];
        let selectedOption = responses[incomingQuestionIndex];
        if (incomingQuestion.options_english.indexOf(selectedOption) !== -1) {
          setActiveOptionIndex(
            incomingQuestion.options_english.indexOf(selectedOption)
          );
        } else {
          setActiveOptionIndex(null);
        }
      } else {
        setActiveOptionIndex(null);
      }
      setActiveQuestionIndex(activeQuestionIndex - 1);
    }
  }


  function nextClick() {
    if (activeQuestionIndex + 1 < questions.length) {
      let incomingQuestionIndex = activeQuestionIndex + 1;
      if (responses[incomingQuestionIndex]) {
        let incomingQuestion = questions[activeQuestionIndex + 1];
        let selectedOption = responses[incomingQuestionIndex];
        if (incomingQuestion.options_english.indexOf(selectedOption) !== -1) {
          setActiveOptionIndex(
            incomingQuestion.options_english.indexOf(selectedOption)
          );
        } else {
          setActiveOptionIndex(null);
        }
      } else {
        setActiveOptionIndex(null);
      }
      setActiveQuestionIndex(activeQuestionIndex + 1);
    }
  }


  function handleClick(index) {
    if (activeQuestionIndex < index || activeQuestionIndex > index) {
      let incomingQuestionIndex = index;
      if (responses[incomingQuestionIndex]) {
        let incomingQuestion = questions[index];
        let selectedOption = responses[incomingQuestionIndex];
        if (incomingQuestion.options_english.indexOf(selectedOption) !== -1) {
          setActiveOptionIndex(
            incomingQuestion.options_english.indexOf(selectedOption)
          );
        } else {
          setActiveOptionIndex(null);
        }
      } else {
        setActiveOptionIndex(null);
      }
      setActiveQuestionIndex(activeQuestionIndex + 1);
      setActiveQuestionIndex(index);
    }
  }


  function submitResponse() {
    console.log("--------", mockPaperTime, timeLeft);
    setLoading(true)
    setShow(false)
    let arr = [];
    for (var i = 0; i < questions.length; i++) {
      if (responses[i] !== undefined) {
        let res = encodeOption(
          questions[i].options_english.indexOf(responses[i])
        );
        arr.push(res);
      } else {
        arr.push(null);
      }
    }
    let body = {
      responses: arr.join(","),
      mock_paper_id: mockPaperId,
      user_id: userId,
      paper_time_taken: mockPaperTime - timeLeft-1,
    };
    http
      .post(POST_RESPONSE, body)
      .then((res) => {
        setTimeout(()=>{
          setLoading(false)
      },1000)      
        clearInterval(intervalId);
        alert.show('Your Response has Submitted', { type: types.SUCCESS })
        setTimeout(()=>{
          history.push('/user/submitResponse')
        },1000)
       
    
      })
      .catch((err) => console.log(err));
  }


  var nextButton = () => {
    if (activeQuestionIndex + 1 === questions.length) {
      return (
        <button className="btn btn-secondary btn-lg" disabled>
          Next
        </button>
      );
    } else {
      return (
        <button className="btn btn-secondary btn-lg" onClick={nextClick}>
          Next
        </button>
      );
    }
  };

  var prevButton = () => {
    if (activeQuestionIndex > 0) {
      return (
        <div className="btn btn-primary btn-lg" onClick={prevClick}>
          Prev
        </div>
      );
    } else {
      return (
        <div className="btn btn-primary btn-lg" disabled>
          Prev
        </div>
      );
    }
  };


  if (questions.length > 0) {
    var buttons = questions.map((question, index) => {
      return (
        <button
          id={index.toString()}
          className="btn btn-secondary btn-sm testBtn shadow"
          onClick={() => {
            handleClick(index);
          }}
        >
          {index + 1}
        </button>
      );
    });

    var showQuestion = (
      <div>
        <div className="mt-1">
          <div className=" ml-1 font-weight-bold">
            Q{activeQuestionIndex + 1}.
          </div>
          {questions[activeQuestionIndex].question_english !== "" ? (
            <div className="ml-5" style={{ marginTop: "-25px" }}>
              <span className="font-weight-bold">
                {questions[activeQuestionIndex].question_english}
              </span>
              <br></br>
              <span className="font-weight-bold">
                {questions[activeQuestionIndex].question_hindi}
              </span>
            </div>
          ) : (
            <div className="ml-5" style={{ marginTop: "-25px" }}>
              <span className="font-weight-bold">
                {questions[activeQuestionIndex].question_hindi}
              </span>
              <br></br>
            </div>
          )}
        </div>
      </div>
    );

    var showOptions = questions[activeQuestionIndex].options_english.map(
      (option, index) => {
        if (activeOptionIndex === index) {
          return (
            <div key={index} onClick={() => changeOption(option, index)}>
              <div className="ml-3 mt-5">
                <div
                  style={{
                    width: "20px",
                    height: "20px",
                    border: "1px solid black",
                    borderRadius: "50%",
                    boxShadow: "1px 1px gray",
                  }}
                >
                  <div
                    style={{
                      width: "10px",
                      height: "10px",
                      border: "1px solid black",
                      borderRadius: "50%",
                      marginTop: "4px",
                      marginLeft: "4px",
                      background: "black",
                    }}
                  ></div>
                </div>
              </div>
              <div className="ml-5 " style={{ marginTop: "-20px" }}>
                {option}
                {option !== "" ? <br></br> : null}
                {questions[activeQuestionIndex].options_hindi[index]}
              </div>
            </div>
          );
        } else {
          return (
            <div key={index} onClick={() => changeOption(option, index)}>
              <div className="ml-3 mt-5">
                <div
                  style={{
                    width: "20px",
                    height: "20px",
                    border: "2px solid black",
                    borderRadius: "50%",
                    background: "white",
                  }}
                ></div>
              </div>
              <div className="ml-5 " style={{ marginTop: "-20px" }}>
                {option}
                {option !== "" ? <br></br> : null}
                {questions[activeQuestionIndex].options_hindi[index]}
              </div>
            </div>
          );
        }
      }
    );
  }

  return (
    <div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Do you want to submit test ?</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="d-flex">
            <button className="btn btn-success btn-lg offset-2" onClick={submitResponse}>
              Yes
            </button>

            <button className="btn btn-danger btn-lg offset-5 " onClick={handleClose}>
              No
            </button>
          </div>
        </Modal.Body>
      </Modal>
      {loading ? (
        <div>
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
        </div>
      ) : (
        <div>
          <div
            className="d-flex offset-md-4 offset-sm-0 offset-xs-0"
            style={{ marginTop: "-50px", marginBottom: "30px" }}
          >
            <div id="timerId" className="timer">
              {" "}
              Time Remaining :{hours}hrs:{minutes}min:{second}sec
            </div>
          </div>
          <div className="container-fluid">

            <div className="row">
              <div className="col-8 question-root jumbotron  ml-5">
                <div>{showQuestion}</div>
                <div>{showOptions}</div>
                <div
                  className="bottomBtn"
                  style={{
                    paddingBottom: "20px",
                    display: "flex",
                    marginTop: "30px",
                  }}
                ></div>
              </div>
              <div className="question-panel col-4 col-sm-2 col-xs-2 mt-2 ml-2">
                <div className="grow mr-2">{buttons}</div>
              </div>
            </div>
            <div className="d-flex justify-content-around row container mt-1">
              <div className=" ml-0 ">{prevButton()}</div>
              <div className="ml-5 ">{nextButton()}</div>
            </div>
            <div>
            <div
              className=" btn btn-danger float-right mb-5 submitBtn border  border-primary "
              style={{ marginRight: "16%" }}
              onClick={handleShow}
              
            >
              Submit Test
            </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
