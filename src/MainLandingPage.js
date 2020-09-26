import React ,{useEffect}from 'react'
import {useHistory} from 'react-router-dom'
import {isTokenVaild, isTestTokenVaild} from './core/utility/authHeader'
export default function MainLandingPage() {
    const history =useHistory()

    useEffect(()=>{
        if(isTokenVaild()){
            history.push('/user/home')
        }
        else if(isTestTokenVaild()){
            history.push('/user/testseries/home')
        }
        else{
            history.push('/home')
        }
    
    },[history])
    return (
        <div>
            
        </div>
    )
}
