import React from "react";
import { useHistory } from "react-router-dom";

const ProductList = ({ products, remove, update }) => {
   const history = useHistory();
   return (
      <table className="table table-bordered table-striped">
         <thead>
            <tr>
               <th>Title</th>
               <th>category</th>
               <th>Price</th>
               <th>Managing</th>
            </tr>
         </thead>
         <tbody>
            {products.map((item) => (
               <tr className={item.editMode ? "bg-warning" : ""} key={item.id}>
                  <td>{item.title}</td>
                  <td>{item.categoryName}</td>
                  <td>{item.price}</td>
                  <td>
                     <button className="btn btn-danger btn-sm mr-2" onClick={() => remove(item.id)}>
                        Remove
                     </button>
                     <button className="btn btn-secondary btn-sm mr-2" onClick={() => update(item.id)}>
                        Update
                     </button>
                     <button className="btn btn-primary btn-sm mr-2" onClick={() => history.push(`/products/${item.id}`)}>
                        Product Details
                     </button>
                     <button className="btn btn-primary btn-sm" onClick={() => history.push(`/products/info?id=${item.id}&title=${item.title}`)}>
                        Query string
                     </button>
                  </td>
               </tr>
            ))}
         </tbody>
      </table>
   );
};

export default ProductList;
