import React from 'react'


export default function BlogHeader(props) {
    const {title,image,font}=props;
  return (
    <>
    <div className="mt-6 bg-gray-50 xl:px-32 md:px-16 px-8  py-6 mx-auto">
        <img className="object-cover w-1/2 shadow-sm h-full" style={{ marginLeft: "25%" }} src={'/blogs/' + image} />
        <h1  className={font + " text-4xl my-10 text-yellow-500 md:text-6xl xl:text-6xl text-center font-bold "}>{title}</h1>
    </div>
    </>
  )
}
