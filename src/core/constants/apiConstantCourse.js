// let base_url = "http://52.14.8.163:5001" //devlopment
let base_url = "http://localhost:5001"

export const API_ENDPOINTS = {
  USERS: {
    SIGNUP: `${base_url}/signup`,
    LOGIN: `${base_url}/login`,
    FORGOT_PASSWORD: `${base_url}/forgetPassword`,
    CHANGE_PASSWORD: `${base_url}/changePassword`,
    IS_USER_REGISTER: `${base_url}/isUserRegister/<USER_ID>`,
    UPLOAD_IMAGE: `${base_url}/upload-image`,
    GET_USER_DETAILS: `${base_url}/userDetails/<USER_ID>`,
    POST_USER_DETAILS: `${base_url}/userDetails/<USER_ID>`,
    CREATE_ORDER: `${base_url}/createOrder`,
    VERIFY_ORDER: `${base_url}/verifyRazorpaySucces`,
    ORDER_DETAILS: `${base_url}/orderDetails/<USER_ID>`,
    IS_PACKAGE_BUY: `${base_url}/isPackageBuy/<USER_ID>`,
  }
}