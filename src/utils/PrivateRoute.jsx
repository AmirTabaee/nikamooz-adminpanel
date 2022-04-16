import React from "react";
import { Redirect } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { Route } from "react-router-dom";

const PrivateRoute = ({ component: Component, ...rest }) => {
   const location = useLocation();
   return (
      <Route {...rest}>{localStorage.getItem("user") ? <Component /> : <Redirect to={{ pathname: "/login", state: { from: location } }} />}</Route>
   );
};

export default PrivateRoute;
