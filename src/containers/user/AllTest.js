import React from 'react'

import '../../css/AllTest.css'
import cgpscImage from '../../asset/CGPSC/cgpsc.png'
const Alltest=()=>{
    return(
        <div>
        
    <div className="mb-5 text-white">All Test</div>

    <div className="container mt-5">
      <div className="card-deck mb-3 text-center">
        <div className="card-md-4 mb-4 box-shadow border offset-md-2">
          <div className="card-header" style={{background:'linear-gradient(180deg, #FF8989 0%, rgba(255, 252, 253, 0) 96.35%)'}}>
            <h4 className="my-0 font-weight-normal">Free Mock</h4>
          </div>
          <div style={{marginLeft:'70%'}} className="text-success font-weight-bold"> Upcoming </div>
          <div className="card-body">
            <img style={{width:'300px'}} src ={cgpscImage} alt="banner"/>
            <ul className="list-unstyled mt-3 mb-4">
              <li style={{fontSize:'28px', fontWeight:'bold'}}>Paper 1</li>
              <li style={{fontSize:'20px'}}>Complete Syllabus</li>
              <li style={{fontSize:'20px'}}>Time: 1 hrs 30 mins</li>
            </ul>
            <button type="button" className="btn btn-lg btn-block btn-primary disabled">Start Test</button>
          </div>
        </div>
        <div className="card-md-4 mb-4 box-shadow offset-md-1 border">
        <div className="card-header" style={{background:'linear-gradient(180deg, #FF8989 0%, rgba(255, 252, 253, 0) 96.35%)'}}>
            <h4 className="my-0 font-weight-normal">Free Mock</h4>
          </div>
          <div style={{marginLeft:'70%'}} className="text-success font-weight-bold"> Upcoming </div>
          <div className="card-body">
            <img style={{width:'300px'}} src = {cgpscImage} alt="banner"/>
            <ul className="list-unstyled mt-3 mb-4">
              <li style={{fontSize:'28px',fontWeight:'bold'}}>Paper 2</li>
              <li style={{fontSize:'20px'}}>Complete Syllabus</li>
              <li style={{fontSize:'20px'}}>Time: 1 hrs 30 mins</li>
            </ul>
            <button type="button" className="btn btn-lg btn-block btn-primary disabled">Start Test</button>
          </div>
        </div>
      </div>
        </div>

        <div class="card offset-md-2 mb-5 card-width-package" style={{background:'linear-gradient(270.9deg, #FFBFBF 3.13%, rgba(255, 252, 253, 0) 95.62%)'}}>
            <div class="row no-gutters">
                <div class="col-sm-5">
                    <img class="card-img mt-4 ml-md-5 card-image-package" src={cgpscImage} alt="CGPSC"/>
                </div>
                <div class="col-sm-7">
                    <div class="card-body">
                        <h3 class="card-title">Pdhantu Test Series</h3>
                        <ul className="list-unstyled mt-3 mb-4">
                        <li style={{fontSize:'20px'}}><b>18</b> Mock Test</li>
                          <li style={{fontSize:'20px'}}><b>14</b> Subject-Wise Test</li>
                          <li style={{fontSize:'20px'}}><b>4</b> Modal Mock Test</li>
                          <li style={{fontSize:'20px'}}>Starts From <b>15th July</b></li>
                        </ul>
                        <button class="btn btn-primary mr-2">View Details</button>
                        <button class="btn btn-primary ml-md-3 ml-sm-5">Buy @ &#8377;240 only</button>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}
export default Alltest