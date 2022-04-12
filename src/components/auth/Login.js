import React from "react";
import "./Login.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useHistory } from "react-router-dom";
import * as Yup from "yup";

export const Login = () => {
   const history = useHistory();
   return (
      <>
         <div className="login-wrap">
            <div className="login-html">
               <input id="tab-1" type="radio" name="tab" className="sign-in" checked />
               <label for="tab-1" className="tab">
                  ورود به پنل
               </label>
               <input id="tab-2" type="radio" name="tab" className="for-pwd" />
               <label for="tab-2" className="tab">
                  فراموشی رمز عبور
               </label>
               <div className="login-form">
                  <div className="sign-in-htm">
                     <Formik
                        initialValues={{ email: "", password: "" }}
                        validationSchema={Yup.object({
                           email: Yup.string().email("Invalid Email Address").required("must be filled"),
                           password: Yup.string().required("must be filled"),
                        })}
                        onSubmit={(values, { setSubmitting }) => {
                           console.log(values);
                           const user = {
                              userId: "123",
                              userName: "sirAmir",
                              fullname: "amir alavi tabaee ",
                              thumbnail: "../../assets/images/user.png",
                           };
                           if (values.email === "sir.amir.71@gmail.com" && values.password == "123") {
                              localStorage.setItem("user", JSON.stringify(user));
                              history.push("/");
                           }
                           setSubmitting(false);
                        }}
                     >
                        {({ isSubmitting }) => (
                           <Form>
                              <div className="group">
                                 <label for="email" className="label">
                                    نام کاربری
                                 </label>
                                 <Field type="email" name="email" className="input" />
                                 <ErrorMessage name="email" component="div" />
                              </div>
                              <div className="group">
                                 <label for="pass" className="label">
                                    رمز عبور
                                 </label>
                                 <Field type="password" name="password" className="input" />
                                 <ErrorMessage name="password" component="div" />
                              </div>
                              <div className="group">
                                 <button type="submit" className="button" disabled={isSubmitting}>
                                    ورود
                                 </button>
                              </div>
                           </Form>
                        )}
                     </Formik>
                     <div className="hr"></div>
                  </div>
                  <div className="for-pwd-htm">
                     <div className="group">
                        <label for="user" className="label">
                           نام کاربری یا ایمیل
                        </label>
                        <input id="user" type="text" className="input" />
                     </div>
                     <div className="group">
                        <input type="submit" className="button" value="بازیابی رمز" />
                     </div>
                     <div className="hr"></div>
                  </div>
               </div>
            </div>
         </div>
      </>
   );
};
