import axios from 'axios';
import React, { useEffect, useState } from 'react'
import {Link} from "react-router-dom"

const GetUser = () => {
  const [user,setUser]=useState([]);

  useEffect(()=>{
    axios
    .get("http://localhost:8080/api/get")
    .then((res)=>setUser(res.data.users));
  },[]);

  const handleDelete = async (userId)=>{
    try {
      await axios.delete(`http://localhost:8080/api/delete/${userId}`);
      setUser(user.filter((user)=>user._id !== userId))
    } catch (error) {
      console.error("error deleting user:",error);
    }
  }
  return (
    <>
      <Link to= "/add">
      <button className='p-4 bg-blue-700 text-white m-4'> add new user</button>
      </Link>

      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
        {user.map((items)=>(
          <div key={items} className='border rounded=md p-4 shadow-md'>
            <h1 className='text-gray-600'>
          {items.name} 
            </h1>
            <h1 className='text-gray-600'>
           {items.lastName}
            </h1>
           

           <h6 className="text-gray-600">{items.email}</h6>
            <h6 className="text-gray-600">{items.phone}</h6>
  
              <Link to={`/update/${items._id}`}>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-md mr-2">Edit
                </button></Link>
           
            <button
            onClick={()=>handleDelete(items._id)}
            className='bg-red-600 text-white px-4 py-2 rounded-md mr-2'
            >
Delete
            </button>
          </div>
        ))}

      </div>
    </>
  )
}

export default GetUser
