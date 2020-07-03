import React, { useState } from 'react'
import axios from "axios";
import { useAlert, types } from 'react-alert'
import { API_ENDPOINTS } from '../../../../core/constants/apiConstant'

const USER_QUERY = API_ENDPOINTS.USERS.USER_QUERY

function Contactus(){

  const alert = useAlert()
  const [ name, setName ] = useState('')
  const [ email, setEmail ] = useState('')
  const [ message, setMessage ] = useState('')

  const handleClick = () =>{
    if(name && email && message){
      let mailformat = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/
      if(email.match(mailformat)){
        let body= {
          name:name,
          email:email,
          message:message
        }
        axios
        .post(USER_QUERY,body)
        .then ((res)=>{
          alert.show("Success", { type: types.SUCCESS })
          setName('')
          setEmail('')
          setMessage('')
        })
        .catch((err)=>console.log(err))
      }
      else{
        alert.show("Enter Valid Email", { type: types.ERROR })
      }
    }
    else{
      alert.show("Please fill all details",{ type:types.INFO })
    }

  }

    return(
        <section id="contact" className="bg-light py-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-9">
              <h3>Get In Touch</h3>
              <p className="lead">Please Fill The Form to Contact Us</p>

                <div className="form-group">
                  <div className="input-group input-group-lg">
                    <span className="input-group-addon mt-2"><i className="fa fa-user"></i></span>
                    <input type="text" className="form-control" value={name} placeholder="Name" onChange={(e)=>{setName(e.target.value)}}/>
                  </div>
                </div>
                <div className="form-group">
                  <div className="input-group input-group-lg">
                    <span className="input-group-addon mt-2"><i className="fa fa-envelope"></i></span>
                    <input type="email" className="form-control" value={email} placeholder="Email" onChange={(e)=>{setEmail(e.target.value)}}/>
                  </div>
                </div>
                <div className="form-group">
                  <div className="input-group input-group-lg">
                    <span className="input-group-addon mt-5"><i className="fa fa-paper-plane"></i></span>
                    <textarea className="form-control" value={message} placeholder="Message" rows="5" onChange={(e)=>{setMessage(e.target.value)}}></textarea>
                  </div>
                </div>
                <button onClick={handleClick} className="btn btn-primary btn-block btn-lg">Submit</button>
            </div>
            <div className="col-lg-3 align-self-center">
              <img src="img/mlogo.png" alt="" className="img-fluid"/>
            </div>
          </div>
        </div>
      </section>
    )
}
export default Contactus