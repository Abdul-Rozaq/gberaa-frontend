import React from 'react';
import * as Yup from "yup";
import AppForm from '../formReuse/AppForm';
import AppFormField from '../formReuse/AppFormField';
import SubmitButton from '../formReuse/SubmitButton';

const initialValues = {
    name: "",
    email: "",
    phone: "",
}

const validationSchema = Yup.object().shape({
    name: Yup.string().trim().label("Name"),
    email: Yup.string().trim().lowercase().label("Email"),
    phone: Yup.string().trim().label("Phone")
});

const ProfileForm = ({ user }) => {
    const handleSubmit = (data) => {
        alert(JSON.stringify(data));
    }
    return (
        <AppForm
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
        >
            <AppFormField
                name="name"
                label="Your Name"
                placeholder={`${user?.lastName} ${user?.firstName || ""}`}
                disabled={user?.lastName}
            />

            <AppFormField
                name="email"
                type="email"
                label="Email Address"
                placeholder={user?.email}
                disabled={user?.email}
            />

            <AppFormField
                name="phone"
                label="Phone Number"
                placeholder={user?.phone}
                disabled={user?.phone}
            />

            <AppFormField
                name="address"
                label="Address"
                placeholder={user?.address}
                disabled={user?.address}
            />

            <SubmitButton title="Update" disabled={user} />
        </AppForm>
    )
}

export default ProfileForm
