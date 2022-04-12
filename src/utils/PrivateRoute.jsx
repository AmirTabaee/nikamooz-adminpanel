import React from "react";
import { useLocation, Route, Redirect } from "react-router-dom";

const PrivateRoute = ({ component: Component, ...rest }) => {
   const location = useLocation();
   const user = JSON.parse(localStorage.getItem("user"));
   return <Route {...rest}>{user ? <Component /> : <Redirect to={{ pathname: "/login", state: { from: location } }} />}</Route>;
};

export default PrivateRoute;
