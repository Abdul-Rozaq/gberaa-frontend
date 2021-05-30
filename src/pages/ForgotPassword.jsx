import React from 'react';
import AuthHeader from '../components/AuthHeader';
import ForgotPasswordForm from '../components/forms/ForgotPasswordForm';

const ForgotPassword = ({ handleForgotPassword }) => {
    return (
        <div className="wrapper">
            <div className="auth">
                <AuthHeader />

                <div className="forms">
                    <ForgotPasswordForm handleForgotPassword={handleForgotPassword} />
                </div>
            </div>
        </div>
    )
}

export default ForgotPassword
