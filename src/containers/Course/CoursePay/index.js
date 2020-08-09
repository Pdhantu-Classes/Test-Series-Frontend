import React, { useEffect } from "react";
import axios from "axios";
import { useAlert, types } from 'react-alert'
import { useHistory } from 'react-router-dom'
import { API_ENDPOINTS } from '../../../core/constants/apiConstantCourse'

const CREATE_ORDER = API_ENDPOINTS.USERS.CREATE_ORDER
const VERIFY_ORDER = API_ENDPOINTS.USERS.VERIFY_ORDER

// test id
// const RAZORPAY_ID = "rzp_test_x8I5D7s72Z0kOk"

// live id
const RAZORPAY_ID = "rzp_live_dG54e74x2QdKcw"

const PayByRazorPay = (props) => {
  const history = useHistory()
  const alert = useAlert()

  const { packageId, userId, userName, userEmail, userMobile } = props.payload

  const verifyPayment = (payload) => {

    let body = {
      package_id: packageId,
      user_id: userId,
      payment_id: payload.payment_id,
      order_id: payload.order_id,
      signature: payload.signature,
    }
    axios.post(
      VERIFY_ORDER, body)
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
    let payload = {
      package_id: packageId,
      user_id: userId
    }
    const Razorpay = window.Razorpay
    let orderId = ''
    const apiResponse = await axios.post(CREATE_ORDER, payload)
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
      <button class="btn btn-primary ml-md-3 ml-sm-5" onClick={processPayment}>Buy @ &#8377;{
        packageId === 1 ? '2940 only' :
        packageId === 2 ? '6940 only' :
        packageId === 3 ? '4940 only' :
        packageId === 4 ? '4940 only' :
        null
       } </button>
    </>
  );

}
export default PayByRazorPay;
