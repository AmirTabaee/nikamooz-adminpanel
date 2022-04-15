import React from "react";
import "../../assets/css/paper-dashboard.css";
import "../../assets/css/demo.css";
import { Sidebar } from "./Sidebar";
import { TopNavbar } from "./TopNavbar";
import { Switch, Route } from "react-router-dom";
import ProductContainer from "../../components/product/ProductContainer";
import MainDashboard from "../../components/dashboard/MainDashboard";

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
                     <Route path="/products" component={ProductContainer} />
                  </Switch>
               </div>
            </div>
         </div>
      </>
   );
};
