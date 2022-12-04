import './App.css';
import React from "react";
import { BrowserRouter, Routes, Route, Router } from 'react-router-dom';
import Header from './Components/Header';
import ProductListing from './Components/ProductListing';
import ProductDetails from './Components/ProductDetails';





function App() {

  return (
<BrowserRouter>
    <div className="App">
<Header/>  

    <Routes>
    <Route path='/' exact element= {<ProductListing/>}/>
    <Route path = '/product/:productId' exact element = {<ProductDetails/>}/>
    <Route>404 Not Found</Route>
    </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
