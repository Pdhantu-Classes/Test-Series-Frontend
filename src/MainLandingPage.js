import React ,{useEffect}from 'react'
import {useHistory} from 'react-router-dom'
import {isTokenVaild} from './core/utility/authHeader'
export default function MainLandingPage() {
    const history =useHistory()

    useEffect(()=>{
        if(isTokenVaild()){
            history.push('/user/home')
        }else{
            history.push('/home')
        }
    
    },[history])
    return (
        <div>
            
        </div>
    )
}
