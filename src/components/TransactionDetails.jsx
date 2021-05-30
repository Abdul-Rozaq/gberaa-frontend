import React from 'react';
import { Button } from '@material-ui/core';

const TransactionDetails = ({ date, amount, status }) => {
    return (
        <div className="transactions__details">
            <small className="transaction__date">{date}</small>
            <p className="transaction__amount">&#8358;{amount}</p>
            <Button 
                variant="contained" 
                className={`transaction__status ${status}`}
            >
                {status}
            </Button>
        </div>
    )
}

export default TransactionDetails
