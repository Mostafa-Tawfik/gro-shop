import React from 'react'
import TestimonalCard from './TestimonalCard'

function Testimonials() {
  return (
    <main id='testimonials' className='overflow-hidden relative w-full text-txtClr'>

      <img src="https://res.cloudinary.com/do1rqqi7v/image/upload/v1661732787/Projects/GRO%20shop/about-vector-left_mjd98b.png" alt="/" className='absolute -z-50 bottom-0'/>

      <h2 className='py-12'>Testimonials</h2>

      <div className='layout-margin-tight flex flex-col sm:flex-row justify-center items-center gap-12 py-12 text-left'>

        <TestimonalCard
          name='Sameh Ahmed'
          msg='Lorem Ipsum is simply dummy text of the .'
          pic='https://res.cloudinary.com/do1rqqi7v/image/upload/v1661739967/Projects/GRO%20shop/t1_wwxycf.jpg'>
        </TestimonalCard>

        <TestimonalCard
          name='Ahmed Wael'
          msg='Lorem Ipsum is simply dummy text of the industry.'
          pic='https://res.cloudinary.com/do1rqqi7v/image/upload/v1661739967/Projects/GRO%20shop/t3_zekx3f.jpg'>
        </TestimonalCard>

        <TestimonalCard
          name='Ramy Ali'
          msg='Lorem Ipsum is simply dummy text of the .'
          pic='https://res.cloudinary.com/do1rqqi7v/image/upload/v1661739967/Projects/GRO%20shop/t2_a4tvhi.jpg'>
        </TestimonalCard>

      </div>

    </main>
  )
}

export default Testimonials