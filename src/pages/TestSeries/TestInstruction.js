import React,{useState} from 'react'
import http from 'axios'
import { Link } from 'react-router-dom'
import { useAlert, types } from 'react-alert'
import { getUserId } from "../../core/utility/authHeader";
// import {useHistory} from 'react-router-dom'
import { API_ENDPOINTS } from '../../core/constants/apiConstant'

const CHECK_TEST_ATTEMPTED = API_ENDPOINTS.TEST_SERIES.CHECK_TEST_ATTEMPTED

export default function TestInstruction() {
    // const history = useHistory()
    const alert = useAlert()

    const [ loading , setLoading ] = useState(false)
    
    const startTest =() =>{
        setLoading(true)
        http
            .get(CHECK_TEST_ATTEMPTED,{
                headers:{
                    user_id:getUserId()
                }
            })
            .then(res=>{
                setLoading(false)
                if(res.data.isValid){
                    window.open('http://localhost:3000/user/testscreen','_blank','toolbar=0,fullscreen=1')
                }
                else{
                    alert.show('You Already Attempted the Test', { type: types.ERROR })
                }
            })

       
    }
    return (
        <div>
            {
                loading?            
                <div className="d-flex justify-content-center">
                    <div className="spinner-border" role="status">
                    <   span className="sr-only">Loading...</span>
                    </div>
                </div>
                :
                    null
            }
            <button className="btn btn-success" onClick={startTest}>Start Test</button>
           <Link to="/user/dashboard"><button className="btn btn-primary">Go to Dashboard</button></Link> 
        </div>
    )
}
