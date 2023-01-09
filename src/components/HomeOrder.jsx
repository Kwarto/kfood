import React from 'react';
import sideGif from '../img/food.gif'

const HomeOrder = () => {
  return (
    <div className="bg-primary w-full h-auto md:mt-12 rounded-md md:px-16 px-4 py-10">
      <div className="grid md:grid-cols-2 gap-3 place-items-center">
        <div className='w-full'>
          <h1 className='text-headingColor md:text-[3rem] md:text-start text-center text-[2rem] font-bold w-full py-5'>Stay Home Place Your Order <span className='md:text-[3rem] text-[2rem] text-textRed'>Eat Your Favorite</span></h1>
          <p className='md:text-[1.2rem] md:text-start text-center text-[16px]'>A lot of companies are in competition to be know by the public but we are remote-first intown food ordering company.</p>
        </div>
        <div className="p-2 w-full">
          <img src={sideGif} alt="" />
        </div>
      </div>
    </div>
  );
};

export default HomeOrder;
