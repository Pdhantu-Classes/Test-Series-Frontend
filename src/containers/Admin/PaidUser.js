import React, { useState, useEffect } from "react";
import AdminNav from "./AdminNavBar";
import { getPaidUser } from "../../containers/auth";
import UserGrid from './UserGrid'
import '../../css/UserCard.css'

const PaidUser = () => {
  const [items, setItems] = useState([])
  const [pageNo, setPageNo] = useState(1);
  const [buttons, setButtons] = useState([]);
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {

    getPaidUser(pageNo).then((res) => {
      console.log(res);
      let buttonsCount = Math.ceil(res.total / 12);
      let btnArr = []
      for (let i = 1; i <= buttonsCount; i++) {
        btnArr.push(<li class="page-item" key={i} onClick={() => setPageNo(i)}><button class="page-link">{i}</button></li>)
      }
      setItems(res.user_data)
      setIsLoading(false)
      setButtons(btnArr)
    });
  }, [pageNo])

  useEffect(() => {
    if (pageNo >= 1) {
      setIsLoading(true)
      getPaidUser(pageNo).then((res) => {
        setItems(res.user_data)
        setIsLoading(false)
      });
    }
  }, [pageNo]);

  return (
    <>
      <AdminNav />
      <div className="float-right mr-5 mt-2">Showing {pageNo} out of {buttons.length}</div>
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
              <nav className="py-2 d-flex justify-content-center">
                <ul class="pagination">
                  {buttons}
                </ul>
              </nav>
            </div>
          </div>
      }
    </>
  );
};
export default PaidUser;


// import React, { useState, useEffect } from "react";
// import AdminNav from "./AdminNavBar";
// import { getAllUser } from "../../containers/auth";
// import UserGrid from './UserGrid'
// import '../../css/UserCard.css'

// const AllUser = () => {
  
// export default AllUser;
