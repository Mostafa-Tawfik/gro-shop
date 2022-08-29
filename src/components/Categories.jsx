import React from 'react'

function Categories() {
  return (
    <main id='categories' className='overflow-hidden relative w-full text-txtClr bg-[#fafcf5]'>

      <h2 className='py-12'>Categories</h2>

      <div className='layout-margin-tight flex justify-center items-center gap-12 py-12 text-left'>

        <div className='hidden sm:flex w-1/3 justify-center'>
          <img src="https://res.cloudinary.com/do1rqqi7v/image/upload/v1661734417/Projects/GRO%20shop/cat_znrdnv.png" alt="/" className='w-[200px]'/>
        </div>


        <div className='relative sm:w-2/3 h-[500px] flex justify-center flex-wrap sm:block'>

          <div className='block sm:absolute bottom-36 -left-4 lg:left-1'>
            <img src="https://res.cloudinary.com/do1rqqi7v/image/upload/v1661733648/Projects/GRO%20shop/Group_40_twjvku.png" alt="/" className='w-[160px]'/>
          </div>

          <div className='block sm:absolute top-20 left-32 lg:left-40'>
            <img src="https://res.cloudinary.com/do1rqqi7v/image/upload/v1661733648/Projects/GRO%20shop/Group_39_av71xi.png" alt="/" className='w-[160px]'/>
          </div>

          <div className='block sm:absolute bottom-20 left-32 lg:left-40'>
            <img src="https://res.cloudinary.com/do1rqqi7v/image/upload/v1661733648/Projects/GRO%20shop/Group_41_sjkfly.png" alt="/" className='w-[160px]'/>
          </div>

          <div className='block sm:absolute top-8 right-0 lg:right-32'>
            <img src="https://res.cloudinary.com/do1rqqi7v/image/upload/v1661733648/Projects/GRO%20shop/Group_38_olhaaq.png" alt="/" className='w-[160px]'/>
          </div>

          <div className='block sm:absolute bottom-32 right-0 lg:right-32'>
            <img src="https://res.cloudinary.com/do1rqqi7v/image/upload/v1661733648/Projects/GRO%20shop/Group_37_vvr19u.png" alt="/" className='w-[160px]'/>
          </div>

        </div>

      </div>

    </main>
  )
}

export default Categories