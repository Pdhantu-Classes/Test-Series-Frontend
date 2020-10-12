import React, { useState, useEffect } from "react";
import AdminNav from "./AdminNavBar";
import { getAllUser } from "../../containers/auth";
import UserGrid from './UserGrid'
import '../../css/UserCard.css'

const AllUser = () => {
  const [items, setItems] = useState([])
  const [pageNo, setPageNo] = useState(1);
  const [buttons, setButtons] = useState(0);
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {

    getAllUser(pageNo).then((res) => {
      let buttonsCount = Math.ceil(res.total / 20);
      setButtons(buttonsCount)
      setItems(res.user_data)
      setIsLoading(false)
    });
  }, [pageNo])

  useEffect(() => {
    if (pageNo >= 1) {
      setIsLoading(true)
      getAllUser(pageNo).then((res) => {
        setItems(res.user_data)
        setIsLoading(false)
      });
    }
  }, [pageNo]);

  console.log(pageNo)

  return (
    <>
      <AdminNav />
      <div style={{marginTop:"100px"}}>
      <div className="float-right mr-5 mt-2">Showing {pageNo} out of {buttons}</div>
      {
        isLoading ?
          <div style={{ position: 'absolute', transform: 'translate(-50%,-50%)', top: '20%', left: '50%' }}>
            <div className="d-flex justify-content-center">
              <div className="spinner-border" role="status">
                <span className="sr-only">Loading...</span>
              </div>
            </div>
          </div>
          :
          <div>
            <div class="container py-5 text-center">
              <div>
                <UserGrid isLoading={isLoading} items={items} />
              </div>
            </div>
            <div classNmme="row py-2">
              <nav aria-label="Page navigation example">
                <ul class="pagination justify-content-center">
                {
                    pageNo <= 1 ?
                    <li class="page-item disabled">
                      <p class="page-link" tabindex="-1"> First</p>
                    </li>
                  :
                    <li class="page-item" onClick={() => setPageNo(1)}>
                      <p class="page-link">First</p>
                    </li>
                  }
                  {
                    pageNo <= 1 ?
                    <li class="page-item disabled">
                      <p class="page-link" tabindex="-1">Previous</p>
                    </li>
                  :
                    <li class="page-item" onClick={() => setPageNo(pageNo-1)}>
                      <p class="page-link">Previous</p>
                    </li>
                  }

                  <li class="page-item active" onClick={() => setPageNo(pageNo)}><p class="page-link" >{pageNo}</p></li>
                  {
                    pageNo <= buttons -1 ?
                      <li class="page-item" onClick={() => setPageNo(pageNo+1)}><p class="page-link" >{pageNo+1}</p></li>
                    :
                      null
                  }
                  {
                    pageNo <= buttons -2 ?
                      <li class="page-item" onClick={() => setPageNo(pageNo+2)}><p class="page-link" >{pageNo+2}</p></li>
                    :
                      null
                  }
                  {
                    pageNo >= buttons ?
                    <li class="page-item disabled">
                      <p onClick={() => setPageNo(pageNo+1)} class="page-link">Next</p>
                    </li>
                    :
                    <li class="page-item">
                      <p onClick={() => setPageNo(pageNo+1)} class="page-link">Next</p>
                    </li>
                  }
                  {
                    pageNo <= buttons && pageNo >= buttons- 2 ?
                    <li class="page-item disabled">
                      <p class="page-link">Last</p>
                    </li>
                    :
                    <li class="page-item">
                    <p onClick={() => setPageNo(buttons-2)} class="page-link">Last</p>
                  </li>
                  }
                </ul>       
            </nav>
            </div>
          </div>
      }
      </div>
    </>
  );
};
export default AllUser;
