import React from "react";
import "../../assets/css/paper-dashboard.css";
import "../../assets/css/demo.css";
import { Sidebar } from "./Sidebar";
import { TopNavbar } from "./TopNavbar";
import { Switch, Route } from "react-router-dom";
import ProductContainer from "../../components/product/ProductContainer";
import MainDashboard from "../../components/dashboard/MainDashboard";
import ProductDetails from "../../components/product/ProductDetails";
import GetUsers from "../../components/post/GetUsers";

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
                     <Route path="/post" component={GetUsers} />
                  </Switch>
               </div>
            </div>
         </div>
      </>
   );
};
