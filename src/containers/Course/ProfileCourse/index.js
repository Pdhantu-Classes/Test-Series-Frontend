import React, { useState, useEffect } from "react";
import http from "axios";
import { useHistory } from "react-router";
import { useAlert } from "react-alert";
import { API_ENDPOINTS } from "../../../core/constants/apiConstantCourse";
import "../../../css/Profile.css";
import { getUserId } from "../../../core/utility/authHeader";
import UserNavBar from "../UserNavBar";

const UPLOAD_IMAGE = API_ENDPOINTS.USERS.UPLOAD_IMAGE;
const GET_USER_DETAILS = API_ENDPOINTS.USERS.GET_USER_DETAILS;
const POST_USER_DETAILS = API_ENDPOINTS.USERS.POST_USER_DETAILS;

const Profile = () => {
  const alert = useAlert();
  const history = useHistory();
  const [userId, setUserId] = useState();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [mobile, setMobile] = useState();
  const [email, setEmail] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [whatsapps, setWhatsapps] = useState("");
  const [graduationYear, setGraduationYear] = useState("");
  const [graduationYears, setGraduationYears] = useState("");
  const [course, setCourse] = useState("");
  const [courses, setCourses] = useState("");
  const [dob, setDob] = useState("");
  const [dobs, setDobs] = useState("");
  const [gender, setGender] = useState("");
  const [genders, setGenders] = useState("");
  const [medium, setMedium] = useState("");
  const [mediums, setMediums] = useState("");
  const [fathersName, setFathersName] = useState("");
  const [fathersNames, setFathersNames] = useState("");
  const [address, setAddress] = useState("");
  const [addresss, setAddresss] = useState("");
  const [pincode, setPincode] = useState("");
  const [pincodes, setPincodes] = useState("");
  const [occupation, setOccupation] = useState("");
  const [occupations, setOccupations] = useState("");
  const [qualification, setQualification] = useState("");
  const [qualifications, setQualifications] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [loading, setLoading] = useState(true);
  const [loadingSubmit, setLoadingSubmit] = useState();

  useEffect(() => {
    setLoading(true);
    const USER_ID = getUserId();
    setUserId(USER_ID);
    http
      .get(GET_USER_DETAILS.replace("<USER_ID>", USER_ID))
      .then((response) => {
        setLoading(false);
        const responseData = response.data.user_data;
        setFirstName(responseData.firstname);
        setLastName(responseData.lastname);
        setEmail(responseData.email);
        setMobile(responseData.mobile);
        setWhatsapp(responseData.whatsapp);
        setGraduationYear(responseData.graduation_year);
        setCourse(responseData.courses);
        setImageUrl(responseData.image_url);
        setFathersName(responseData.fathers_name);
        setDob(responseData.dob);
        setGender(responseData.gender);
        setMedium(responseData.medium);
        setOccupation(responseData.occupation);
        setAddress(responseData.address);
        setPincode(responseData.pincode);
        setQualification(responseData.qualification);
      });
  }, []);

  const handleWhatsapp = (e) => {
    e.preventDefault();
    setWhatsapps(e.target.value);
  };

  const handleGraduationYear = (e) => {
    e.preventDefault();
    setGraduationYears(e.target.value);
  };

  const handleCourse = (e) => {
    e.preventDefault();
    setCourses(e.target.value);
  };

  const handleDob = (e) => {
    e.preventDefault();
    setDobs(e.target.value);
  };

  const handleGender = (e) => {
    e.preventDefault();
    setGenders(e.target.value);
  };

  const handleMedium = (e) => {
    e.preventDefault();
    setMediums(e.target.value);
  };

  const handleFatherName = (e) => {
    e.preventDefault();
    setFathersNames(e.target.value);
  };

  const handleAddress = (e) => {
    e.preventDefault();
    setAddresss(e.target.value);
  };

  const handlePincode = (e) => {
    e.preventDefault();
    setPincodes(e.target.value);
  };

  const handleQualication = (e) => {
    e.preventDefault();
    setQualifications(e.target.value);
  };

  const handleOccupation = (e) => {
    e.preventDefault();
    setOccupations(e.target.value);
  };

  const handleImage = (e) => {
    e.preventDefault();
    setLoadingSubmit(true);
    const formData = new FormData();
    formData.append("file", e.target.files[0]);
    http
      .post(UPLOAD_IMAGE, formData, {
        headers: {
          user_id: userId,
        },
      })
      .then((response) => {
        setLoadingSubmit(false);
        const responseData = response.data.imageUrl;
        setImageUrl(responseData);
        window.localStorage.setItem("imgUrl", responseData);
      })
      .catch((err) => console.log(err));
  };

  const handleSubmit = () => {
    if (whatsapps && graduationYears && courses) {
      setLoadingSubmit(true);
      let userDetails = {
        whatsapp: whatsapps,
        graduation_year: graduationYears,
        course: courses,
        dob: dobs,
        fathers_name: fathersNames,
        qualification: qualifications,
        occupation: occupations,
        address: addresss,
        pincode: pincodes,
        gender: genders,
        medium: mediums,
      };
      http
        .put(POST_USER_DETAILS.replace("<USER_ID>", userId), userDetails)
        .then((response) => {
          setLoadingSubmit(false);
          history.push("/user/home");
        })
        .catch((err) => console.log(err));
    } else {
      alert.show("Please fill all Details");
    }
  };

  return (
    <>
      <UserNavBar />
      <div className="py-5">
        {!loading ? (
          <div className="row">
            <div className="col-md-3">
              <div className="text-center">
                {imageUrl ? (
                  <img
                    src={imageUrl}
                    style={{ width: "200px", height: "200px" }}
                    className="avatar img-circle"
                    alt="avatar"
                  />
                ) : (
                    <img
                      src="//placehold.it/200"
                      className="avatar img-circle"
                      alt="avatar"
                    />
                  )}
                <div className="profile-image-container" onChange={handleImage}>
                  <label htmlFor="file-input">
                    {!imageUrl ? (
                      <div className="btn btn-secondary mt-2">
                        Upload Images
                      </div>
                    ) : (
                        <div className="btn btn-info mt-2">Change Images</div>
                      )}
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
                  <input
                    className="form-control"
                    type="text"
                    value={firstName}
                    disabled
                  />
                </div>
              </div>

              <div className="form-group">
                <label className="col-lg-3 control-label">Last name</label>
                <div className="col-lg-8">
                  <input
                    className="form-control"
                    type="text"
                    value={lastName}
                    disabled
                  />
                </div>
              </div>

              <div className="form-group">
                <label className="col-lg-3 control-label">Mobile</label>
                <div className="col-lg-8">
                  <input
                    className="form-control"
                    type="text"
                    value={"+91 " + mobile}
                    disabled
                  />
                </div>
              </div>

              <div className="form-group">
                <label className="col-lg-3 control-label">Email</label>
                <div className="col-lg-8">
                  <input
                    className="form-control"
                    type="text"
                    value={email}
                    disabled
                  />
                </div>
              </div>

              <div className="form-group">
                <label className="col-lg-3 control-label">
                  Whatsapp Number
                </label>
                <div className="col-lg-8">
                  {!whatsapp ? (
                    <input
                      className="form-control"
                      type="number"
                      value={whatsapps}
                      onChange={handleWhatsapp}
                      onInput={(e) =>
                        (e.target.value = e.target.value.slice(0, 10))
                      }
                    />
                  ) : (
                      <input
                        className="form-control"
                        type="text"
                        value={"+91 " + whatsapp}
                        disabled
                      />
                    )}
                </div>
              </div>

              <div className="form-group">
                <label className="col-lg-3 control-label">Date of Birth</label>
                <div className="col-lg-8">
                  {!dob ? (
                    <input
                      className="form-control"
                      type="date"
                      value={dobs}
                      onChange={handleDob}
                    />
                  ) : (
                      <input
                        className="form-control"
                        type="text"
                        value={dob}
                        disabled
                      />
                    )}
                </div>
              </div>

              <div className="form-group">
                <label className="col-lg-3 control-label">Gender</label>
                <div className="col-lg-8">
                  {!gender ? (
                    <select
                      className="form-control"
                      onChange={handleGender}
                      value={genders}
                    >
                      <option defaultValue>Select Gender</option>
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                      <option value="Others">Others</option>
                    </select>
                  ) : (
                      <select className="form-control" value={gender} disabled>
                        <option value={gender.toString()}>{gender}</option>
                      </select>
                    )}
                </div>
              </div>

              <div className="form-group">
                <label className="col-lg-3 control-label">Father's Name</label>
                <div className="col-lg-8">
                  {!fathersName ? (
                    <input
                      className="form-control"
                      type="text"
                      value={fathersNames}
                      onChange={handleFatherName}
                    />
                  ) : (
                      <input
                        className="form-control"
                        type="text"
                        value={fathersName}
                        disabled
                      />
                    )}
                </div>
              </div>

              <div className="form-group">
                <label className="col-lg-3 control-label">Occupation</label>
                <div className="col-lg-8">
                  {!occupation ? (
                    <input
                      className="form-control"
                      type="text"
                      value={occupations}
                      onChange={handleOccupation}
                    />
                  ) : (
                      <input
                        className="form-control"
                        type="text"
                        value={occupation}
                        disabled
                      />
                    )}
                </div>
              </div>

              <div className="form-group">
                <label className="col-lg-3 control-label">Address</label>
                <div className="col-lg-8">
                  {!address ? (
                    <input
                      className="form-control"
                      type="text"
                      value={addresss}
                      onChange={handleAddress}
                    />
                  ) : (
                      <input
                        className="form-control"
                        type="text"
                        value={address}
                        disabled
                      />
                    )}
                </div>
              </div>

              <div className="form-group">
                <label className="col-lg-3 control-label">Pin Code</label>
                <div className="col-lg-8">
                  {!pincode ? (
                    <input
                      className="form-control"
                      type="text"
                      value={pincodes}
                      onChange={handlePincode}
                      onInput={(e) =>
                        (e.target.value = e.target.value.slice(0, 6))
                      }
                    />
                  ) : (
                      <input
                        className="form-control"
                        type="text"
                        value={pincode}
                        disabled
                      />
                    )}
                </div>
              </div>

              <div className="form-group">
                <label className="col-lg-3 control-label">Qualification</label>
                <div className="col-lg-8">
                  {!qualification ? (
                    <input
                      className="form-control"
                      type="text"
                      value={qualifications}
                      onChange={handleQualication}
                    />
                  ) : (
                      <input
                        className="form-control"
                        type="text"
                        value={qualification}
                        disabled
                      />
                    )}
                </div>
              </div>

              <div className="form-group">
                <label className="col-lg-3 control-label">
                  Graduation Year
                </label>
                <div className="col-lg-8">
                  {!graduationYear ? (
                    <select
                      className="form-control"
                      onChange={handleGraduationYear}
                      value={graduationYears}
                    >
                      <option defaultValue>Select Year</option>
                      <option value="1980">1980</option>
                      <option value="1981">1981</option>
                      <option value="1982">1982</option>
                      <option value="1983">1983</option>
                      <option value="1984">1984</option>
                      <option value="1985">1985</option>
                      <option value="1986">1986</option>
                      <option value="1987">1987</option>
                      <option value="1988">1988</option>
                      <option value="1989">1989</option>
                      <option value="1990">1990</option>
                      <option value="1991">1991</option>
                      <option value="1992">1992</option>
                      <option value="1993">1993</option>
                      <option value="1994">1994</option>
                      <option value="1995">1995</option>
                      <option value="1996">1996</option>
                      <option value="1997">1997</option>
                      <option value="1998">1998</option>
                      <option value="1999">1999</option>
                      <option value="2000">2000</option>
                      <option value="2001">2001</option>
                      <option value="2002">2002</option>
                      <option value="2003">2003</option>
                      <option value="2004">2004</option>
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
                  ) : (
                      <select
                        className="form-control"
                        value={graduationYear}
                        disabled
                      >
                        <option value={graduationYear.toString()}>
                          {graduationYear}
                        </option>
                      </select>
                    )}
                </div>
              </div>

              <div className="form-group">
                <label className="col-lg-3 control-label">Course</label>
                <div className="col-lg-8">
                  {!course ? (
                    <select
                      className="form-control"
                      onChange={handleCourse}
                      value={courses}
                    >
                      <option defaultValue>Select Course</option>
                      <option value="1">CGPSC Prelims</option>
                      <option value="2">CGPSC Prelims + Mains</option>
                    </select>
                  ) : (
                      <select className="form-control" value={course} disabled>
                        <option value={course.toString()}>{course}</option>
                      </select>
                    )}
                </div>
              </div>

              <div className="form-group">
                <label className="col-lg-3 control-label">Medium</label>
                <div className="col-lg-8">
                  {!medium ? (
                    <select
                      className="form-control"
                      onChange={handleMedium}
                      value={mediums}
                    >
                      <option defaultValue>Select Language Medium</option>
                      <option value="Hindi">Hindi</option>
                      <option value="English">English</option>
                    </select>
                  ) : (
                      <select className="form-control" value={medium} disabled>
                        <option value={medium.toString()}>{medium}</option>
                      </select>
                    )}
                </div>
              </div>

              {whatsapp &&
                graduationYear &&
                course &&
                medium &&
                fathersName &&
                gender &&
                dob ? null : (
                  <div className="form-group">
                    <label className="col-md-3 control-label"></label>
                    <div className="col-md-8">
                      <button className="btn btn-primary" onClick={handleSubmit}>
                        Submit
                    </button>
                    </div>
                  </div>
                )}
            </div>
          </div>
        ) : (
            <div className="d-flex justify-content-center">
              <div className="spinner-border" role="status">
                <span className="sr-only">Loading...</span>
              </div>
            </div>
          )}
        {loadingSubmit ? (
          <div
            style={{
              position: "absolute",
              transform: "translate(-50%,-50%)",
              top: "20%",
              left: "50%",
            }}
          >
            <div className="d-flex justify-content-center">
              <div className="spinner-border" role="status">
                <span className="sr-only">Loading...</span>
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </>
  );
};
export default Profile;
