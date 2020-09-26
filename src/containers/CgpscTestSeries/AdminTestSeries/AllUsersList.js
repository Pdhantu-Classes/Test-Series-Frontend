import React, { useState, useEffect } from 'react'
import http from "axios";
import ReactHTMLTableToExcel from 'react-html-table-to-excel';
import AdminNavBar from "./AdminNavBar";
import { API_ENDPOINTS } from '../../../core/constants/apiConstantTestSeries'

const ALL_USERS_LIST = API_ENDPOINTS.ADMIN.ALL_USERS_LIST


export default function AdminAllUserList() {

    const [allUserList, setAllUserList] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setLoading(true)

            http.get(ALL_USERS_LIST)
                .then(res => {
                    setLoading(false)
                    setAllUserList(res.data.allUsers)
                })
                .catch(err => console.log(err))

    }, [])
    return (
        <div>
             <AdminNavBar />
        {
            !loading ?
                <div className="mt-5 pt-5">
                    <div className="mt-5 pt-3">
                        <h3 className="text-center text-primary">List of Users</h3>
                    </div> 
                    <div className="mt-5 pt-3">
                        <div className="text-center">
                            <ReactHTMLTableToExcel
                                id="test-table-xls-button"
                                className="download-table-xls-button"
                                table="tablePreview1"
                                filename="AllUsers"
                                sheet="AllUsers"
                                buttonText="Export data"
                                />
                        </div>
                    </div>        
                        {
                            allUserList && allUserList.length > 0 ?
                            <div class="table-responsive col-10 offset-1 text-center">
                                <table id="tablePreview1" class="table table-bordered table-hover">
                                <thead>
                                    <tr>
                                        <th>S.No</th>
                                        <th>Name</th>
                                        <th>Email</th>
                                        <th>Mobile</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                    allUserList.map((data, index) => {
                                        return (
                                            <tr>
                                                <td className="font-weight-bold">
                                                    {index+1}
                                                </td>
                                                <td className="font-weight-bold">
                                                    {data.firstname} {data.lastname}
                                                </td>
                                                <td className="font-weight-bold">
                                                    {data.email}
                                                </td>
                                                <td>
                                                    {data.mobile}
                                                </td>
                                            </tr>
                                        );
                                    })}
                                </tbody>
                            </table>
                        </div>
                        :
                        <div className="text-center">
                            No Users Found
                        </div>
                        }


                </div>
                :
                <div className="d-flex justify-content-center mt-5 pt-5">
                    <div className="spinner-border mt-5 pt-2" role="status">
                        <span className="sr-only">Loading...</span>
                    </div>
                </div>
        }
        </div>
    )
}
