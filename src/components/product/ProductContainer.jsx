import React from "react";
import { products, categories } from "../../globalData/InitialData";
import ProductInfo from "./ProductInfo";
import ProductList from "./ProductList";

const ProductContainer = () => {
   return (
      <div className="card p-4">
         <div className="row">
            <div className="col-md-3">
               <ProductInfo categories={categories} />
            </div>
            <div className="col-md-9">
               <ProductList products={products} />
            </div>
         </div>
      </div>
   );
};

export default ProductContainer;
