import { Route } from "react-router-dom";
import { Switch } from "react-router-dom";
import "./App.css";
import Login from "./components/auth/login/Login";
import { AdminLayout } from "./layouts/admin-layout/AdminLayout";
import PrivateRoute from "./utils/PrivateRoute";

//alias

function App() {
   return (
      <Switch>
         <Route path="/login" component={Login} />
         <PrivateRoute path="/" component={AdminLayout} />
      </Switch>
   );
}

export default App;
