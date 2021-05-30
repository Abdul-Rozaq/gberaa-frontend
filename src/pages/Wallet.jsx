import React from 'react';

import PageHeader from '../components/PageHeader';
import WalletBalance from '../components/WalletBalance';
import Transactions from '../components/Transactions';

import "../css/wallet.css";

const Wallet = () => {
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
