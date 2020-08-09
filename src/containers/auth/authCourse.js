import axios from "axios";
import { API_ENDPOINTS } from "../../core/constants/apiConstantCourse";

const SIGNUP = API_ENDPOINTS.USERS.SIGNUP;
const LOGIN = API_ENDPOINTS.USERS.LOGIN;

export const signup = (user) => {
  return axios
    .post(SIGNUP, user)
    .then((response) => {
      return response.data;
    })
    .catch((err) => {
      console.log(err.response);
    });
};

export const signin = (user) => {
  return axios
    .post(LOGIN, user)
    .then((response) => {
      return response.data;
    })
    .catch((err) => {
      console.log(err);
    });
};
// export const adminSignIn = (user) => {
//   return axios
//     .post(ADMIN_LOGIN, user)
//     .then((response) => {
//       return response.data;
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// };
export const authenticate = (data) => {
  if (data && typeof window !== "undefined") {
    localStorage.setItem("token", data.token);
    localStorage.setItem("imgUrl", data.image_url);
    localStorage.setItem("course", data.course);
  }
};
// export const authenticateAdmin = (data) => {
//   if (data && typeof window !== "undefined") {
//     localStorage.setItem("adminToken", "etyGddwkttefefkutr65wvvfdhdte009vevfe665ddedrcdcedcdedrrwrwrbececefdiihbgdedwdwdf9866gourvvsdRTlofwavynufdloesotAn_8Ygfmri");
//   }
// };
// export const getAllUser = (pageNo) => {
//   return axios
//     .get(ALL_USERS, {
//       headers: {
//         page: pageNo,
//       },
//     })
//     .then((response) => {
//       return response.data;
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// };
// export const getUnpaidUser = (pageNo) => {
//   return axios
//     .get(UNPAID_USERS, {
//       headers: {
//         page: pageNo,
//       },
//     })
//     .then((response) => {
//       return response.data;
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// };
// export const getPaidUser = (pageNo) => {
//   return axios
//     .get(PAID_USERS, {
//       headers: {
//         page: pageNo,
//       },
//     })
//     .then((response) => {
//       return response.data;
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// };
// export const getAdminDashboard = () => {
//   return axios
//     .get(ADMIN_DASHBOARD)
//     .then((response) => {
//       return response.data;
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// };

// export const getLiveMockStatus = () => {
//   return axios
//     .get(LIVE_MOCK_STATUS)
//     .then((response) => {
//       return response.data;
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// };
// export const checkPaymentStatus = (email_id) => {
//   return axios
//     .get(CHECK_PAYMENT,{
//       headers:{
//         email:email_id
//       }
//     })
//     .then((response) => {
//       return response.data;
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// };

// export const addPayment = (email,orderId,paymentId,date) => {
//   let body ={
//     email:email,
//     order_id:orderId,
//     payment_id:paymentId,
//     payment_date:date
//   }
//   return axios
//     .post(ADD_PAYMENT_DATA,
//      body)
//     .then((response) => {
//       return response.data;
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// };
