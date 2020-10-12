import React, { useState } from "react";
import { Redirect, Link } from "react-router-dom";
import http from 'axios'
import { API_ENDPOINTS } from '../../../core/constants/apiConstantTestSeries'
import '../../../css/Login.css';

const LOGIN =API_ENDPOINTS.USERS.LOGIN

export default function Login() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const [redirectToReferrer, setRedirectToReferrer] = useState(false)
    
    const handleChangeEmail = (e) =>{
        setEmail(e.target.value)
    }

    const handleChangePassword = (e) =>{
        setPassword(e.target.value)
    }

    const showError = () => (
        <div
            className="alert alert-danger"
            style={{ display: error ? "" : "none" }}
        >
            {error}
        </div>
    );

    const showLoading = () =>
        loading && (
            <div className="d-flex justify-content-center">
                <div className="spinner-border" role="status">
                    <span className="sr-only">Loading...</span>
                </div>
            </div>  
        );

    const redirectUser = () => {
        if (redirectToReferrer) {
            return <Redirect to="/user/testseries/home" />;
        }
    }

    const clickSubmit = event => {
        event.preventDefault();
        setLoading(true)
        let payload = {
            email:email,
            password: password
        }
        http
            .post(LOGIN,payload)
            .then(res => {
                if (!res.data.isValid) {
                    setLoading(false)
                    setError(res.data.message)
                }
            else {
                    localStorage.setItem("tokenTest", res.data.token);
                    localStorage.setItem("imgUrl", res.data.image_url);
                    setRedirectToReferrer(true)
            }
        })
        .catch(err=>console.log(err))
    };


    const SignInForm = () => (
        <div>
            <div className='h5 text-center text-danger'> Please Login for Pre+CG GK Test Series here</div>
        <form>
            <img
                src="http://img.clipartlook.com/user-user-clipart-528_594.png"
                alt="login"
                style={{ height: "80px", marginLeft: "100px" }}
            >

            </img>
            <h2 className="text-center">Log in</h2>
            <div className="form-group">
                <input onChange={handleChangeEmail} type="text" className="form-control" value={email} placeholder="Enter email " required="required" />
            </div>
            <div className="form-group">
                <input onChange={handleChangePassword} type="password" value={password} className="form-control" placeholder="Enter Password" required="required" />
            </div>
            <div className="form-group">
                <button onClick={clickSubmit} type="submit" className="btn btn-primary btn-block">Log in</button>
            </div>
        </form>
        </div>
    )
    return (
        <div>
            <div className="login-form" style={{ marginTop: "150px" }}>
                {showLoading()}
                {showError()}
                {SignInForm()}
                {redirectUser()}
                <p className="text-center"><Link to="/signupTestseries">Create an Account</Link></p>
                <p className="text-center text-danger"><Link to="/forgotPasswordTestseries">Forgot Password</Link></p>
            </div>
        </div>
    )
}