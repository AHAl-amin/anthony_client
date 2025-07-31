import React from 'react';

function StayUpToDate() {
  return (
    <div className="bg-[#6586AC] py-10  text-center text-white inter">
     <div className='space-y-4 mx-4 '>
       <h2 className="md:text-4xl text-2xl font-bold">Stay up to date</h2>
      <p className="mt-2">Unlock top content strategies and keep up with the newest AI and SEO insights.</p>
      <div className="mt-4 flex justify-center items-center">
        <input
          type="email"
          placeholder="Enter your email"
          className="px-4 py-2 mr-2 rounded border-none bg-[#FFFFFF] placeholder:text-gray-400 w-120"
        />
        <button className="px-4 py-2 bg text-white rounded">
          Subscribe
        </button>
      </div>
      <p className="mt-2 text-sm">
        By subscribing, you agree to our Privacy Policy and consent to receive updates from us.
      </p>
     </div>
    </div>
  );
}

export default StayUpToDate;