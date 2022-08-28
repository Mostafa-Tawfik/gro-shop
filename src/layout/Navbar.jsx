import React from 'react'

function Navbar() {
  return (
    <div className='flex items-center justify-around h-[70px]'>
      <p className='text-3xl font-extrabold'>GRO SHOP</p>

      <div className='flex gap-4'>
        <a href='#home'>Home</a>
        <a href='#about'>About us</a>
        <a href='#categories'>Categories</a>
        <a href='#contact'>Contact us</a>
      </div>

      <div className='flex gap-4'>
        <button className='btn-primary h-10 w-24 bg-white text-mainClr'>Login</button>
        <button className='btn-primary w-fit h-10 text-lg border-2 rounded-lg'>Sign up</button>
      </div>
    </div>
  )
}

export default Navbar