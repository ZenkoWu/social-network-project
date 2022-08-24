import React from 'react';
import {Formik, Form, Field, ErrorMessage} from "formik";
import * as Yup from "yup";

const validateLoginForm = (values) => {
    const errors = {};
    if (!values.email) {
       errors.email = 'Required!';
    } else if (
       !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test( values.email )
    ) {
       errors.email = 'Invalid email address';
    }
    return errors;
 };
 
 const validationSchemaLoginForm = Yup.object().shape( {
 
    password: Yup.string()
       .min( 2, "Must be longer than 6 characters" )
       .max( 25, "Must be shorter than 25 characters" )
       .required( "Required!" )
 } );

 

const Login = (props) => {
  return (
      <div className="container col-5 m-auto  mt-3">
        <h2 className="text-center " style={{color: '#3f4854'}}>Login</h2>  {/* text-light */}
        <Formik
            initialValues={{
               email: "",
               password: "",
               rememberMe: false
            }}
            validate={validateLoginForm}
            validationSchema={validationSchemaLoginForm}
            onSubmit={(values) => {
               console.log( values )
            }}
         >
            {() => (<LoginForm/>)}
         </Formik>
      </div>
   ) 
}

export const LoginForm = () => {
  return (
    <div>
      <Form action="#" className="mt-3">
          <div className="form-group mb-3">
            <div className="input-group">
              <span className="input-group-text" id="email">
                <i className="fa-solid fa-envelope"></i>
              </span>
              <Field
                type={"email"}
                placeholder={"Your Email..."}
                name={"email"}
                className="form-control"
                id="email"/>
            </div>
            <ErrorMessage name="email" component="div" />
          </div>
         
          <div className="form-group mb-4">
            <div className="input-group">
              <span className="input-group-text" id="password">
                <i className="fa-solid fa-lock"></i>
              </span>
              <Field
                type="password"
                placeholder="Your Password..."
                name="password"
                className="form-control"
                id="password"/>
            </div>
            <ErrorMessage name="password" component="div" />
          </div>
          <div className="form-check mb-4">
            <Field
              type="checkbox"
              name="rememberMe"
              id="rememberMe"
              className="form-check-input"/>
            <label htmlFor="rememberMe">Remember me</label>
          </div>
          <button type="submit" className="btn btn-primary form-control"> Login</button>
        </Form>
            
    </div>
    )
}

export default Login;










// const Login = () => {

//    return (
//       <div>
//          <h2> ... Login 555 </h2>
//          <Formik
//             initialValues={{
//                email: "",
//                password: "",
//                rememberMe: false
//             }}
//             validate={validateLoginForm}
//             validationSchema={validationSchemaLoginForm}
//             onSubmit={(values) => {
//                console.log( values )
//             }}
//          >
//             {() => (
//                <Form>
//                   <div>
//                      <Field
//                         name={'email'}
//                         type={'text'}
//                         placeholder={'e-mail'} />
//                   </div>
//                   <ErrorMessage name="email" component="div" />

//                   <div>
//                      <Field
//                         name={'password'}
//                         type={'password'}
//                         placeholder={'password'} />
//                   </div>
//                   <ErrorMessage name="password" component="div" />

//                   <div>
//                      <Field
//                         type={'checkbox'}
//                         name={'rememberMe'}
//                         id='rememberMe' />
//                      <label htmlFor={'rememberMe'}> remember me </label>
//                   </div>

//                   <button type={'submit'}>Login</button>
//                </Form>
//             )}
//          </Formik>

//          <div>
//             ...
//          </div>

//       </div>
//    )
// }

// export default Login;