import React from 'react';
import { useSelector } from 'react-redux';
import { selectTransactions } from '../features/transactionSlice';
import TransactionDetails from './TransactionDetails';

const Transactions = () => {
    const transactions = useSelector(selectTransactions);

    return (
        <div className="transactions">
            <h3>Transactions</h3>
            
            <div className="transactions__box">
                {
                    transactions?.data.length > 0 ? (
                        transactions?.data?.map(transaction => (
                            <TransactionDetails 
                                paymentId={transaction.paymentId}
                                date={new Date(transaction.paymentDate).toDateString()} 
                                type={transaction.type}
                                amount={transaction.amount} 
                                status={transaction.status}
                                key={transaction.id}
                            />
                        ))
                    ) : (
                        <p>You haven't made any transaction yet</p>
                    )
                }
            </div>
        </div>
    )
}

export default Transactions
