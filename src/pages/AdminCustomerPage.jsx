import React from 'react'
import AdminHeader from '../components/AdminHeader'
import AdminNav from '../components/AdminNav'
import AdminCustomers from "../components/AdminCustomers";

import "../css/Admin.css";

const AdminCustomerPage = () => {
    return (
        <div className="admin">
            <AdminHeader />
            <AdminNav />
            <AdminCustomers />
        </div>
    )
}

export default AdminCustomerPage
