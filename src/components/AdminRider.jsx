import { Button } from '@material-ui/core';
import React, { useEffect } from 'react';
import RiderTable from './RiderTable';
import RegisterRider from "./forms/RegisterRider";
import { useDispatch } from 'react-redux';
import { getAllRidersAsync } from '../features/userSlice';

const AdminRider = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllRidersAsync());
        return () => {}
    }, [dispatch])

    return (
        <div className="adminRider">
            <div className="adminRider__header">
                <h3>Riders</h3>
                <div className="adminRider__cta">
                    <Button variant="contained">Create rider</Button>
                </div>
            </div>

            <div className="adminRider__content">
                <div>
                    <RiderTable />
                </div>
                <div>
                    <h4>Create rider</h4>
                    <RegisterRider /> 
                </div>
            </div>
        </div>
    )
}

export default AdminRider
