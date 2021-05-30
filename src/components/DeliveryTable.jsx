import React from 'react';
import { Table, TableCell, TableHead, TableRow } from '@material-ui/core';
import { useSelector } from 'react-redux';
import { selectDeliveries } from '../features/deliverySlice';
import DeliveryTableBody from './DeliveryTableBody';

const DeliveryTable = () => {
    const deliveries = useSelector(selectDeliveries);
    
    return (
        <Table className="table">
            <TableHead>
                <TableRow className="tableHead">
                    <TableCell className="tableCell">Date</TableCell>
                    <TableCell className="tableCell">Customer</TableCell>
                    <TableCell className="tableCell">Price</TableCell>
                    <TableCell className="tableCell">Status</TableCell>
                    <TableCell className="tableCell">Rider</TableCell>
                </TableRow>
            </TableHead>

            <DeliveryTableBody deliveries={deliveries} />
        </Table>
    )
}

export default DeliveryTable
