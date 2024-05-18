import Blogs from '@/components/Blogs'
import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import React from 'react'
import { Great_Vibes, Dancing_Script } from 'next/font/google'
import Brands from '@/components/Brands'
import Navbar from '@/components/Navbar'
export const great_vibes = Great_Vibes({
  weight: '400',
 subsets: ['latin'],
})
export const dancing_script = Dancing_Script({
  weight: '400',
 subsets: ['latin'],
})

export default function page() {
  return (
   <>
   <Navbar/>
   <Hero font={dancing_script.className}/>
   <Brands font={dancing_script.className}/>
   <Blogs font={dancing_script.className}/>
   <Footer font={great_vibes.className}/>
   </>
  )
}
