import { Formik } from "formik"
import * as Yup from "yup"



const CreateUser =() => {
    
    const ValidationSchema = Yup.object().shape({
        email :Yup.string()
            .required('Este campo es requerido')
            .email('Por favor, ingrese un correo electronico valido')
            .max(50,'Este correo electronico supera el limite de caracteres'),

        username :Yup.string()
            .required('Este campo es requerido')
            .min(5, ' El username debe ser mayor a 5 caracteres')
            .max(50, 'El username supera el limite de caracteres'),
        
        password :Yup.string()
            .required('Este campo es requerido')
            .min(5, ' La contraseña debe ser mayor a 5 caracteres')
            .max(75, 'La contraseña supera el limite de caracteres'),

    }) 
    const RegisterUser=(values) =>{
        console.log('vlaores from', values)
    }
    
    return(

    <Formik
        initialValues={{ email: '', username:'', password: '' }}
        validationSchema={ValidationSchema}

        >
        {({
            values, /* valores*/
            errors, /* errores*/
            touched,/* si toco el click en  el input */
            handleChange, 
            handleBlur,
            isSubmitting,
            /* and other goodies */
        }) => (
            <form >
            <input
                type="email"
                name="email"
                placeholder="email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
            />
            {errors.email && touched.email && errors.email}
            <input
                type="text"
                name="username"
                placeholder="username"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.username}
                />
                {errors.username && touched.username && errors.username}
            <input
                type="password"
                name="password"
                placeholder="password"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
            />
            {errors.password && touched.password && errors.password}
            <button  onClick={()=>RegisterUser(values)} type="button" disabled={isSubmitting}>
                Submit
            </button>
            </form>
        )}
    </Formik>

    )


}

export default CreateUser