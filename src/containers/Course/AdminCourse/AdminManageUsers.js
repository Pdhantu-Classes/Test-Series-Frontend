import React, { useState } from 'react'
import http from 'axios'
import { API_ENDPOINTS } from '../../../core/constants/apiConstantCourse'
import AdminNavBar from "../AdminCourse/AdminNavBar";

const GET_USER_DETAILS = API_ENDPOINTS.ADMIN.GET_USER_DETAILS
const EDIT_USER_DETAILS = API_ENDPOINTS.ADMIN.EDIT_USER_DETAILS

export default function AdminManageUsers() {
    const [isLoading, setIsLoading] = useState(false)
    const [search, setSearch] = useState(false)
    const [email, setEmail] = useState('')
    const [userId, setUserId] = useState(null)
    const [course, setCourse] = useState(null)
    const [batch, setBatch] = useState(null)
    const [name, setName] = useState(null)

    const handleChangeEmail = (e) => {
        setEmail(e.target.value)

    }

    const handleSearch = () => {
        setIsLoading(true)
        http
            .get(GET_USER_DETAILS, {
                headers: {
                    email: email
                }
            })
            .then(res => {
                setIsLoading(false)
                if(res.data.isValid){
                    setSearch(true)
                    setUserId(res.data.usersDetails.id)
                    setCourse(res.data.usersDetails.course)
                    setBatch(res.data.usersDetails.batch)
                    setName(res.data.usersDetails.firstname + ' '+ res.data.usersDetails.lastname)
                }
                else{
                    alert('Email doesnot Exist')
                }
            })
            .catch(err=> console.log(err))
    }

    const handleBatchChange = (e)=>{
        setBatch(e.target.value)
    }

    const handleCourseChange = (e)=>{
        setCourse(e.target.value)
    }

    const handleSubmit = ()=>{
        setIsLoading(true)
        let payload = {
            user_id: userId,
            email: email,
            batch: batch,
            course: course
        }
        http
            .put(EDIT_USER_DETAILS, payload)
            .then(res=>{
                alert(res.data.message)
                setIsLoading(false)
                setSearch(false)
                setUserId(null)
                setCourse(null)
                setBatch(null)
                setName(null)
                setEmail(null)
            })
            .catch(err=>console.log(err))
    }

    console.log(userId,course,batch,name,email)

    return (
        <div>
              <AdminNavBar />
            {
                !search ?
                    <div className="mt-5 pt-5">
                        <div className="form-group offset-3">
                            <label className="col-lg-3 control-label">Enter Email</label>
                            <div className="col-lg-7">
                                <input
                                    className="form-control"
                                    type="text"
                                    onChange={handleChangeEmail}
                                />
                            </div>
                        </div>
                        <div className="offset-5">
                            <button className="btn btn-primary " onClick={handleSearch}>
                                Search
                            </button>
                        </div>
                    </div>
                    :
                    <div>
                        <div className="mt-5 pt-5">
                            <div className="form-group offset-3">
                                <label className="col-lg-3 control-label">Name</label>
                                <div className="col-lg-7">
                                    <input
                                        className="form-control"
                                        type="text"
                                        value={name}
                                        disabled
                                    />
                                </div>
                            </div>
                            <div className="form-group offset-3">
                                <label className="col-lg-3 control-label">Email</label>
                                <div className="col-lg-7">
                                    <input
                                        className="form-control"
                                        type="text"
                                        onChange={handleChangeEmail}
                                        value={email}
                                    />
                                </div>
                            </div>
                            <div className="form-group offset-3 col-lg-5">
                                <label className="col-lg-3 control-label">Batch</label>
                                <select onChange={handleBatchChange} value={batch}  className="form-control ">
                                    <option value="1">Batch 1</option>
                                    <option value="2">Batch 2</option>
                                    <option value="3">Batch 3</option>
                                    <option value="4">Batch 4</option>
                                </select>
                            </div>
                            <div className="form-group offset-3 col-lg-5">
                                <label className="col-lg-3 control-label">Course</label>
                                <select onChange={handleCourseChange} value={course}  className="form-control">
                                    <option value="1">Prelims</option>
                                    <option value="2">Pre+Mains</option>
                                    <option value="3">Mains(Hindi)</option>
                                    <option value="4">Mains(English)</option>
                                </select>
                            </div>
                            <div className="offset-5">
                                <button className="btn btn-primary " onClick={handleSubmit}>
                                    Change
                                </button>
                            </div>
                        </div>
                    </div>
            }
            {
            isLoading ? (
                <div
                    style={{
                    position: "absolute",
                    transform: "translate(-50%,-50%)",
                    top: "50%",
                    left: "50%",
                    }}
                >
                <div className="d-flex justify-content-center">
                <div className="spinner-border" role="status">
                    <span className="sr-only">Loading...</span>
                </div>
                </div>
            </div>
        ) 
        :
         null
        }

        </div>
    )
}
