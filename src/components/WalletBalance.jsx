import React from 'react';
import { AddCircle } from "@material-ui/icons"

const WalletBalance = () => {
    return (
        <div className="walletBalance">
            <AddCircle className="walletBalance__icon" />
            <div className="walletBalance__info">
                <small className="walletBalance__label">Your Balance</small>
                <p className="walletBalance__amount">&#8358;0</p>
            </div>
        </div>
    )
}

export default WalletBalance
