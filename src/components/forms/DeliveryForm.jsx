import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import * as Yup from "yup";
import Swal from "sweetalert2";

import axios from "../../utils/axios";
import routes from "../../utils/routes";
import AppForm from "../formReuse/AppForm";
import AppFormField from "../formReuse/AppFormField";
import SubmitButton from "../formReuse/SubmitButton";
 
const validationSchema = Yup.object().shape({
  additionalInfo: Yup.string().trim().label("Additional information"),
  deliveryDate: Yup.date().label("Delivery Date").default(() => new Date()),
  pickUpAddress: Yup.string().trim().required().label("Pick up address"),
  pickUpPhoneNumber: Yup.string().trim().required().label("Pick up phone number"),
  receiverAddress: Yup.string().trim().required().label("Receiver address"),
  receiverName: Yup.string().trim().required().label("Receiver name"),
  receiverPhoneNumber: Yup.string().trim().required().label("Receiver phone number"),
  deliveryType: Yup.string(),
});

const DeliveryForm = ({ deliveryType, data }) => {
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const history = useHistory();

  const onSubmit = async (obj) => {
    try {
      const { data } = await axios.post("api/v1/deliveries", JSON.stringify(obj));
      data.status === "Successful" && setSuccess(data?.description);
    } catch (error) {
      setError(data?.status);
      console.log(error);
    }
  };

  useEffect(()=>{
      if (error){
        Swal.fire({
            icon: 'error',
            title: error,
            timer: 4000,
        });
      }
  },[error])

  useEffect(() => {
    if (success) {
        Swal.fire(
            "Successful",
            success,
            "success"
        );
        history.replace(routes.HISTORY);
    }
}, [history, success])


  const initialValues = {
    additionalInfo: "",
    pickUpAddress: "",
    pickUpPhoneNumber: "",
    receiverAddress: "",
    receiverName: "",
    receiverPhoneNumber: "",
    deliveryDate: "",
    deliveryType,
  };

  return (
    <AppForm
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
    >
        {deliveryType === "scheduled" && (
          <AppFormField 
            name="deliveryDate" 
            label="Delivery date" 
            type="date"
          />
        )}

        {data?.deliveryDate && (
            <AppFormField 
              name="deliveryDate" 
              label="Delivery date" 
              placeholder={new Date(data?.deliveryDate).toDateString()}
              disabled={new Date(data?.deliveryDate).toDateString()}
            />
        )}

        <AppFormField 
          name="pickUpAddress" 
          label="Pick up address" 
          placeholder={data?.pickUpAddress}
          disabled={data?.pickUpAddress}
        />

        <AppFormField 
          name="pickUpPhoneNumber" 
          label="Pick up phone number" 
          placeholder={data?.pickUpPhoneNumber}
          disabled={data?.pickUpPhoneNumber}
        />

        <AppFormField 
          name="receiverAddress" 
          label="Receiver address" 
          placeholder={data?.receiverAddress}
          disabled={data?.receiverAddress}
        />

        <AppFormField 
          name="receiverName" 
          label="Receiver name" 
          placeholder={data?.receiverName}
          disabled={data?.receiverName}
        />

        {data?.delivery?.price && (
            <AppFormField 
              name="price" 
              label="Price" 
              placeholder={data?.delivery?.price}
              disabled={data?.delivery?.price}
            />
        )}

        <AppFormField
            name="receiverPhoneNumber"
            label="Receiver phone number"
            placeholder={data?.receiverPhoneNumber}
            disabled={data?.receiverPhoneNumber}
        />

        <AppFormField
            name="additionalInfo"
            label="Additional information"
            placeholder={data?.additionalInfo}
            disabled={data?.receiverName}
        />

        {data?.receiverName ? (null) : (<SubmitButton title="Submit request" />)}
    </AppForm>
  );
};

export default DeliveryForm;
