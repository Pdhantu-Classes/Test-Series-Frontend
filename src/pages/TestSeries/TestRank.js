import React, { useState, useEffect } from "react";
import http from "axios";
import UserNavBar from "../../containers/User/UserNavBar";
import { getUserId } from "../../core/utility/authHeader";
import { API_ENDPOINTS } from '../../core/constants/apiConstant'

const GET_RANK_CARD = API_ENDPOINTS.TEST_SERIES.GET_RANK_CARD

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



export default function TestRank() {
    const [rankData, setRankData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [userId, setUserId] = useState(null);

    useEffect(() => {
        setLoading(true);
        setUserId(getUserId())
        const MOCK_PAPER_ID = window.localStorage.getItem("mock_paper_id");
        http
            .get(GET_RANK_CARD, {
                headers: {
                    mock_paper_id: MOCK_PAPER_ID,
                },
            })
            .then((res) => {
                setRankData(res.data.questions);
                setLoading(false);
            })
            .catch((err) => console.log(err));

    }, []);
    return (
        <div>
            <UserNavBar />
            {loading ? (
                        <div style={{position:'absolute',transform:'translate(-50%,-50%)', top:'20%', left:'50%'}}>
                            <div className="d-flex justify-content-center">
                                <div className="spinner-border" role="status">
                                    <span className="sr-only">Loading...</span>
                                </div>
                            </div>
                      </div>
            ) : (
                    <div>
                        <div className="col-8 offset-2 text-center py-5">
                            <table className="table table-hover table-striped border border-secondary">
                                <thead className="bg-dark text-white">
                                    <tr>
                                        <th>Rank</th>
                                        <th>Name</th>
                                        <th>Email</th>
                                        <th>Marks</th>
                                        <th>Accuracy</th>
                                        <th>Time</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {rankData.map((data, index) => {
                                        if (userId === data.user_id) {
                                            return (
                                                <tr
                                                    id={data.id}
                                                    className="bg-success text-white shadow p-3"
                                                >
                                                    <th scope="row">#{index + 1}</th>
                                                    <td>You</td>
                                                    <td>{data.user_email}</td>
                                                    <td>{data.marks}</td>
                                                    <td>{data.accuracy}%</td>
                                                    <td>{fancyTimeFormat(data.paper_time)}</td>
                                                </tr>
                                            );
                                        } else {
                                            return (
                                                <tr id={data.id}>
                                                    <th scope="row">#{index + 1}</th>
                                                    <td>
                                                        {data.user_firstname} {data.user_lastname}
                                                    </td>
                                                    <td>{data.user_email}</td>
                                                    <td>{data.marks}</td>
                                                    <td>{data.accuracy}%</td>
                                                    <td>{fancyTimeFormat(data.paper_time)}</td>
                                                </tr>
                                            );
                                        }
                                    })}
                                </tbody>
                            </table>
                        </div>
                    </div>
                )}
        </div>
    );
}
