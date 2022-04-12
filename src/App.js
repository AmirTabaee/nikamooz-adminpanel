import "./App.css";
import { Switch } from "react-router-dom";
import { AdminLayout } from "./layouts/admin-layout/AdminLayout";
import { Route } from "react-router-dom";
import PrivateRoute from "./utils/PrivateRoute";
import { Login } from "./components/auth/Login";
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
