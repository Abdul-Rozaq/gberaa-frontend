import React from 'react';
import TransactionDetails from './TransactionDetails';

const Transactions = () => {
    return (
        <div className="transactions">
            <h3>Transactions</h3>
            
            <div className="transactions__box">
                <TransactionDetails 
                    date="2021-11-04" 
                    amount="10,000" 
                    status="success" 
                />
       
                <TransactionDetails 
                    date="2021-01-04" 
                    amount="105,000" 
                    status="declined" 
                />
            </div>
        </div>
    )
}

export default Transactions
