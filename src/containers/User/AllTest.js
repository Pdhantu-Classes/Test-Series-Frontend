import React,{ useState, useEffect } from 'react'
import { useHistory } from "react-router"
import { useAlert, types } from 'react-alert'
import http from 'axios'
import '../../css/AllTest.css'
import { getUserId } from '../../core/utility/authHeader'
import PayButton from '../Payment'
import { API_ENDPOINTS } from '../../core/constants/apiConstant'
import testImage from '../../asset/CGPSC/Icon.svg'

const IS_PACKAGE_BUY = API_ENDPOINTS.USERS.IS_PACKAGE_BUY
const IS_USER_REGISTER  = API_ENDPOINTS.USERS.IS_USER_REGISTER

const testName = 'Pdhantu Test Series'

const Alltest = () => {

  const history = useHistory()
  const alert = useAlert()
  
  const [ loading, setLoading ] = useState(true)
  const [ isBuy, setIsBuy ] = useState()
  const [ isRegister, setIsRegister ] = useState()

    useEffect(() => {
      const USER_ID = getUserId()
      setLoading(true)
      http
        .get(IS_PACKAGE_BUY.replace('<USER_ID>', USER_ID))
        .then(response => {
          setLoading(false)
          const responseData = response.data.isValid
          setIsBuy(responseData)
          console.log(responseData);
        })

        http
        .get(IS_USER_REGISTER.replace('<USER_ID>', USER_ID))
        .then(response => {
          const responseRegister = response.data.isValid
          setIsRegister(responseRegister)
          console.log(responseRegister);
        })
  
    }, [])
    console.log(isRegister)

  const handleComplete = () =>{
    alert.show('Please Complete your Profile', { type: types.INFO })
    setTimeout(() => {
      history.push('/user/profile')
    }, 2000)
  }
  return (
    <div>

      <div className="mb-5 text-white">All Test</div>
      <div className="container mt-5"></div>
    {
      !loading?
      <div className="card offset-md-2 offset-xs-2  offset-lg-3 mb-5 card-width-package" style={{ background: 'linear-gradient(270.9deg, #FFBFBF 3.13%, rgba(255, 252, 253, 0) 95.62%)' }}>
        <div className="row no-gutters">
          <div className="col-sm-4">
            <img className="card-img mt-4 ml-md-5 ml-sm-5 ml-lg-5 card-image-package" src={testImage} alt="TESTICON" />
          </div>
          <div className="col-sm-8">
            <div className="card-body">
              <h3 className="card-title">{testName}</h3>
              <ul className="list-unstyled mt-3 mb-4">
                <li style={{ fontSize: '20px' }}><b>18</b> Mock Test</li>
                <li style={{ fontSize: '20px' }}><b>14</b> Subject-Wise Test</li>
                <li style={{ fontSize: '20px' }}><b>4</b> Modal Mock Test</li>
                <li style={{ fontSize: '20px' }}>Starts From <b>15th July</b></li>
              </ul>
              {
              isBuy ? <button className="btn btn-info" onClick={() => { history.push('/user/dashboard') }}>Go to Dashboard</button>
              :
              <div>
                <button className="btn btn-primary mr-2" onClick={() => { history.push('/user/home/viewdetails') }}>View Details</button>
                {
                  isRegister?
                    <PayButton testName={testName} />
                  :
                  <button class="btn btn-primary ml-md-3 ml-sm-5" onClick={handleComplete}>Buy @ &#8377;240 only</button>
                }
               
              </div>
              }

            </div>
          </div>
        </div>
      </div>
      :
      <div className="d-flex justify-content-center">
        <div className="spinner-border" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    }

    </div>
  )
}
export default Alltest