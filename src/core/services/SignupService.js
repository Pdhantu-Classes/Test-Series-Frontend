import axios from "axios";
import { API_ENDPOINTS } from "../constants/apiConstant";


const SIGNUP_API = API_ENDPOINTS.USERS.SIGNUP;

export const signup = (payload) => {
  console.log(payload);
  axios
  .post(SIGNUP_API, payload)
  .then(response=>{
      return response.json()})
   .catch(err=>{
    console.log(err)
   })
}
export default signup;
