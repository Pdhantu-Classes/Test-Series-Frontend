import React from 'react'
import UserNavBar from '../UserNavBar'
export default function index() {
    return (
        <div>
        <UserNavBar />
        <div className="container mt-5 pt-5">
           <div className="display-4 text-danger text-center"> You are not registered </div>
        </div>
        </div>
    )
}
