import { Formik } from 'formik'
import React from 'react'

const AppForm = ({ initialValues, onSubmit, validationSchema, children }) => {
    return (
        <Formik
            initialValues={initialValues}
            onSubmit={onSubmit}
            validationSchema={validationSchema}
        >
            {() => <React.Fragment>{children}</React.Fragment>}
        </Formik>
    )
}

export default AppForm
