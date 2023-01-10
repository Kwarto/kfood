import React from 'react';
import chooseImg from '../img/choose.svg'
import pickImg from '../img/pick-up.svg'
import enjoyImg from '../img/enjoy.svg'
const HomeSection = () => {
  return (
    <div className="w-full h-auto md:mt-12 rounded-md md:px-16 px-4 py-8">
      <h1 className='text-[2rem] text-center pb-5 text-headingColor font-bold '>Spin Your Energy For <br /> <span className='text-[2rem] text-center text-textRed'>Good Day Service</span></h1>
      <div className="grid md:grid-cols-3 item-center gap-2">
        <div className="shadow-md p-2 rounded-xl w-full flex flex-1 flex-col items-center justify-center ">
          <img className='w-[50%] h-[50%]'  src={chooseImg} alt="choose" />
          <div className='p-2 mt-3 flex flex-col items-center justify-center text-center'>
            <h4 className='text-[1.2rem] text-headingColor font-semibold'>Choose Your Favorite</h4>
            <p className='text-[15px] text-textColor'>Hundreds of restaurants, pubs, fast foods, kitchen are available to serve you each and everyday.</p>
          </div>
        </div>
        <div className="shadow-md p-2 rounded-xl w-full flex flex-1 flex-col items-center justify-center ">
          <img className='w-[50%] h-[50%]' src={pickImg} alt="pick up" />
          <div className='p-2 mt-3 flex flex-col items-center justify-center text-center'>
            <h4 className='text-[1.2rem] text-headingColor font-semibold'>Relax & Pick Up</h4>
            <p className='text-[15px] text-textColor'>Caper queue and order your favorite and get in hand within a blink at your comfort zone.</p>
          </div>
        </div>
        <div className="shadow-md p-2 rounded-xl w-full flex flex-1 flex-col items-center justify-center ">
          <img className='w-[50%] h-[50%]' src={enjoyImg} alt="enjoy" />
          <div className='p-2 mt-3 flex flex-col items-center justify-center text-center'>
            <h4 className='text-[1.2rem] text-headingColor font-semibold'>Enjoy, Eat & Repeat</h4>
            <p className='text-[15px] text-textColor'>Satisfy your tummy, you satisfy your life. Enjoy your meal and come back again.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

// youtube.com/watch?v=JqPezeQiwxk

export default HomeSection;
