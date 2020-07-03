import React from 'react'
import UserNavBar from '../User/UserNavBar'
import timetable from '../../asset/timetable.jpeg'
const viewDetails =() =>{
    return(
        <>
        <UserNavBar />
        <div className="container text-center py-5">
        <div className="info-header mb-5">
            <h1 className="text-primary pb-3">
              Test Schedule
            </h1>
           
          </div>
          <img src={timetable} style={{height : '800px',width:'600px'}} alt=''/>
        </div>
        </>
    )
}
export default viewDetails