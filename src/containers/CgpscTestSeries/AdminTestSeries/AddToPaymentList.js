import React from 'react'
import http from 'axios'
import AdminNav from "./AdminNavBar";
import { API_ENDPOINTS } from '../../../core/constants/apiConstantTestSeries'
const CHECK_PAYEMNT = API_ENDPOINTS.ADMIN.CHECK_PAYMENT
const ADD_PAYMENT = API_ENDPOINTS.ADMIN.ADD_PAYMENT_DATA

export default function AddToPaymentList() {
    const [email,setEmail] =React.useState('')
    const [isExist,setIsExist] = React.useState('')
    const [showForm,setShowForm] =React.useState(false)
    const [payemntDetails,setPaymentDetails] = React.useState({})
    const [loading, setLoading] = React.useState(null);
    const [orderId,setOrderId] =React.useState('')
    const [paymentId,setPaymentId] =React.useState('')
    const [date,setDate] =React.useState(null)


    const handleEmail =(e) =>{      
        setEmail(e.target.value)
    }

    const handleOrder =(e) =>{
        setOrderId(e.target.value)
    }

    const handlePayment=(e)=>{
        setPaymentId(e.target.value)
    }

    const handleDate=(e)=>{
        console.log(e.target.value)
        setDate(e.target.value)
    }

    const handleClick =() =>{
        setLoading(true)
        http
            .get(CHECK_PAYEMNT, {
                headers:{
                    email: email
                }
            })
            .then((res)=>{
            setLoading(false)
            if(res.data.message!=="User Not Exist"){
                setIsExist(res.isExist)
                if(res.data.isExist && res.data.payment_data ){
                    console.log(res.data.payment_data)
                    setPaymentDetails(res.data.payment_data)
                }else{
                    setShowForm(true)
                    setPaymentDetails({})
                }
            }else{
                alert('user not exists')
                setPaymentDetails({})
            }
           
        })
    }
    const handlePaymentSubmit=()=>{
        let payload ={
            email: email,
            order_id: orderId,
            payment_id: paymentId,
            payment_date: date
        }
        http
            .post(ADD_PAYMENT,payload)
            .then((res)=>{
                if(res.data.message){
                    alert('Payment Added  Successfully')
                    setOrderId('')
                    setEmail('')
                    setPaymentId('')
                    setDate('')
                }
            })
            .catch(err=> console.log(err))
    }   
    return (
        <>
        <AdminNav />
        <div className="container mt-5 pt-5">
        <div className="input-group mb-3 w-50 offset-3 mt-5 pt-5">
            <input type="text" class="form-control " value={email} placeholder="Search by email id" onChange={handleEmail} aria-label="Recipient's username" aria-describedby="basic-addon2"/>
            <div className="input-group-append">
               <button className="btn btn-primary ml-2 " onClick={handleClick}>Search</button>
            </div>
            </div>
        </div>
        
        {!loading ? (
        <div>
            {
            isExist && payemntDetails ? (
            <div className="container">
                <div class="card w-50 offset-3 ">
                <div class="card-body border border-primary text-center">
                    <h3>{payemntDetails.firstname} {payemntDetails.lastname}</h3>
                    <h5>Payment ID: {payemntDetails.payment_id}</h5>
                    <h5>Payment Date: {new Date(payemntDetails.order_at).toLocaleString()}</h5>         
                </div>
                </div>
            </div>)
            : 
                null
            }
            {
                !isExist  && showForm ? 
                <div className="container w-50">
                    <div class="form-group ">
                            <label for="exampleInputEmail1">Email address</label>
                            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={email}/>
                            <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                        </div>
                        <div class="form-group">
                            <label for="exampleInputPassword1">Order Id</label>
                            <input type="text" class="form-control"  value={orderId} onChange={handleOrder}  placeholder="Order Id"/>
                        </div>
                        <div class="form-group">
                            <label for="exampleInputPassword1">Payment Id</label>
                            <input type="text" class="form-control" value={paymentId} onChange ={handlePayment}  placeholder="Payment Id"/>
                        </div>
                        <div class="form-group">
                            <label for="exampleInputPassword1">Payment Date </label>
                            <input type="date" class="form-control" value ={date} onChange={handleDate}  placeholder="Payment Date"/>
                        </div>

                       
                     <button type="submit" class="btn btn-primary" onClick={handlePaymentSubmit}>Submit</button>
                    
                </div>:null
            }
        </div>)
        :
         (<div className="d-flex justify-content-center py-5">
            <div className="spinner-border" role="status">
              <span className="sr-only">Loading...</span>
            </div>
          </div>)}
        </>
    )
}
