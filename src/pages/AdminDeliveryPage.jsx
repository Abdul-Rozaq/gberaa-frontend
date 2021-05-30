import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import AdminDelivery from '../components/AdminDelivery';
import AdminHeader from '../components/AdminHeader';
import AdminNav from '../components/AdminNav';
import { getAllDeliveriesAsync, getDeliveryByIdAsync } from '../features/deliverySlice';

import "../css/Admin.css";
import { useParams } from 'react-router';

const AdminDeliveryPage = () => {
    const dispatch = useDispatch();
    const {id} = useParams();

    useEffect(() => {
        dispatch(getAllDeliveriesAsync())
        return () => {}
    }, [dispatch])
 
    useEffect(() => {
        if (id)
            dispatch(getDeliveryByIdAsync(id));
        return () => {}
    }, [id, dispatch])

    return (
        <div className="admin">
            <AdminHeader />
            <AdminNav />
            <AdminDelivery />
        </div>
    )
}
 
export default AdminDeliveryPage
