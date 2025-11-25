import React from 'react'
import Users from './components/Users'
import AddNewUser from './components/AddNewUser'
import UpdateUser from './components/UpdateUser'
import { Route, Routes } from 'react-router-dom'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Users/>}></Route>
         <Route path="/add" element={<AddNewUser/>}></Route>
          <Route path="/update" element={<UpdateUser/>}></Route>
      </Routes>
    </div>
  )
}

export default App
