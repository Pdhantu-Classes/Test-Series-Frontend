import React from 'react'
import {useHistory} from 'react-router-dom'

export default function TestInstruction() {
    const history = useHistory()
    return (
        <div>
            <button onClick={()=>{history.push('/user/testscreen')}}>Start Test</button>
        </div>
    )
}
