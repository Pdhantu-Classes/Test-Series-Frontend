import React,{ useState, useEffect } from 'react'
import http from 'axios'
import UserNavBar from '../UserNavBar'
import { getUserId } from '../../../core/utility/authHeader'
import { API_ENDPOINTS } from '../../../core/constants/apiConstantCourse'

const ORDER_DETAILS = API_ENDPOINTS.USERS.ORDER_DETAILS

const Orders=()=>{

        const [ loading, setLoading ] = useState(true)
        const [ ordersDetails, setOrdersDetails ] = useState([])
      
          useEffect(() => {
            const USER_ID = getUserId()
            setLoading(true)
            http
              .get(ORDER_DETAILS.replace('<USER_ID>', USER_ID))
              .then(response => {
                setLoading(false)
                const responseData = response.data.orders
                setOrdersDetails(responseData)
              })
        
          }, [])

    return(
        <>
        <UserNavBar />
        <div className="mb-5 text-white">All Orders</div>
        {
            !loading?
                ordersDetails ?
                    
                        
                            <div className="py-1">
                            <div className="card offset-md-4 offset-lg-4 mb-5" style={{background:'linear-gradient(270.9deg, #FFBFBF 3.13%, rgba(255, 252, 253, 0) 95.62%)',width:'600px'}}>
                                <div className="row no-gutters">
                                    <div className="col-sm-10 col-md-10 col-lg-10">
                                        <div className="card-body">
                                            <h3 className="card-title">{ordersDetails.package_name}</h3>
                                            <ul className="list-unstyled mt-3 mb-4">
                                            <li style={{fontSize:'20px'}}><b>Price:</b> &#8377;{ordersDetails.price}</li>
                                            <li style={{fontSize:'20px'}}><b>Order at:</b> {ordersDetails.order_at}</li>  
                                            <li style={{fontSize:'20px'}}><b>Txn Id:</b> {ordersDetails.order_id}</li>          
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    
                
                :
                <div className="text-center mt-5 pt-5 display-4">No Orders Available</div>
            :
            <div className="d-flex justify-content-center">
                <div className="spinner-border" role="status">
                    <span className="sr-only">Loading...</span>
                </div>
            </div>
        } 
        </>
    )
}
export default Orders