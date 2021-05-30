import React from 'react'
import { NavLink } from 'react-router-dom'
import routes from '../utils/routes'

const AdminNav = () => {
    
    return (
        <div className="adminNav">
            <NavLink to={routes.ADMIN_DELIVERIES} className="link">
                Deliveries
            </NavLink>
            <NavLink to={routes.ADMIN_RIDERS} className="link">
                Riders
            </NavLink>
            <NavLink to={routes.ADMIN_CUSTOMERS} className="link">
                Customers
            </NavLink>
        </div>
    )
}

export default AdminNav
