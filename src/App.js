import './App.css';
import React,{useState} from "react";
import { BrowserRouter, Routes, Route, Router } from 'react-router-dom';
import Navigation from './Header/Navbar';
import Getlist from './todos/getlist';
import Createlist from './todos/createlist';
import Header from './Components/Header';
import ProductListing from './Components/ProductListing';
import ProductDetails from './Components/ProductDetails';
import Products from './Components/Products';




function App() {

  return (
<BrowserRouter>
    <div className="App">
<Header/>  
<ProductListing/>
    <Routes>
    <Route path='/' exact component = {ProductListing}/>
    <Route path = "/product/:id" exact component = {ProductDetails}/>
    <Route>404 Not Found</Route>
    </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
