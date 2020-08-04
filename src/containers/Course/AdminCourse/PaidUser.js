import React, { useState, useEffect } from 'react'
import http from 'axios'
import AdminNavBar from "../AdminCourse/AdminNavBar";
import { API_ENDPOINTS } from '../../../core/constants/apiConstantCourse'
import UserGrid from './UserGrid'

const PAID_USERS = API_ENDPOINTS.ADMIN.PAID_USERS

export default function PaidUser() {
    const [items, setItems] = useState([])
    const [pageNo, setPageNo] = useState(1);
    const [buttons, setButtons] = useState(0);
    const [isLoading, setIsLoading] = useState(true)
  
    useEffect(() => {
        http
            .get(PAID_USERS,{
                headers:{
                    page: pageNo 
                }
            })
            .then(res=>{
                let buttonsCount = Math.ceil(res.data.total / 20);
                setButtons(buttonsCount)
                setItems(res.data.user_data)
                setIsLoading(false)
            })
            .catch(err=>console.log(err))
    }, [pageNo])
  
    useEffect(() => {
      if (pageNo >= 1) {
        setIsLoading(true)
        http
        .get(PAID_USERS,{
            headers:{
                page: pageNo 
            }
        })
        .then(res=>{
            setItems(res.data.user_data)
            setIsLoading(false)
        })
        .catch(err=>console.log(err))
      }
    }, [pageNo]);

    console.log(items)

    return (
        <div>
             <AdminNavBar />
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
            <div class="container pt-5 mt-5 text-center">
              <div className="mt-5 pt-3">
                  {
                    items.length > 0 ?
                    <UserGrid isLoading={isLoading} items={items} />
                    :
                    null
                  }
                
              </div>
            </div>
            <div classNmme="row pt-5 mt-5">
              <nav aria-label="Page navigation example mt-5 pt-5">
                <ul class="pagination justify-content-center mt-5 pt-5">
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
    )
}


