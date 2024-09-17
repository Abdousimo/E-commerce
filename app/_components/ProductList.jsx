import React from 'react'
import ProductItem from './ProductItem';


const ProductList = ({products}) => {
  
  return (
      <div className='flex flex-wrap justify-center items-stretch gap-4'>
      {products.map(item => {
        return(
          <ProductItem product={item} key={item?.id}/>
        )
      })}
    </div>
  )
}

export default ProductList