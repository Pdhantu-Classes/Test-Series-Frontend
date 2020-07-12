import React, { useState, useEffect } from "react";
import http from "axios";
import UserNavBar from "../../containers/User/UserNavBar";
import { getUserId } from "../../core/utility/authHeader";
// var rankData = [
//   {
//     user_id: 3,
//     user_firstname: "Nitu",
//     user_lastname: "Kumari",
//     user_email: "nitu@gmail.com",
//     marks: 87,
//     accuracy: 89,
//     paper_time: 3400,
//   },
//   {
//     user_id: 6,
//     user_firstname: "Ashish",
//     user_lastname: "Kumar",
//     user_email: "ashish@gmail.com",
//     marks: 85,
//     accuracy: 79,
//     paper_time: 3600,
//   },
//   {
//     user_id: 4,
//     user_firstname: "Amit",
//     user_lastname: "Kumar",
//     user_email: "amit@gmail.com",
//     marks: 77,
//     accuracy: 89,
//     paper_time: 3500,
//   },
//   {
//     user_id: 8,
//     user_firstname: "Suraj",
//     user_lastname: "Kumar",
//     user_email: "suraj@gmail.com",
//     marks: 75.6,
//     accuracy: 89,
//     paper_time: 3800,
//   },
//   {
//     user_id: 10,
//     user_firstname: "Aman",
//     user_lastname: "Kumar",
//     user_email: "aman@gmail.com",
//     marks: 75,
//     accuracy: 69,
//     paper_time: 3500,
//   },
//   {
//     user_id: 1,
//     user_firstname: "Madhu",
//     user_lastname: "Kumar",
//     user_email: "madhu@gmail.com",
//     marks: 74.2,
//     accuracy: 82,
//     paper_time: 3200,
//   },
//   {
//     user_id: 18,
//     user_firstname: "Atul",
//     user_lastname: "Kumar",
//     user_email: "atul@gmail.com",
//     marks: 73,
//     accuracy: 76,
//     paper_time: 3900,
//   },
//   {
//     user_id: 25,
//     user_firstname: "Piyush",
//     user_lastname: "Kumar",
//     user_email: "piyush@gmail.com",
//     marks: 71.5,
//     accuracy: 72,
//     paper_time: 3540,
//   },
//   {
//     user_id: 14,
//     user_firstname: "Tanveer",
//     user_lastname: "Kumar",
//     user_email: "tanveer@gmail.com",
//     marks: 71.2,
//     accuracy: 65,
//     paper_time: 4200,
//   },
//   {
//     user_id: 19,
//     user_firstname: "Rohit",
//     user_lastname: "Kumar",
//     user_email: "rohit@gmail.com",
//     marks: 70.5,
//     accuracy: 90,
//     paper_time: 4200,
//   },
// ];

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
      .get("http://localhost:5000/getRankMockPaper", {
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
        <div>Loading</div>
      ) : (
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
      )}
    </div>
  );
}
