import React from 'react'
import { useSelector } from 'react-redux'

function Products() {
    const product = useSelector((state)=>state.allProducts.products);
    const{id, title} = product[0];
      return (
    <div className='four column wide'>
    <div className='ui link cards'>
    <div className='card'>
    <div className='image'></div>
    <div className='content'>
    <div className='Header'>{title}</div>
    </div>
    </div>
    </div>
    </div>
  )
}

export default Products