import React, { useState } from "react";
import { products, categories } from "../../globalData/InitialData";
import ProductInfo from "./ProductInfo";
import ProductList from "./ProductList";

const ProductContainer = () => {
   const [items, setItems] = useState(products);

   const removeItem = (id) => {
      const temp = [...items];
      const filteredItems = temp.filter((i) => i.id !== id);
      setItems(filteredItems);
   };

   const insertItem = (product) => {
      const category = categories.find((c) => c.id == product.categoryId);
      const randomId = Math.floor(Math.random() * 1000);
      product = { ...product, id: randomId, categoryName: category.title, editMode: false };
      const temp = [...items];
      setItems([...temp, product]);
   };
   return (
      <div className="card p-4">
         <div className="row">
            <div className="col-md-3">
               <ProductInfo categories={categories} save={insertItem} />
            </div>
            <div className="col-md-9">
               <ProductList products={items} remove={removeItem} />
            </div>
         </div>
      </div>
   );
};

export default ProductContainer;
