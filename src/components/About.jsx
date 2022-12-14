import React from 'react'

function About() {
  return (
    <main id='about' className='overflow-hidden relative min-h-screen w-full text-txtClr'>

      <img src="https://res.cloudinary.com/do1rqqi7v/image/upload/v1661732787/Projects/GRO%20shop/about-vector-left_mjd98b.png" alt="/" className='absolute -z-50'/>

      <img src="https://res.cloudinary.com/do1rqqi7v/image/upload/v1661732787/Projects/GRO%20shop/about-vector-right_nabmjh.png" alt="/" className='absolute right-0 bottom-0 -z-50'/>

      <h2 className='py-12'>About us</h2>

      <div className='layout-margin-tight flex flex-col justify-center items-center gap-12 py-12 text-left'>

        <div className='flex flex-col-reverse sm:flex-row justify-center items-center gap-4'>
          <article className='w-[95%] sm:w-1/2'>
            <h3>We are a full service</h3>
            <p className='mt-4 text-xl'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </p>
          </article>

          <div className='relative w-1/2 flex justify-center items-center'>
            <img src="https://res.cloudinary.com/do1rqqi7v/image/upload/v1661732787/Projects/GRO%20shop/Union_rdhfla.png" alt="/" className='absolute top-8 -z-10'/>
            <img src="https://res.cloudinary.com/do1rqqi7v/image/upload/v1661732787/Projects/GRO%20shop/logo_byqs3o.png" alt="/" />
          </div>
        </div>

        <div className='w-full flex flex-col justify-center items-start gap-12'>
          <h3 className='text-left'>What we do?</h3>

          <div className='w-full flex flex-col items-center sm:flex-row justify-start gap-4'>

            <div className='w-64 p-4 py-8 rounded-lg border-2 border-mainClr shadow-primary'>
              <p className='text-center text-xl font-bold mb-4'>Good quality</p>
              <p>Lorem Ipsum is simply dummy text of the printing</p>
            </div>

            <div className='w-64 p-4 py-8 rounded-lg border-2 border-mainClr shadow-primary'>
              <p className='text-center text-xl font-bold mb-4'>Best Price</p>
              <p>Lorem Ipsum is simply dummy text of the printing </p>
            </div>

            <div className='w-64 p-4 py-8 rounded-lg border-2 border-mainClr shadow-primary'>
              <p className='text-center text-xl font-bold mb-4'>Fast delivery</p>
              <p>Lorem Ipsum is simply dummy text of the printing</p>
            </div>

          </div>

        </div>

      </div>
    </main>
  )
}

export default About