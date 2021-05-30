import { TableBody, TableCell, TableRow } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router'
import Swal from "sweetalert2";
import routes from '../utils/routes';
import axios from "../utils/axios";

const DeliveryTableBody = ({ deliveries }) => {
    const [priceUpdated, setPriceUpdated] = useState(false);
    const history = useHistory();

    useEffect(() => {
        if (priceUpdated)
            history.replace(routes.ADMIN_DELIVERIES);
        return () => {}
    }, [priceUpdated, history])

    const handleClick = (id) => {
        history.push(`${routes.ADMIN_DELIVERIES}/${id}`);
    }

    const handlePrice = (id) => {
        Swal.fire({
            title: "Add price",
            input: "number",
            showCancelButton: true,
            confirmButtonText: "Submit price",
            showLoaderOnConfirm: true,
            preConfirm: (data) => {
                return axios.put(`api/v1/deliveries/${id}/review?price=${data}`)
                .then(response => {
                    return response.status;
                }).catch(error => {
                    console.log(error);
                    Swal.showValidationMessage(`Request failed`)
                })
            },
            allowOutsideClick: () => !Swal.isLoading()
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire({
                    text: "Success"
                })
            }
            setPriceUpdated(true);
        })
    }

    const handleRider = async (id) => {
        console.log("assign rider to: ", id);

        let options = {};
        try {
            const { data } = await axios.get("api/v1/users/riders");
            data.forEach(rider => {
                options[rider.id] = rider.lastName;
            });
        } catch (error) {
            console.log(error);
        }
        
        Swal.fire({
            title: "Select rider",
            input: "select",
            inputOptions: options,
            showCancelButton: true,
            confirmButtonText: "Assign",
            showLoaderOnConfirm: true,
            preConfirm: (data) => {
                return axios.put(`api/v1/deliveries/${id}/assign?rider=${data}`)
                .then(response => {
                    return response.status;
                }).catch(error => {
                    console.log(error);
                    Swal.showValidationMessage(`Request failed`)
                })
            },
            allowOutsideClick: () => !Swal.isLoading()
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire({
                    text: "Success"
                })
            }
            // setPriceUpdated(true);
        })
    }

    return (
        <TableBody>
            {deliveries?.map(delivery => (
                <TableRow key={delivery.id} onClick={() => handleClick(delivery.id)}>
                    <TableCell className="tableCell">{new Date(delivery?.createdDate).toDateString()}</TableCell>
                    <TableCell className="tableCell">
                        <span>{delivery?.userName}</span>
                        <br />
                        <span>{delivery?.userPhoneNumber}</span>
                    </TableCell>
                    <TableCell className="tableCell">
                        {delivery?.price ? (
                            delivery?.price
                        ) : (
                            <span className="admin__add" 
                            onClick={() => handlePrice(delivery.id)}
                            >Add <br /> price</span>
                        )}
                    </TableCell>
                    <TableCell className="tableCell">{delivery?.status}</TableCell>
                    <TableCell className="tableCell">
                        {
                            delivery?.riderName ? (
                                <span> {delivery?.riderName} <br /> {delivery?.riderPhoneNumber}</span>
                            ) : (
                                <span
                                    className="admin__add"
                                    onClick={() => handleRider(delivery.id)}
                                >Assign <br /> to rider</span>
                            )
                        }
                    </TableCell>
                </TableRow>
            ))}
        </TableBody>
    )
}

export default DeliveryTableBody
