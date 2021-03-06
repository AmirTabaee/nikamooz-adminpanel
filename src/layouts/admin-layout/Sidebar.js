import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/images/logo-nikamooz.png";

export const Sidebar = () => {
   return (
      <div className="sidebar" data-color="white" data-active-color="danger">
         <div className="logo">
            <NavLink className="simple-text logo-normal" to="/">
               <img src={logo} width="64%" />
            </NavLink>
         </div>
         <div className="sidebar-wrapper">
            <ul className="nav">
               <li>
                  <NavLink exact activeClassName="active" className="simple-text logo-normal" to="/">
                     <i className="nc-icon nc-bank"></i>
                     داشبورد
                  </NavLink>
               </li>
               <li>
                  <NavLink activeClassName="active" className="simple-text logo-normal" to="/products">
                     <i className="nc-icon nc-tile-56"></i>
                     محصولات
                  </NavLink>
               </li>

               <li>
                  <NavLink activeClassName="active" className="simple-text logo-normal" to="/post">
                     <i className="nc-icon nc-tile-56"></i>
                     پست ها
                  </NavLink>
               </li>
               <li>
                  <NavLink activeClassName="active" className="simple-text logo-normal" to="/formdata">
                     <i className="nc-icon nc-diamond"></i>
                     نمونه فرم
                  </NavLink>
               </li>
               <li>
                  <NavLink activeClassName="active" className="simple-text logo-normal" to="/react-hook-form">
                     <i className="nc-icon nc-diamond"></i>
                     نمونه فرم با React Hook
                  </NavLink>
               </li>
               <li>
                  <NavLink activeClassName="active" className="simple-text logo-normal" to="/formik-sample">
                     <i className="nc-icon nc-diamond"></i>
                     Formik
                  </NavLink>
               </li>
            </ul>
         </div>
      </div>
   );
};
