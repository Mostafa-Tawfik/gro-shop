import React from 'react'

function Footer() {
  return (
    <main id='contact' className='overflow-hidden relative h-[370px] w-full bg-mainClr text-white'>

      <div className='layout-margin relative h-[250px] flex justify-around items-start gap-12 py-12 text-left'>

        <div>
          <h4 className='mb-4'>Reach us</h4>

          <div className='flex items-center gap-2 text-lg'>
            <img
              src="https://api.iconify.design/carbon/email.svg?color=white" alt="/"
              className='w-[40px]'/>
            <p>contact@groshop.com</p>
          </div>

          <div className='flex items-center gap-2'>
            <img
              src="https://api.iconify.design/bx/phone-call.svg?color=white" alt="/"
              className='w-[40px]'/>
            <p>+12345678910</p>
          </div>
        </div>

        <div>
          <h4 className='mb-4'>Follow us</h4>

          <div className='flex items-center gap-2'>
            <img
              src="https://api.iconify.design/ant-design/facebook-filled.svg?color=white" alt="/"
              className='w-[50px] cursor-pointer'/>
            <img
              src="https://api.iconify.design/ant-design/twitter-square-filled.svg?color=white" alt="/"
              className='w-[50px] cursor-pointer'/>
            <img
              src="https://api.iconify.design/ant-design/instagram-filled.svg?color=white" alt="/"
              className='w-[50px] cursor-pointer'/>
            <img
              src="https://api.iconify.design/akar-icons/linkedin-box-fill.svg?color=white" alt="/"
              className='w-[50px] cursor-pointer'/>
          </div>
        </div>

        <div>
          <h4 className='mb-4'>Download the app Now!</h4>

          <div className='h-fit flex flex-wrap gap-4 items-center'>
            <img src="https://res.cloudinary.com/do1rqqi7v/image/upload/v1661779376/Projects/GRO%20shop/App_Store__iOS_-Badge-Alternative-Logo.wine_w2jxp3.png" alt="/" className='w-[160px] h-[50px] cursor-pointer'/>

            <img src="https://res.cloudinary.com/do1rqqi7v/image/upload/v1661779377/Projects/GRO%20shop/Google_Play-Badge-Logo.wine_jldeou.png" alt="/" className='w-[160px] h-[50px] cursor-pointer'/>
          </div>
        </div>

      </div>

      <div className='h-[120px] bg-gradient-to-r from-txtClr to-txtClr/50 flex flex-col justify-center items-center gap-2'>

        <div className='w-fit flex justify-center gap-4'>

          <a
            href="https://www.linkedin.com/in/rahma-awd-b012b31aa/"
            target="blank"
            referrerpolicy="noreferrer"
            rel="noopener"
            class="w-fit h-fit mx-auto flex justify-center items-center gap-2">
            <img
              class='w-[45px] h-[45px] rounded-lg'
              alt='myLogo'
              src='https://res.cloudinary.com/do1rqqi7v/image/upload/v1661781303/Projects/GRO%20shop/RahmaAwd_hswdhw.jpg'/>

            <div className='flex flex-col justify-start items-start'>
              <p class='font-["Mrs_Saint_Delafield"]'>
                Rahma Awd
              </p>
              <p class='font-["Redressed"] -mt-2'>
                UX/UI Designer
              </p>
            </div>
          </a>

          <a
            href="https://www.mostafatawfik.com/"
            target="blank"
            referrerpolicy="noreferrer"
            rel="noopener"
            class="w-fit h-fit mx-auto flex justify-center items-center gap-2">
            <img
              class='w-[45px] h-[45px] rounded-lg'
              alt='myLogo'
              src='https://www.mostafatawfik.com/images/logo.jpg'/>

            <div className='flex flex-col justify-start items-start'>
              <p class='font-["Mrs_Saint_Delafield"]'>
                Mostafa Tawfik
              </p>

              <p class='font-["Redressed"] -mt-2'>
                Front End Deveploper
              </p>
            </div>

          </a>

        </div>

        <p class='font-[Redressed]'>
          all rights reserved || Copyright © 2022
        </p>

      </div>

    </main>
  )
}

export default Footer