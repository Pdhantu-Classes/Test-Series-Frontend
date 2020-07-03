import React, { useEffect, useState } from "react";
import axios from "axios";
import { getUserId } from '../../core/utility/authHeader'
import { useAlert, types } from 'react-alert'
import { useHistory } from 'react-router-dom'

import { API_ENDPOINTS } from '../../core/constants/apiConstant'

const CREATE_ORDER = API_ENDPOINTS.USERS.CREATE_ORDER
const VERIFY_ORDER = API_ENDPOINTS.USERS.VERIFY_ORDER

const RAZORPAY_ID = "rzp_test_2QHPO79ACxzRQl"

const PayByRazorPay = (props) => {
  const history = useHistory()
  const [userId, setUserId] = useState()
  const alert = useAlert()
  
  const { testName,userName,userEmail,userMobile } = props.testName
  console.log(testName,userName,userEmail,userMobile )
  useEffect(() => {
    setUserId(getUserId())
    
  }, [])

  console.log(userId)
  
  const verifyPayment = (payload) => {

    let body = {
      user_id: userId,
      payment_id: payload.payment_id,
      order_id: payload.order_id,
      signature: payload.signature,
      test_name: testName
    }
    console.log(body)
    axios.post(
      "https://pdhnatu.herokuapp.com/verifyRazorpaySucces",
      body)
      .then(res => {
        if (res.data.isSuccess) {
          alert.show('Payment Success', { type: types.SUCCESS })
          setTimeout(() => {
            history.push('/user/orders')
          }, 2000)
        }
        else {
          alert.show('Payment Failure', { type: types.ERROR })
        }
      }).catch = (error) => {
        console.log(error)
      }
  }

  const processPayment = async () => {
    const Razorpay = window.Razorpay
    let orderId = ''
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
      description: 'Pdhantu Classes Pvt. Ltd.',
      order_id: orderId,
      handler: function (response) {
        const paymentData = {
          order_id: response.razorpay_order_id,
          payment_id: response.razorpay_payment_id,
          signature: response.razorpay_signature
        }
        verifyPayment(paymentData)
      },
      prefill: {
        name: userName,
        email: userEmail,
        contact: userMobile
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
      <button class="btn btn-primary ml-md-3 ml-sm-5" onClick={processPayment}>Buy @ &#8377;240 only</button>

    </>
  );

}
export default PayByRazorPay;
