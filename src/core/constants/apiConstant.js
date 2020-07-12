//  let base_url = 'https://pdhnatu.herokuapp.com'
//  let base_url = "http://3.17.56.99:5000";
let base_url = "http://localhost:5000"

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
    MY_TEST_SERIES: `${base_url}/myTestSeries/<USER_ID>`,
    USER_QUERY: `${base_url}/query`

  },
  ADMIN: {
    ADMIN_LOGIN: `${base_url}/adminLogin`,
    ALL_USERS: `${base_url}/allUsers`,
    PAID_USERS: `${base_url}/paidUsers`,
    UNPAID_USERS: `${base_url}/unpaidUsers`,
    ADMIN_DASHBOARD: `${base_url}/adminDashboard`
  }
};
