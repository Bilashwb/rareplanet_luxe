import Link from 'next/link'
import React from 'react'

export default function Navbar() {
  return (
    <div>
         <nav className="border-t-4 border-yellow-500 sticky top-0 bg-black">
                    <div className="container content-center flex justify-center text-center px-6 py-3 mx-auto">
                        <Link href="/">
                            <img className="w-40 h-auto " src={'/logo.png'} alt="" />
                        </Link>
                       
                    </div>
                    
                </nav>
    </div>
  )
}
