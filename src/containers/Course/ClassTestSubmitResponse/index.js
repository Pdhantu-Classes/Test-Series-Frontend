import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function ClassTestSubmitResponse() {
    useEffect(() => {
        window.history.pushState(null, document.title, window.location.href);
        window.addEventListener('popstate', function (event) {
          window.history.pushState(null, document.title, window.location.href);
        });
      }, [])
   
        return (
            <div className="container">
               <div className="display-4"> Your Response has been Submitted Go To</div>
                <Link to='/user/course/classTestPrelimsChoose'><button  className="btn btn-primary offset-5">Dashboard</button></Link>
            </div>
        )
}
