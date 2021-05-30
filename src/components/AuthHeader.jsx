import React from 'react';
import gberaaLogo from "../gberaa.png";

const AuthHeader = () => {
    return (
        <div className="auth__logo auth__container">
            <img src={gberaaLogo} alt="Gberaa" />
            <small>Your No 1 ogbonge delivery plug</small>
        </div>
    )
}

export default AuthHeader
