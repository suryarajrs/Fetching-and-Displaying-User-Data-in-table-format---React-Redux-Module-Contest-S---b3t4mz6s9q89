import React, { useState, useEffect } from "react";

function UserTable() {
  
    const [userData , setUserData] = useState();



    useEffect(() => {
        const fetchapi = async ()=>{
           const response = await fetch("https://jsonplaceholder.typicode.com/users");
           const data = await response.json();
           const ans = data.sort((a,b)=>{
             b.id - a.id
           })
           setUserData(data);

        } 


        fetchapi()
    },[])
   return  (
    <>
    <table>
     <tr>
        <th>ID</th>
        <th>Name</th>
        <th>Email</th>
        <th>Phone</th>
        <th>Website columns</th>
     </tr>
    
        {userData?.map((ele)=>{
          return (

            <>
             <tr>

            <td>{ele.id}</td>
            <td>{ele.name}</td>
            <td>{ele.email}</td>
            <td>{ele.phone}</td>
            <td>{ele.website}</td>

             </tr>
            
            </>
          )
        })}
    
    </table>
    </>
   )
}

export default UserTable;
