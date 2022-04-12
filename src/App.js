import './App.css';
import logo from './assets/images/logo-nikamooz.png';
import { ProductContainer } from './components/product/ProductContainer';
import { FormDataSample } from './sampleForms/FormDataSample';
import {BrowserRouter as Router, Switch, Route, NavLink} from 'react-router-dom';
import { MainDashboard } from './components/dashboard/MainDashboard';
import { AdminLayout } from './layouts/admin-layout/AdminLayout';
//alias

function App() {
  //return <FormDataSample />
  return <AdminLayout />
  return (
    <Router>
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand" href="#">
            <img src={logo} width="130"/>
          </a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active">
                {/* <a className="nav-link" href="#">داشبورد <span className="sr-only">(current)</span></a> */}
                <NavLink className="nav-link" to="/" exact activeClassName="active-menu-item">داشبورد</NavLink>
              </li>
              <li className="nav-item">
              <NavLink className="nav-link" to="/product" activeClassName="active-menu-item">لیست محصولات</NavLink>
              </li>
              <li className="nav-item">
              <NavLink className="nav-link" to="/formdata" activeClassName="active-menu-item">نمونه مثال FormData</NavLink>
              </li>
            </ul>
            <form className="form-inline my-2 my-lg-0">
              <input className="form-control ml-sm-2" type="search" placeholder="" aria-label="Search" />
              <button className="btn btn-outline-success my-2 my-sm-0" type="submit">جستجو</button>
            </form>
          </div>
        </nav>
      </div>
      <div className="container-fluid p-4">
         <Switch>
            {/* /products */}
            <Route path="/" exact component={MainDashboard} />
            <Route path="/products" component={ProductContainer} />
            {/* <Route path="/products/:id" component={ProductContainer} /> */}
            <Route path='/formdata' component={FormDataSample} />
         </Switch>
      </div>
    </Router>
  );
}

export default App;
