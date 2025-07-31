import React from 'react';
import bannerImg from '../../../public/image/home/banner.png';
import { Link } from 'react-router-dom';
function Banner() {
  return (
    <div
      className="md:py-40 py-20 bg-[#0A192F] md:bg-cover md:bg-center  "
     style={{ backgroundImage: `url(${bannerImg})` }}
    >
      <div className="h-full w-full flex items-center justify-center  bg-opacity-40 inter ">
        <div className='md:space-y-8 space-y-5'>
          <h1 className="md:text-6xl text-2xl text-white font-bold  text-center">AI TEXT HUMANIZATION</h1>
          <h2 className='text-[#FFFFFF99] md:text-4xl text-2xl font-semibold text-center'>For SEO Professionals & More</h2>
          <p className='text-gray-300 text-center md:text-lg text-[12px] w-full md:w-2/3 mx-auto   '>Make AI-generated content undetectable to bypass AI content filters while maintaining SEO value. Perfect for agencies, marketers, and content creators.</p>
          <div className='flex justify-center gap-6 '>
            <Link to="/user_dashboard" className='btn shadow-none border-none text-[#FFFFFF]  bg'>Start Humanizing</Link>
            <Link to="/pricing" className='btn bg shadow-none text-[#FFFFFF] border-none'>View Pricing</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
