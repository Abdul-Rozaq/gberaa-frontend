import React from 'react';
import { Link } from 'react-router-dom';
import "../../css/auth.css";
import * as Yup from "yup"
import AppForm from '../formReuse/AppForm';
import AppFormField from '../formReuse/AppFormField';
import SubmitButton from "../formReuse/SubmitButton";
import "../../css/auth.css";
import routes from '../../utils/routes';

const initialValues = { email: "" }; 
const validationSchema = Yup.object().shape({
    email: Yup.string().email().required().label("Email")
});

const ForgotPasswordForm = ({ handleForgotPassword }) => {
    const onSubmit = (data) => {
        handleForgotPassword(JSON.stringify(data));
    }
    return (
        <div className="auth__form auth__container">
            <AppForm
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={onSubmit}
            >
                <AppFormField name="email" type="email" placeholder="Enter your email" />

                <SubmitButton title="Send verification link" />
            </AppForm>

            <div className="auth__form-links">
                <Link className="link" to={routes.LOGIN}>Login to your account</Link>
            </div>
        </div>
    )
}

export default ForgotPasswordForm
