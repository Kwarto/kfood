import React from 'react'
import { motion } from 'framer-motion'
const HomeCon = () => {
  return (
    <div className="w-full h-auto md:mt-12 rounded-md md:px-16 px-4 py-8 flex flex-col items-center justify-center">
      <h1 className='text-[2.2rem] text-center pb-5 text-headingColor font-bold  '>Fast And<span className='text-[2.3rem] text-center text-textRed'> Convenience</span></h1>
      <div className='md:w-[50%] flex flex-col gap-3 items-center justify-center'>
              <p className='text-center text-textColor'>Fast and convenient way to enjoy your favorite meal. We deliver in 10 minutes or less, with food quality that rivals your favorite upscale kitchen.</p>
              <motion.div whileTap={{ scale: 0.95 }} className='bg-textRed cursor-pointer shadow-md md:w-[40%] w-[65%] p-3 rounded-full'>
                <p className='text-base font-semibold text-center text-white'>Make Your Order Now</p>
              </motion.div>
      </div>
    </div>
  )
}

export default HomeCon