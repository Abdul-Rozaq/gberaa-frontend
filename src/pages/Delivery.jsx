import React, { useEffect } from 'react';
import Swal from "sweetalert2";
import { useHistory, useParams } from 'react-router';
import qs from "query-string";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import PageHeader from "../components/PageHeader";
import DeliveryForm from '../components/forms/DeliveryForm';
import "../css/delivery.css";
import { getDeliveryByIdAsync, selectDelivery, selectError, selectLoading } from '../features/deliverySlice';

const Delivery = () => {
    const {id} = useParams();
    const history = useHistory();
    const parsed = qs.parse(history.location.search);
    const dispatch = useDispatch();

    const loading = useSelector(selectLoading);
    const error = useSelector(selectError);
    const delivery = useSelector(selectDelivery);

    useEffect(() => {
        if (id)
            dispatch(getDeliveryByIdAsync(id));
        return () => {}
    }, [id, dispatch])

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
            <div className="delivery">
                <PageHeader title="Delivery Details" />

                <div className="delivery__form">
                    {
                        loading ? (
                            <p>L.O.A.D.I.N.G</p>
                        ) : (
                            <DeliveryForm deliveryType={parsed.type} data={delivery} />
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default Delivery
