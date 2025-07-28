import React from 'react'

function Footer() {
  return (
    <div className='bg-[#07478C]'>
      <div className='md:max-w-6xl flex justify-between mx-auto items-center py-10'>
        <div>
          <h1 className='text-[#FFFFFF] text-3xl font-medium'>Ready to humanize your content?</h1>
          <h1 className='text-gray-300 text-3xl font-medium'>Start using our Platform today.</h1>
        </div>
        <div className='flex justify-center gap-6 '>
          <button className='btn text-[#FFFFFF] border-none bg'>Get Started</button>
          <button className='btn bg text-[#FFFFFF] border-none'>View Pricing</button>
        </div>

      </div>


    </div>
  )
}

export default Footer