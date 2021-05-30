import { NativeSelect } from '@material-ui/core';
import React from 'react';

const Select = ({ sort, setSort }) => {
    return (
        <div className="select">
            <NativeSelect
                id="filter"
                value={sort} 
                onChange={(e) => setSort(e.target.value)}
                variant="standard"
            >
                <option value="all">All</option>
                <option value="pending">Pending</option>
                <option value="picked">Picked</option>
                <option value="delivered">Delivered</option>
            </NativeSelect>
        </div>
    )
}

export default Select
