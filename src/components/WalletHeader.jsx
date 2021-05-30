import React from 'react';
import { ArrowBack } from "@material-ui/icons";

const WalletHeader = () => {
    return (
        <div className="wallet__header">
            <ArrowBack className="wallet__icon" />
            <h1>Wallet</h1>
        </div>
    )
}

export default WalletHeader
