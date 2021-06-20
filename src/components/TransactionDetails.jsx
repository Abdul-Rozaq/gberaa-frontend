import React from 'react';
import { Button } from '@material-ui/core';

const TransactionDetails = ({ paymentId, date, amount, type, status }) => {
    return (
        <div className="transactions__details">
            <div>
                <small className="transaction__date">{date}</small>
                <br />
                <p className="transaction__amount">{paymentId || "20hsoks"}</p>
            </div>
            <div>
                <small className="transaction__date">{type}</small>
                <p className="transaction__amount">&#8358;{amount}</p>
            </div>
            <div>
                <Button 
                    variant="contained" 
                    className={`transaction__status ${status}`}
                >
                    {status}
                </Button>
            </div>
        </div>
    )
}

export default TransactionDetails
