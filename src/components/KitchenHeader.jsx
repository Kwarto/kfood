import React from 'react';
import { MdCheckBox, MdFastfood } from 'react-icons/md';
import bannerImg from '../img/banner.png';
import { mostData } from '../utils/data';
import Category from './Category';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { FaMapPin } from 'react-icons/fa';
const KitchenHeader = () => {
  return (
    <>
      <div className="md:mt-20 mt-[4.5rem] py-4 w-full h-auto md:px-16 px-2 bg-primary">
        <div className="flex items-center justify-center">
          <div className="md:w-[60%] w-full md:h-[50px] h-[60px] flex items-center justify-between shadow-md rounded-full">
            <input
              className="md:h-[50px] h-[60px] w-[90%] rounded-l-full px-5 text-[15px] text-textColor placeholder:text-slate-300 font-semibold"
              type="text"
              placeholder="What Do You Like To Eat ?"
            />
            <span className="bg-textRed flex items-center justify-center rounded-r-full md:h-[50px] h-[60px] w-[12%]">
              <MdFastfood className="text-[1.2rem] text-primary" />
            </span>
          </div>
        </div>
      </div>
      <h1 className="md:text-[2rem] text-[1.5rem] font-bold md:px-16 px-4 text-headingColor">
        All Category
      </h1>
      <Category />
      <div className="bg-textRed h-[190px] md:mx-16 px-4 mx-2 rounded-md drop-shadow-md relative">
        <h1 className="text-[2rem] text-white font-bold py-2">GHC 12</h1>
        <p className="text-[1.1rem] text-primary font-semibold w-[75%]">
          Start order & receive with minimum of GHC12
        </p>
        <button className="mt-3 bg-white px-8 py-2 shadow-sm text-textColor rounded-full">
          Explore
        </button>
        <div className="md:w-[20%] w-[50%] md:drop-shadow-md absolute md:right-1 md:-top-1 -right-9 top-12 ">
          <img
            className="md:rounded-none rounded-full w-full h-full"
            src={bannerImg}
            alt=""
          />
        </div>
      </div>
      <div className="bg-gradient-to-tr from-red-200 to-fuchsia-200 min-h-auto mt-10 md:px-16 px-4  place-items-center md:rounded-none rounded-b-[3rem] shadow-sm">
        <h1 className="md:text-[2rem] text-[1.5rem] font-bold py-1 text-headingColor">
          Most Popular
        </h1>
        <Swiper
          spaceBetween={40}
          //  slidesPerView={}
          breakpoints={{ 430: { slidesPerView: 2 }, 768: { slidesPerView: 3 } }}
          className="w-full h-full flex items-center justify-center">
          {mostData &&
            mostData.map((m) => {
              return (
                <SwiperSlide className="mb-5 py-8 w-full">
                  <div
                    key={m.id}
                    className="shadow-md w-full flex flex-col items-center justify-center bg-cardOverlay backdrop-blur-md rounded-md hover:bg-primary transition-all duration-200 ease-in-out">
                    <img src={m.imgSrc} alt="" />
                    <div className="bg-white w-full p-2 flex flex-col items-center justify-between rounded-md">
                      <span className="flex items-center justify-between w-full">
                        <h3 className="font-semibold text-[1.4rem] text-textColor">
                          {m.name}
                        </h3>
                        <p className="bg-red-100 rounded-full px-3 py-1 text-textRed font-semibold text-[15px] drop-shadow-sm">
                          Closed Soon
                        </p>
                      </span>
                      <p className="text-[14px] w-full text-textColor text-center py-2">
                        {m.desc}
                      </p>
                      <span className="flex items-center justify-between gap-4">
                        <p className="text-green-500 text-base font-semibold flex items-center gap-1">
                          {' '}
                          <MdCheckBox /> GHC {m.priceAt} Upwards
                        </p>
                        <p className="flex items-center gap-1">
                          <FaMapPin />{' '}
                          <span className="text-[15px] font-semibold text-textRed">
                            {m.loc}
                          </span>
                        </p>
                      </span>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
        </Swiper>
      </div>
      <section className='w-full min-h-[80vh] py-4 md:px-16 px-4'>
        <h1 className='font-bold md:text-[2rem] text-[1.5rem] text-headingColor py-2'>Available Kitchens</h1>
      </section>
    </>
  );
};

export default KitchenHeader;

