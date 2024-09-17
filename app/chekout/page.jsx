"use client"
import React from 'react'
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import CheckoutForm from '../_components/ChekoutForm';
import { useSearchParams } from 'next/navigation';

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHER_KEY)

const Page = () => {
  const searchParams = useSearchParams()
    const options = {
        mode:'payment',
        currency:'usd',
        amount: Number(searchParams.get('amount'))*100
    }
  return (
    <div className='h-[calc(100vh-80px)] mt-20 items-center justify-center'>
        <Elements stripe={stripePromise} options={options}>
            <CheckoutForm amount={Number(searchParams.get('amount'))}/>
        </Elements>
    </div>
  )
}

export default Page