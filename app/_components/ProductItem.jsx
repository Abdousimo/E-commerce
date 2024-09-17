import Image from 'next/image'
import React from 'react'
import { List } from 'lucide-react'
import Link from 'next/link'


const ProductItem = ({product}) => {
  return (
    <Link 
    href={`/product-details/${product.id}`}
    className='w-full max-w-[21rem] rounded-md p-1 shadow-md border-primary hover:border cursor-pointer duration-100'
    >
        <div className='relative w-full h-52'>
            <Image
              src={product?.attributes.banner.data.attributes.url}
              alt='banner-product'
              width={200}
              height={200}
              className='w-full h-full object-cover rounded-t-md'
            />
        </div>
        
            <div className='p-3 space-y-4'>
                <h2 className='text-lg font-semibold line-clamp-1'>{product?.attributes.title}</h2>
                <div className='flex items-center justify-between'>
                    <h2 className='text-base text-gray-500 flex items-center gap-1'>
                        <List className='w-4 h-4'/>
                        {product?.attributes.category}
                    </h2>
                    <h2 className='font-semibold font-mono'>{product?.attributes.price}$</h2>
                </div>
            </div>
    </Link>
  )
}

export default ProductItem