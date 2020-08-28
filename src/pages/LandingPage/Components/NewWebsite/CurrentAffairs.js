import React, { useState, useEffect } from 'react'
import http from 'axios'
import { API_ENDPOINTS } from '../../../../core/constants/apiConstant'
import Header from '../../../../containers/Header'

const GET_ACTIVE_CURRENT_AFFAIRS = API_ENDPOINTS.WEBSITE.GET_ACTIVE_CURRENT_AFFAIRS

export default function CurrentAffairs() {

    const [ notice, setNotice ] = useState([])
    const [ loading, setLoading ] = useState(true)

    useEffect(() => {
        setLoading(true)
        http
            .get(GET_ACTIVE_CURRENT_AFFAIRS)
            .then(res=>{
                setLoading(false)
                setNotice(res.data.currentAffairsData)
            })
            .catch(err=>console.log(err))
    }, [])
    return (
        <div>
            <Header/>
            {
                !loading ?
                <div>
                    <div className="text-danger display-4 text-center mt-5 pt-5">
                        Current Affairs
                    </div>
                    {
                        notice.length > 0 ?
                        <div className="text-center mt-3 list-group container">
                            {
                                notice.map((ele=>{
                                    return(
                                        <div className="text-success list-group-item" style={{fontSize:"20px"}}>
                                            {ele.current_affairs}
                                            <div className="mt-2">
                                            {
                                                ele.link !== "" ? <a href={ele.link} target="blank">{ele.link}</a>:null
                                            }
                                            </div>
                                        </div>
                                    )
                                }))
                            }
                        </div>
                        :
                        <div className="text-center display-4 mt-5 pt-5">
                            No Current Affairs Available
                        </div>
                    }
                </div>
                :
                <div className="mt-5 pt-5">
                    <div style={{position:'absolute',transform:'translate(-50%,-50%)', top:'20%', left:'50%'}}>
                        <div className="d-flex justify-content-center">
                            <div className="spinner-border" role="status">
                                <span className="sr-only">Loading...</span>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}
