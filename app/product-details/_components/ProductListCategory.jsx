import React from 'react'
import ProductList from '../../_components/ProductList'


const ProductListCategory = ({productList}) => {
    
   
  return (
    <div className='bg-gray-50'>
      <div className='container py-10 space-y-10'>
        <h2 className='text-2xl font-semibold text-center'>Match Products</h2>
        <ProductList products={productList}/>
      </div>
    </div>
  )
}

export default ProductListCategory