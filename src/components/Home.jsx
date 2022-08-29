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

            <p className='text-2xl font-bold mt-12 mb-4 ml-8'>Download the app now!</p>

            <div className='h-fit flex flex-wrap gap-4 items-center'>
              <img src="https://res.cloudinary.com/do1rqqi7v/image/upload/v1661779376/Projects/GRO%20shop/App_Store__iOS_-Badge-Alternative-Logo.wine_w2jxp3.png" alt="/" className='w-[150px] sm:w-[200px] h-12 sm:h-16 cursor-pointer'/>

              <img src="https://res.cloudinary.com/do1rqqi7v/image/upload/v1661779377/Projects/GRO%20shop/Google_Play-Badge-Logo.wine_jldeou.png" alt="/" className='w-[150px] sm:w-[200px] h-12 sm:h-16 cursor-pointer'/>
            </div>
          </div>

          {/* hero right pane */}
          <div className='relative mt-12 w-1/2 sm:min-h-[calc(100vh-70px)]'>
            <img
              src="https://res.cloudinary.com/do1rqqi7v/image/upload/v1661734700/Projects/GRO%20shop/phoneLogo_jgshnv.png" alt="/"
              className='absolute top-[10%] lg:top-[15%] xl:top-[10%] right-12 sm:right-40 lg:right-48 w-[140px] sm:w-[190px] xl:w-[300px] -rotate-[25.45deg]'/>
            <img
              src="https://res.cloudinary.com/do1rqqi7v/image/upload/v1661734417/Projects/GRO%20shop/cat_znrdnv.png" alt="/"
              className='absolute top-[20%] -right-12 sm:right-8 xl:right-0 w-[150px] sm:w-[200px] xl:w-[300px]'/>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Home