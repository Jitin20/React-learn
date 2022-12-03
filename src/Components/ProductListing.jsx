import React, { useEffect } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import Products from './Products';
function ProductListing() {

    const product = useSelector((state)=>state);
    console.log(product);

    const fetchAllProducts = async ()=>{
        const response = await axios.get("https://fakestoreapi.com/products")
        .catch((err)=>{
            console.log("Error", err);
        })
        console.log(response.data);
    };

    useEffect(()=>{
        fetchAllProducts();
    },[])
  return (
    <div className='ui grid container'>
    <Products/>
    </div>
  )
}

export default ProductListing