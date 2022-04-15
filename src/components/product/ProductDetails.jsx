import React from "react";
import { useHistory, useParams } from "react-router-dom";
import * as QueryString from "query-string";
import { useLocation } from "react-router-dom";

const ProductDetails = () => {
   const { id } = useParams();
   const history = useHistory();
   const location = useLocation();
   const params = QueryString.parse(location.search);
   return (
      <div className="card">
         <div className="card-header">داشبورد مدیریت</div>
         <div className="card-body">
            <h5>item id: {id}</h5>
            <h4>item title: {params.title}</h4>
            <button className="btn btn-secondary" onClick={() => history.goBack()}>
               back
            </button>
         </div>
      </div>
   );
};

export default ProductDetails;
