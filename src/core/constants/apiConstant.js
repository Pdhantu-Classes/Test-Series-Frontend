// let base_url = 'https://pdhnatu.herokuapp.com'
let base_url = "http://localhost:5000";

export const API_ENDPOINTS = {
  USERS: {
    SIGNUP: `${base_url}/signup`,
    LOGIN: `${base_url}/login`,
    UPLOAD_IMAGE: `${base_url}/upload-image`,
    GET_USER_DETAILS: `${base_url}/userDetails/<USER_ID>`,
    POST_USER_DETAILS: `${base_url}/userDetails/<USER_ID>`,
    CREATE_ORDER: `${base_url}/createOrder`,
    VERIFY_ORDER: `${base_url}/verifyRazorpaySucces`,
    ORDER_DETAILS: `${base_url}/orderDetails/<USER_ID>`,
    IS_PACKAGE_BUY: `${base_url}/isPackageBuy/<USER_ID>`,
    MY_TEST_SERIES: `${base_url}/myTestSeries/<USER_ID>`

  },
};
