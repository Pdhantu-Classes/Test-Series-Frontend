import React, { useEffect,useState ,useRef} from 'react';
import axios from 'axios'
const PayByRazorPay = () => {
    const[order_id,SetOrder_id] = useState('')
    const[payment_id,SetPayment_id] = useState('')
    const[singnature,SetSignature] = useState('')
    const[isSuccess,SetIsSuccess]=useState(false)
    const isFirstrun = useRef(true)
   const createOpton =(order_id) =>{
    return {
        key: 'rzp_test_2QHPO79ACxzRQl',
        amount: '100', //  = INR 1
        name: 'Acme shop',
        description: 'some description',
        image: 'https://cdn.razorpay.com/logos/7K3b6d18wHwKzL_medium.png',
        order_id:order_id,
        handler: function(response) {
            console.log(response)
            alert(response.razorpay_payment_id);
            alert(response.razorpay_order_id);
            alert(response.razorpay_signature)
            SetPayment_id(response.razorpay_payment_id)
            SetOrder_id(response.razorpay_order_id)
            SetSignature(response.razorpay_signature)
           
        },
        prefill: {
            name: 'Gaurav',
            
        },
        notes: {
            address: 'some address'
        },
        theme: {
            color: 'blue',
            hide_topbar: false
        }
    };
    
   }
   async function  verifyPayment(){
       let params={
        order_id,
        payment_id,
        singnature
       }
       console.log(params)
     const payStatus = await axios.post("https://pdhnatu.herokuapp.com/verifyRazorpaySucces",params)
     if(payStatus.data.isSuccess){
         alert('Payment Success')
     }
     else{
         alert('Payment Failure')
     }

   }
    const openPayModal = async () => {
        const responseData = await axios.post("https://pdhnatu.herokuapp.com/createOrder")
        SetOrder_id(responseData.data)
        console.log('order is',order_id)
        var rzp1 = new window.Razorpay(createOpton(responseData.data));
        rzp1.open();
        
    };
    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://checkout.razorpay.com/v1/checkout.js';
        script.async = true;
        document.body.appendChild(script);
        if(isFirstrun.current){
            isFirstrun.current=false
            return
        }
        verifyPayment()
    }, [singnature]);

    return (
        <>
            <button onClick={openPayModal}>Pay with Razorpay</button>
        </>
    );
};

export default PayByRazorPay;