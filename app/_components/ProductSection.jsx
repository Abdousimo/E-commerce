"use client";
import React, { useState } from 'react'
import { useEffect } from 'react'
import { getLatestProducts } from '../_utils/ProductApi';
import ProductList from './ProductList';

const ProductSection = () => {
  const [products,setProducts] = useState([])
  
  const getLatestProducts_ = async () => {
      await getLatestProducts().then(
        res=>setProducts(res.data.data)
      )
      
  } 
  useEffect(()=>{
    getLatestProducts_()
  },[])
  return (
    <div className='container py-10 space-y-10'>
      <h2 className='text-2xl font-semibold text-center'>Our Latest Products</h2>
      <ProductList products={products}/>
    </div>
  )
}

export default ProductSection