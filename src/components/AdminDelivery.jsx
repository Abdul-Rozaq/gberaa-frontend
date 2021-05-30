import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router';
import { useSelector } from 'react-redux';
import Swal from "sweetalert2";
import { selectDelivery, selectError, selectLoading } from '../features/deliverySlice';
import Select from './Select';
import DeliveryTable from "./DeliveryTable";
import DeliveryForm from "./forms/DeliveryForm";

const AdminDelivery = () => {
    const [sort, setSort] = useState("all");
    const {id} = useParams();

    const loading = useSelector(selectLoading);
    const error = useSelector(selectError);
    const delivery = useSelector(selectDelivery);

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
        <div className="adminDelivery">
            <div className="adminDelivery__header">
                <h3>Deliveries</h3> 
                <Select sort={sort} setSort={setSort} />
            </div>

            <div className="adminDelivery__content">
                <div>
                    <DeliveryTable />
                </div> 
                { id && (
                    <div>
                        {
                            loading ? (
                                <p>L.O.A.D.I.N.G</p>
                            ) : (
                                <DeliveryForm data={delivery} />
                            )
                        }
                    </div>
                )
                }
            </div>
        </div>
    )
}

export default AdminDelivery
