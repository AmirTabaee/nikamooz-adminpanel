import React from 'react'
import {Switch, Route} from 'react-router-dom'
import '../../assets/css/paper-dashboard.css';
import '../../assets/css/demo.css';
import { Sidebar } from './Sidebar';
import { TopNavbar } from './TopNavbar';
import { MainDashboard } from '../../components/dashboard/MainDashboard';
import { ProductContainer } from '../../components/product/ProductContainer';
import { FormDataSample } from '../../sampleForms/FormDataSample';
import { ProductDetails } from '../../components/product/ProductDetails';
import FormikSample from '../../sampleForms/FormikSample';
import { ReactHookForm } from '../../sampleForms/ReactHookForm';
import { PageNotFount } from '../../components/page-not-found/PageNotFount';
import { Login } from '../../components/auth/Login';
export const AdminLayout = () => {
  return (
    <>
      <div class="wrapper">
        <Sidebar />
        <div class="main-panel">
          <TopNavbar />
          <div className="content">
            <Switch>
              <Route path="/" exact component={MainDashboard} />
              <Route path="/products" exact component={ProductContainer} />
              <Route path="/products/:id" component={ProductDetails} />
              <Route path="/products/info" component={ProductDetails} />
              <Route path='/formdata' component={FormDataSample} />
              <Route path='/react-hook-form' component={ReactHookForm} />
              <Route path='/formik-sample' component={FormikSample} />
              <Route path='/login' component={Login} />
              <Route path="*" component={PageNotFount} />
            </Switch>
          </div>
        </div>
      </div>
    </>
  )
}
