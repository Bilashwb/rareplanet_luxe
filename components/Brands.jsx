import Link from 'next/link'
import React from 'react'

export default function Brands(props) {
  return (
    <div className={props.font}>
        <section className="bg-white dark:bg-gray-900">
    <div className="py-8 lg:py-16 mx-auto max-w-screen-xl px-4">
        <h2 className="mb-8 lg:mb-16 text-4xl font-extrabold   text-center text-yellow-600 dark:text-white md:text-4xl">Discover Our Partner Brands</h2>
        <div className="grid grid-cols-3 gap-6 text-gray-500 dark:text-gray-400">
            <Link className="flex justify-center items-center" href={'https://rareplanet.com/'} target='_blank'>
            <img src={'/rareplanet-logo.png'} className='h-10 w-auto md:h-16'/> 
            </Link> 

            <Link className="flex justify-center items-center" href={'https://shopsitara.in/'} target='_blank'>
            <img src={'/sitara-logo.png'} className='h-10 w-auto md:h-16'/>
            </Link> 
            <Link className="flex justify-center items-center" href={'https://shopliquid.in/'} target='_blank'>
            <img src={'/Logo_liquid.png'} className='h-8 w-auto md:h-16'/> 
            </Link>          
        </div>
    </div>
</section>
    </div>
  )
}
