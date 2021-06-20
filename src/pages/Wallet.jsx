import React, { useEffect } from 'react';

import PageHeader from '../components/PageHeader';
import WalletBalance from '../components/WalletBalance';
import Transactions from '../components/Transactions';

import "../css/wallet.css";
import { useDispatch } from 'react-redux';
import { getAllTransactionsForUserAsync, getWalletBalanceAsync } from '../features/transactionSlice';

const Wallet = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getWalletBalanceAsync())
        dispatch(getAllTransactionsForUserAsync())
        return () => {}
    }, [dispatch])

    return (
        <div className="wrapper">
            <div className="wallet"> 
                <PageHeader title="Wallet" />
                <WalletBalance />
                <Transactions />
            </div>
        </div>
    )
} 

export default Wallet
