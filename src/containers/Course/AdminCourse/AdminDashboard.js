import React, { useState, useEffect } from "react";
import http from 'axios'
import { Link } from "react-router-dom";
import AdminNavBar from "../AdminCourse/AdminNavBar";
import { API_ENDPOINTS } from '../../../core/constants/apiConstantCourse'

const ADMIN_DASHBOARD = API_ENDPOINTS.ADMIN.ADMIN_DASHBOARD
const VIEW_CLASS_SCHEDULE = API_ENDPOINTS.ADMIN.VIEW_CLASS_SCHEDULE

const AdminDashBoard = () => {
  const [allPaidUserBatch1, setAllPaidUserBatch1] = useState(0);
  const [allPrelimsBatch1, setAllPrelimsBatch1] = useState(0);
  const [allPreMainsBatch1, setAllPreMainsBatch1] = useState(0);
  const [allMainsHindiBatch1, setAllMainsHindiBatch1] = useState(0);
  const [allMainsEnglishBatch1, setAllMainsEnglishBatch1] = useState(0);
  const [allPaidUserBatch2, setAllPaidUserBatch2] = useState(0);
  const [allPrelimsBatch2, setAllPrelimsBatch2] = useState(0);
  const [allPreMainsBatch2, setAllPreMainsBatch2] = useState(0);
  const [allMainsHindiBatch2, setAllMainsHindiBatch2] = useState(0);
  const [allMainsEnglishBatch2, setAllMainsEnglishBatch2] = useState(0);
  const [allPaidUserBatch3, setAllPaidUserBatch3] = useState(0);
  const [allPrelimsBatch3, setAllPrelimsBatch3] = useState(0);
  const [allPreMainsBatch3, setAllPreMainsBatch3] = useState(0);
  const [allMainsHindiBatch3, setAllMainsHindiBatch3] = useState(0);
  const [allMainsEnglishBatch3, setAllMainsEnglishBatch3] = useState(0);
  const [allPaidUserBatch4, setAllPaidUserBatch4] = useState(0);
  const [allPrelimsBatch4, setAllPrelimsBatch4] = useState(0);
  const [allPreMainsBatch4, setAllPreMainsBatch4] = useState(0);
  const [allMainsHindiBatch4, setAllMainsHindiBatch4] = useState(0);
  const [allMainsEnglishBatch4, setAllMainsEnglishBatch4] = useState(0);
  const [allBatch1, setAllBatch1] = useState(0);
  const [allBatch2, setAllBatch2] = useState(0);
  const [allBatch3, setAllBatch3] = useState(0);
  const [allBatch4, setAllBatch4] = useState(0);
  const [loading, setLoading] = useState(false);
  const [isLoading, setIsLoading] = useState(false);


  useEffect(() => {
    setLoading(true);
    http
    .get(ADMIN_DASHBOARD)
    .then(res=>{
        setAllPaidUserBatch1(res.data.paid_user_batch1);
        setAllPrelimsBatch1(res.data.prelims_batch1)
        setAllPreMainsBatch1(res.data.mains_batch1)
        setAllMainsHindiBatch1(res.data.mains_hindi_batch1)
        setAllMainsEnglishBatch1(res.data.mains_english_batch1)

        setAllPaidUserBatch2(res.data.paid_user_batch2);
        setAllPrelimsBatch2(res.data.prelims_batch2)
        setAllPreMainsBatch2(res.data.mains_batch2)
        setAllMainsHindiBatch2(res.data.mains_hindi_batch2)
        setAllMainsEnglishBatch2(res.data.mains_english_batch2)
        
        setAllPaidUserBatch3(res.data.paid_user_batch3);
        setAllPrelimsBatch3(res.data.prelims_batch3)
        setAllPreMainsBatch3(res.data.mains_batch3)
        setAllMainsHindiBatch3(res.data.mains_hindi_batch3)
        setAllMainsEnglishBatch3(res.data.mains_english_batch3)

        setAllPaidUserBatch4(res.data.paid_user_batch4);
        setAllPrelimsBatch4(res.data.prelims_batch4)
        setAllPreMainsBatch4(res.data.mains_batch4)
        setAllMainsHindiBatch4(res.data.mains_hindi_batch4)
        setAllMainsEnglishBatch4(res.data.mains_english_batch4)

        setAllBatch1(res.data.batch_1)
        setAllBatch2(res.data.batch_2)
        setAllBatch3(res.data.batch_3)
        setAllBatch3(res.data.batch_4)
        setLoading(false);
    })
    .catch(err=>console.log(err))

  }, []);

  const handleViewClassSchedule = ()=>{
    setIsLoading(true)
    http
        .get(VIEW_CLASS_SCHEDULE)
        .then(res=>{
            setIsLoading(false)
            let pdf = res.data.pdf_link
            window.location.href = pdf
        })
        .catch(err=> console.log(err))
  }


  return (
    <>
      <AdminNavBar />
      <div className="mt-5 pt-5 text-center">
         <Link to="/adminCourse/allUsersListBatch"><button className="btn btn-primary">All User List</button></Link> 
      </div>
      <div className="mt-3 text-center">
         <Link to="/adminCourse/manageUsers"><button className="btn btn-secondary">Manage Users</button></Link> 
      </div>
      <div className="mt-3 text-center">
         <Link to="/adminCourse/uploadClassSchedule"><button className="btn btn-success">Upload Class Schedule</button></Link> 
      </div>
      <div className="mt-3 text-center" onClick={handleViewClassSchedule}>
  <button className="btn btn-info">
    {
      !isLoading? 'View Class Schedule' : 'Loading'

    }
  </button>
      </div>
      {!loading ? (
        <div className="container mt-5 mb-5">

          <div className="text-center">
            <h2 className="font-weight-bold"><u>Batch 1</u></h2>
          </div>

          <div className="row text-center mt-3">
            <div
              className="col-lg-4 offset-lg-1 col-md-6 mt-5"
            >
              <div className="card bg-secondary">
                <div className="card-body py-5 " style={{ height: "35vh" }}>
                  <h3 className="text-white py-2">Total</h3>
                  <div className="display-2 text-white">{allBatch1}</div>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 offset-lg-1 mt-5"
            >
              <div className="card bg-success ">
                <div className="card-body py-5" style={{ height: "35vh" }}>
                  <h3 className="text-white py-2">Paid Users</h3>
                  <div className="display-2 text-white">{allPaidUserBatch1}</div>
                </div>
              </div>
            </div>
          </div>


          <div className="row text-center mt-5">
            <div
              className="col-lg-4 offset-lg-1 col-md-6 mt-5"
            >
              <div className="card bg-warning">
                <div className="card-body py-5 " style={{ height: "35vh" }}>
                  <h3 className="text-white py-2">Prelims</h3>
                  <div className="display-2 text-white">{allPrelimsBatch1}</div>
                </div>
              </div>
            </div>

            <div
              className="col-lg-4 col-md-6 offset-lg-1 mt-5"
            >
              <div className="card bg-info ">
                <div className="card-body py-5" style={{ height: "35vh" }}>
                  <h3 className="text-white py-2">Prelims+Mains</h3>
                  <div className="display-2 text-white">{allPreMainsBatch1}</div>
                </div>
              </div>
            </div>
          </div>

          <div className="row text-center mt-5">
            <div
              className="col-lg-4 offset-lg-1 col-md-6 mt-5"
            >
              <div className="card bg-primary">
                <div className="card-body py-5 " style={{ height: "35vh" }}>
                  <h3 className="text-white py-2">Mains(Hindi)</h3>
                  <div className="display-2 text-white">{allMainsHindiBatch1}</div>
                </div>
              </div>
            </div>

            <div
              className="col-lg-4 col-md-6 offset-lg-1 mt-5"
            >
              <div className="card bg-danger ">
                <div className="card-body py-5" style={{ height: "35vh" }}>
                  <h3 className="text-white py-2">Mains(English)</h3>
                  <div className="display-2 text-white">{allMainsEnglishBatch1}</div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-5">
            <h2 className="font-weight-bold"><u>Batch 2</u></h2>
          </div>

            <div className="row text-center mt-5">
              <div
                className="col-lg-4 col-md-6 offset-lg-1 mt-5"
                >
              <div className="card bg-danger ">
                <div className="card-body py-5" style={{ height: "35vh" }}>
                  <h3 className="text-white py-2">Total</h3>
                  <div className="display-2 text-white">{allBatch2}</div>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 offset-lg-1 mt-5"
            >
              <div className="card bg-info ">
                <div className="card-body py-5" style={{ height: "35vh" }}>
                  <h3 className="text-white py-2">Paid Users</h3>
                  <div className="display-2 text-white">{allPaidUserBatch2}</div>
                </div>
              </div>
            </div>     
          </div>

          <div className="row text-center mt-5">
            <div
                className="col-lg-4 col-md-6 offset-lg-1 mt-5"
              >
              <div className="card bg-warning ">
                <div className="card-body py-5" style={{ height: "35vh" }}>
                  <h3 className="text-white py-2">Mains(Hindi)</h3>
                  <div className="display-2 text-white">{allMainsHindiBatch2}</div>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 offset-lg-1 mt-5"
            >
              <div className="card bg-success ">
                <div className="card-body py-5" style={{ height: "35vh" }}>
                  <h3 className="text-white py-2">Prelims+Mains</h3>
                  <div className="display-2 text-white">{allPreMainsBatch2}</div>
                </div>
              </div>
            </div> 
          </div>

          <div className="row text-center mt-5">
          <div
              className="col-lg-4 col-md-6 offset-lg-1 mt-5"
            >
              <div className="card bg-secondary ">
                <div className="card-body py-5" style={{ height: "35vh" }}>
                  <h3 className="text-white py-2">Mains(English)</h3>
                  <div className="display-2 text-white">{allMainsEnglishBatch2}</div>
                </div>
              </div>
            </div>
            <div
                className="col-lg-4 col-md-6 offset-lg-1 mt-5"
              >
              <div className="card bg-primary ">
                <div className="card-body py-5" style={{ height: "35vh" }}>
                  <h3 className="text-white py-2">Prelims</h3>
                  <div className="display-2 text-white">{allPrelimsBatch2}</div>
                </div>
              </div>
            </div>  
          </div>


          <div className="text-center mt-5">
            <h2 className="font-weight-bold"><u>Batch 3</u></h2>
          </div>

            <div className="row text-center mt-5">
              <div
                className="col-lg-4 col-md-6 offset-lg-1 mt-5"
                >
              <div className="card bg-info ">
                <div className="card-body py-5" style={{ height: "35vh" }}>
                  <h3 className="text-white py-2">Total</h3>
                  <div className="display-2 text-white">{allBatch3}</div>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 offset-lg-1 mt-5"
            >
              <div className="card bg-danger ">
                <div className="card-body py-5" style={{ height: "35vh" }}>
                  <h3 className="text-white py-2">Paid Users</h3>
                  <div className="display-2 text-white">{allPaidUserBatch3}</div>
                </div>
              </div>
            </div>     
          </div>

          <div className="row text-center mt-5">
            <div
                className="col-lg-4 col-md-6 offset-lg-1 mt-5"
              >
              <div className="card bg-secondary ">
                <div className="card-body py-5" style={{ height: "35vh" }}>
                  <h3 className="text-white py-2">Mains(Hindi)</h3>
                  <div className="display-2 text-white">{allMainsHindiBatch3}</div>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 offset-lg-1 mt-5"
            >
              <div className="card bg-warning ">
                <div className="card-body py-5" style={{ height: "35vh" }}>
                  <h3 className="text-white py-2">Prelims+Mains</h3>
                  <div className="display-2 text-white">{allPreMainsBatch3}</div>
                </div>
              </div>
            </div> 
          </div>

          <div className="row text-center mt-5">
          <div
              className="col-lg-4 col-md-6 offset-lg-1 mt-5"
            >
              <div className="card bg-danger ">
                <div className="card-body py-5" style={{ height: "35vh" }}>
                  <h3 className="text-white py-2">Mains(English)</h3>
                  <div className="display-2 text-white">{allMainsEnglishBatch3}</div>
                </div>
              </div>
            </div>
            <div
                className="col-lg-4 col-md-6 offset-lg-1 mt-5"
              >
              <div className="card bg-success ">
                <div className="card-body py-5" style={{ height: "35vh" }}>
                  <h3 className="text-white py-2">Prelims</h3>
                  <div className="display-2 text-white">{allPrelimsBatch3}</div>
                </div>
              </div>
            </div>  
          </div>

          <div className="text-center mt-5">
            <h2 className="font-weight-bold"><u>Batch 4</u></h2>
          </div>

            <div className="row text-center mt-5">
              <div
                className="col-lg-4 col-md-6 offset-lg-1 mt-5"
                >
              <div className="card bg-info ">
                <div className="card-body py-5" style={{ height: "35vh" }}>
                  <h3 className="text-white py-2">Total</h3>
                  <div className="display-2 text-white">{allBatch4}</div>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 offset-lg-1 mt-5"
            >
              <div className="card bg-danger ">
                <div className="card-body py-5" style={{ height: "35vh" }}>
                  <h3 className="text-white py-2">Paid Users</h3>
                  <div className="display-2 text-white">{allPaidUserBatch4}</div>
                </div>
              </div>
            </div>     
          </div>

          <div className="row text-center mt-5">
            <div
                className="col-lg-4 col-md-6 offset-lg-1 mt-5"
              >
              <div className="card bg-secondary ">
                <div className="card-body py-5" style={{ height: "35vh" }}>
                  <h3 className="text-white py-2">Mains(Hindi)</h3>
                  <div className="display-2 text-white">{allMainsHindiBatch4}</div>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 offset-lg-1 mt-5"
            >
              <div className="card bg-warning ">
                <div className="card-body py-5" style={{ height: "35vh" }}>
                  <h3 className="text-white py-2">Prelims+Mains</h3>
                  <div className="display-2 text-white">{allPreMainsBatch4}</div>
                </div>
              </div>
            </div> 
          </div>

          <div className="row text-center mt-5">
          <div
              className="col-lg-4 col-md-6 offset-lg-1 mt-5"
            >
              <div className="card bg-danger ">
                <div className="card-body py-5" style={{ height: "35vh" }}>
                  <h3 className="text-white py-2">Mains(English)</h3>
                  <div className="display-2 text-white">{allMainsEnglishBatch4}</div>
                </div>
              </div>
            </div>
            <div
                className="col-lg-4 col-md-6 offset-lg-1 mt-5"
              >
              <div className="card bg-success ">
                <div className="card-body py-5" style={{ height: "35vh" }}>
                  <h3 className="text-white py-2">Prelims</h3>
                  <div className="display-2 text-white">{allPrelimsBatch4}</div>
                </div>
              </div>
            </div>  
          </div>


        </div>
      ) : (
          <div className="d-flex justify-content-center py-5">
            <div className="spinner-border" role="status">
              <span className="sr-only">Loading...</span>
            </div>
          </div>
        )}
    </>
  );
};
export default AdminDashBoard;
