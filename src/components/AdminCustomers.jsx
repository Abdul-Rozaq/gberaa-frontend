import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getAllCustomersAsync } from '../features/userSlice';
import CustomerTable from "./CustomerTable";

const AdminCustomers = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllCustomersAsync());
        return () => {}
    }, [dispatch])

    return (
        <div className="adminCustomers">
            <div className="adminCustomers__header">
                <h3>Customers</h3>
            </div>
            <div className="adminCustomers__content">
                <CustomerTable />
            </div>
        </div>
    )
}

export default AdminCustomers
