import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'

import Home from '../pages/Home'
import Cart from '../pages/Cart'
import Shop from '../pages/Shop'
import Login from '../pages/Login'
import Signup from '../pages/Signup'
import Checkout from '../pages/Checkout'
import ProductsDetails from '../pages/ProductsDetails'
import Success from '../pages/Success'

const Routers = () => {
  return (
    <Routes>
        <Route path='/' element={ < Navigate to='home' />} />
        <Route path='home' element={ < Home />} />
        <Route path='shop' element={ < Shop />} />
        <Route path='shop/:id' element={ < ProductsDetails />} />
        <Route path='cart' element={ < Cart />} />
        <Route path='checkout' element={ < Checkout />} />
        <Route path='login' element={ < Login />} />
        <Route path='signup' element={ < Signup />} />
        <Route path='success' element={ < Success />} />
        
    </Routes>
  )
}

export default Routers