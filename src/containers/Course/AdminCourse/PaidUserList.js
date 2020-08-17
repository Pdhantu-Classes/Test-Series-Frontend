import React, { useState, useEffect } from 'react'
import http from "axios";
import ReactHTMLTableToExcel from 'react-html-table-to-excel';
import AdminNavBar from "../AdminCourse/AdminNavBar";
import { API_ENDPOINTS } from '../../../core/constants/apiConstantCourse'

const PAID_USER_LIST = API_ENDPOINTS.ADMIN.PAID_USER_LIST


export default function PaidUserList() {

    const [paidUserList, setPaidUserList] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setLoading(true)

            http.get(PAID_USER_LIST)
                .then(res => {
                    setLoading(false)
                    setPaidUserList(res.data.user_data)
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
                        <h3 className="text-center text-danger">Prelims</h3>
                        <div className="text-center">
                            <ReactHTMLTableToExcel
                                id="test-table-xls-button"
                                className="download-table-xls-button"
                                table="tablePreview1"
                                filename="Prelims"
                                sheet="Prelims"
                                buttonText="Export data"
                                />
                        </div>
                    </div>        
                        {
                            paidUserList.filter(i=>i.course === 1).length > 0 ?
                            <div class="table-responsive col-10 offset-1 text-center">
                                <table id="tablePreview1" class="table table-bordered table-hover">
                                <thead>
                                    <tr>
                                        <th>S.No</th>
                                        <th>Name</th>
                                        <th>Email</th>
                                        <th>Mobile</th>
                                        <th>Course</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                    paidUserList.filter(i=>i.course === 1).map((data, index) => {
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
                                                <td>
                                                    {'Prelims'}
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

                        <div className="mt-5 pt-3">
                            <h3 className="text-center text-danger">Prelims+Mains</h3>
                            <div className="text-center">
                            <ReactHTMLTableToExcel
                                id="test-table-xls-button"
                                className="download-table-xls-button"
                                table="tablePreview2"
                                filename="PrelimsandMains"
                                sheet="PrelimsandMains"
                                buttonText="Export data"/>
                            </div>
                        </div>  
                        {
                            paidUserList.filter(i=>i.course === 2).length > 0 ?
                            <div class="table-responsive col-10 offset-1 text-center">
                                <table id="tablePreview2" class="table table-bordered table-hover">
                                <thead>
                                    <tr>
                                        <th>S.No</th>
                                        <th>Name</th>
                                        <th>Email</th>
                                        <th>Mobile</th>
                                        <th>Course</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                    paidUserList.filter(i=>i.course === 2).map((data, index) => {
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
                                            <td>
                                                {'Prelims+Mains'}
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

                    <div className="mt-5 pt-3">
                        <h3 className="text-center text-danger">Mains(Hindi)</h3>
                        <div className="text-center">
                            <ReactHTMLTableToExcel
                                id="test-table-xls-button"
                                className="download-table-xls-button"
                                table="tablePreview3"
                                filename="MainsHindi"
                                sheet="MainsHindi"
                                buttonText="Export data"/>
                        </div>
                    </div>  
                    {
                        paidUserList.filter(i=>i.course === 3).length > 0 ?
                        <div class="table-responsive col-10 offset-1 text-center">
                            <table id="tablePreview3" class="table table-bordered table-hover">
                            <thead>
                                <tr>
                                    <th>S.No</th>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Mobile</th>
                                    <th>Course</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                paidUserList.filter(i=>i.course === 3).map((data, index) => {
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
                                        <td>
                                            {'Mains(Hindi)'}
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

                <div className="mt-5 pt-3">
                    <h3 className="text-center text-danger">Mains(English)</h3>
                    <div className="text-center">
                            <ReactHTMLTableToExcel
                                id="test-table-xls-button"
                                className="download-table-xls-button"
                                table="tablePreview4"
                                filename="MainsEnglish"
                                sheet="MainsEnglish"
                                buttonText="Export data"/>
                    </div>
                </div>  
                    {
                        paidUserList.filter(i=>i.course === 4).length > 0 ?
                        <div class="table-responsive col-10 offset-1 text-center">
                            <table id="tablePreview4" class="table table-bordered table-hover">
                            <thead>
                                <tr>
                                    <th>S.No</th>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Mobile</th>
                                    <th>Course</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                paidUserList.filter(i=>i.course === 4).map((data, index) => {
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
                                        <td>
                                            {'Mains(English)'}
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
