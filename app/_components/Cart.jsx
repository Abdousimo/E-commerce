'use client'
import React, { useContext } from 'react'
import { CartContext } from '../_context/CartContext'
import Image from 'next/image'
import Link from 'next/link'

const Cart = ({openCart,setOpenCart}) => {

  const {cart,setCart} = useContext(CartContext)

  return (
    <div className='max-h-[20rem] w-fit bg-gray-100 z-10 rounded-md border shadow-sm 
    absolute top-16 right-10 overflow-auto hide-scrollbar mx-10'>
        <div className='relative w-full h-full p-4 border-[1px] rounded-md'>
           { cart?.length === 0 ?
           <div className='space-y-6 p-3'>
            <h2>your cart is empty</h2>
                <button
                onClick={()=>setOpenCart(!openCart)}
                className="inline-block text-sm text-gray-500 underline underline-offset-4 transition hover:text-gray-600"
            >
                Continue shopping
            </button>
            </div>
           :<div className="space-y-6 pb-4">
                <ul className="space-y-4">
                    {cart.map((product,index)=>{
                    return(
                        <li className="flex items-center gap-6" key={index}>
                            {product?.product?.attributes?.banner?.data?.attributes?.url ?
                                <Image
                                    src={product?.product?.attributes?.banner?.data?.attributes?.url}
                                    alt=""
                                    width={100}
                                    height={100}
                                    className="size-16 rounded object-cover"
                                />
                                :
                                <div className='w-[4rem] h-[4rem] rounded bg-gray-200 animate-pulse'/>
                                }
                            <div>
                            <h3 className="text-sm text-gray-900">{product?.product?.attributes?.title}</h3>

                            <dl className="mt-0.5 space-y-px text-[10px] text-gray-600">
                                <div>
                                
                                <dd className="inline">{product?.product?.attributes?.category}</dd>
                                </div>

                                <div>
                                
                                <dd className="inline">{product?.product?.attributes?.price}$</dd>
                                </div>
                            </dl>
                            </div>

                           
                        </li>
                        )
                    })}
                </ul>
                <div className="space-y-4 text-center">
                    <a
                        href="/cart"
                        className="block rounded bg-gray-700 px-5 py-3 text-sm text-gray-100 transition hover:bg-gray-600"
                    >
                        View my cart ({cart?.length})
                    </a>
                    <button
                        onClick={()=>setOpenCart(!openCart)}
                        className="inline-block text-sm text-gray-500 underline underline-offset-4 transition hover:text-gray-600"
                    >
                        Continue shopping
                    </button>
                </div>
            </div>}
        </div>
    </div>
  )
}

export default Cart