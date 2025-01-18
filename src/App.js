import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './pages/Login'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<div>main</div>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/register' element={<div>register</div>} />
      </Routes>
      
    </BrowserRouter>
  )
}
