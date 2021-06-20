import React from 'react';
import { AddCircle } from "@material-ui/icons"
import { selectWalletBalance } from '../features/transactionSlice';
import { useSelector } from 'react-redux';

const WalletBalance = () => {
    const wallet = useSelector(selectWalletBalance);

    return (
        <div className="walletBalance">
            <AddCircle className="walletBalance__icon" />
            <div className="walletBalance__info">
                <small className="walletBalance__label">Your Balance</small>
                <p className="walletBalance__amount">&#8358;{wallet?.data?.balance}</p>
            </div>
        </div>
    )
}

export default WalletBalance
