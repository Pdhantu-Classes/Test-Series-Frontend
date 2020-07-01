import React, { useState ,useEffect } from "react";
import { Link } from "react-router-dom";
import "../../css/Signup.css";
import { signup } from "../auth/index";
function Signup() {
  const [values, setValues] = useState({
    email: "",
    password: "",
    firstname:'',
    lastname:'',
    mobile:'',
    confirmpassword:''
});
  const[success,SetSuccess]= useState(false)
  const[error,SetError]=useState('')
  const [disable,SetDisable] = useState(true)
  const { email, password,firstname,lastname,mobile,confirmpassword } = values;
  useEffect(() => {
   const isUser = Object.values(values).every(ele=>Boolean(ele))
   isUser ? SetDisable(false):SetDisable(true)
  }, [values])
  const handleChange = (name) => (event) => {
    setValues({ ...values, [name]: event.target.value });
    console.log(password)
    console.log(confirmpassword)
  
  };
  const showError = () => (
    <div
      className="alert alert-danger"
      style={{ display: error ? "" : "none" }}
    >
      {error}
    </div>
  );
  const clickSubmit = (event) => {
    
    event.preventDefault();
    if(password!==confirmpassword){
      setValues({error:'Password is not matching'})
    }
        setValues({ ...values, error: false });
        // signup({email,firstname,lastname, password,mobile }).then(data => {
        //    if (!data.isValid) {
        //         console.log('ifpart')
        //         setValues({ ...values, error: data.message });
        //     } 
        //     else {
        //       console.log('elsepart')
        //         setValues({
        //           success: data.isValid
        //         });
        //     }
        // });
    
  };

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
          src="http://keapu-webpp01-centin-r46j07o2.cloudapp.net/PU-LECT-2019/images/user_add.png"
          style={{ height: "60px", marginLeft: "120px" }}
        ></img>
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
            onChange={handleChange("firstname")}
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
            onChange={handleChange("lastname")}
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
            onChange={handleChange("email")}
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
            onChange={handleChange("mobile")}
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
            onChange={handleChange("password")}
            type="text"
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
            type="text"
            className="form-control"
            name="confirm_password"
            placeholder="Confirm Password"
            required="required"
            onChange={handleChange('confirmpassword')}
          />
        </div>
      </div>
      <div className="form-group">
        <label className="checkbox-inline">
          <input type="checkbox" required="required" /> I accept the{" "}
          <a href="#">Terms of Use</a> &amp; <a href="#">Privacy Policy</a>
        </label>
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
        {showSuccess()}
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
