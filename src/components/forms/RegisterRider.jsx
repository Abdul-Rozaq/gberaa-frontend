import React, { useEffect, useState } from 'react';
import * as Yup from "yup"
import Swal from "sweetalert2";
import AppForm from '../formReuse/AppForm';
import AppFormField from '../formReuse/AppFormField';
import SubmitButton from "../formReuse/SubmitButton";
import axios from "../../utils/axios";

import "../../css/auth.css";
import { useHistory } from 'react-router';
import routes from '../../utils/routes';

const initialValues = { firstName: "", lastName: "", email: "", password: "", phone: "", role: "RIDER" }; 

const validationSchema = Yup.object().shape({
    firstName: Yup.string().required().label("First Name"),
    lastName: Yup.string().required().label("Last Name"),
    phone: Yup.string().required().label("Phone number"),
    email: Yup.string().email().required().label("Email"),
    password: Yup.string().required().min(4).label("Password"),
    passwordConfirm: Yup.string().oneOf([Yup.ref('password'), null], "Password fields does not macth"),
});

const RegisterRider = () => {
    const [success, setSuccess] = useState(false);
    const history = useHistory();

    const handleSubmit = async (data) => {
        // alert(JSON.stringify(data));
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
        }

        history.replace(routes.ADMIN_RIDERS);
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
                    name="firstName"
                    placeholder="First Name"
                />

                <AppFormField
                    name="lastName"
                    placeholder="Last Name"
                />

                <AppFormField
                    name="email"
                    type="email"
                    placeholder="Email Address"
                />

                <AppFormField
                    name="phone"
                    placeholder="Phone Number"
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

                <SubmitButton title="Register Rider" />

            </AppForm>
        </div>
    )
}

export default RegisterRider
