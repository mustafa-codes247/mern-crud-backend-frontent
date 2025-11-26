import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom";


const Users = () => {
    const [user,setUser]= useState([]);

    useEffect(()=>{
        axios.get("http://localhost:8080/api/get")
        .then((res)=>setUser(res.data.users))

    },[])

  return (
    <div>
      <button className='py-2 px-4 rounded-lg bg-blue-400 m-4'>
        <Link to="/add">Add new user</Link>
      </button>
      <div className='grid lg:grid-cols-4 gap-4'>
        {
            user.map((i)=>(
                <div key={i} className='bg-blue-400 p-4'>

                    <h1>{i.name}</h1>
                     <h1>{i.lastName}</h1>
                     <h1>{i.email}</h1>
                     <h1>{i.phone}</h1>
                     <div className='flex gap-4 mt-4'>
                       <button className='py-2 px-4 rounded-lg bg-green-400'>
    {/* Corrected Link path: Use i._id */}
    <Link to={`/update/${i._id}`}>Edit</Link>
</button>
                        <button className='py-2 px-4 rouonded-lg bg-red-400'>Delete
                        </button>
                     </div>
                </div>
            ))
        }
      </div>
    </div>
  )
}

export default Users
