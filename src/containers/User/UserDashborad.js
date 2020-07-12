import React, { useEffect, useState } from "react";
import http from "axios";
import "../../css/LandingPage.css";
import "../../css/DashBoard.css";
import UserNavBar from "../User/UserNavBar";
import { useHistory } from "react-router-dom";
import { getUserId } from "../../core/utility/authHeader";

const Dashboard = (props) => {
  const history = useHistory();
  const [mockPapers, setMockTestPaper] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const userId = getUserId();
    setLoading(true);
    http
      .get("http://localhost:5000/getAllMockPaper", {
        headers: {
          user_id: userId,
        },
      })
      .then((res) => {
        setLoading(false);
        setMockTestPaper(res.data.mock_paper);
      })
      .catch((err) => console.log(err));
  }, []);
  const handleChangeMock = (id) => {
    window.localStorage.setItem("mock_paper_id", id);
    history.push("/user/testinstruction");
  };
  const handleViewRank=(id) =>{
    window.localStorage.setItem('mock_paper_id',id)
    history.push('/user/testrank')
  }
  const handleViewResult =(id)=>{
    window.localStorage.setItem('mock_paper_id',id)
    history.push('/user/testresponse')
  }
  return (
    <div>
      <UserNavBar />
      <div className="container text-center py-5">
        <div className="info-header mb-5">
          <h1 className="text-primary pb-3">Test Will Start From 15th July</h1>
        </div>
      </div>
      {!loading ? (
        <div class="table-responsive col-10 offset-1 text-center">
          <table id="tablePreview" class="table table-bordered table-hover">
            <thead>
              <tr>
                <th>S.No</th>
                <th>Paper Name</th>
                <th>Paper Date</th>
                <th>Status</th>
                <th>View Details</th>
                <th
                  className="text-primary"
                  style={{ fontSize: "16px", fontStyle: "italic" }}
                >
                  *Result will released next day of exam
                </th>
              </tr>
            </thead>
            <tbody>
              {mockPapers.map((data, index) => {
                return (
                  <tr>
                    <th scope="row">{index + 1}</th>
                    <td className="font-weight-bold">{data.mock_paper_name}</td>
                    <td>{data.paper_date}</td>
                    {!data.is_active && !data.is_finished ? (
                      <td className="text-primary font-weight-bold">
                        Upcoming
                      </td>
                    ) : data.is_active && !data.is_finished ? (
                      <td className="text-success font-weight-bold blink">
                        Live&#8226;{" "}
                      </td>
                    ) : !data.is_active && data.is_finished ? (
                      <td className="text-danger font-weight-bold">Finished</td>
                    ) : null}

                    <td>
                      <button className="btn btn-secondary">Click Here</button>
                    </td>

                    {!data.is_active &&
                    data.is_finished &&
                    data.is_attempted &&
                    data.is_result_released ? (
                      <td>
                        <button className="btn btn-success mr-2" onClick={()=>{handleViewResult(data.id)}}> View Result</button>
                        <button className="btn btn-danger" onClick={()=>{handleViewRank(data.id)}}>View Rank</button>
                      </td>
                    ) : !data.is_active &&
                      data.is_finished &&
                      !data.is_attempted ? (
                      <td>
                        <button className="btn btn-success mr-2" disabled>
                          Not Attempted
                        </button>
                      </td>
                    ) : !data.is_active &&
                      data.is_finished &&
                      data.is_attempted ? (
                      <td>
                        <button className="btn btn-success mr-2" disabled>
                          Attempted
                        </button>
                      </td>
                    ) : data.is_active &&
                      !data.is_finished &&
                      data.is_attempted ? (
                      <td>
                        <button className="btn btn-danger" disabled>
                          Completed
                        </button>
                      </td>
                    ) : data.is_active && !data.is_finished ? (
                      <td>
                        <button
                          className="btn btn-primary"
                          onClick={() => {
                            handleChangeMock(data.id);
                          }}
                        >
                          Start Test
                        </button>
                      </td>
                    ) : !data.is_active && !data.is_finished ? (
                      <td>
                        <button className="btn btn-primary" disabled>
                          Coming Soon
                        </button>
                      </td>
                    ) : null}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};
export default Dashboard;
