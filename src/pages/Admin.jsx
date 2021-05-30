import React from 'react';

import AdminHeader from '../components/AdminHeader';
import AdminNav from '../components/AdminNav';

import "../css/Admin.css";

const Admin = () => {
    return (
        <div className="admin">
            <AdminHeader />
            <AdminNav />
        </div>
    )
}

export default Admin
