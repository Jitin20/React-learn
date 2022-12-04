import React, { useEffect } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import Products from './Products';
import { setProducts } from '../Redux/Actions/productActions';
function ProductListing() {

    const product = useSelector((state)=>state);
    const dispatch = useDispatch();
    console.log(product);

    const fetchAllProducts = async ()=>{
        const response = await axios.get("https://fakestoreapi.com/products")
        .catch((err)=>{
            console.log("Error", err);
        })
       dispatch(setProducts(response.data));
    };

    useEffect(()=>{
        fetchAllProducts();
    },[])

    console.log("Products: ", product)
  return (
    <div className='ui grid container'>
    <Products/>
    </div>
  )
}

export default ProductListing