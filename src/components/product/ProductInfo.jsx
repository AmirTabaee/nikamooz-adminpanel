import React, { useEffect } from "react";
import { useForm } from "react-hook-form";

const ProductInfo = ({ categories, save, simpleItem }) => {
   const {
      register,
      handleSubmit,
      formState: { errors },
      reset,
   } = useForm();

   useEffect(() => {
      reset(simpleItem);
   }, [simpleItem]);

   const submitForm = (data) => {
      console.log(data);
      save(data);
   };
   return (
      <form onSubmit={handleSubmit(submitForm)}>
         <div className="form-gorup">
            <label className="form-check-label" htmlFor="title">
               Title:
            </label>
            <input {...register("title", { required: true, minLength: 5 })} className="form-control" />
            {errors.title?.type === "minLength" && <span className="text-danger">at least should be 5 chr</span>}
            {errors.title?.type === "required" && <span className="text-danger">should be filled</span>}
         </div>
         <div className="form-gorup">
            <label className="form-check-label" htmlFor="category">
               Category:
            </label>
            <select className="form-control" {...register("categoryId")}>
               <option value={0}>choose</option>
               {categories.map((category) => (
                  <option key={category.id} value={category.id}>
                     {category.title}
                  </option>
               ))}
            </select>
         </div>
         <div className="form-gorup">
            <label className="form-check-label" htmlFor="price">
               Price:
            </label>
            <input {...register("price", { required: true })} className="form-control" />
            {errors.price && <span className="text-danger">should be filled</span>}
         </div>
         <button type="submit" className="btn btn-info">
            submit
         </button>
      </form>
   );
};

export default ProductInfo;
