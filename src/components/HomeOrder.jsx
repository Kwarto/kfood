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
        <div className="md:h-[90vh] h-[40vh] p-2 w-full flex items-center justify-center relative">
          <img className='w-[80%] absolute top-5 md:-right-12' src={sideGif} alt="order delivered" />
        </div>
      </div>
    </div>
  );
};

export default HomeOrder;
