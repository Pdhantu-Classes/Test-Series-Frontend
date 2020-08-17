import React, { useState, useEffect } from 'react'
import http from 'axios'
import { useHistory } from 'react-router-dom'
import { API_ENDPOINTS } from '../../../core/constants/apiConstantCourse'
import AdminNavBar from "../AdminCourse/AdminNavBar";

const DISPUTE_ORDER_ID = API_ENDPOINTS.ADMIN.DISPUTE_ORDER_ID
const RESOLVE_ORDERS = API_ENDPOINTS.ADMIN.RESOLVE_ORDERS

export default function ResolvePayment() {
    const history = useHistory()

    const [items, setItems] = useState([])
    const [initiateId, setInitiateId] = useState('')
    const [isLoading, setIsLoading] = useState(true)
    const [paymentId, setPaymentId] = useState('')

    useEffect(() => {
        const INITAIATE_ID = window.localStorage.getItem("initiate_id")
        if(INITAIATE_ID){
            setInitiateId(INITAIATE_ID)
            setIsLoading(true)
            http
                .get(DISPUTE_ORDER_ID,{
                    headers:{
                        initiate_id:INITAIATE_ID
                    }
                })
                .then(res=>{
                    setItems(res.data.order_data)
                    setIsLoading(false)
                })
                .catch(err=>console.log(err))
        }
        else{
            history.push('/adminCourse/disputePayment')
        }
        
    }, [history])

    const handleChange =(e)=>{
        e.preventDefault()
        setPaymentId(e.target.value)
    }

    const handleSubmit = (e) =>{
        e.preventDefault()
        if(paymentId.length>0){
            setIsLoading(true)
            let body = {
                payment_id: paymentId,
                initiate_id: initiateId
            }
            http
            .post(RESOLVE_ORDERS,body)
            .then(res=>{
                setItems(res.data.message)
                setIsLoading(false)
                window.localStorage.removeItem("initiate_id")
                history.push('/adminCourse/disputePayment')
            })
            .catch(err=>console.log(err))
        }
        else{
            alert("Please Enter Payment Id")
        }
    }
    console.log(paymentId)
    return (
        <div>
            <AdminNavBar />
            {
                isLoading ?
                    <div style={{ position: 'absolute', transform: 'translate(-50%,-50%)', top: '20%', left: '50%' }}>
                        <div className="d-flex justify-content-center">
                        <div className="spinner-border" role="status">
                            <span className="sr-only">Loading...</span>
                        </div>
                        </div>
                    </div>
                    :
                    <div>
                        {
                            items ? 
                            <div className="text-center mt-5 pt-5">
                                <div className="text-center mt-5 pt-5">
                                    <div style={{fontSize:"25px",fontWeight:"bold"}}>Order details are:</div>
                                    <div style={{fontSize:"20px"}}> <b>Name:</b> {items.firstname} {items.lastname} </div>
                                    <div style={{fontSize:"20px"}}> <b>Email:</b> {items.email} </div>
                                    <div style={{fontSize:"20px"}}><b>Order Id:</b> {items.order_id} </div>
                                    <div className="offset-4 mt-3">
                                        <input className="form-control w-50" type="text" placeholder="Enter Payment Id" onChange={handleChange}/>
                                    </div>
                                    <button onClick={handleSubmit} className="btn btn-primary mt-2">Submit</button>
                                </div>
                            </div>
                            :
                            null
                        }
                    </div>
            }
            
        </div>
    )
}
