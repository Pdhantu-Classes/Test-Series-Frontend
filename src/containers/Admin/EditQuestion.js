import React, { useState, useEffect } from "react";
import http from "axios";
import AdminNavBar from "./AdminNavBar";
import { useHistory } from 'react-router-dom'
import { API_ENDPOINTS } from "../../core/constants/apiConstant";
const GET_QUESTION_BY_ID = API_ENDPOINTS.ADMIN.GET_QUESTION_BY_ID
const EDIT_QUESTION_BY_ID = API_ENDPOINTS.ADMIN.EDIT_QUESTION_BY_ID

export default function EditQuestion() {

  const history = useHistory()
  const [loading, setLoading] = useState(true);
  const [loadingEdit, setLoadingEdit] = useState(false);
  const [extrasOption, setExtrasOption] = useState('')
  const [extrasQuestion, setExtrasQuestion] = useState('')
  const [questionEnglish, setQuestionEglish] = useState('')
  const [questionHindi, setQuestionHindi] = useState('')
  const [optionHindi, setOptionHindi] = useState('')
  const [optionEnglish, setOptionEnglish] = useState('')
  const [questiontype, setQuestionType] = useState('')
  const [ans, setAns] = useState('')

  useEffect(() => {
    setLoading(true)
    http
      .get(GET_QUESTION_BY_ID, {
        headers: {
          questions_id: window.localStorage.getItem('question_id')
        }
      })
      .then((res) => {
        setLoading(false)
        console.log(res.data.question_list)
        const { answer, extras_option, extras_question, question_english, question_hindi, options_english, options_hindi, question_type } = res.data.question_list
        setExtrasOption(extras_option)
        setExtrasQuestion(extras_question)
        setQuestionEglish(question_english)
        setQuestionHindi(question_hindi)
        setOptionHindi(options_hindi)
        setOptionEnglish(options_english)
        setQuestionType(question_type)
        setAns(answer)
        setLoading(false)
      })
      .catch((err) => console.log(err));

  }, [])

  const handleChangeEq = (e) => {
    setQuestionEglish(e.target.value)
  }

  const handleChangeHq = (e) => {
    setQuestionHindi(e.target.value)
  }

  const handleChangeExq = (e) => {
    setExtrasQuestion()
  }

  const handleChangeExo = (e) => {
    setExtrasOption(e.target.value)
  }

  const handleChangeOe = (e) => {
    setOptionEnglish(e.target.value)
  }

  const handleChangeOh = (e) => {
    setOptionHindi(e.target.value)
  }

  const handleSelect = (e) => {
    setAns(e.target.value)
  }

  const handleSave = () => {
    setLoadingEdit(true)
    let body = {
      answer: ans,
      extras_option: extrasOption,
      extras_question: extrasQuestion,
      question_english: questionEnglish,
      question_hindi: questionHindi,
      options_english: optionEnglish,
      options_hindi: optionHindi,
      question_type: questiontype,
      questions_id: window.localStorage.getItem('question_id')
    }

    http
      .put(EDIT_QUESTION_BY_ID, body)
      .then((res) => {
        setLoadingEdit(false)
        history.push('/admin/showQuestion')
      })
      .catch((err) => console.log(err))
  }

  const handleDiscard = () => {
    history.push('/admin/showQuestion')
  }

  return (
    <div className="container">
      <AdminNavBar />
      {
        loadingEdit ? 
          <div className="d-flex justify-content-center pt-5 mt-5">
            <div className="spinner-border" role="status">
              <span className="sr-only">Loading...</span>
            </div>
        </div>
        :
        null
      }
      {
        !loading ?
          <div>
            <div className="container mt-5 pt-4 mt-5">
              <form>
                <div class="form-group">
                  <label for="exampleFormControlInput1">English Question</label>
                  <textarea
                    class="form-control"
                    id="exampleFormControlTextarea1"
                    rows="2"
                    value={questionEnglish}
                    name="englishQuestion"
                    onChange={(e) => handleChangeEq(e)}
                  ></textarea>
                </div>
                <div class="form-group">
                  <label for="exampleFormControlInput1">Hindi Question</label>
                  <textarea
                    class="form-control"
                    id="exampleFormControlTextarea1"
                    rows="2"
                    value={questionHindi}
                    name="englishQuestion"
                    onChange={handleChangeHq}
                  ></textarea>
                </div>
                <div class="form-group">
                  <label for="exampleFormControlInput1">Extras Question</label>
                  <textarea
                    class="form-control"
                    id="exampleFormControlTextarea1"
                    rows="3"
                    name="extraQuestion"
                    value={extrasQuestion}
                    onChange={handleChangeExq}
                  ></textarea>
                </div>
                <div class="form-group">
                  <label for="exampleFormControlInput1">Extras options</label>
                  <textarea
                    class="form-control"
                    id="exampleFormControlTextarea1"
                    rows="3"
                    value={extrasOption}
                    onChange={handleChangeExo}
                    name="extraOption"
                  ></textarea>
                </div>
                <div class="form-group">
                  <label for="exampleFormControlInput1">Options English</label>
                  <textarea
                    class="form-control"
                    id="exampleFormControlTextarea1"
                    rows="5"
                    value={optionEnglish}
                    name="optionEnglish"
                    onChange={handleChangeOe}
                  ></textarea>
                </div>
                <div class="form-group">
                  <label for="exampleFormControlInput1">Options Hindi</label>
                  <textarea
                    class="form-control"
                    id="exampleFormControlTextarea1"
                    rows="5"
                    value={optionHindi}
                    name="optionHindi"
                    onChange={handleChangeOh}
                  ></textarea>
                </div>

                <div class="form-group">
                  <label for="exampleFormControlSelect2">
                    Answer
            </label>
                  <select
                    value={ans}
                    class="form-control"
                    id="exampleFormControlSelect2"
                    onChange={handleSelect}
                  >
                    <option value="a">A</option>
                    <option value="b">B</option>
                    <option value="c">C</option>
                    <option value="d">D</option>

                  </select>
                </div>

              </form>
            </div>
            <div className="d-flex">
              <button className="btn btn-primary ml-5" onClick={handleSave}>Save</button>
              <button className="btn btn-danger ml-5" oncClick={handleDiscard}>Discard</button>
            </div>
          </div>
          :
          <div className="d-flex justify-content-center py-5">
            <div className="spinner-border" role="status">
              <span className="sr-only">Loading...</span>
            </div>
          </div>
      }  
    </div>
  );
}
