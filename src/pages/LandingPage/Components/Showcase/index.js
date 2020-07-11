import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import "../../../../css/LandingPage.css";
import { Link } from "react-router-dom";

function Showcase() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <section id="showcase" className="py-5 d-none d-lg-block">
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Language</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="d-flex justify-content-center">
            <Link to="syllabus/syllabus_english.pdf" target="blank" download>
              <button className="btn btn-secondary ml-5" onClick={handleClose}>
                English
              </button>
            </Link>
            <Link to="syllabus/syllabus_hindi.pdf" target="blank" download>
              <button className="btn btn-secondary ml-5 " onClick={handleClose}>
                Hindi
              </button>
            </Link>
          </div>
        </Modal.Body>
      </Modal>
      <div className="primary-overlay text-white ">
        <div className="container ">
          <div className="row">
            <div className="col-lg-6 text-center">
              <h4 className="display-3 mt-5 pt-5">So What You Dream Of...</h4>
              <blockquote className="blockquote text-center">
                <p className="mb-0">
                  The only hurdle in achieving your dream is YOU
                </p>
                <footer className="blockquote-footer text-white">
                  Pdhantu Gurus
                </footer>
              </blockquote>
            </div>
            <div className="col-lg-6 py-5 my-5">
              <div className="box-shadow rounded text-center  d-none d-lg-block">
                <div
                  className="card text-center"
                  style={{
                    background:
                      "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(0,212,255,1) 0%, rgba(179,223,211,1) 0%",
                    height: "320px",
                  }}
                >
                  <div className="card-body">
                    <h3 className="p-3 text-dark py-4">
                      The Pdhantu Test Series
                    </h3>
                    <h3 className="text-dark">Starts on 15th july</h3>
                    <h3 className="text-dark">Stay Tuned For More Updates</h3>
                    <div className="d-flex mt-4 ml-5">
                      <Link to="/testViewDetails">
                        <button className="btn btn-primary btn-lg ml-4 mr-2">
                          Test Series Schedule
                        </button>
                      </Link>
                      <button
                        className="btn btn-primary btn-lg ml-4"
                        onClick={handleShow}
                      >
                        {" "}
                        Detailed Syllabus
                      </button>
                    </div>
                    <Link to="/signup" className="nav-link">
                      <button className="btn btn-secondary btn-lg mt-2">
                        Sign Up For Test
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Showcase;
