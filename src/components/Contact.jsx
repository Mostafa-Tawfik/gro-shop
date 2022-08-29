import React from 'react'

function Contact() {
  return (
    <main id='contact' className='overflow-hidden relative min-h-screen w-full text-txtClr'>

      <h2 className='py-12'>Contact us</h2>

      <div className='layout-margin-tight relative flex flex-col-reverse sm:flex-row justify-center items-center gap-12 py-12 text-left'>

        <form className='sm:w-1/2 flex flex-col items-center sm:items-start gap-4'>
          <p className='text-xl'>Feel free to contact us any time, we will get back to you as soon as possible!</p>

          <input
            type="text"
            placeholder='Name'
            className='w-3/4 text-2xl border-2 border-mainClr rounded-xl px-4 py-2'/>
          <input
            type="text"
            placeholder='Email'
            className='w-3/4 text-2xl border-2 border-mainClr rounded-xl px-4 py-2'/>
          <textarea
            type="text"
            placeholder='Mesage'
            className='w-3/4 h-[150px] text-2xl border-2 border-mainClr rounded-xl px-4 py-2'/>

            <button className='btn-primary bg-mainClr text-white'>
              Send
            </button>
        </form>

        <div className='w-1/2'>
          <img src="https://res.cloudinary.com/do1rqqi7v/image/upload/v1661743839/Projects/GRO%20shop/Rectangle_22_chgzq0.png" alt="/" className='hidden sm:block absolute top-0 right-0 h-[520px] -z-10'/>

          <img src="https://res.cloudinary.com/do1rqqi7v/image/upload/v1661743983/Projects/GRO%20shop/cs_tl4hgs.jpg" alt="/" className='w-[300px]'/>
        </div>

      </div>

    </main>
  )
}

export default Contact