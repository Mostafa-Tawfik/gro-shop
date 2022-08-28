import React from 'react'
import Navbar from '../layout/Navbar'

function Home() {
  return (
    <main className='layout-margin min-h-screen text-white'>

      <div className='absolute -top-[30%] 2xl:-top-[45%] -left-16 2xl:-left-32 h-full w-[calc(100vw*1.2)] bg-mainClr rounded-[182px] -rotate-[23.26deg] -z-50'></div>

      <Navbar></Navbar>

      <div className='min-h-[calc(100vh-70px)] flex items-center justify-center'>
        <div className='w-1/2 flex flex-col justify-center items-start'>
          <h1>GRO SHOP APP</h1>
          <h2>TO DO IT ALL</h2>
          <p className='text-left'>You can get the best prices for your online shopping ,good quality and fast delivery</p>

          <p className='font-extrabold mt-12'>Download the app now!</p>

          <div className='h-fit flex items-center'>
            <img src="../../../assets/iosStore.png" alt="/" className='h-[106px] cursor-pointer'/>
            <img src="../../../assets/playStore.png" alt="/" className='h-16 cursor-pointer'/>
          </div>
        </div>

        <div className='w-1/2'>

        </div>
      </div>
    </main>
  )
}

export default Home