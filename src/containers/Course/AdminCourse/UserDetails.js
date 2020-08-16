import React, { useState, useEffect } from 'react'
import http from 'axios'
import AdminNavBar from "../AdminCourse/AdminNavBar";
import { API_ENDPOINTS } from '../../../core/constants/apiConstantCourse'

const USER_DETAILS = API_ENDPOINTS.ADMIN.USER_DETAILS

export default function UserDetails() {

    const [items, setItems] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const USER_ID = window.localStorage.getItem("user_id")
        setIsLoading(true)
        http
            .get(USER_DETAILS,{
                headers:{
                    user_id: USER_ID
                }
            })
            .then(res=>{
                setItems(res.data.user_data)
                setIsLoading(false)
            })
            .catch(err=>console.log(err))
    }, [])

    return (
        <div>
            <AdminNavBar />
            {
                isLoading ?
                <div style={{ position: 'absolute', transform: 'translate(-50%,-50%)', top: '20%', left: '50%' }}>
                        <div className="d-flex justify-content-center">
                        <div className="spinner-border" role="status">
                            <span className="sr-only">Loading...</span>
                        </div>
                        </div>
                    </div>
                :
                <div className="offset-md-3 offset-sm-0 offset-xs-0">
                    {
                        items ?
                            <div style={{marginTop:"300px"}} className="mt-5 pt-5">
                                <div className="row mt-5 pt-3">
                                    <div className="col-md-3">
                                        <div className="text-center">
                                            {
                                                items.image_url ? (
                                                <img
                                                    src={items.image_url}
                                                    style={{ width: "200px", height: "200px" }}
                                                    className="avatar img-circle"
                                                    alt="avatar"
                                                />
                                                ) : (
                                                    <img
                                                    src="//placehold.it/200"
                                                    className="avatar img-circle"
                                                    alt="avatar"
                                                    />)
                                            }
                                        </div>
                                    </div>
                                </div>
        
                                    <div className="col-md-9 personal-info">
                                    <h3 className="mt-3">Personal info</h3>

                                    <div className="form-group">
                                        <label className="col-lg-3 control-label">First name</label>
                                        <div className="col-lg-8">
                                        <input
                                            className="form-control"
                                            type="text"
                                            value={items.firstname}
                                            disabled
                                        />
                                        </div>
                                    </div>
                        
                                    <div className="form-group">
                                        <label className="col-lg-3 control-label">Last name</label>
                                        <div className="col-lg-8">
                                        <input
                                            className="form-control"
                                            type="text"
                                            value={items.lastname}
                                            disabled
                                        />
                                        </div>
                                    </div>
                        
                                    <div className="form-group">
                                        <label className="col-lg-3 control-label">Mobile</label>
                                        <div className="col-lg-8">
                                        <input
                                            className="form-control"
                                            type="text"
                                            value={"+91 " + items.mobile}
                                            disabled
                                        />
                                        </div>
                                    </div>
                        
                                    <div className="form-group">
                                        <label className="col-lg-3 control-label">Email</label>
                                        <div className="col-lg-8">
                                        <input
                                            className="form-control"
                                            type="text"
                                            value={items.email}
                                            disabled
                                        />
                                        </div>
                                    </div>

                                    <div className="form-group">
                                        <label className="col-lg-3 control-label">Whatsapp Number</label>
                                        <div className="col-lg-8">
                                        {
                                            items.whatsapp ? 
                                            <input
                                                className="form-control"
                                                type="text"
                                                value={'+91 '+items.whatsapp}
                                                disabled
                                            />
                                            :
                                            <input
                                                className="form-control"
                                                type="text"
                                                value={items.whatsapp}
                                                disabled
                                            />
                                        }
                                       
                                        </div>
                                    </div>

                                    <div className="form-group">
                                        <label className="col-lg-3 control-label">Date of Birth</label>
                                        <div className="col-lg-8">
                                        <input
                                            className="form-control"
                                            type="text"
                                            value={items.dob}
                                            disabled
                                        />
                                        </div>
                                    </div>

                                    <div className="form-group">
                                        <label className="col-lg-3 control-label">Gender</label>
                                        <div className="col-lg-8">
                                        <input
                                            className="form-control"
                                            type="text"
                                            value={items.gender}
                                            disabled
                                        />
                                        </div>
                                    </div>

                                    <div className="form-group">
                                        <label className="col-lg-3 control-label">Father's Name</label>
                                        <div className="col-lg-8">
                                        <input
                                            className="form-control"
                                            type="text"
                                            value={items.fathers_name}
                                            disabled
                                        />
                                        </div>
                                    </div>

                                    <div className="form-group">
                                        <label className="col-lg-3 control-label">Occupation</label>
                                        <div className="col-lg-8">
                                        <input
                                            className="form-control"
                                            type="text"
                                            value={items.occupation}
                                            disabled
                                        />
                                        </div>
                                    </div>

                                    <div className="form-group">
                                        <label className="col-lg-3 control-label">Address</label>
                                        <div className="col-lg-8">
                                        <input
                                            className="form-control"
                                            type="text"
                                            value={items.address}
                                            disabled
                                        />
                                        </div>
                                    </div>

                                    <div className="form-group">
                                        <label className="col-lg-3 control-label">Pin Code</label>
                                        <div className="col-lg-8">
                                        <input
                                            className="form-control"
                                            type="text"
                                            value={items.pincode}
                                            disabled
                                        />
                                        </div>
                                    </div>

                                    <div className="form-group">
                                        <label className="col-lg-3 control-label">Qualification</label>
                                        <div className="col-lg-8">
                                        <input
                                            className="form-control"
                                            type="text"
                                            value={items.qualification}
                                            disabled
                                        />
                                        </div>
                                    </div>

                                    <div className="form-group">
                                        <label className="col-lg-3 control-label">Graduation Year</label>
                                        <div className="col-lg-8">
                                        <input
                                            className="form-control"
                                            type="text"
                                            value={items.graduation_year}
                                            disabled
                                        />
                                        </div>
                                    </div>

                                    <div className="form-group">
                                        <label className="col-lg-3 control-label">Course</label>
                                        <div className="col-lg-8">
                                        <input
                                            className="form-control"
                                            type="text"
                                            value={
                                                items.course === 1 ? 'Prelims' : items.course === 2 ? 'Pre+Mains' : items.course === 3 ? 'Mains(Hindi)' : items.course === 4 ? 'Mains(English)':null
                                            }
                                            disabled
                                        />
                                        </div>
                                    </div>

                                    <div className="form-group">
                                        <label className="col-lg-3 control-label">Medium</label>
                                        <div className="col-lg-8">
                                        <input
                                            className="form-control"
                                            type="text"
                                            value={items.medium}
                                            disabled
                                        />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        :
                        null
                    }
                </div>
               
            }

            
        </div>
    )
}
