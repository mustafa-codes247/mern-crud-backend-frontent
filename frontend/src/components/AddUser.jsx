import axios from 'axios';
import { useState } from 'react';
import {useNavigate} from "react-router-dom";

const AddUser = () => {
    const [values,setvalues] = useState({});
    const navigate = useNavigate();

    const handleChange = (e)=>{

        // data is in object form with key value pairs thats why value is getting setted to key value
        setvalues({...values, [e.target.name]: e.target.value});
    };

    const handleSubmit = async (e)=>{
        // form has 2 default functions
        // 1- it reloads after every form submit
        // 2-it makes the field empty
        // we are preventing them with this
        e.preventDefault();
        try{
            await axios
            .post("http://localhost:8080/api/create",values)
            .then((res)=>setvalues(res.data.newUser));

            // when form submitted , redirect user to home page
            navigate("/");
        }
        catch(error){
            console.error("error:",error)
        }
    }

  return (
    <form
    onSubmit={handleSubmit}
    className='flex flex-col w-[500px] bg-gray-600 mx-auto mt-[1rem] p-6 rounded-lg shadow-md'
    >
    {/* name field */}
    <input type="text"
    name="name"
    value={values.name}
    onChange={handleChange}
    placeholder='Enter your name'
    className='mb-4 py-2 px-4 rounded-md bg-gray-200'
    />

    {/* last name */}
    <input type="text"
    name='lastName'
    value={values.lastName}
    onChange={handleChange}
    placeholder='enter last name'
    className='mb-4 py-2 px-4 rounded-md bg-gray-200'
    />

    {/*email input*/}
    <input 
    type="text"
    name='email'
    value={values.email}
    onChange={handleChange}
    placeholder='enter email'
    className='mb-4 py-2 px-4 rounded-md bg-gray-200'/>


    {/* phone input */}
    <input
    name='phone'
    value={values.phone}
    onChange={handleChange}
    placeholder='enter your number'
    className="mb-4 py-2 px-4 rounded-md bg-gray-200 focus:outline-none focus:bg-white"
     />

     


     <button
     type='submit'
    className="py-2 px-4 bg-blue-500 text-white text-lg font-semibold rounded-md hover:bg-blue-600 transition duration-300"

     >
submit
     </button>
    
      
    </form>
  )
}

export default AddUser
