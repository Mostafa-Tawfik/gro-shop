import React from 'react'
import About from './components/About'
import Home from './components/Home'

function GroShop() {
  return (
    <div className='select-none'>
      <Home></Home>

      <hr className='w-1/2 h-1 bg-mainClr mx-auto'/>

      <About></About>

      <hr className='w-1/2 h-1 bg-mainClr mx-auto'/>

      
    </div>
  )
}

export default GroShop