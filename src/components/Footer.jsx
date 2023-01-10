import React from 'react'

const Footer = () => {
  return (
    <footer className='md:grid grid-cols-4  gap-4 min-h-[60vh] bg-textColor md:px-8 px-4 py-12'>
      <div className=''>
        <h1 className='text-red-400 font-bold text-[2rem]'>Main Content</h1>
        <p className='md:text-[15px] text-white w-full text-start'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam quia alias corrupti labore ex. Eum, veniam.</p>
      </div>
      <div>
      <h1 className='text-red-400 font-bold text-[2rem]'>Company</h1>
        <li className='text-white text-[1.4rem] py-2 cursor-pointer hover:text-primary transition-all duration-200 ease-in-out'>About Us</li>
        <li className='text-white text-[1.4rem] py-2 cursor-pointer hover:text-primary transition-all duration-200 ease-in-out'>Career</li>
        <li className='text-white text-[1.4rem] py-2 cursor-pointer hover:text-primary transition-all duration-200 ease-in-out'>Pledge</li>
        <li className='text-white text-[1.4rem] py-2 cursor-pointer hover:text-primary transition-all duration-200 ease-in-out'>Community</li>
      </div>
      <div>
      <h1 className='text-red-400 font-bold text-[2rem]'>Quick Links</h1>
        <li className='text-white text-[1.4rem] py-2 cursor-pointer hover:text-primary transition-all duration-200 ease-in-out'>Home</li>
        <li className='text-white text-[1.4rem] py-2 cursor-pointer hover:text-primary transition-all duration-200 ease-in-out'>Kitchens</li>
        <li className='text-white text-[1.4rem] py-2 cursor-pointer hover:text-primary transition-all duration-200 ease-in-out'>Services</li>
        <li className='text-white text-[1.4rem] py-2 cursor-pointer hover:text-primary transition-all duration-200 ease-in-out'>Profile</li>
      </div>
      <div>
      <h1 className='text-red-400 font-bold text-[2rem]'>Support</h1>
        <li className='text-white text-[1.4rem] py-2 cursor-pointer hover:text-primary transition-all duration-200 ease-in-out'>FAQs</li>
        <li className='text-white text-[1.4rem] py-2 cursor-pointer hover:text-primary transition-all duration-200 ease-in-out'>Newsletter</li>
        <li className='text-white text-[1.4rem] py-2 cursor-pointer hover:text-primary transition-all duration-200 ease-in-out'>Blog</li>
        <li className='text-white text-[1.4rem] py-2 cursor-pointer hover:text-primary transition-all duration-200 ease-in-out'>Follow</li>
      </div>
    </footer>
  )
}

export default Footer