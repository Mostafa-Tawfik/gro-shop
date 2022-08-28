import React from 'react'
import Navbar from '../layout/Navbar'

function Home() {
  return (
    <main className='layout-margin min-h-screen text-white'>

      <div className='absolute -top-[30%] 2xl:-top-[45%] -left-16 2xl:-left-32 h-full w-[calc(100vw*1.2)] bg-mainClr rounded-[182px] -rotate-[23.26deg] -z-50'></div>

      <Navbar></Navbar>
    </main>
  )
}

export default Home