import React, { useState, useEffect } from 'react'
import http from 'axios'
import { useHistory } from "react-router"
import { useAlert } from 'react-alert'
import { API_ENDPOINTS } from '../../core/constants/apiConstant'
import '../../css/Profile.css'
import { getUserId } from '../../core/utility/authHeader'
import UserNavBar from './UserNavBar'

const UPLOAD_IMAGE = API_ENDPOINTS.USERS.UPLOAD_IMAGE
const GET_USER_DETAILS = API_ENDPOINTS.USERS.GET_USER_DETAILS
const POST_USER_DETAILS = API_ENDPOINTS.USERS.POST_USER_DETAILS


const Profile = () => {
  const alert = useAlert()
  const history = useHistory()
  const [ userId, setUserId ] = useState()


  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [mobile, setMobile] = useState()
  const [email, setEmail] = useState('')
  const [whatsapp, setWhatsapp] = useState('')
  const [whatsapps, setWhatsapps] = useState('')
  const [graduationYear, setGraduationYear] = useState('')
  const [graduationYears, setGraduationYears] = useState('')
  const [course, setCourse] = useState('')
  const [courses, setCourses] = useState('')
  const [imageUrl, setImageUrl] = useState('')
  const [loading, setLoading] = useState(true)
  const [loadingSubmit, setLoadingSubmit] = useState()
  const [message, setMessage] = useState('')


  useEffect(() => {
    setLoading(true)
    const USER_ID = getUserId()
    setUserId(USER_ID)
    http
      .get(GET_USER_DETAILS.replace('<USER_ID>', USER_ID))
      .then(response => {
        setLoading(false)
        const responseData = response.data.user_data
        setFirstName(responseData.firstname)
        setLastName(responseData.lastname)
        setEmail(responseData.email)
        setMobile(responseData.mobile)
        setWhatsapp(responseData.whatsapp)
        setGraduationYear(responseData.graduation_year)
        setCourse(responseData.preparing_for)
        setImageUrl(responseData.image_url)
      })

  }, [])

  const handleWhatsapp = (e) => {
    e.preventDefault();
    setWhatsapps(e.target.value)
  };

  const handleGraduationYear = (e) => {
    e.preventDefault();
    setGraduationYears(e.target.value)
  };

  const handleCourse = (e) => {
    e.preventDefault();
    setCourses(e.target.value)
  };

  const handleImage = (e) => {
    e.preventDefault();
    setLoadingSubmit(true)
    const formData = new FormData();
    formData.append('file', e.target.files[0])
    http
      .post(UPLOAD_IMAGE, formData, {
        headers: {
          user_id: userId
        }
      })
      .then(response => {
        setLoadingSubmit(false)
        const responseData = response.data.imageUrl
        setImageUrl(responseData)
        window.localStorage.setItem('imgUrl', responseData)
      })
      .catch(err => console.log(err))
  };

  const handleSubmit = () => {
    if (whatsapps && graduationYears && courses) {
      setLoadingSubmit(true)
      let userDetails = {
        whatsapp: whatsapps,
        graduation_year: graduationYears,
        course: courses
      }
      http
        .put(POST_USER_DETAILS.replace('<USER_ID>', userId), userDetails)
        .then(response => { 
          setMessage(response.data.message) 
          setLoadingSubmit(false)
          history.push('/user/home')
         })
        .catch(err => console.log(err))
    }
    else {
      alert.show('Please fill all Details')
    }
  }

  return (
    <>
      <UserNavBar />
      <div className="py-5">
        {
          !loading ?
            <div className="row">
              <div className="col-md-3">
                <div className="text-center">
                  {
                    imageUrl ?
                      <img src={imageUrl} style={{ width: '200px', height: '200px' }} className="avatar img-circle" alt="avatar" />
                      :
                      <img src="//placehold.it/200" className="avatar img-circle" alt="avatar" />
                  }
                  <div className="profile-image-container" onChange={handleImage}>
                    <label htmlFor="file-input">
                      {
                        !imageUrl ?
                          <div className="btn btn-secondary mt-2">Upload Images</div>
                          :
                          <div className="btn btn-info mt-2">Change Images</div>
                      }

                    </label>
                    <input id="file-input" type="file" />
                  </div>
                </div>
              </div>


              <div className="col-md-9 personal-info">
                <h3>Personal info</h3>

                <div className="form-group">
                  <label className="col-lg-3 control-label">First name</label>
                  <div className="col-lg-8">
                    <input className="form-control" type="text" value={firstName} disabled />
                  </div>
                </div>
                <div className="form-group">
                  <label className="col-lg-3 control-label">Last name</label>
                  <div className="col-lg-8">
                    <input className="form-control" type="text" value={lastName} disabled />
                  </div>
                </div>
                <div className="form-group">
                  <label className="col-lg-3 control-label">Mobile</label>
                  <div className="col-lg-8">
                    <input className="form-control" type="text" value={"+91 " + mobile} disabled />
                  </div>
                </div>
                <div className="form-group">
                  <label className="col-lg-3 control-label">Email</label>
                  <div className="col-lg-8">
                    <input className="form-control" type="text" value={email} disabled />
                  </div>
                </div>
                <div className="form-group">
                  <label className="col-lg-3 control-label">Whatsapp Number</label>
                  <div className="col-lg-8">
                    {
                      !whatsapp ?
                        <input className="form-control" type="number" value={whatsapps} onChange={handleWhatsapp} onInput={(e) => e.target.value = e.target.value.slice(0, 10)} />
                        :
                        <input className="form-control" type="text" value={"+91 " + whatsapp} disabled />
                    }
                  </div>
                </div>
                <div className="form-group">
                  <label className="col-lg-3 control-label">Graduation Year</label>
                  <div className="col-lg-8">
                    {
                      !graduationYear ?
                        <select className="form-control" onChange={handleGraduationYear} value={graduationYears}>
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

                        :
                        <select className="form-control" value={graduationYear} disabled>
                          <option value={graduationYear.toString} >{graduationYear}</option>
                        </select>
                    }
                  </div>
                </div>


                <div className="form-group">
                  <label className="col-lg-3 control-label">Course</label>
                  <div className="col-lg-8">
                    {
                      !course ?
                        <select className="form-control" onChange={handleCourse} value={courses}>
                          <option defaultValue>Select Course</option>
                          <option value="CGPSC">CGPSC</option>
                          <option value="CGACF">CGACF</option>
                        </select>
                        :
                        <select className="form-control" value={course} disabled>
                          <option value={course.toString} >{course}</option>
                        </select>
                    }
                  </div>
                </div>

                {
                  whatsapp && graduationYear && course ?
                    null
                    :
                    <div className="form-group">
                      <label className="col-md-3 control-label"></label>
                      <div className="col-md-8">
                        <button className="btn btn-primary" onClick={handleSubmit}>
                          Save Changes
              </button>
                      </div>
                    </div>
                }
              </div>
            </div>
            :
            <div className="d-flex justify-content-center">
              <div className="spinner-border" role="status">
                <span className="sr-only">Loading...</span>
              </div>
            </div>
        }
        {
          loadingSubmit ?
          <div style={{position:'absolute',transform:'translate(-50%,-50%)', top:'20%', left:'50%'}}>
            <div className="d-flex justify-content-center">
            <div className="spinner-border" role="status">
              <span className="sr-only">Loading...</span>
            </div>
          </div>
        </div>
        :
        null
        }

      </div>
    </>
  )
}
export default Profile