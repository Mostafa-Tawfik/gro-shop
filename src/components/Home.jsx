import React from 'react'
import Navbar from '../layout/Navbar'

function Home() {
  return (
    <main className='overflow-hidden relative h-full w-full'>
      <div className='layout-margin min-h-screen text-white'>

        <div className='absolute -top-[30%] 2xl:-top-[45%] -left-16 2xl:-left-32 h-full w-[calc(100vw*1.2)] bg-mainClr rounded-[182px] -rotate-[23.26deg] -z-50'></div>

        <Navbar></Navbar>

        <div className='min-h-[calc(100vh-70px)] flex flex-col sm:flex-row items-center sm:justify-center'>

          {/* hero left pane */}
          <div className='sm:w-1/2 flex flex-col justify-center items-start text-left'>
            <h2>GRO SHOP APP</h2>
            <h3>TO DO IT ALL</h3>

            <p className='w-3/4'>You can get the best prices for your online shopping ,good quality and fast delivery</p>

            <p className='text-2xl font-bold mt-12 mb-4'>Download the app now!</p>

            <div className='h-fit flex flex-wrap gap-4 items-center'>
              <img src="https://res.cloudinary.com/do1rqqi7v/image/upload/v1661732789/Projects/GRO%20shop/iosStore_g3iq40.png" alt="/" className='w-[150px] sm:w-[200px] h-12 sm:h-16 cursor-pointer'/>

              <img src="https://res.cloudinary.com/do1rqqi7v/image/upload/v1661732788/Projects/GRO%20shop/playStore_jxzvel.png" alt="/" className='w-[150px] sm:w-[200px] h-12 sm:h-16 cursor-pointer'/>
            </div>
          </div>

          {/* hero right pane */}
          <div className='relative w-full mt-12 sm:w-1/2 sm:min-h-[calc(100vh-70px)]'>
            <img
              src="https://res.cloudinary.com/do1rqqi7v/image/upload/v1661732788/Projects/GRO%20shop/iPhone-logo_tccjk5.png" alt="/"
              className='absolute top-[15%] right-20 sm:right-16 object-scale-down w-[230px] sm:w-[320px] xl:w-[406px] xl:h-[526px]'/>
            <img
              src="https://res.cloudinary.com/do1rqqi7v/image/upload/v1661732789/Projects/GRO%20shop/iPhone-preview_ch3wmj.png" alt="/"
              className='absolute top-[20%] xl:top-[25%] right-6 sm:right-0 object-scale-down w-[150px] sm:w-[200px] xl:w-[235px] xl:h-[490px]'/>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Home