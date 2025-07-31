import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div className='bg-[#0b2035f6] '>
      <div className='md:max-w-6xl flex md:flex-row flex-col gap-6 justify-between mx-auto items-center py-10'>
        <div>
          <h1 className='text-[#FFFFFF] md:text-3xl text-2xl font-medium'>Ready to humanize your content?</h1>
          <h1 className='text-gray-300 md:text-3xl text-2xl font-medium'>Start using our Platform today.</h1>
        </div>
        <div className='flex justify-center gap-6 '>
          <Link to="/user_dashboard">
          <button className='btn  text-[#FFFFFF] border-none bg shadow-none '>Get Started</button>
          </Link>
          <Link to="/pricing">
          
          <button className='btn bg text-[#FFFFFF] border-none shadow-none'>View Pricing</button>
          </Link>
        </div>

      </div>


    </div>
  )
}

export default Footer