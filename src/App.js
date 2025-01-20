import React, { useEffect } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Dashboard from './dashboard/Dashboard'
import Login from './pages/Login'
import { useDispatch } from 'react-redux'
import { fetchCurrencies } from './features/currency/currencySlice'

export default function App() {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchCurrencies())
  }, [])

  return (
    <BrowserRouter basename="/dashboard">
      <Routes>
        <Route path='/' element={<Dashboard/>} />
        <Route path='/login' element={<Login/>} />
      </Routes>
      
    </BrowserRouter>
  )
}
