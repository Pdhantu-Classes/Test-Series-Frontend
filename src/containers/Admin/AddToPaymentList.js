import React from 'react'
import AdminNav from "./AdminNavBar";
import {checkPaymentStatus, addPayment}  from '../../containers/auth/index'

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
        checkPaymentStatus(email).then((res)=>{
            setLoading(false)
            if(res.message!=="User Not Exist"){
                setIsExist(res.isExist)
                if(res.isExist && res.payment_data ){
                    console.log(res.payment_data)
                    setPaymentDetails(res.payment_data)
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
        console.log(email,orderId,paymentId,date)
        addPayment(email,orderId,paymentId,date)
        .then((res)=>{
            if(res){
                alert('Payment Added  Successfully')
                setOrderId('')
                setEmail('')
                setPaymentId('')
                setDate('')
            }
        })
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

            {/* (<div>hi */}
                {/* <div className="container">
                <div class="form-group">
                            <label for="exampleInputEmail1">Email address</label>
                            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
                            <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                        </div>
                        <div class="form-group">
                            <label for="exampleInputPassword1">Password</label>
                            <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"/>
                        </div>
                        <div class="form-group form-check">
                            <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
                            <label class="form-check-label" for="exampleCheck1">Check me out</label>
                        </div>
                <button type="submit" class="btn btn-primary">Submit</button>
                </div> */}
            {/* </div>)
            } */}
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
