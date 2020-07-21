import React, { useState, useEffect } from "react";
import http from "axios";
import AdminNavBar from "../../containers/Admin/AdminNavBar";

import { API_ENDPOINTS } from '../../core/constants/apiConstant'

const GET_USER_LIST_MOCK = API_ENDPOINTS.ADMIN.GET_USER_LIST_MOCK

function fancyTimeFormat(time) {
    var hrs = ~~(time / 3600);
    var mins = ~~((time % 3600) / 60);
    var secs = ~~time % 60;
    var ret = "";

    if (hrs > 0) {
        ret += "" + hrs + "h " + (mins < 10 ? "0" : "");
    }
    ret += "" + mins + "m " + (secs < 10 ? "0" : "");
    ret += "" + secs + "s";
    return ret;
}



export default function ViewMockStatus() {

    const [userList, setUserList] = useState([]);
    const [loading, setLoading] = useState(true);
   

    useEffect(() => {
        setLoading(true);
        
        const MOCK_PAPER_ID = window.localStorage.getItem("mock_paper_id");
        http
            .get(GET_USER_LIST_MOCK, {
                headers: {
                    mock_paper_id: MOCK_PAPER_ID,
                },
            })
            .then((res) => {
                setUserList(res.data.user_list);
                setLoading(false);
            })
            .catch((err) => console.log(err));
    }, []);
    return (
        <div>
            <AdminNavBar />
            {loading ? (
                        <div style={{position:'absolute',transform:'translate(-50%,-50%)', top:'20%', left:'50%'}}>
                            <div className="d-flex justify-content-center">
                                <div className="spinner-border" role="status">
                                    <span className="sr-only">Loading...</span>
                                </div>
                            </div>
                      </div>
            ) : (
                    <div className="col-8 offset-2 text-center py-5">
                        <table className="table table-hover table-striped border border-secondary">
                            <thead className="bg-dark text-white">
                                <tr>
                                    <th>S.no</th>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Marks</th>
                                    <th>Accuracy</th>
                                    <th>Time</th>
                                </tr>
                            </thead>
                            <tbody>
                                {userList.map((data, index) => {
                                    
                                      
                                    
                                        return (
                                            <tr id={data.id}>
                                                <th scope="row">{index + 1}</th>
                                                <td>
                                                    {data.user_firstname} {data.user_lastname}
                                                </td>
                                                <td>{data.user_email}</td>
                                                <td>{data.marks}</td>
                                                <td>{data.accuracy}%</td>
                                                <td>{fancyTimeFormat(data.paper_time)}</td>
                                            </tr>
                                        );
                                    
                                })}
                            </tbody>
                        </table>
                    </div>
                )}
        </div>
    );
}
