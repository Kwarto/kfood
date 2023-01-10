import React from 'react';
import Bike from '../img/bike.png';
import { heroData } from '../utils/data';

const HeroContainer = () => {
  return (
    <section className="bg-primary grid grid-cols-1 md:grid-cols-2 gap-2 w-full md:px-16 px-4 py-4">
      <div className="py-2 flex-1 flex flex-col items-start justify-center gap-5">
        <div className="flex items-center justify-center gap-3 bg-red-200 px-4 py-1 rounded-full">
          <p className="text-base text-textRed font-semibold">Bike Delivery</p>
          <div className="w-7 h-7 rounded-full overflow-hidden drop-shadow-xl">
            <img
              src={Bike}
              className="w-full h-full bg-white object-contain"
              alt="bike delivery"
            />
          </div>
        </div>
        <p className="text-[2.5rem] lg:text-[4.5rem] font-bold tracking-wide text-headingColor">
          The Fastest Delivery {' '}
          <span className="text-textRed text-[3rem] lg:text-[5rem]">
           In Town
          </span>
        </p>
        <p className="text-base text-textColor text-center text-[18px] md:text-left lg:w-[90%]">
         Foodad is the best in town food delivery company in ghana. We make sure that your order is to your satisfaction and you receive what you ordered each time
        </p>
        <button
          type="button"
          className="bg-gradient-to-tr from-red-400 to-textRed text-white text-[1.2rem] font-semibold w-full lg:w-[50%] px-4 py-3 rounded-md hover:shadow-lg transition ease-in-out duration-100">
          Order Now
        </button>
      </div>
      <div className="py-2 flex-1">
        <div className="py-2 ml-auto h-510 lg:w-[60%] grid grid-cols-2 items-center gap-2 bg-gradient-to-tr from-red-100 to-fuchsia-100  rounded-3xl">
          {heroData &&
            heroData.map((n) => (
              <div key={n.id} className="w-190 min-w-[200px]: p-2 flex flex-col item-center justify-center lg:-translate-x-16 lg:translate-y-8 translate-y-8">
                <div className="flex flex-col items-center justify-center bg-cardOverlay backdrop-blur-md rounded-xl p-2 hover:bg-white transition-all duration-200 ease-in-out">
                <img src={n.imgSrc} className="w-[100%] -mt-20 rounded-md shadow-md" alt="" />
                <p className="text-base font-semibold text-textColor">{n.name}</p>
                <p className='text-sm text-center text-lighttextGray font-semibold my-3'>{n.desc}</p>
                <p className='text-sm text-headingColor font-semibold'>
                  <span className='text-xs text-textRed'>$</span>
                  {n.price}
                </p>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default HeroContainer;
