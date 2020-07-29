import jwtDecode from "jwt-decode";

export const isTokenVaild = () => {
  const token = window.localStorage.getItem("token");
  return token == null ? false : true;
};

export const isAdminTokenValid = () => {
  const token = window.localStorage.getItem("adminToken");
  return token == null ? false : true;
};

export const getUserId = () => {
  if (isTokenVaild()) {
    const token = window.localStorage.getItem("token");
    let { user_id } = jwtDecode(token);
    return user_id;
  }
};

export const getFirstName = () => {
  if (isTokenVaild()) {
    const token = window.localStorage.getItem("token");
    let { firstname } = jwtDecode(token);
    return firstname;
  }
};

export const getLastName = () => {
  if (isTokenVaild()) {
    const token = window.localStorage.getItem("token");
    let { lastname } = jwtDecode(token);
    return lastname;
  }
};

export const getMobile = () => {
  if (isTokenVaild()) {
    const token = window.localStorage.getItem("token");
    let { mobile } = jwtDecode(token);
    return mobile;
  }
};

export const getEmail = () => {
  if (isTokenVaild()) {
    const token = window.localStorage.getItem("token");
    let { email } = jwtDecode(token);
    return email;
  }
};

export const logout = () => {
  if (isTokenVaild()) {
    window.localStorage.removeItem("token");
    window.localStorage.removeItem("imgUrl")
  }
};

export const logoutAdmin = () => {
  window.localStorage.removeItem("adminToken");
};

export const userImage = () => {
  const imgUrl = window.localStorage.getItem("imgUrl");
  return imgUrl;
};

export const getModule = () => {
  if (isTokenVaild()) {
    const token = window.localStorage.getItem("token");
    let { module } = jwtDecode(token);
    return module;
  }
};
