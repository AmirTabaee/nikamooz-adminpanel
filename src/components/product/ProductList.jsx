import React from "react";

const ProductList = ({ products, remove }) => {
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
               <tr key={item.id}>
                  <td>{item.title}</td>
                  <td>{item.categoryName}</td>
                  <td>{item.price}</td>
                  <td>
                     <button className="btn btn-danger btn-sm mr-2" onClick={() => remove(item.id)}>
                        Remove
                     </button>
                     <button className="btn btn-secondary btn-sm">Update</button>
                  </td>
               </tr>
            ))}
         </tbody>
      </table>
   );
};

export default ProductList;
