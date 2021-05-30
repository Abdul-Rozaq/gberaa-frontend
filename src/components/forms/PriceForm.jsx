import React from 'react';
import * as Yup from "yup"
import AppForm from '../formReuse/AppForm';
import AppFormField from '../formReuse/AppFormField';
import SubmitButton from "../formReuse/SubmitButton";

const initialValues = { price: "" }; 
const validationSchema = Yup.object().shape({
    price: Yup.number().required().label("Price"),
});

const PriceForm = () => {
    const handleSubmit = (data) => {
        alert(JSON.stringify(data));
    };

    return (
        <AppForm
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
        >
            <AppFormField
                name="price"
                type="number"
            />
            <SubmitButton title="Add price" />
        </AppForm>
    )
}

export default PriceForm
