import React from 'react'
import Users from './components/Users'
import UpdateUser from './components/UpdateUser'
import { Route, Routes } from 'react-router-dom'
import AddUser from './components/AddUser'
import GetUser from './components/GetUser'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Users/>}></Route>
        <Route path="/get" element={<GetUser/>}></Route>
         <Route path="/add" element={<AddUser/>}></Route>
          <Route path="/update/:id" element={<UpdateUser/>}></Route>
      </Routes>
    </div>
  )
}

export default App
