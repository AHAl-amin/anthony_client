import React from 'react';
import bannerImg from '../../../public/image/home/banner.png';
import { Link } from 'react-router-dom';
function Banner() {
  return (
    <div
      className="md:py-40 py-20 bg-cover bg-center"
     style={{ backgroundImage: `url(${bannerImg})` }}
    >
      <div className="h-full w-full flex items-center justify-center  bg-opacity-40">
        <div className='space-y-8'>
          <h1 className="md:text-6xl text-4xl text-white font-bold bruce-font text-center">AI TEXT HUMANIZATION</h1>
          <h2 className='text-[#FFFFFF99] text-4xl font-semibold text-center'>For SEO Professionals & More</h2>
          <p className='text-gray-100 text-center '>Make AI-generated content undetectable to bypass AI content filters while maintaining SEO <br /> value. Perfect for agencies, marketers, and content creators.</p>
          <div className='flex justify-center gap-6 mr-8'>
            <Link to="/user_dashboard" className='btn text-[#2563EB]'>Start Humanizing</Link>
            <Link to="/pricing" className='btn bg-[#398FF2] text-[#FFFFFF] border-none'>View Pricing</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
