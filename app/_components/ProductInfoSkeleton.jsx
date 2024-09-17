import React from 'react'

const ProductInfoSkeleton = () => {
  return (
    <div className='w-full max-w-[38rem]'>
        <div className='h-[30px] w-[18rem] bg-slate-200 animate-pulse rounded-md'/>
        <div className='h-[20px] w-[5rem] bg-slate-200 animate-pulse rounded-md my-6'/>
        <div className='h-[100px] w-full bg-slate-200 animate-pulse rounded-md '/>
        <div className='h-[20px] w-[10rem] bg-slate-200 animate-pulse rounded-md my-6'/>
        <div className='flex justify-between items-center'>
            <div className='h-[40px] w-[8rem] bg-slate-200 animate-pulse rounded-md'/>
            <div className='h-[40px] w-[5rem] bg-slate-200 animate-pulse rounded-md'/>
        </div>

    </div>
  )
}

export default ProductInfoSkeleton