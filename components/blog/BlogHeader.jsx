import React from 'react'


export default function BlogHeader(props) {
    const {title,image,font}=props;
  return (
    <>
    <div className="mt-6 bg-gray-50   py-2 ">
        <img className="object-cover w-3/4 shadow-sm h-full" style={{ marginLeft: "10%" }} src={'/blogs/banners/' + image} />
        <h1  className={font + " text-2xl my-10 text-yellow-500 md:text-6xl xl:text-4xl text-center font-bold "}>{title}</h1>
    </div>
    </>
  )
}
