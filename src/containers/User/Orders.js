import React,{useEffect} from 'react'
import UserNavBar from './UserNavBar'
const Orders=()=>{
    
    return(
        <>
        <UserNavBar />
        <div className="py-5">
        <div class="card offset-md-2 offset-lg-3 mb-5" style={{background:'linear-gradient(270.9deg, #FFBFBF 3.13%, rgba(255, 252, 253, 0) 95.62%)',width:'600px'}}>
            <div class="row no-gutters">
                <div class="col-sm-7 ">
                    <div class="card-body">
                        <h3 class="card-title">Pdhantu Test Series</h3>
                        <ul className="list-unstyled mt-3 mb-4">
                        <li style={{fontSize:'20px'}}><b>18</b> Mock Test</li>
                          <li style={{fontSize:'20px'}}><b>14</b> Subject-Wise Test</li>
                         
                        </ul>
                      
                       
                        {/* <button class="btn btn-primary ml-md-3 ml-sm-5">Buy @ &#8377;240 only</button> */}
                    </div>
                </div>
            </div>
        </div>
        </div>
        </>
    )
}
export default Orders