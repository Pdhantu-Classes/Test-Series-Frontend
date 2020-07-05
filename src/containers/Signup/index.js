import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../../css/Signup.css";
import { signup } from "../auth/index";


function Signup() {

  const [error, setError] = useState(false)
  const [disable, setDisable] = useState(true)
  const [firstname, setFirstName] = useState('')
  const [lastname, setLastName] = useState(null)
  const [email, setEmail] = useState('')
  const [mobile, setMobile] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [loading, setLoading] = useState()
  const [message, setMessage] = useState('')

  useEffect(() => {
    if (firstname && email && mobile && password && confirmPassword) {
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
  }, [firstname, email, mobile, password, confirmPassword])


  const handleFirstName = (e) => {
    e.preventDefault();
    setFirstName(e.target.value)
  };

  const handleLastName = (e) => {
    e.preventDefault();
    setLastName(e.target.value)
  };

  const handleEmail = (e) => {
    e.preventDefault();
    setEmail(e.target.value)
  };

  const handleMobile = (e) => {
    e.preventDefault();
    setMobile(e.target.value)
  };

  const handlePassword = (e) => {
    e.preventDefault();
    setPassword(e.target.value)
  };

  const handleConfirmPassword = (e) => {
    e.preventDefault();
    setConfirmPassword(e.target.value)
  };


  const clickSubmit = (e) => {
    e.preventDefault();

    let mobileNo = mobile.toString()
    let mailformat = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/
    let a = false
    let b = false


    if (mobileNo.length === 10) {
      if (Number(mobileNo[0]) > 5) {
        a = true
      }
    }
    if (email.match(mailformat)) {
      b = true
    }

    if (a && b) {
      setLoading(true)
      signup({ firstname, lastname, email, mobile, password }).then(data => {
        setLoading(false)
        setMessage(data.message)
        if (!data.isValid) {
          setError(data.message)
          setFirstName('')
          setLastName('')
          setMobile('')
          setEmail('')
          setPassword('')
          setConfirmPassword('')
        }
        else {
          setFirstName('')
          setLastName('')
          setMobile('')
          setEmail('')
          setPassword('')
          setConfirmPassword('')
        }
      });
    }
    else {
      setError('Mobile or Email is not Valid')
    }

  };


  const signUpForm = () => (
    <form>
      <div>
        <img
          src="http://keapu-webpp01-centin-r46j07o2.cloudapp.net/PU-LECT-2019/images/user_add.png"
          alt="signup"
          style={{ height: "60px", marginLeft: "120px" }}
        >
        </img>
        <span>
          <h2 className="text-center ">Sign Up</h2>
        </span>
      </div>

      <p className="text-center">
        Please fill in this form to create an account!
      </p>
      <hr></hr>

      <div className="form-group ">
        <div className="input-group ">
          <span className="input-group-addon mt-2 mr-2">
            <i className="fa fa-user"></i>
          </span>
          <input
            onChange={handleFirstName}
            type="text"
            className="form-control"
            value={firstname}
            name="firstname"
            placeholder="First Name"
            required="required"
          />
        </div>
      </div>

      <div className="form-group ">
        <div className="input-group ">
          <span className="input-group-addon  mt-2 mr-2">
            <i className="fa fa-user"></i>
          </span>
          <input
            onChange={handleLastName}
            type="text"
            className="form-control"
            value={lastname}
            name="firstname"
            placeholder="Last Name"
            required="required"
          />
        </div>
      </div>

      <div className="form-group">
        <div className="input-group">
          <span className="input-group-addon  mt-2 mr-2">
            <i className="fa fa-envelope"></i>
          </span>
          <input
            onChange={handleEmail}
            type="email"
            className="form-control"
            value={email}
            name="email"
            placeholder="Email Address"
            required="required"
          />
        </div>
      </div>

      <div className="form-group">
        <div className="input-group">
          <span className="input-group-addon mt-2 mr-2">
            <i className="fa fa-mobile"></i>
          </span>
          <input
            onChange={handleMobile}
            onInput={(e) => e.target.value = e.target.value.slice(0, 10)}
            type="number"
            className="form-control"
            value={mobile}
            name="email"
            placeholder="Mobile"
            required="required"
          />
        </div>
      </div>

      <div className="form-group">
        <div className="input-group">
          <span className="input-group-addon mt-2 mr-2">
            <i className="fa fa-lock"></i>
          </span>
          <input
            onChange={handlePassword}
            type="password"
            className="form-control"
            value={password}
            name="password"
            placeholder="Password"
            required="required"
          />
        </div>
      </div>

      <div className="form-group ">
        <div className="input-group">
          <span className="input-group-addon mt-2 mr-2">
            <i className="fa fa-lock"></i>
            <i className="fa fa-check"></i>
          </span>
          <input
            onChange={handleConfirmPassword}
            type="password"
            className="form-control"
            value={confirmPassword}
            name="confirm_password"
            placeholder="Confirm Password"
            required="required"
          />
        </div>
      </div>

      <div className="form-group">
        <button
          disabled={disable}
          onClick={clickSubmit}
          type="submit"
          className="btn btn-primary btn-lg offset-3"
        >
          Sign Up
        </button>
      </div>
      {
        !loading && message ?
          <div className="text-center"><span className="text-info"> New account is created. Please </span> <Link className="text-primary" to="/login">Login</Link></div>
          :
          null
      }
      {
        error ?
          <div className="text-center text-danger">{error}</div>
          :
          null
      }
    </form>

  );
  return (
    <div>
      <div className="signup-form" style={{ marginTop: "-130px" }}>
        {
          loading ?
            <div style={{ position: 'absolute', transform: 'translate(-50%,-50%)', top: '20%', left: '50%' }}>
              <div className="d-flex justify-content-center">
                <div className="spinner-border" role="status">
                  <span className="sr-only">Loading...</span>
                </div>
              </div>
            </div>
            :
            null
        }
        {signUpForm()}
        <div className="text-center">
          Already have an account?{" "}
          <a href="./Login" className="text-danger">
            Login here
          </a>
        </div>
      </div>
    </div>
  );
}
export default Signup;
