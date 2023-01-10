import React from 'react'
import { MdFastfood } from 'react-icons/md';
import bannerImg from '../img/banner.png';
const KitchenHeader = () => {
  return (
   <>
     <div className='md:mt-20 mt-[4.5rem] py-4 w-full h-auto md:px-16 px-2 bg-primary'>
      <div className='flex items-center justify-center'>
        <div className='md:w-[60%] w-full md:h-[50px] h-[60px] flex items-center justify-between shadow-md rounded-full'>
          <input className='md:h-[50px] h-[60px] w-[90%] rounded-l-full px-5 text-[15px] text-textColor placeholder:text-slate-300 font-semibold' type="text" placeholder='What Do You Like To Eat ?' />
          <span className='bg-textRed flex items-center justify-center rounded-r-full md:h-[50px] h-[60px] w-[12%]'>
            <MdFastfood className='text-[1.2rem] text-primary'/>
          </span>
        </div>
      </div>
      </div>
      <div className='category py-8 px-4 h-[200px]'>
       <h1 className='font-bold text-headingColor text-[1.6rem]'>All Category</h1>
        <div>
         
        </div>
      </div>
      <div className="bg-textRed h-[190px] md:px-16 px-4 mx-2 rounded-md drop-shadow-md relative">
        <h1 className='text-[2rem] text-white font-bold py-2'>GHC 12</h1>
        <p className='text-[1.2rem] text-primary font-semibold w-[75%]'>Start ordering with minimum of GHC12</p>
        <button className='mt-3 bg-white px-8 py-2 shadow-sm text-textColor rounded-full'>Explore</button>
        <div className='md:w-[20%] w-[50%] md:drop-shadow-md absolute md:right-1 md:-top-1 -right-9 top-12 '>
          <img className='md:rounded-none rounded-full w-full h-full' src={bannerImg} alt="" />
        </div>
      </div>
   </>
  )
}

export default KitchenHeader