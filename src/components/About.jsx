import React from 'react'

function About() {
  return (
    <main id='about' className='overflow-hidden relative min-h-screen w-full text-txtClr'>

      <h2 className='py-12'>About us</h2>

      <div className='layout-margin flex flex-col justify-center items-center gap-12 py-12 text-left'>

        <div className='flex justify-center items-center gap-4'>
          <article className='w-1/2'>
            <h3>We are a full service</h3>
            <p className='mt-4 text-xl'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </p>
          </article>

          <div className='relative w-1/2 flex justify-center items-center'>
            <img src="../../../assets/union.png" alt="/" className='absolute top-8 -z-10'/>
            <img src="../../../assets/logo.png" alt="/" />
          </div>
        </div>

        <div className='w-full flex flex-col justify-center items-start gap-12'>
          <h3 className='text-left'>What we do?</h3>

          <div className='w-full flex justify-start gap-4'>

            <div className='w-64 p-4 py-8 rounded-lg border-2 border-mainClr shadow-primary'>
              <p className='text-center font-bold mb-4'>Good quality</p>
              <p>Lorem Ipsum is simply dummy text of the printing</p>
            </div>

            <div className='w-64 p-4 py-8 rounded-lg border-2 border-mainClr shadow-primary'>
              <p className='text-center font-bold mb-4'>Best Price</p>
              <p>Lorem Ipsum is simply dummy text of the printing </p>
            </div>

            <div className='w-64 p-4 py-8 rounded-lg border-2 border-mainClr shadow-primary'>
              <p className='text-center font-bold mb-4'>Fast delivery</p>
              <p>Lorem Ipsum is simply dummy text of the printing</p>
            </div>

          </div>

        </div>

      </div>
    </main>
  )
}

export default About