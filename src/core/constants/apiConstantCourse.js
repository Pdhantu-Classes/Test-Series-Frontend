// let base_url = "https://thephdantu.in/course"; //production

// let base_url = "http://18.217.125.150:5000/course"   //devlopment

let base_url = "http://localhost:5000/course"   //Local


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
    ORDER_DETAILS: `${base_url}/myOrders/<USER_ID>`,
    IS_PACKAGE_BUY: `${base_url}/isPackageBuy/<USER_ID>`,
    GET_SUBJECTS: `${base_url}/getSubjects`,
    GET_TOPICS: `${base_url}/getTopics`,
    GET_MEDIUM: `${base_url}/checkMedium`
  },
  ADMIN: {
    ADMIN_LOGIN: `${base_url}/adminLogin`,
    ALL_USERS: `${base_url}/allUsers`,
    PAID_USERS: `${base_url}/paidUsers`,
    ADMIN_DASHBOARD: `${base_url}/adminDashboard`,
    DISPUTE_ORDERS: `${base_url}/disputeOrders`,
    DISPUTE_ORDER_ID: `${base_url}/disputeOrdersById`,
    RESOLVE_ORDERS: `${base_url}/resolveOrder`,
    DELETE_ORDERS: `${base_url}/deleteDisputeOrder`,
    USER_DETAILS: `${base_url}/userDetails`,
    GET_SUBJECTS: `${base_url}/getSubjects`,
    GET_TOPICS: `${base_url}/getTopics`,
    UPLOAD_TOPIC: `${base_url}/addTopicVideos`,
    PAID_USER_LIST: `${base_url}/paidUserLists`,
    UPLOAD_PDF: `${base_url}/uploadTopicPdf`
  }
}