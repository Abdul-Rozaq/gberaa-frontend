import { Button } from '@material-ui/core';
import React from 'react';
import logo from "../gberaa.png";

const AdminHeader = () => {
    return (
        <div className="adminHeader">
            <div>
                <div className="adminHeader__logo">
                    <img src={logo} alt="" />
                </div>
                <div className="adminHeader__detail">
                    <Button variant="contained">Logout</Button>
                </div>
            </div>
        </div>
    )
}

export default AdminHeader
