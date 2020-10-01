import React, { useState, useEffect } from 'react'
import http from 'axios'
import { Link } from 'react-router-dom'
import '../../../css/Login.css'
import { API_ENDPOINTS } from '../../../core/constants/apiConstantTestSeries'


const FORGOT_PASSWORD = API_ENDPOINTS.USERS.FORGOT_PASSWORD
const CHANGE_PASSWORD = API_ENDPOINTS.USERS.CHANGE_PASSWORD

export default function ForgotPassword() {

    const [email, setEmail] = useState('')
    const [mobile, setMobile] = useState(null)
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [message, setMessage] = useState('')
    const [userId, setUserId] = useState(null)
    const [isValid, setIsValid] = useState(false)
    const [isPasswordChange, setIsPasswordChange] = useState(false)
    const [loading, setLoading] = useState()
    const [error, setError] = useState(false)
    const [disable, setDisable] = useState(true)
    const [toggle, setToggle] = useState(false)

    useEffect(() => {
        if (password && confirmPassword) {
            if (password === confirmPassword) {
                setDisable(false)
                setError('')
            }
            else {
                setDisable(true)
                setError('Password not matched')
            }
        }
        else {
            setDisable(true)
            setError('')
        }
    }, [password, confirmPassword])

    const handleEmail = (e) => {
        e.preventDefault()
        setEmail(e.target.value)
    }

    const handleMobile = (e) => {
        e.preventDefault()
        setMobile(e.target.value)
    }

    const handleSubmit = (e) => {
        setLoading(true)
        e.preventDefault()
        let body = {
            email: email,
            mobile: mobile
        }
        http
            .post(FORGOT_PASSWORD, body)
            .then((res) => {
                setLoading(false)
                setUserId(res.data.user_id)
                setIsValid(res.data.isValid)
                setMessage(res.data.message)
            })
    }

    const handlePassword = (e) => {
        e.preventDefault()
        setPassword(e.target.value)

    }

    const handleConfirm = (e) => {
        e.preventDefault()
        setConfirmPassword(e.target.value)
    }

    const handleSubmitPassword = (e) => {
        setLoading(true)
        e.preventDefault()
        let body = {
            user_id: userId,
            password: password
        }
        http
            .put(CHANGE_PASSWORD, body)
            .then((res) => {
                setLoading(false)
                setIsPasswordChange(res.data.isValid)
                setMessage(res.data.message)
            })
    }

    const FindAccount = () => (
        <div>
            {!userId && !isValid ? <p className="text-center text-danger">{message}</p> : null}
            <h4 className="text-center">Find Your Account</h4>
            <br></br>
            <div className="form-group">
                <input onChange={handleEmail} type="text" className="form-control" value={email} placeholder="Email" required="required" />
            </div>

            <div className="form-group">
                <input onChange={handleMobile} onInput={(e) => e.target.value = e.target.value.slice(0, 10)} type="number" value={mobile} className="form-control" placeholder="Mobile" required="required" />
            </div>
            <div className="form-group">
                <button onClick={handleSubmit} type="submit" className="btn btn-primary btn-block">Find Account</button>
            </div>
        </div>
    )

    const RePassword = () => (
        <div>
            {
                error ?
                    <p className="text-center text-danger">{error}</p>
                    :
                    null
            }
            <h4 className="text-center">Enter New Password</h4>
            <br></br>
            <div className="form-group">
                <input onChange={handlePassword} type="password" className="form-control" value={password} placeholder="Enter Password" required="required" />
            </div>

            <div className="form-group">
                <input id="confirmPassword" onChange={handleConfirm} type="password" value={confirmPassword} className="form-control" placeholder="Enter Confirm Password" required="required" />
                {
                    confirmPassword ?
                        <div style={{ fontSize: '14px', float: "right", marginTop: "5px" }} onClick={togglePassword}> {!toggle ? "Show Password" : "Hide Password"}</div>
                        :
                        null
                }
            </div>
            <br></br>
            {
                disable ?
                    <div className="form-group">
                        <button type="submit" className="btn btn-primary btn-block" disabled>Change Password</button>
                    </div>
                    :
                    <div className="form-group">
                        <button onClick={handleSubmitPassword} type="submit" className="btn btn-primary btn-block">Change Password</button>
                    </div>
            }
        </div>
    )

    const PasswordChanged = () => (
        <div>
            <h4 className="text-center">Password Changed Successfully</h4>
            <p className="text-center"> <Link to="/loginTestseries">Login here</Link></p>
        </div>
    )

    const showLoading = () =>
        loading && (
            <div className="d-flex justify-content-center">
                <div className="spinner-border" role="status">
                    <span className="sr-only">Loading...</span>
                </div>
            </div>
        );

    const togglePassword = () => {
        if (toggle) {
            setToggle(false)
        }
        else {
            setToggle(true)
        }
        var x = document.getElementById("confirmPassword");
        if (x.type === "password") {
            x.type = "text";
        } else {
            x.type = "password";
        }
    }


    return (
        <div>
            <div style={{ position: 'absolute', transform: 'translate(-50%, -50%)', left: '50%', top: '35%' }}>
                {loading ? showLoading() : null}
            </div>
            <div className="login-form" style={{ marginTop: "150px" }}>
                {!isValid && !isPasswordChange ? FindAccount() : null}
                {isValid && !isPasswordChange ? RePassword() : null}
                {isPasswordChange ? PasswordChanged() : null}
            </div>
        </div>
    )
}
