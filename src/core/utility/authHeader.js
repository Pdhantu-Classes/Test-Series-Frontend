import jwtDecode from "jwt-decode";
// export const getRole =()=>{
//     const token= window.localStorage.getItem('token')
//     let role_n =null
//     if(token!==null){
//         let {role} = jwtDecode(token)
//         role_n =role
//     }
    
   
//     return role_n
    
// }
export const isTokenVaild =() =>{
 const token= window.localStorage.getItem('token')
  return token==null?false:true
}


export const getUserId =()=>{
    if(isTokenVaild()){
        const token= window.localStorage.getItem('token')
        let {user_id} = jwtDecode(token)
        console.log(user_id)
        return user_id   
    }
    
    
}


export const getFirstName =()=>{
    if(isTokenVaild()){
        const token= window.localStorage.getItem('token')
    let {firstname} = jwtDecode(token)
    console.log(firstname)
    return firstname   
    }
   
}

export const getLastName=()=>{
    if(isTokenVaild()){
        const token= window.localStorage.getItem('token')
    let {lastname} = jwtDecode(token)
    console.log(lastname)
    return lastname   
    }

}


export const getMobile =()=>{
    if(isTokenVaild()){
        const token= window.localStorage.getItem('token')
    let {mobile} = jwtDecode(token)
    console.log(mobile)
    return mobile  
    }
    
}


export const getEmail =()=>{
   if(isTokenVaild()){
    const token= window.localStorage.getItem('token')
    let {email} = jwtDecode(token)
    console.log(email)
    return email
   }
  
    
}
export const logout =() =>{
    if(isTokenVaild()){
        window.localStorage.removeItem('token')
    }
}