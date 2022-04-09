import React,{useState} from 'react'
import { Cart,AboutUs,  Footer,  Header, Intro,  SpecialMenu,Login,NotFound,Booktable } from '../src/container';
import './App.css';
import {BrowserRouter,Routes,Route} from "react-router-dom"
import { CartProvider } from "react-use-cart";
const App = () => {
 
  return (
    <CartProvider>

    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Header/>}/>
      <Route path='/about' element={<AboutUs/>}/>
      <Route path='/menu' element={<SpecialMenu/>}/>
      <Route path='/aword' element={<Intro/>}/>
      <Route path='/contact' element={<Footer/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/booktable' element={<Booktable/>}/>
      <Route path='*' element={<NotFound/>}/>
      <Route path='/cart' element={<Cart/>}/>
      
    </Routes>
    </BrowserRouter>
    </CartProvider>
    
    
    
  )
}

export default App