import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Dashboard from './dashboard/Dashboard'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Dashboard/>} />
        <Route path='/login' element={<div>login</div>} />
        <Route path='/register' element={<div>register</div>} />
      </Routes>
      
    </BrowserRouter>
  )
}
