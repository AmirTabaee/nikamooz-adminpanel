import React from "react";
import PageTitle from "../custom component/PageTitle";

const MainDashboard = () => {
   return (
      <>
         <PageTitle title="Main Dashboard" description="here shows Main Dashboard" />
         <div className="card">
            <div className="card-header">داشبورد مدیریت</div>
            <div className="card-body">
               <div className="row">
                  <div className="col"></div>
               </div>
            </div>
         </div>
      </>
   );
};
export default MainDashboard;
