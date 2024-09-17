"use client"
import { UserButton, useUser } from '@clerk/nextjs'
import { ShoppingCart } from 'lucide-react'
import Image from 'next/image'
import React, { useContext, useEffect, useState } from 'react'
import { CartContext } from '../_context/CartContext'
import { getUserCartItems } from '../_utils/CartApis'
import Cart from './Cart'

const Header = () => {
    const {user} = useUser();
    const [isLoggedIn,setIsLoggedIn] = useState(false)
    const [openCart,setOpenCart] = useState(false)
    const [open,setOpen] = useState(false)
    const {cart,setCart} = useContext(CartContext)


    const getCartItems = async () => {
        await getUserCartItems(user.primaryEmailAddress.emailAddress)
        .then(res=> {
            
            res?.data?.data.forEach(citem=>{
                setCart(oldCart=>[
                    ...oldCart,
                    {
                        id:citem?.id,
                        product:citem?.attributes?.products?.data[0]
                    }
                ])
            })
        })
    }

    useEffect(()=> {
         user&&getCartItems()
    },[user])
    useEffect(()=>{
        setIsLoggedIn(window.location.href.toString().includes(('sign-in')) || window.location.href.toString().includes(('sign-up')))
    },[])
    
    return !isLoggedIn &&(
    <header className="bg-white shadow-md h-20 fixed top-0 left-0 w-full z-50">
        <div className="container mx-auto flex h-full max-w-screen-xl items-center gap-8 px-4 sm:px-6 lg:px-8">
           <a href='/'> 
           <Image
            src={'/logo.svg'}
            alt=''
            width={50}
            height={50}
            />
           </a>

        <div className="flex flex-1 items-center justify-end md:justify-between">
                    <nav aria-label="Global" className="hidden md:block">
                        <ul className="flex items-center gap-6 text-sm">
                        <li>
                            <a className="text-gray-500 transition hover:text-gray-500/75" href="#"> Home </a>
                        </li>

                    <li>
                        <a className="text-gray-500 transition hover:text-gray-500/75" href="#"> Explore </a>
                    </li>

                    <li>
                        <a className="text-gray-500 transition hover:text-gray-500/75" href="#"> Projects </a>
                    </li>

                    <li>
                        <a className="text-gray-500 transition hover:text-gray-500/75" href="#"> About us </a>
                    </li>

                    <li>
                        <a className="text-gray-500 transition hover:text-gray-500/75" href="#"> Contact us </a>
                    </li>

                   
                    </ul>
                </nav>

                    <div className="flex items-center gap-4">
                        {!user ?
                        <div className="sm:flex sm:gap-4">
                            <a
                                className="block rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-white transition hover:bg-primary_hover"
                                href="/sign-in"
                            >
                                Login
                            </a>

                            <a
                                className="hidden rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-primary transition hover:text-primary_hover/75 sm:block"
                                href="/sign-up"
                            >
                                Register
                            </a>
                        </div>
                        :
                         <div className='flex gap-6 items-center'>
                            <button 
                             className='flex items-center gap-2 font-mono font-semibold'
                             onClick={()=>setOpenCart(!openCart)}
                            >
                             <ShoppingCart/>
                             ({cart?.length})
                           </button>
                            <UserButton afterSignOutUrl='/'/>
                            {openCart&&<Cart openCart={openCart} setOpenCart={setOpenCart}/>}
                        </div>
                        }

                       {!open && <button
                        onClick={()=>setOpen(!open)}
                        className="block rounded bg-gray-100 p-2.5 text-gray-600 transition hover:text-gray-600/75 md:hidden"
                        >
                        <span className="sr-only">Toggle menu</span>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="size-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth="2"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                        </button>}
                    </div>
    </div>
        </div>
                    {open&&
                        <div className={`h-screen w-full flex justify-end fixed z-50 top-0 ${open ? 'left-0' :'-left-[10000000px]'}  bg-black/70 duration-500`}>
                            <nav aria-label="Global" className='bg-white h-screen w-[15rem] p-3'>
                            <div className='flex justify-end '>
                                <button
                                onClick={()=>setOpen(!open)}
                                className="flex justify-end rounded bg-gray-100 py-1 px-3 text-gray-600 transition hover:text-red-600"
                                >
                                X
                                </button>
                            </div>
                            <ul className="flex flex-col items-end justify-end gap-8 px-4 pt-8">
                            <li>
                                <a className="text-gray-500 transition hover:text-gray-500/75" href="#"> Home </a>
                            </li>

                        <li>
                            <a className="text-gray-500 transition hover:text-gray-500/75" href="#"> Explore </a>
                        </li>

                        <li>
                            <a className="text-gray-500 transition hover:text-gray-500/75" href="#"> Projects </a>
                        </li>

                        <li>
                            <a className="text-gray-500 transition hover:text-gray-500/75" href="#"> About us </a>
                        </li>

                        <li>
                            <a className="text-gray-500 transition hover:text-gray-500/75" href="#"> Contact us </a>
                        </li>
                        
                        {!user&&<li>
                            <a
                                className="rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-primary transition hover:text-primary_hover/75 block"
                                href="/sign-up"
                            >
                                Register
                            </a>
                            </li>}
                        </ul>
                        </nav>
                        </div>
                    }
</header>
  )
}

export default Header