import React ,{useState} from 'react'
import AdminNav from "./AdminNavBar";
import { useHistory } from 'react-router-dom'
import { getLiveMockStatus } from "../../containers/auth";

export default function MockStatus() {

    const history = useHistory()
    const [mockData,setMockData]  = React.useState([])
    const [loading, setLoading] = useState(true);

    React.useEffect(() => {       
        getLiveMockStatus().then((res) => {
            setLoading(false);
            console.log(res)
        setMockData(res['mock_data'])
        });
      }, []);

    const handleShow = (id) =>{
      window.localStorage.setItem("mock_paper_id",id)
      history.push('/admin/viewmockusers')
    }
  
    return (
        <div>
        <AdminNav />
       {!loading ? 
       <div className="container mt-5 pt-5 mb-5">
        <div className="d-flex row text-center">
          {
            mockData.length > 0 ?
              mockData.map((data,index) =>{
                if(data.is_active === 1){
                  return(
                  <div className="col-lg-4 col-md-4 mt-5" onClick={()=>{handleShow(data.id)}}>
                    <div className="card bg-success">
                      <div className="card-body py-5 " style={{ height: "35vh" }}>
                        <h3 className="text-white py-2">{data.mock_paper_name}</h3>
                        <h2 className="text-white py-2 display-3"> {data.user_count}</h2>
                      </div>
                    </div>
                </div>
                  )}
                else{
                  return (
                    <div className="col-lg-4 col-md-4 mt-5" onClick={()=>{handleShow(data.id)}}>
                      <div className="card bg-danger">
                        <div className="card-body py-5 " style={{ height: "35vh" }}>
                          <h3 className="text-white py-2">{data.mock_paper_name}</h3>
                          <h2 className="text-white py-2 display-3"> {data.user_count}</h2>
                        </div>
                      </div>
                  </div>
                  )
                }
              })
            :
            null
          }
       </div>
     </div>
       :( <div className="d-flex justify-content-center py-5">
            <div className="spinner-border" role="status">
              <span className="sr-only">Loading...</span>
            </div>
          </div>)}
        </div>
    )
}
