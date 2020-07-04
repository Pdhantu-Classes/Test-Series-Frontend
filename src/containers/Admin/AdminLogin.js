import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import '../../css/Login.css';
import { adminSignIn, authenticateAdmin } from "../auth/index";
const AdminLogin = () => {
    const [values, setValues] = useState({
        username: "",
        password: "",
        error: "",
        loading: false,
        redirectToReferrer: false
    });
    const { username, password, loading, error, redirectToReferrer } = values;

    const handleChange = name => event => {
        setValues({ ...values, error: false, [name]: event.target.value });
    };
    const clickSubmit = event => {
        event.preventDefault();
        setValues({ ...values, error: false, loading: true });
        adminSignIn({ username, password }).then(data => {
            if (data && !data.isValid) {
                setValues({ ...values, error: data.message, loading: false });
            }
            else {
                authenticateAdmin(data)
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
            return <Redirect to="/admin/dashboard" />;
        }
    }


    const SignInForm = () => (
        <form>
            <img
                src="http://img.clipartlook.com/user-user-clipart-528_594.png"
                alt="login"
                style={{ height: "80px", marginLeft: "100px" }}
            >

            </img>
            <h2 className="text-center">Log in</h2>
            <div className="form-group">
                <input onChange={handleChange("username")} type="text" className="form-control" value={username} placeholder="user name" required="required" />
            </div>
            <div className="form-group">
                <input onChange={handleChange("password")} type="password" value={password} className="form-control" placeholder="Password" required="required" />
            </div>
            <div className="form-group">
                <button onClick={clickSubmit} type="submit" className="btn btn-primary btn-block">Log in</button>
            </div>
        </form>
    )


    return (
        <div>
            <div className="login-form" style={{ marginTop: "150px" }}>
                {showLoading()}
                {showError()}
                {SignInForm()}
                {redirectUser()}
               
            </div>
        </div>
    );

};
export default AdminLogin;