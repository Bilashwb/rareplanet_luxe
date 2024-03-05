import React from 'react'
import 'swiper/css';
import Link from 'next/link';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from 'swiper/modules';
export default function BlogSlider(props) {
    const { blogs, font } = props;
    return (
        <div className='bg-black mt-12 px-8' >
            <h2 className={font + " text-3xl my-10  text-yellow-500 md:text-5xl xl:text-5xl text-center font-bold"}>Others Category</h2>

            <Swiper className="mySwiper" slidesPerView={2.5} loop={true} spaceBetween={8} height={10}

                modules={[Autoplay]}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                breakpoints={{
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 3,
                        spaceBetween: 40,
                    },
                    1024: {
                        slidesPerView: 5,
                        spaceBetween: 50,
                    },
                }}
            >
                {
                    blogs.map((item, index) => {
                        return <SwiperSlide >

                            <div className='border bottom-1 border-yellow-500 text-center ps-4 py-4'>

                                <img className='h-40 w-40' src={'/blogs/' + item.image} />
                            </div>
                            <Link href={'/' + item.handle}>

                                <p className={ font + "text-center text-yellow-500 p-2 "} >
                                    {item.title}</p>
                            </Link>


                        </SwiperSlide>
                    })
                }

            </Swiper>
          
        </div>
    )
}
