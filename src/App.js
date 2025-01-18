import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<div>main</div>} />
        <Route path='/login' element={<div>login</div>} />
        <Route path='/register' element={<div>register</div>} />
      </Routes>
      
    </BrowserRouter>
  )
}
