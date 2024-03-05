function shuffleArray(array) {
  for (var i = array.length - 1; i > 0; i--) { 
 
      // Generate random number 
      var j = Math.floor(Math.random() * (i + 1));
                 
      var temp = array[i];
      array[i] = array[j];
      array[j] = temp;
  }
     
  return array;
}

import  blogs  from "@/data";
import Link from "next/link";
export default function Blogs(props) {
 let data=shuffleArray(blogs);
  return (
    

    <div className='py-8 lg:py-16 mx-auto max-w-screen-xl px-8 bg-black'>
        <h2 className={props.font+' mb-8 lg:mb-16 text-4xl font-extrabold   text-center text-yellow-600 dark:text-white md:text-4xl'} >Luxe of India</h2>

<div className="columns-2 md:columns-3 lg:columns-4 ">
{
    data.map((item)=>{
        return(
            <Link href={item.handle} key={item.id}>
            <div className="relative mb-4 before:content-[''] before:rounded-md before:absolute before:inset-0 before:bg-black before:bg-opacity-20">
       <img className="w-full rounded-md" src={"/blogs/"+item.image}/>
       <div className="test__body absolute inset-0 p-8 text-white flex flex-col">
         <div className="relative">
           <h1 className={props.font+"  text-sm text-white font-bold text-center md:text-3xl" }>{item.title}</h1>
         </div>
         {/* <div className="mt-auto">
           <span className="test__tag bg-white bg-opacity-60 py-1 px-4 rounded-md text-black">#tag</span>
         </div> */}
       </div>
     </div>
           </Link>
        )
     
    })
}
  

</div>
    </div>

  )
}
