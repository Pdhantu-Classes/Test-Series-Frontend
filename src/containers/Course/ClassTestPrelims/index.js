import React from 'react'
import { useHistory } from 'react-router-dom'
import UserNavBar from '../UserNavBar'
export default function ClassTestPrelims() {

    const history = useHistory()

    const handleClickClassTest = ()=>{
        history.push('/user/course/classTestPrelimsChoose')
    }
    return (
        <div>
            <UserNavBar />
            <div className="offset-lg-3 offset-sm-0 offset-xs-0 mt-5 pt-5 container">
                <div className="row text-center">
                    <div
                        className="ccol-lg-4 col-md-6 mt-5"
                        onClick={handleClickClassTest}
                    >
                        <div className="card bg-info ">
                            <div className="card-body py-5 " style={{ height: "35vh" }}>
                                <div className="py-5 text-white" style={{ fontSize: "45px" }}>Prelims</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
