import axios from "axios";


export const signup = user => {
   return axios.post("http://localhost:5000/signup",
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
    return axios.post("http://localhost:5000/login",
     user)
         .then(response => {
             return response.data;
         })
         .catch(err => {
             console.log(err)
         });
 };
 export const authenticate = (data) => {
     console.log("Hii")
    if (typeof window !== 'undefined') {
        localStorage.setItem('token', data.token);
       
    }
};