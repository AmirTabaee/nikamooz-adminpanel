import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Redirect } from "react-router-dom";
import { useHistory } from "react-router-dom";

const Login = () => {
   const history = useHistory();
   return (
      <Formik
         initialValues={{ email: "", password: "" }}
         validationSchema={Yup.object({
            email: Yup.string().email("Invalid email address").required("Required"),
            password: Yup.string().max(15, "Must be 15 characters or less").required("Required"),
         })}
         onSubmit={(values, { setSubmitting }) => {
            setSubmitting(false);

            if (values.email === "sir.amir.71@gmail.com" && values.password === "123") {
               const user = {
                  name: "amir",
                  email: "sir.amir.71@gmail.com",
               };
               localStorage.setItem("user", JSON.stringify(user));
               history.push("/");
            } else {
               <Redirect to={{ pathname: "/login" }} />;
            }
         }}
      >
         {({ isSubmitting }) => (
            <Form>
               <div className="form-group">
                  <label for="exampleInputEmail1">Email address</label>
                  <Field name="email" type="text" className="form-control" placeholder="Enter email" />
                  <ErrorMessage name="email" component="span" className="text-danger" />
               </div>
               <div className="form-group">
                  <label for="exampleInputPassword1">Password</label>
                  <Field name="password" type="password" className="form-control" placeholder="Enter email" />
                  <ErrorMessage name="password" component="span" className="text-danger" />
               </div>
               <button type="submit" className="btn btn-primary" disabled={isSubmitting}>
                  Submit
               </button>
            </Form>
         )}
      </Formik>
   );
};

export default Login;
