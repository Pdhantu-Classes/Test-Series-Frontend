import React, { useState } from "react";
import { Redirect, Link } from "react-router-dom";
import '../../css/Login.css';
import { signin, authenticate } from "../auth/index";
const Login = () => {
    const [values, setValues] = useState({
        login_value: "",
        password: "",
        error: "",
        loading: false,
        redirectToReferrer: false
    });
    const { login_value, password, loading, error, redirectToReferrer } = values;

    const handleChange = name => event => {
        setValues({ ...values, error: false, [name]: event.target.value });
    };
    const clickSubmit = event => {
        event.preventDefault();
        setValues({ ...values, error: false, loading: true });
        signin({ login_value, password }).then(data => {
            if (!data.isValid) {
                setValues({ ...values, error: data.message, loading: false });
            }
            else {
                authenticate(data)
                setValues({ ...values, redirectToReferrer: true });

            }
        })
    };
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
            return <Redirect to="/user/home" />;
        }
    }


    const SignInForm = () => (
        <div>
            <div className='h5 text-center text-danger'> Please Login for Test Series here</div>
        <form>
            <img
                src="http://img.clipartlook.com/user-user-clipart-528_594.png"
                alt="login"
                style={{ height: "80px", marginLeft: "100px" }}
            >

            </img>
            <h2 className="text-center">Log in</h2>
            <div className="form-group">
                <input onChange={handleChange("login_value")} type="text" className="form-control" value={login_value} placeholder="Email or Mobile" required="required" />
            </div>
            <div className="form-group">
                <input onChange={handleChange("password")} type="password" value={password} className="form-control" placeholder="Password" required="required" />
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
                <p className="text-center"><Link to="/SignupSeries">Create an Account</Link></p>
                <p className="text-center text-danger"><Link to="/forgotPasswordSeries">Forgot Password</Link></p>
            </div>
        </div>
    );

};
export default Login;