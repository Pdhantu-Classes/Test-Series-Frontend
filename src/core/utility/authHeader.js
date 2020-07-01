import jwtDecode from "jwt-decode";
export const getRole =()=>{
    const token= window.localStorage.getItem('token')
    let {role} = jwtDecode(token)
    console.log(role)
    return role
    
}