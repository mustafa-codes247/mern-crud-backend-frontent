import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const UpdateUser = () => {
    const {id} =useParams();
    const [values,setValues]=useState({});
    const navigate= useNavigate();

    useEffect(()=>{
      if (id){
        // fetch user data using user id
        const fetchUser=async ()=>{
          try{
            const res = await axios.get(
              `http://localhost:8080/api/update/${id}`
              
            );
            setValues(res.data);
            console.log(res.data);
          }
          catch(error){
            console.log("error fetching user data",error);
          }
        }
        fetchUser();
      }
    },[id]);

    const handleChange = (e)=>{
      setValues({...values, [e.target.name]: e.target.value});
    };

    const handleSubmit = async (e)=>{
      e.preventDefault();
      try{
        const res = await axios.put(
          `http://localhost:8080/api/update/${id}`,values
        );
        console.log("response",res.data.newUser);
        navigate("/");
      }
      catch(error){
        console.error("error:",error);
      }
    };


  return (
    <form
    onSubmit={handleSubmit}
    className="flex flex-col w-[500px] bg-gray-600 mx-auto mt-[1rem] p-6 rounded-lg shadow-md">


{/* name input */}
<input
type="text"
name='name'
value={values.name}
onChange={handleChange}
placeholder='enter your name'
className='mb-4 py-2 px-4 rounded-md bg-gray-200 focus:outline-none focus:bg-white'
 />

{/* last name input */}
 <input
 type="text"
 name="lastName"
 value={values.lastName}
 onChange={handleChange}
 placeholder='enter last name'
  className="mb-4 py-2 px-4 rounded-md bg-gray-200 focus:outline-none focus:bg-white"
 />

{/* email input */}

<input
type="text"
name='email'
value={values.email}
onChange={handleChange}
placeholder='enter your email'
className='mb-4 py-2 px-4 rounded-md bg-gray-200 focus:outline-none focus:bg-white'/>


{/* phone input */}
<input
name='phone'
value={values.phone}
onChange={handleChange}
placeholder="Enter your phone"
className="mb-4 py-2 px-4 rounded-md bg-gray-200 focus:outline-none focus:bg-white"
 />

  <button
      type="submit"
      className="py-2 px-4 bg-blue-500 text-white text-lg font-semibold rounded-md hover:bg-blue-600 transition duration-300"
    >
      update
    </button>

   
    </form>
  )
}

export default UpdateUser
