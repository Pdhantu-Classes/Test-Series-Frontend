import React from 'react'

import '../../css/AllTest.css'
import cgpscImage from '../../asset/CGPSC/cgpsc.png'
import { useHistory, Redirect } from "react-router"
import PayButton from '../Payment'
const testName= 'Pdhantu Test Series'
const Alltest=()=>{
  const history = useHistory()
  
  const handleClick =() =>{
    console.log('button')
   return <Redirect to="/user/viewdetail" />
  }
    return(
        <div>
        
    <div className="mb-5 text-white">All Test</div>

    <div className="container mt-5">
      {}
        </div>

        <div class="card offset-md-2 offset-lg-3 mb-5 card-width-package" style={{background:'linear-gradient(270.9deg, #FFBFBF 3.13%, rgba(255, 252, 253, 0) 95.62%)'}}>
            <div class="row no-gutters">
                <div class="col-sm-5">
                    <img class="card-img mt-4 ml-md-5 card-image-package" src={cgpscImage} alt="CGPSC"/>
                </div>
                <div class="col-sm-7">
                    <div class="card-body">
                        <h3 class="card-title">{testName}</h3>
                        <ul className="list-unstyled mt-3 mb-4">
                        <li style={{fontSize:'20px'}}><b>18</b> Mock Test</li>
                          <li style={{fontSize:'20px'}}><b>14</b> Subject-Wise Test</li>
                          <li style={{fontSize:'20px'}}><b>4</b> Modal Mock Test</li>
                          <li style={{fontSize:'20px'}}>Starts From <b>15th July</b></li>
                        </ul>
                        <button class="btn btn-primary mr-2" onClick={()=>{history.push('/user/home/viewdetails')}}>View Details</button>
                        <PayButton testName={testName}/>
                        {/* <button class="btn btn-primary ml-md-3 ml-sm-5">Buy @ &#8377;240 only</button> */}
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}
export default Alltest