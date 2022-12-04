import React from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { selectedProduct, removeSelectedProduct } from '../Redux/Actions/productActions';

function ProductDetails() {
  const product = useSelector((state)=>state.product)
  const {id, image, category,title, description} = product
  const {productId}  = useParams();
  const dispatch = useDispatch();
  console.log(productId);
  console.log(product)

  const fetchProductDetail =  async() =>{
    const response = await axios.get(`https://fakestoreapi.com/products/${productId}`)
                      .catch(err=>{
                        console.log("Err", err)
                      });

                dispatch(selectedProduct(response.data))
                      
  }

  useEffect(()=>{
    
   if(productId && productId!=="") fetchProductDetail();
   return ()=>{
    dispatch(removeSelectedProduct());
   }
    
  },[productId])


  return (
    <div className='ui grid container'>
    {Object.keys(product).length === 0 ? (
      <div>...Loading</div>
    ):     <div>{title}, {category}, {description}</div>}

    </div>
  )
}

export default ProductDetails;