import React, { useState } from 'react';
import './pages/Shop.css'
import './reset.css'

import { BrowserRouter, Routes, Route } from "react-router-dom"

import Home from './pages/Home'
import Shop from './pages/Shop'
import About from './pages/About'
import Navbar from './components/Navbar'
import Footer from './components/Footer';
import Basket from './pages/Basket';


function App() {
  const [itemInBasket, setItemInBasket] = useState([]);
  const [money, setMoney] = useState(0);
  const [parcels, setParcels] = useState([]);
  const News =[
    {rubric: 'Я создал этот магазин',
      date: '01.05.2025',
      post: 'Сижу я значит, думаю, значит, что неплохо было бы создать мне pet-проект нормальный',
    },
  ];
  return (
    <BrowserRouter>
      <div className="wrapper">
        <Navbar money={money} />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home news={News}/>} />
            <Route path="/shop" element={<Shop setItemInBasket={setItemInBasket} />} />
            <Route path="/basket" element={<Basket itemInBasket={itemInBasket} setItemInBasket={setItemInBasket} money={money} setMoney={setMoney}  parcels={parcels} setParcels={setParcels}/>} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>

  )
}

export default App