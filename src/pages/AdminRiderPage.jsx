import React from 'react'
import AdminHeader from '../components/AdminHeader'
import AdminNav from '../components/AdminNav'
import AdminRider from '../components/AdminRider'

import "../css/Admin.css";

const AdminRiderPage = () => {
    return (
        <div className="admin">
            <AdminHeader />
            <AdminNav />
            <AdminRider />
        </div>
    )
}

export default AdminRiderPage
