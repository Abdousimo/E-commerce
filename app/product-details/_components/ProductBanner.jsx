import React from 'react'
import Image from 'next/image'

const ProductBanner = ({product}) => {
  return (
    <div className='h-[17rem] w-full max-w-[28rem]'>
        {product?.attributes?.banner?.data?.attributes?.url ?
        <Image
            src={product?.attributes?.banner?.data?.attributes?.url}
            alt="product-banner"
            width={400}
            height={400}
            className='h-full w-full object-cover rounded-md'
        />
        :
        <div className='h-full w-full rounded-md bg-slate-200 animate-pulse'/>}
    </div>
  )
}

export default ProductBanner