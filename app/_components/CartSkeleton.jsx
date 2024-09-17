import React from 'react'

const CartSkeleton = () => {
  return (
    <div className='min-h-[calc(100vh-80px)] mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8'>
        <div className="mx-auto max-w-3xl">
            <div className='flex justify-center'>
                <header className="w-[10rem] h-[2rem] rounded-md bg-slate-200 animate-pulse text-center"/>
            </div>
            <div className="mt-8">
                <ul className="space-y-4">
                    <li className="flex items-center gap-4">
                        <div className="size-20 rounded bg-slate-200 animate-pulse"/>
                        <div>
                            <div className="w-[10rem] h-[25px] rounded-md bg-slate-200 animate-pulse"/>

                            <dl className="mt-2 space-y-px text-[10px] text-gray-600">
                                <div className='space-x-2'>
                                    <dt className="w-[5rem] h-[1rem] rounded-md bg-slate-200 animate-pulse"></dt>
                                </div>
                            </dl>
                        </div>
                        <div className="flex flex-1 items-center justify-end gap-8">
                      
                        <div className='w-16 h-6 bg-slate-200 animate-pulse rounded-md'/>

                      <button className="w-6 h-6 bg-slate-200 rounded animate-pulse"/>
                    </div>
                    </li>
                    <li className="flex items-center gap-4">
                        <div className="size-20 rounded bg-slate-200 animate-pulse"/>
                        <div>
                            <div className="w-[10rem] h-[25px] rounded-md bg-slate-200 animate-pulse"/>

                            <dl className="mt-2 space-y-px text-[10px] text-gray-600">
                                <div className='space-x-2'>
                                    <dt className="w-[5rem] h-[1rem] rounded-md bg-slate-200 animate-pulse"></dt>
                                </div>
                            </dl>
                        </div>
                        <div className="flex flex-1 items-center justify-end gap-8">
                      
                        <div className='w-16 h-6 bg-slate-200 animate-pulse rounded-md'/>

                      <button className="w-6 h-6 bg-slate-200 rounded animate-pulse"/>
                    </div>
                    </li>
                    <li className="flex items-center gap-4">
                        <div className="size-20 rounded bg-slate-200 animate-pulse"/>
                        <div>
                            <div className="w-[10rem] h-[25px] rounded-md bg-slate-200 animate-pulse"/>

                            <dl className="mt-2 space-y-px text-[10px] text-gray-600">
                                <div className='space-x-2'>
                                    <dt className="w-[5rem] h-[1rem] rounded-md bg-slate-200 animate-pulse"></dt>
                                </div>
                            </dl>
                        </div>
                        <div className="flex flex-1 items-center justify-end gap-8">
                      
                        <div className='w-16 h-6 bg-slate-200 animate-pulse rounded-md'/>

                      <button className="w-6 h-6 bg-slate-200 rounded animate-pulse"/>
                    </div>
                    </li>
                    <li className="flex items-center gap-4">
                        <div className="size-20 rounded bg-slate-200 animate-pulse"/>
                        <div>
                            <div className="w-[10rem] h-[25px] rounded-md bg-slate-200 animate-pulse"/>

                            <dl className="mt-2 space-y-px text-[10px] text-gray-600">
                                <div className='space-x-2'>
                                    <dt className="w-[5rem] h-[1rem] rounded-md bg-slate-200 animate-pulse"></dt>
                                </div>
                            </dl>
                        </div>
                        <div className="flex flex-1 items-center justify-end gap-8">
                      
                        <div className='w-16 h-6 bg-slate-200 animate-pulse rounded-md'/>

                      <button className="w-6 h-6 bg-slate-200 rounded animate-pulse"/>
                    </div>
                    </li>
                    <li className="flex items-center gap-4">
                        <div className="size-20 rounded bg-slate-200 animate-pulse"/>
                        <div>
                            <div className="w-[10rem] h-[25px] rounded-md bg-slate-200 animate-pulse"/>

                            <dl className="mt-2 space-y-px text-[10px] text-gray-600">
                                <div className='space-x-2'>
                                    <dt className="w-[5rem] h-[1rem] rounded-md bg-slate-200 animate-pulse"></dt>
                                </div>
                            </dl>
                        </div>
                        <div className="flex flex-1 items-center justify-end gap-8">
                      
                        <div className='w-16 h-6 bg-slate-200 animate-pulse rounded-md'/>

                      <button className="w-6 h-6 bg-slate-200 rounded animate-pulse"/>
                    </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default CartSkeleton