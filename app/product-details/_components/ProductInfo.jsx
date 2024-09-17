"use client"
import React, { useContext } from 'react'
import { AlertOctagon, BadgeCheck, ShoppingCartIcon } from 'lucide-react'
import ProductInfoSkeleton from '../../_components/ProductInfoSkeleton'
import { useUser } from '@clerk/nextjs'
import { useRouter } from 'next/navigation'
import { addToCart } from '../../_utils/CartApis'
import { CartContext } from '../../_context/CartContext'


const ProductInfo = ({product}) => {
  const {user} = useUser()
  const {cart,setCart} = useContext(CartContext)
  
  const handleAddToCart = () => {
     if (!user) {
      window.location.href = '/sign-in'
     } else {
      const data = {
        data:{
          username:user.fullName,
          email:user.primaryEmailAddress.emailAddress,
          products:[product?.id]
        }
      }
      addToCart(data).
      then(res=>{
        console.log("cart created succesffuly")
        setCart(oldCart=>[
          ...oldCart,
          {
            id:res?.data?.data?.id,
            product
          }
        ])
      }).catch(err =>
        console.log('err',err))
      }
     
  }
  
  return (
    <>
    {product.id ? 
      <div className='w-full'>
        <h2 className='text-[20px] font-bold'>{product?.attributes?.title}</h2>
        <h2 className='text-[15px] text-gray-400 mt-1'>{product?.attributes?.category}</h2>
        <h2 className='text-sm mt-3'>{product?.attributes?.Description[0]?.children[0]?.text}</h2>
        <h2 className='text-xs text-gray-400 my-2 font-semibold flex gap-2 items-center'>
            {product?.attributes?.instantDelivry ? <BadgeCheck className='text-green-600'/> : <AlertOctagon className='text-red-500'/>}
            Eligibal for instant delivry
        </h2>
        <div className='flex justify-between items-center mt-6'>
            <button
              onClick={handleAddToCart}
              className='flex bg-primary hover:bg-primary_hover duration-200 text-white gap-2 p-2 rounded'
            >
                <ShoppingCartIcon/>
                Add to cart
            </button>
            <h2 className='text-[20px] font-mono font-bold text-primary'>{product?.attributes?.price}$</h2>

        </div>
    </div>
  :
  <ProductInfoSkeleton/>
}
</>
  )
}

export default ProductInfo