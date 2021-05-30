import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import * as Yup from "yup"
import Swal from "sweetalert2";
import axios from "../../utils/axios";
import AppForm from '../formReuse/AppForm';
import AppFormField from '../formReuse/AppFormField';
import SubmitButton from "../formReuse/SubmitButton";
import "../../css/auth.css";
import routes from '../../utils/routes';

const initialValues = { name: "", email: "", password: "", role: "USER", phone: "" }; 

const validationSchema = Yup.object().shape({
    name: Yup.string().required().label("Name"),
    phone: Yup.string().required().label("Phone number"),
    email: Yup.string().email().required().label("Email"),
    password: Yup.string().required().min(4).label("Password"),
    passwordConfirm: Yup.string().oneOf([Yup.ref('password'), null], "Password fields does not macth"),
});

const RegisterForm = () => {
    const [success, setSuccess] = useState(false);
    const history = useHistory();

    const handleSubmit = async (data) => {
        try {
            const { status } = await axios.post("api/auth/signup", data);
            status === 200 && setSuccess(true);

        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        if (success) {
            Swal.fire(
                "Registration success",
                "Please check your mail for verification",
                "success"
            );
            history.replace(routes.LOGIN);
        }

        return () => {
            
        }
    }, [history, success])

    return (
        <div className="auth__form auth__container">
            <AppForm
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
            >
                <AppFormField
                    name="name"
                    placeholder="Your name"
                />

                <AppFormField
                    name="email"
                    type="email"
                    placeholder="Your email address"
                />

                <AppFormField
                    name="phone"
                    placeholder="Your phone number"
                />

                <AppFormField
                    name="password"
                    type="password"
                    placeholder="Your password"
                />

                <AppFormField
                    name="passwordConfirm"
                    type="password"
                    placeholder="Enter password again"
                />

                <SubmitButton title="Register me" />

            </AppForm>

            <div className="auth__form-links">
                <Link className="link" to={routes.LOGIN}>Have an account? Sign In</Link>
            </div>
        </div>
    )
}

export default RegisterForm
