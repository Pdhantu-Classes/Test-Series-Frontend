import axios from "axios";
import { API_ENDPOINTS } from '../../core/constants/apiConstant'

const SIGNUP = API_ENDPOINTS.USERS.SIGNUP
const LOGIN = API_ENDPOINTS.USERS.LOGIN

export const signup = user => {
   return axios.post("https://pdhnatu.herokuapp.com/signup",
    user)
        .then(response => {
            console.log(response.status)
            return response.data;
        })
        .catch(err => {
            console.log(err.response);
        });
};

export const signin = user => {
    console.log(user)
    return axios.post("https://pdhnatu.herokuapp.com/login",
     user)
         .then(response => {
             return response.data;
         })
         .catch(err => {
             console.log(err)
         });
 };
 export const authenticate = (data) => {
    if (typeof window !== 'undefined') {
        localStorage.setItem('token', data.token);
       
    }
};