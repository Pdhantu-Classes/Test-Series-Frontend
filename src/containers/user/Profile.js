import React, { useState } from 'react'
import http from 'axios'
import { API_ENDPOINTS } from '../../core/constants/apiConstant'

const UPLOAD_PHOTO = API_ENDPOINTS.USERS.UPLOAD_PHOTO

const Profile = () => {
  const [ firstName, setFirstName ] = useState('')
  const [ lastName, setLastName ] = useState('')
  const [ mobile, setSetMobile ] = useState('')
  const [ email, setEmail ] = useState('')
  const [ whatsapp, setWhatsapp ] = useState('')
  const [ graduationYear, setGraduationYear ] = useState('')
  const [ course, setCourse ] = useState('')
  const [ imageUrl, setImageUrl ] = useState('')
  const [ loading, setLoading ] = useState(true)


  const handleFirstName = (e) => {
    e.preventDefault();
    setFirstName(e.target.value)
  };

  const handleLastName = (e) => {
    e.preventDefault();
    setLastName(e.target.value)
  };

  const handleWhatsapp = (e) => {
    e.preventDefault();
    setWhatsapp(e.target.value)
  };

  const handleGraduationYear = (e) => {
    e.preventDefault();
    setGraduationYear(e.target.value)
  };

  const handleCourse = (e) => {
    e.preventDefault();
    setCourse(e.target.value)
  };

  const handleImage = (e) => {
    e.preventDefault();
    const formData = new FormData();
        formData.append('file', e.target.files[0])
        http
            .post(UPLOAD_PHOTO, formData)
            .then(response => {
                const responseData = response.data.imageUrl
                setImageUrl(responseData)
                setLoading(false)
            })
            .catch(err => console.log(err))
  };

  return (

    <div className="py-5">
      <div class="row">
        <div class="col-md-3">
          <div class="text-center">
            <img src="//placehold.it/100" class="avatar img-circle" alt="avatar" />
            <input type="file" class="form-control" onChange={handleImage}/>
          </div>
        </div>


        <div class="col-md-9 personal-info">
          <h3>Personal info</h3>

          <div class="form-group">
            <label class="col-lg-3 control-label">First name:</label>
            <div class="col-lg-8">
              <input class="form-control" type="text" value={firstName} onChange={handleFirstName} />
            </div>
          </div>
          <div class="form-group">
            <label class="col-lg-3 control-label">Last name:</label>
            <div class="col-lg-8">
              <input class="form-control" type="text" value={lastName} onChange={handleLastName}/>
            </div>
          </div>
          <div class="form-group">
            <label class="col-lg-3 control-label">Mobile</label>
            <div class="col-lg-8">
              <input class="form-control" type="text" value={"+91 "+mobile} disabled />
            </div>
          </div>
          <div class="form-group">
            <label class="col-lg-3 control-label">Email</label>
            <div class="col-lg-8">
              <input class="form-control" type="text" value={email} disabled />
            </div>
          </div>
          <div class="form-group">
            <label class="col-lg-3 control-label">Whatsapp Number</label>
            <div class="col-lg-8">
              <input class="form-control" type="text" value={whatsapp} onChange={handleWhatsapp}/>
            </div>
          </div>
          <div class="form-group">
            <label class="col-lg-3 control-label">Graduation Year</label>
            <div class="col-lg-8">
              <select class="form-control" onChange={handleGraduationYear} value={graduationYear}>
                <option defaultValue>Select Year</option>
                <option value="2005">2005</option>
                <option value="2006">2006</option>
                <option value="2007">2007</option>
                <option value="2008">2008</option>
                <option value="2009">2009</option>
                <option value="2010">2010</option>
                <option value="2011">2011</option>
                <option value="2012">2012</option>
                <option value="2013">2013</option>
                <option value="2014">2014</option>
                <option value="2015">2015</option>
                <option value="2016">2016</option>
                <option value="2017">2017</option>
                <option value="2018">2018</option>
                <option value="2019">2019</option>
                <option value="2020">2020</option>
                <option value="2021">2021</option>
                <option value="2022">2022</option>
                <option value="2023">2023</option>
                <option value="2024">2024</option>
                <option value="2025">2025</option>
              </select>
            </div>
          </div>

          <div class="form-group">
            <label class="col-lg-3 control-label">Graduation Year</label>
            <div class="col-lg-8">
              <select class="form-control" onChange={handleCourse} value={course}>
                <option defaultValue>Select Course</option>
                <option value="CGPSC">CGPSC</option>
                <option value="CGACF">CGACF</option>
              </select>
            </div>
          </div>


          <div class="form-group">
            <label class="col-md-3 control-label"></label>
            <div class="col-md-8">
              <input type="button" class="btn btn-primary" value="Save Changes" />
              <span></span>
              <input type="reset" class="btn btn-default" value="Cancel" />
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}
export default Profile