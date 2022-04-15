import React, { useState } from "react";
import { products, categories } from "../../globalData/InitialData";
import ProductInfo from "./ProductInfo";
import ProductList from "./ProductList";
import swal from "sweetalert";

const ProductContainer = () => {
   const [items, setItems] = useState(products);
   const [simpleItem, setSimpleItem] = useState({});

   const removeItem = (id) => {
      swal({
         title: "remove warning",
         text: "Are you sure removing this item?",
         icon: "warning",
         dangerMode: true,
      }).then((willDelete) => {
         const temp = [...items];
         const filteredItems = temp.filter((i) => i.id !== id);
         setItems(filteredItems);
         if (willDelete) {
            swal("Deleted!", "Your imaginary file has been deleted!", "success");
         }
      });
   };

   const insertItem = (product) => {
      if (product.id) {
         const category = categories.find((c) => c.id == product.categoryId);
         const temp = [...items];
         temp.forEach((item) => (item.editMode = false));
         const index = temp.findIndex((i) => i.id === product.id);
         let targetProduct = temp[index];
         targetProduct = { ...product, categoryName: category.title };
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
