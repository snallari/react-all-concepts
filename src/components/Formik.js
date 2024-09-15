
import { useFormik } from "formik";
import { useState } from "react";

function Formik(props) {
    const [errors, setErrors]=useState({})
    const formik = useFormik({
        initialValues: { email: "" },
        validate: values => {
            if (!values.email) {
                setErrors({...errors,[errors.email] : 'Required'})
            } else if (
                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            ) {
                setErrors({...errors,[errors.email]: 'Invalid email address'})
            }
            return errors;
        },
        handleSubmit: values => {
            console.log("values", values)
            // alert(JSON.stringify(values, null, 2));
        },
        handleChange: values => {
            console.log("values", values)
        }
    });
    return <div>
        <form>
            <input type="text" name="email" onChange={formik.handleChange} />
            {errors.email && errors.email}
            <input type="password" name="password" onChange={formik.handleChange} />
            <button type="submit" onSubmit={formik.handleSubmit}>Close</button>
        </form>
    </div>
}

export default Formik