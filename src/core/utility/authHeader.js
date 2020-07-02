import jwtDecode from "jwt-decode";
export const getRole =()=>{
    const token= window.localStorage.getItem('token')
    let {role} = jwtDecode(token)
    console.log(role)
    return role
    
}
export const isTokenVaild =() =>{
 const token= window.localStorage.getItem('token')
  return token?true:false
}


export const getUserId =()=>{
    const token= window.localStorage.getItem('token')
    let {user_id} = jwtDecode(token)
    console.log(user_id)
    return user_id   
}


export const getFirstName =()=>{
    const token= window.localStorage.getItem('token')
    let {firstname} = jwtDecode(token)
    console.log(firstname)
    return firstname   
}

export const getLastName=()=>{
    const token= window.localStorage.getItem('token')
    let {lastname} = jwtDecode(token)
    console.log(lastname)
    return lastname   
}


export const getMobile =()=>{
    const token= window.localStorage.getItem('token')
    let {mobile} = jwtDecode(token)
    console.log(mobile)
    return mobile  
}


export const getEmail =()=>{
    const token= window.localStorage.getItem('token')
    let {email} = jwtDecode(token)
    console.log(email)
    return email
    
}