import React, { useEffect } from "react";
import axios from "axios";

const RAZORPAY_ID ="rzp_live_g3qUslCaiOdIJr"

const PayByRazorPay = () => {

 const verifyPayment =(payload)=> {
    axios.post(
      "https://pdhnatu.herokuapp.com/verifyRazorpaySucces",
      payload)
    .then(res=>{
        if (res.data.isSuccess) {
            alert("Payment Success");
          } 
        else {
            alert("Payment Failure");
          }
    }).catch=(error)=>{
        console.log(error)
    }  
  }
   
 const processPayment = async ()=> {
    const Razorpay = window.Razorpay
    let orderId = ''
    let amount = 200
    const apiResponse = await axios.post(
        "https://pdhnatu.herokuapp.com/createOrder"
      )
    if (apiResponse) {
      orderId = apiResponse.data
    }
    if (!orderId) return
    const options = {
      key: RAZORPAY_ID,
      name: 'Pdhantu Classes',
      amount: amount * 100,
      description: 'Pdhantu Classes Pvt. Ltd.',
      order_id: orderId,
      handler: function (response) {
        const paymentData = {
          order_id: response.razorpay_order_id,
          payment_id: response.razorpay_payment_id,
          singnature: response.razorpay_signature    
        }
        verifyPayment(paymentData)
      },
      prefill: {
        name: 'Amit Kumar',
        email: 'amitstcet98@gmail.com',
        contact: 7903297969
    },

    }
    const razorpay = new Razorpay(options)
    razorpay.open()
    razorpay.on('payment.failed', (res) => {
    alert(res.error.description)
    })
}

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;
    document.body.appendChild(script);
}, []);

  return (
    <>
      <button onClick={processPayment}>Pay with Razorpay</button>
    </>
  );

  }
export default PayByRazorPay;
