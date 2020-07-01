import axios from "axios";


export const signup = user => {
   return axios.post("http://loacalhost:5000/signup",
    user)
        .then(response => {
            console.log(response.status)
            return response.data;
        })
        .catch(err => {
            console.log(err.response);
            return err.response.data;
        });
};

export const signin = user => {
    console.log(user)
    return axios.post("http://loacalhost:5000/login",
     user)
         .then(response => {
             console.log(response)
             return response;
         })
         .catch(err => {
             console.log(err)
            //  return err.response.data
         });
 };
 export const authenticate = (data) => {
    if (typeof window !== 'undefined') {
        localStorage.setItem('token', JSON.stringify(data.token));
       
    }
};