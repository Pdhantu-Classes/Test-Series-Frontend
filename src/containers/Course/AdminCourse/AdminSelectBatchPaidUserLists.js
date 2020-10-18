import React from 'react'
import { useHistory } from "react-router-dom";

export default function AdminSelectBatchPaidUserLists() {
    const history = useHistory()

    const handleClick = (batch)=>{
        window.localStorage.setItem("batch", batch)
        history.push('/adminCourse/paidUserList')
    }
    return (
        <div className="container mt-5 pt-5 mb-5">
        <div className="text-center">
            <h3>Select Batch</h3>
        </div>

        <div className="row text-center mt-5">
            <div
                className="col-lg-4 offset-lg-1 col-md-6 mt-5"
            >
                <div className="card bg-secondary" onClick={() => { handleClick(1) }}>
                    <div className="card-body py-4 " style={{ height: "25vh" }}>
                        <div className="py-5 text-white" style={{ fontSize: "45px" }}>Batch-1</div>
                    </div>
                </div>
            </div>

            <div
                className="col-lg-4 col-md-6 offset-lg-1 mt-5"
            >
                <div className="card bg-success " onClick={() => { handleClick(2) }}>
                    <div className="card-body py-4" style={{ height: "25vh" }}>
                        <div className="py-5 text-white" style={{ fontSize: "45px" }}>Batch-2</div>
                    </div>
                </div>
            </div>

            <div
                className="col-lg-4 col-md-6 offset-lg-1 mt-5"
            >
                <div className="card bg-danger " onClick={() => { handleClick(3) }}>
                    <div className="card-body py-4" style={{ height: "25vh" }}>
                        <div className="py-5 text-white" style={{ fontSize: "45px" }}>Batch-3</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}
