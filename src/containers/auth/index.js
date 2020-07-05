import axios from "axios";
import { API_ENDPOINTS } from "../../core/constants/apiConstant";

const SIGNUP = API_ENDPOINTS.USERS.SIGNUP;
const LOGIN = API_ENDPOINTS.USERS.LOGIN;
const ADMIN_LOGIN = API_ENDPOINTS.ADMIN.ADMIN_LOGIN;
const ALL_USERS = API_ENDPOINTS.ADMIN.ALL_USERS;
const PAID_USERS = API_ENDPOINTS.ADMIN.PAID_USERS;
const UNPAID_USERS = API_ENDPOINTS.ADMIN.UNPAID_USERS;
const ADMIN_DASHBOARD = API_ENDPOINTS.ADMIN.ADMIN_DASHBOARD;

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
export const adminSignIn = (user) => {
  return axios
    .post(ADMIN_LOGIN, user)
    .then((response) => {
      return response.data;
    })
    .catch((err) => {
      console.log(err);
    });
};
export const authenticate = (data) => {
  if (data && typeof window !== "undefined") {
    localStorage.setItem("token", data.token);
    localStorage.setItem("imgUrl", data.image_url);
  }
};
export const authenticateAdmin = (data) => {
  if (data && typeof window !== "undefined") {
    localStorage.setItem("adminToken", "etyGddwkttefefkutr65wvvfdhdte009vevfe665ddedrcdcedcdedrrwrwrbececefdiihbgdedwdwdf9866gourvvsdRTlofwavynufdloesotAn_8Ygfmri");
  }
};
export const getAllUser = (pageNo) => {
  return axios
    .get(ALL_USERS, {
      headers: {
        page: pageNo,
      },
    })
    .then((response) => {
      return response.data;
    })
    .catch((err) => {
      console.log(err);
    });
};
export const getUnpaidUser = (pageNo) => {
  return axios
    .get(UNPAID_USERS, {
      headers: {
        page: pageNo,
      },
    })
    .then((response) => {
      return response.data;
    })
    .catch((err) => {
      console.log(err);
    });
};
export const getPaidUser = (pageNo) => {
  return axios
    .get(PAID_USERS, {
      headers: {
        page: pageNo,
      },
    })
    .then((response) => {
      return response.data;
    })
    .catch((err) => {
      console.log(err);
    });
};
export const getAdminDashboard = () => {
  return axios
    .get(ADMIN_DASHBOARD)
    .then((response) => {
      return response.data;
    })
    .catch((err) => {
      console.log(err);
    });
};
