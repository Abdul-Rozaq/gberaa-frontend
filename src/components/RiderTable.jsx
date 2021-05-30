import React from 'react';
import { Table, TableBody, TableCell, TableHead, TableRow } from '@material-ui/core';
import { selectRiders } from '../features/userSlice';
import { useSelector } from 'react-redux';

const RiderTable = () => {
    const riders = useSelector(selectRiders);
    console.log(riders);

    return (
        <Table className="table">
            <TableHead>
                <TableRow className="tableHead">
                    <TableCell className="tableCell">Name</TableCell>
                    <TableCell className="tableCell">Contacts</TableCell>
                    <TableCell className="tableCell">Address</TableCell>
                    <TableCell className="tableCell">Tasks</TableCell>
                    <TableCell className="tableCell">Completed</TableCell>
                    <TableCell className="tableCell">Pending</TableCell>
                </TableRow>
            </TableHead>

            <TableBody>
                {
                    riders.map(rider => (
                        <TableRow key={rider.id}>
                            <TableCell className="tableCell">
                                {rider.lastName} <br /> {rider.firstName}
                            </TableCell>
                            <TableCell className="tableCell">
                                {rider.email} <br /> {rider.phone}
                            </TableCell>
                            <TableCell className="tableCell">{rider.address}</TableCell>
                            <TableCell className="tableCell">{rider.tasks}</TableCell>
                            <TableCell className="tableCell">{rider.delivered}</TableCell>
                            <TableCell className="tableCell">{rider.pending}</TableCell>
                        </TableRow>
                    ))
                }
            </TableBody>
        </Table>
    )
}

export default RiderTable
