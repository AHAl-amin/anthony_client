import React from 'react'

function Footer() {
  return (
    <div className='bg-[#2A5CE6]'>
      <div className='md:max-w-6xl flex justify-between mx-auto items-center py-10'>
        <div>
          <h1 className='text-[#FFFFFF] text-3xl font-medium'>Ready to humanize your content?</h1>
          <h1 className='text-gray-300 text-3xl font-medium'>Start using our Platform today.</h1>
        </div>
        <div className='flex justify-center gap-6 '>
          <button className='btn text-[#2563EB]'>Get Started</button>
          <button className='btn bg-[#398FF2] text-[#FFFFFF] border-none'>View Pricing</button>
        </div>

      </div>


    </div>
  )
}

export default Footer