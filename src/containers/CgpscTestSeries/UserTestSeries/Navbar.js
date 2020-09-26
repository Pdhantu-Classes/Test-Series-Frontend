import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import jwtDecode from "jwt-decode";
import { useHistory } from "react-router"
import logo from '../../../asset/UI-Content/logo.jpeg'
import avatar from '../../../asset/avatar.svg'


const NavBar = () => {

    const history = useHistory()
    const [firstName, setFirstName] = useState('')
    const [imgUrl, SetImgUrl] = useState('')

    useEffect(() => {
        const token = window.localStorage.getItem("tokenTest");
        let { firstname } = jwtDecode(token);
        setFirstName(firstname)
        SetImgUrl(window.localStorage.getItem("imgUrl"))
    }, [])

    const handleLogout = () => {
        window.localStorage.removeItem("tokenTest");
        window.localStorage.removeItem("imgUrl")
        history.push('/')
    }
    return (
        <nav className="navbar navbar-expand-md navbar-light fixed-top py-4">
            <div className='container'>
                <Link to="/user/testseries/home" className='navbar-brand'>
                    <img src={logo} width="50" height="50" alt="" /><h3 className="d-inline align-middle">The Pdhantu Classes</h3>
                </Link>
                <button className="navbar-toggler" data-toggle="collapse" data-target="#navbarNav"><span className="navbar-toggler-icon"></span></button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <Link className='nav-link' onClick={() => { history.push('/user/testseries/dashboard') }}>DashBoard</Link>
                        </li>
                        <li className="nav-item">
                            <Link className='nav-link' onClick={() => { history.push('/user/testseries/profile') }}>Profile</Link>
                        </li>
                        <li className="nav-item">
                            <Link className='nav-link' onClick={() => { history.push('/user/testseries/orders') }}>Orders</Link>
                        </li>
                    </ul>
                </div>
                <div className="ml-2 mr-2 mt-2"> <h5>Welcome {firstName}</h5></div>
                {imgUrl !== "null" ?
                    <div><img style={{ width: '60px', height: '60px', borderRadius: '50%' }} src={imgUrl} alt="profile" /></div>
                    : <div><img style={{ width: '60px', height: '60px', borderRadius: '50%' }} src={avatar} alt="avatar" /></div>
                }
                <button type="button" className="btn btn-primary ml-3" onClick={handleLogout}>Log Out</button>
            </div>
        </nav>
    )
}
export default NavBar;