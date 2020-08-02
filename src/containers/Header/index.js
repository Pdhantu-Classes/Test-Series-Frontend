import React ,{useState} from 'react'
import Modal from "react-bootstrap/Modal";
import { Link, withRouter } from 'react-router-dom'
import logo from '../../asset/UI-Content/logo.jpeg'
import "../../css/LandingPage.css"

const isActive = (history, path) => {

  if (history.location.hash === path) {
    return { color: "blue" };
  } else {
    return { color: "black" };
  }
};

const Menu = ({ history }) => {
  const isToken = false
  const [showSignIn, setShowSignIn] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);
  const handleCloseSignUp = () => setShowSignUp(false);
  const handleCloseSignIn = () => setShowSignIn(false);
  const handleShowSignIn = () => setShowSignIn(true);
  const handleShowSignUp = () => setShowSignUp(true)

  return (
    <nav className="navbar navbar-expand-md navbar-light fixed-top py-4">
       <Modal show={showSignIn} onHide={handleCloseSignIn}>
        <Modal.Header closeButton>
          <Modal.Title>Select Option</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="d-flex justify-content-center">
           
              <Link to='/signupSeries'><button className="btn btn-secondary" onClick={handleCloseSignIn}>
                Test Series
              </button></Link>
            
            <Link to="/signupCourse" >
              <button className="btn btn-primary ml-5 " onClick={handleCloseSignIn}>
                Course
              </button>
            </Link>
          </div>
        </Modal.Body>
      </Modal>
      <Modal show={showSignUp} onHide={handleCloseSignUp}>
        <Modal.Header closeButton>
          <Modal.Title>Select Option</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="d-flex justify-content-center">
            <Link to='/loginSeries'>
              <button className="btn btn-secondary" onClick={handleCloseSignUp}>
                Test Series
              </button>
            </Link>
            <Link to='/loginCourse'>
              <button className="btn btn-primary ml-5 " onClick={handleCloseSignUp}>
                Course
              </button>
            </Link>
          </div>
        </Modal.Body>
      </Modal>
      <div className='container'>
        <a href="/" className='navbar-brand'>
          <img src={logo} width="50" height="50" alt="" /><h3 className="d-inline align-middle">The Pdhantu Classes</h3>
        </a>
        <button className="navbar-toggler" data-toggle="collapse" data-target="#navbarNav"><span className="navbar-toggler-icon"></span></button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a href="#about" style={isActive(history, "#about")} className="nav-link">About</a>
            </li>
            <li className="nav-item">
              <a href="#authors" style={isActive(history, "#authors")} className="nav-link">Meet The Teachers</a>
            </li>
            <li className="nav-item">
              <a href='#videos' style={isActive(history, "#videos")} className='nav-link'>Videos</a>
            </li>
            <li className="nav-item">
              <a href="#contact" style={isActive(history, "#contact")} className="nav-link">Contact</a>
            </li>

            {!isToken && <li className="nav-item">
              <button type="button" className="btn btn-primary pt-2 mt-1" onClick={handleShowSignIn}>Sign Up</button>
            </li>}
            {!isToken && <li className="nav-item">
              <button type="button" className="btn btn-primary pt-2 mt-1" onClick={handleShowSignUp}>Sign In</button>
            </li>}
          </ul>
        </div>
      </div>
    </nav>
  )
}
export default withRouter(Menu)