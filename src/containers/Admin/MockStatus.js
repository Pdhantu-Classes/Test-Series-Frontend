import React ,{useState} from 'react'
import AdminNav from "./AdminNavBar";
import { getLiveMockStatus } from "../../containers/auth";
export default function MockStatus() {
    const [mockData,setMockData]  = React.useState([])
    const [loading, setLoading] = useState(true);
    React.useEffect(() => {
         
        getLiveMockStatus().then((res) => {
            setLoading(false);
            console.log(res)
        setMockData(res['mock_data'])
        });
      }, []);
  
    return (
        <div>
        <AdminNav />
       {!loading ? 
       <div className="container mt-5 pt-5 mb-5">
        <div className="row text-center">
         <div
           className="col-lg-4 offset-lg-2 col-md-6 mt-5"
         >
           <div className="card bg-secondary">
             <div className="card-body py-5 " style={{ height: "35vh" }}>
             <h3 className="text-white py-2">{mockData[0]?.mock_paper_name}</h3>
               <h2 className="text-white py-2 display-3"> {mockData[0]?.user_count}</h2>
             </div>
           </div>
         </div>

         <div
           className="col-lg-4 col-md-6 offset-lg-1 mt-5"
         >
           <div className="card bg-info ">
             <div className="card-body py-5" style={{ height: "35vh" }}>
             <h3 className="text-white py-2">{mockData[1]?.mock_paper_name}</h3>
               <h2 className="text-white py-2 display-3">{mockData[1]?.user_count}</h2>
             </div>
           </div>
         </div>

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
