import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'

import Home from '../pages/Home'
import Cart from '../pages/Cart'
import Shop from '../pages/Shop'
import Checkout from '../pages/Checkout'
import ProductsDetails from '../pages/ProductsDetails'
import Comprar from '../pages/Comprar'
import Regulamento from '../pages/Regulamento'
import Horario from '../pages/Horario'
import Perguntas from '../pages/Perguntas'

const Routers = () => {
  return (
    <Routes>
        <Route path='/' element={ < Navigate to='home' />} />
        <Route path='home' element={ < Home />} />
        <Route path='shop' element={ < Shop />} />
        <Route path='shop/:id' element={ < ProductsDetails />} />
        <Route path='cart' element={ < Cart />} />
        <Route path='checkout' element={ < Checkout />} />
        <Route path='regulamento' element={ < Regulamento />} />
        <Route path='comprar' element={ < Comprar />} />
        <Route path='horario' element={ < Horario />} />
        <Route path='perguntas' element={ < Perguntas />} />

        
    </Routes>
  )
}

export default Routers