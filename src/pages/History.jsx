import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Swal from "sweetalert2";

import HistoryDetails from '../components/HistoryDetails';
import PageHeader from '../components/PageHeader';
import Select from '../components/Select';
import "../css/history.css";
import { selectCurrentUser } from '../features/authSlice';
import { selectDeliveries, selectLoading, selectError, getAllDeliveriesForUserAsync, getAllDeliveriesForRiderAsync, getDeliveriesByStatusForRiderAsync, getDeliveriesByStatusForUserAsync } from '../features/deliverySlice';

const History = () => {
    const [sort, setSort] = useState("all");
    const dispatch = useDispatch();

    const loading = useSelector(selectLoading);
    const error = useSelector(selectError);
    const deliveries = useSelector(selectDeliveries);
    const currentUser = useSelector(selectCurrentUser);
 
    useEffect(() => {
        
        if (currentUser?.authorities[0]?.authority === "ROLE_USER") {
            if (sort === "picked" || sort === "delivered" || sort === "pending")
                dispatch(getDeliveriesByStatusForUserAsync(sort.toLowerCase()));
            else
                dispatch(getAllDeliveriesForUserAsync());

        } else if (currentUser?.authorities[0]?.authority === "ROLE_RIDER") {
            if (sort === "picked" || sort === "delivered")
                dispatch(getDeliveriesByStatusForRiderAsync(sort.toLowerCase()));
            else
                dispatch(getAllDeliveriesForRiderAsync());
        }
            
        return () => {}
    }, [dispatch, currentUser, sort])

    useEffect(()=>{
        if (error) {
            Swal.fire({
                icon: 'error',
                title: error,
                timer: 4000,
            });
        }      
    },[error])
 
    return (
        <div className="wrapper">
            <div className="history">
                <PageHeader title="Deliveries" />
                <Select sort={sort} setSort={setSort} />

                <div className="history__box">
                    {
                        loading ? (
                            <p style={{ textAlign: "center" }}>L.O.A.D.I.N.G</p>
                        ) : (
                            deliveries.length > 0 ? (
                                deliveries.map(del => <HistoryDetails 
                                    key={del.id} 
                                    data={del} 
                                />)
                            ) : (
                                <p>No Deliveries Found</p>
                            )
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default History
