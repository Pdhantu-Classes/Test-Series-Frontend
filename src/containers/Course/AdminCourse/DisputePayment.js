import React, { useState, useEffect } from 'react'
import http from 'axios'
import { useHistory } from 'react-router-dom'
import AdminNavBar from "../AdminCourse/AdminNavBar";
import { API_ENDPOINTS } from '../../../core/constants/apiConstantCourse'

const DISPUTE_ORDERS = API_ENDPOINTS.ADMIN.DISPUTE_ORDERS
const DELETE_ORDERS = API_ENDPOINTS.ADMIN.DELETE_ORDERS
export default function DisputePayment() {

    const history = useHistory()

    const [items, setItems] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        setIsLoading(true)
        http
            .get(DISPUTE_ORDERS)
            .then(res=>{
                setItems(res.data.order_data)
                setIsLoading(false)
            })
            .catch(err=>console.log(err))
    }, [])

    const handleDelete =(id) =>{
        setIsLoading(true)
        console.log(id)
        http
            .delete(DELETE_ORDERS,{
                headers:{
                    initiate_id: id
                }
            })
            .then(res=>{
                setIsLoading(false)
                window.location.reload()
                console.log(res.message)
            })
            .catch(err=>console.log(err))
    }

    const handleResolve =(id) =>{
        window.localStorage.setItem("initiate_id",id)
        history.push('/adminCourse/resolvePayment')
    }
    return (
        <div>
             <AdminNavBar />
             {
        isLoading ?
          <div style={{ position: 'absolute', transform: 'translate(-50%,-50%)', top: '20%', left: '50%' }}>
            <div className="d-flex justify-content-center">
              <div className="spinner-border" role="status">
                <span className="sr-only">Loading...</span>
              </div>
            </div>
          </div>
          :
          <div>
               {
                items.length > 0 ?
                    <div className="col-8 offset-2 text-center mt-5 pt-5">
                        <table className="table table-hover table-striped border border-secondary">
                            <thead className="bg-dark text-white">
                                <tr>
                                    <th>S.No</th>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Course</th>
                                    <th>Order ID</th>
                                    <th>Price</th>
                                    <th>Initiate at</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    items.map((data, index) => {                 
                                            return (
                                                <tr id={data.id}>
                                                    <th scope="row">{index + 1}</th>
                                                    <td>
                                                        {data.firstname} {data.lastname}
                                                    </td>
                                                    <td><b>{data.email}</b></td>
                                                    <td>{
                                                        data.package_id === 1 ?
                                                        'Prelims':
                                                        data.package_id === 2 ?
                                                        'Pre+Mains':
                                                        null
                                                        }</td>
                                                    <td><b>{data.order_id}</b></td>
                                                    <td>&#8377;{data.price}</td>
                                                    <td>{data.initiate_at.toLocaleString()}</td>
                                                    <td>
                                                        <button onClick={()=>{handleResolve(data.id)}} className="btn btn-primary mt-2">Resolve</button>
                                                        <button onClick={()=>{handleDelete(data.id)}} className="btn btn-danger ml-3 mt-2">Remove</button>
                                                    </td>
                                                </tr>
                                            );              
                                    })
                                    
                                }
                            </tbody>
                        </table>            
                    </div>
            :
            <div className="mt-5 pt-5 text-dark display-3 text-center">No Any dispute order Available</div>
           }
        </div>

    }
        </div>
    )
}
