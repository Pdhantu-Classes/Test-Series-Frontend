import React, { useState, useEffect } from "react";
import AdminNav from "./AdminNavBar";
import { getAllUser } from "../../containers/auth";
import UserGrid from './UserGrid'
import '../../css/UserCard.css'
var pages = [];
const AllUser = () => {
  const [items, setItems] = useState([])
  const [pageNo, setPageNo] = useState(1);
  const [count, setCount] = useState(0);
  const [buttons, setButtons] = useState([]);
  const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
       
        getAllUser(pageNo).then((res) => {
            console.log(res);
            setCount(res.total);
            let buttonsCount = Math.ceil(res.total / 10);
            let btnArr = []
            for(let i=1; i<=buttonsCount; i++){
                btnArr.push(<li class="page-item" key={i} onClick={()=>setPageNo(i)}><button class="page-link">{i}</button></li>)
            }
            setItems(res.user_data)
            setIsLoading(false)
            setButtons(btnArr)
        });
    }, [])

  useEffect(() => {
    if(pageNo > 1) {
        setIsLoading(true)  
        getAllUser(pageNo).then((res) => {
            setItems(res.user_data)
            setIsLoading(false)
        });
    }
  }, [pageNo]);

  return (
    <>
      <AdminNav />
      <div class ="container py-5 text-center">
    <div>
      <UserGrid isLoading={isLoading} items={items} />
      </div>
      </div>
      <div classNmme=" row py-2">
      <nav className="py-2 d-flex  justify-content-center">
         <ul class="pagination">
         {buttons}
         </ul>
       </nav>
      </div>
     
    </>
  );
};
export default AllUser;
