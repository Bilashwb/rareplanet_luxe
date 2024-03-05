"use client"
import { Dancing_Script } from 'next/font/google'
import Navbar from "@/components/Navbar";
import blogs from '@/data';
import lang from "@/content/lang";
import { useEffect, useState } from "react";
export const dancing_script = Dancing_Script({
  weight: '400',
  subsets: ['latin'],
})

import Book from '@/components/blog/Book';
import BlogHeader from '@/components/blog/BlogHeader';
import BlogSlider from '@/components/blog/BlogSlider';
import Footer from '@/components/Footer';

export default function page({ params }) {
  const [data, setdata] = useState(null);
  const [content, setcontent] = useState([]);
  useEffect(() => {
    lang.forEach((item) => {
      if(item.handle == params.slug)
      {
        setdata(item);
        setcontent(item.content)
      }
    });
   


  }, [])
  return (
    <>
      <Navbar />
      {
        data?  <>
          <BlogHeader title={data.title} image={data.image} font={dancing_script.className} />
          <Book content={content} image={data.image} title={data.title} />
        </> : <></>
      }
          {
            blogs && blogs.length ? <>
              <BlogSlider blogs={blogs} font={dancing_script.className} />
            </> : <>
            </>
          }

          <Footer font={dancing_script.className}/>
    </>

  )
}
