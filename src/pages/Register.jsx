import React from 'react'
import AuthHeader from '../components/AuthHeader'
import RegisterForm from '../components/forms/RegisterForm'

const Register = () => {
    return (
        <div className="wrapper">
            <div className="auth">
                <AuthHeader />

                <div className="forms">
                    <RegisterForm />
                </div>
            </div>
        </div> 
    )
}

export default Register
