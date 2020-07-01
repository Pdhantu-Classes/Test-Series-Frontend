import React, { useState ,useEffect } from "react";
import { Link } from "react-router-dom";
import "../../css/Signup.css";
import { signup } from "../auth/index";


function Signup() {

  const [ success, setSuccess ]= useState(false)
  const [ error, setError ]=useState('')
  const [ disable, setDisable ] = useState(true)
  const [ firstname, setFirstName] = useState('')
  const [ lastname, setLastName ] = useState(null)
  const [ email, setEmail ] = useState('')
  const [ mobile, setMobile ] = useState(0)
  const [ password, setPassword ] = useState('')
  const [ confirmPassword, setConfirmPassword ] = useState('')

  useEffect(() => {
    if(firstname && email && mobile && password && confirmPassword){
      if(password === confirmPassword){
        setDisable(false)
        setError('')
      }
      else{
        setDisable(true)
        setError('Password not matched')
      }
    }
   else{
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


    if(mobileNo.length === 10){
      if(Number(mobileNo[0]) > 5){
        a = true
      }
    }
    if(email.match(mailformat)){
      b = true
    }
    
    if(a && b){
      signup({ firstname, lastname, email,  mobile, password }).then(data => {
         if (!data.isValid) {
              console.log('ifpart')
              setError(data.message)
          } 
          else {
            console.log('elsepart')
            setSuccess(data.message)
          }
      });
    }
    else{
      setError('Mobile or Email is not Valid')
    }

     
  
};

  const showError = () => (
    <div
      className="alert alert-danger"
      style={{ display: error ? "" : "none" }}
    >
      {error}
    </div>
  );

  const showSuccess = () => (
    <div
      className="alert alert-info"
      style={{ display: success ? "" : "none" }}
    >
      New account is created. Please <Link to="/login">Signin</Link>
    </div>
  );


  const signUpForm = () => (
    <form>
      <div>
        <img
          src = "http://keapu-webpp01-centin-r46j07o2.cloudapp.net/PU-LECT-2019/images/user_add.png"
          alt = "signup"
          style = {{ height: "60px", marginLeft: "120px" }}
        >
        </img>
        <span>
          <h2 className="text-center">Sign Up</h2>
        </span>
      </div>

      <p className="text-center">
        Please fill in this form to create an account!
      </p>
      <hr></hr>

      <div className="form-group ">
        <div className="input-group ">
          <span className="input-group-addon">
            <i class="fa fa-user"></i>
          </span>
          <input
            onChange={handleFirstName}
            type="text"
            class="form-control"
            name="firstname"
            placeholder="First Name"
            required="required"
          />
        </div>
      </div>

      <div className="form-group ">
        <div className="input-group ">
          <span className="input-group-addon">
            <i class="fa fa-user"></i>
          </span>
          <input
            onChange={handleLastName}
            type="text"
            class="form-control"
            name="firstname"
            placeholder="Last Name"
            required="required"
          />
        </div>
      </div>

      <div className="form-group">
        <div className="input-group">
          <span className="input-group-addon">
            <i className="fa fa-paper-plane"></i>
          </span>
          <input
            onChange={handleEmail}
            type="email"
            className="form-control"
            name="email"
            placeholder="Email Address"
            required="required"
          />
        </div>
      </div>

      <div className="form-group">
        <div className="input-group">
          <span className="input-group-addon">
            <i className="fa fa-paper-plane"></i>
          </span>
          <input
            onChange={handleMobile}
            onInput={(e) => e.target.value = e.target.value.slice(0, 10)}
            type="number"
            className="form-control"
            name="email"
            placeholder="Mobile"
            required="required"
          />
        </div>
      </div>

      <div className="form-group">
        <div className="input-group">
          <span className="input-group-addon">
            <i className="fa fa-lock"></i>
          </span>
          <input
            onChange={handlePassword}
            type="password"
            className="form-control"
            name="password"
            placeholder="Password"
            required="required"
          />
        </div>
      </div>

      <div className="form-group ">
        <div className="input-group">
          <span className="input-group-addon">
            <i className="fa fa-lock"></i>
            <i className="fa fa-check"></i>
          </span>
          <input
            onChange={handleConfirmPassword}
            type="password"
            className="form-control"
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

    </form>
  );
  return (
    <div>
      <div className="signup-form" style={{ marginTop: "100px" }}>
        {showError()}
        {signUpForm()}
        {showSuccess()}
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
