import React from "react";
import "../../assets/css/paper-dashboard.css";
import "../../assets/css/demo.css";
import { Sidebar } from "./Sidebar";
import { TopNavbar } from "./TopNavbar";

export const AdminLayout = () => {
   return (
      <>
         <div class="wrapper">
            <Sidebar />
            <div class="main-panel">
               <TopNavbar />
               <div className="content"></div>
            </div>
         </div>
      </>
   );
};
