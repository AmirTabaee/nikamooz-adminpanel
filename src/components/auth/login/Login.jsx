import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const Login = () => {
   return (
      <Formik
         initialValues={{ email: "", password: "" }}
         validationSchema={Yup.object({
            email: Yup.string().email("Invalid email address").required("Required"),
            password: Yup.string().max(15, "Must be 15 characters or less").required("Required"),
         })}
         onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
               alert(JSON.stringify(values, null, 2));
               setSubmitting(false);
            }, 400);
         }}
      >
         <form>
            <div className="form-group">
               <label for="exampleInputEmail1">Email address</label>
               <Field name="email" type="text" className="form-control" placeholder="Enter email" />
               <ErrorMessage name="firstName" />
            </div>
            <div className="form-group">
               <label for="exampleInputPassword1">Password</label>
               <Field name="password" type="password" className="form-control" placeholder="Enter email" />
               <ErrorMessage name="firstName" />
            </div>
            <button type="submit" className="btn btn-primary">
               Submit
            </button>
         </form>
      </Formik>
   );
};

export default Login;
