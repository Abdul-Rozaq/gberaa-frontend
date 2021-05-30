import { useFormikContext } from 'formik'
import React from 'react'

const SubmitButton = ({ title, ...otherProps }) => {
    const { handleSubmit, isSubmitting } = useFormikContext();
    return (
        <button onClick={handleSubmit} disabled={isSubmitting} type="submit" {...otherProps}>
            {title}
        </button>
    )
}

export default SubmitButton
