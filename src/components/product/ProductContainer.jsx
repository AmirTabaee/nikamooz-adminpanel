import React, { useState } from "react";
import { products, categories } from "../../globalData/InitialData";
import ProductInfo from "./ProductInfo";
import ProductList from "./ProductList";

const ProductContainer = () => {
   const [items, setItems] = useState(products);
   const [simpleItem, setSimpleItem] = useState({});

   const removeItem = (id) => {
      const temp = [...items];
      const filteredItems = temp.filter((i) => i.id !== id);
      setItems(filteredItems);
   };

   const insertItem = (product) => {
      if (product.id) {
         const temp = [...items];
         temp.forEach((item) => (item.editMode = false));
         const index = temp.findIndex((i) => i.id === product.id);
         let targetProduct = temp[index];
         targetProduct = { ...product };
         temp[index] = targetProduct;
         setItems(temp);
      } else {
         const category = categories.find((c) => c.id == product.categoryId);
         const randomId = Math.floor(Math.random() * 1000);
         product = { ...product, id: randomId, categoryName: category.title, editMode: false };
         const temp = [...items];
         setItems([...temp, product]);
      }
   };

   const handleEditMode = (id) => {
      const temp = [...items];
      temp.forEach((item) => (item.editMode = false));
      const index = temp.findIndex((i) => i.id === id);
      const product = temp[index];
      product.editMode = true;
      setSimpleItem(product);
      temp[index] = product;
      setItems(temp);
   };
   return (
      <div className="card p-4">
         <div className="row">
            <div className="col-md-3">
               <ProductInfo categories={categories} save={insertItem} simpleItem={simpleItem} />
            </div>
            <div className="col-md-9">
               <ProductList products={items} remove={removeItem} update={handleEditMode} />
            </div>
         </div>
      </div>
   );
};

export default ProductContainer;
