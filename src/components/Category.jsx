import React from 'react'
import { categoryData } from '../utils/data';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
const Category = () => {
  return (
    <div className="md:py-16 py-8 md:px-2 px-2">
    <Swiper className='md:h-[50vh] flex flex-col items-center justify-center'
           spaceBetween={40}
          //  slidesPerView={}
           breakpoints={{ 430: { slidesPerView: 1 }, 768: { slidesPerView: 3 } }}
           >
       {
          categoryData && categoryData.map((item) => {
            return (
              <SwiperSlide className='bg-white flex flex-col items-center justify-center shadow-lg rounded-2xl mb-5'>
                <div key={item.id} className='flex flex-col items-center justify-center rounded-md p-2'>
                 <img className='md:w-[100%] md:h-[50%] w-[50%] md:-mt-5 md:translate-y-8' src={item.imgSrc} alt={item.name} />
                 <h2 className='md:mt-20 font-bold text-textColor text-[1.5rem] md:-translate-y-14'>{ item.name}</h2>
                </div>
              </SwiperSlide>
            )
          })
        }
    </Swiper>
    </div>
  )
}

export default Category