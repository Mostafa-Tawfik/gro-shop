import React from 'react'

function Navbar() {
  return (
    <div className='flex items-center justify-around h-[70px]'>
      <h1 className='text-3xl font-extrabold'>GRO SHOP</h1>

      <div className='flex gap-2 lg:gap-4'>
        <a href='#home'>Home</a>
        <a href='#about'>About us</a>
        <a href='#categories'>Categories</a>
        <a href='#contact'>Contact us</a>
      </div>

      <div className='flex gap-4'>
        <button className='btn-primary text-lg lg:text-2xl h-8 lg:h-10 w-fit bg-white text-mainClr'>Login</button>
        <button className='btn-primary text-lg lg:text-2xl h-8 lg:h-10 w-fit border-2 rounded-lg'>Sign up</button>
      </div>
    </div>
  )
}

export default Navbar