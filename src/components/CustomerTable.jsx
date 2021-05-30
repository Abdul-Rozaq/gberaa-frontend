import React from 'react';
import { Table, TableBody, TableCell, TableHead, TableRow } from '@material-ui/core';
import { useSelector } from 'react-redux';
import { selectCustomers } from '../features/userSlice';

const CustomerTable = () => {
    const customers = useSelector(selectCustomers);

    return (
        <Table className="table">
            <TableHead>
                <TableRow className="tableHead">
                    <TableCell className="tableCell">Name</TableCell>
                    <TableCell className="tableCell">Email Address</TableCell>
                    <TableCell className="tableCell">Phone number</TableCell>
                    <TableCell className="tableCell">Address</TableCell>
                    <TableCell className="tableCell">Joined</TableCell>
                </TableRow>
            </TableHead>

            <TableBody>
                {
                    customers.map(customer => (
                        <TableRow key={customer.id}>
                            <TableCell className="tableCell">{customer.lastName}</TableCell>
                            <TableCell className="tableCell">{customer.email}</TableCell>
                            <TableCell className="tableCell">{customer.phone}</TableCell>
                            <TableCell className="tableCell">{customer.address}</TableCell>
                            <TableCell className="tableCell">
                                {new Date(customer.createdDate).toDateString()}
                            </TableCell>
                        </TableRow>
                    ))
                }
            </TableBody>
        </Table>
    )
}

export default CustomerTable
