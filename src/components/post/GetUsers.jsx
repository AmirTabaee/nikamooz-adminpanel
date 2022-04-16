import React, { useEffect, useState } from "react";

const GetUsers = () => {
   const [users, setUsers] = useState([]);
   const getUsers = async () => {
      const apiUrl = "https://jsonplaceholder.typicode.com/users";
      const response = await fetch(apiUrl);
      const data = await response.json();
      setUsers(data);
   };
   useEffect(() => {
      getUsers();
   }, []);

   return (
      <div className="card">
         <div className="card-header">داشبورد مدیریت</div>
         <div className="card-body">
            <div className="row">
               <div className="col">
                  <select name="" id="">
                     <option value="">choose user</option>
                     {users.map((user) => (
                        <option key={user.id} value={user.id}>
                           {user.name}
                        </option>
                     ))}
                  </select>
               </div>
            </div>
         </div>
      </div>
   );
};

export default GetUsers;
