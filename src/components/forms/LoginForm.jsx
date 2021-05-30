import React from 'react';
import { Link } from 'react-router-dom';
import * as Yup from "yup";

import AppForm from '../formReuse/AppForm';
import AppFormField from '../formReuse/AppFormField';
import SubmitButton from "../formReuse/SubmitButton";
import routes from '../../utils/routes';
import "../../css/auth.css";

const initialValues = { username: "", password: "" }; 
const validationSchema = Yup.object().shape({
    username: Yup.string().email().required().label("Email"),
    password: Yup.string().required().min(4).label("Password"),
});

const LoginForm = ({ handleLogin }) => {
    const handleSubmit = (data) => {
        handleLogin(JSON.stringify(data));
    };

    return (
        <div className="auth__form auth__container">
            <AppForm 
                initialValues={initialValues} 
                validationSchema={validationSchema} 
                onSubmit={handleSubmit}
            >
                <AppFormField name="username" placeholder="Email address" />
                <AppFormField
                    name="password"
                    type="password"
                    placeholder="Password"
                />
                <SubmitButton title="Login" />
            </AppForm>

            <div className="auth__form-links">
                <Link className="link" to={routes.FORGOT_PASSWORD}>Forgot password?</Link>
                <Link className="link" to={routes.REGISTER}>Sign up</Link>
            </div>
        </div>
    )
}

export default LoginForm

