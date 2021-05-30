import React from 'react';
import { useFormikContext } from 'formik';

const AppFormField = ({ name, type = "text", placeholder, label, ...otherProps }) => {
    const { handleChange, setFieldTouched, errors, touched, values} = useFormikContext();
    return (
        <React.Fragment>
            {label && <small>{label}:</small>}
            <div className="form__input">
                <input
                    name={name}
                    type={type}
                    placeholder={placeholder}
                    onChange={handleChange(name)}
                    onBlur={() => setFieldTouched(name)}
                    value={values[name]}
                    {...otherProps}
                />
            </div>

            <div className="form__error">
                {errors[name] && touched[name] && errors[name]}
            </div>
        </React.Fragment>
    )
}

export default AppFormField
