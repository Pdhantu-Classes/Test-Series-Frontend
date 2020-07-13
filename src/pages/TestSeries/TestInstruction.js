import React,{useEffect} from 'react'
import {useHistory} from 'react-router-dom'

export default function TestInstruction() {
    const history = useHistory()
    
    const startTest =() =>{
        window.open('http://localhost:3000/user/testscreen','_blank','toolbar=0,fullscreen=1')
    }
    return (
        <div>
            <button onClick={startTest}>Start Test</button>
        </div>
    )
}
