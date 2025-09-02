import React from 'react';

const Footer = () => {
  return (
    <div className='font-fira w-full py-4 bg-[#282C33]'>
      <hr className='border-gray-600' />

      <div className='flex flex-col lg:flex-row justify-between items-center py-8 px-6 sm:px-12 md:px-20 lg:px-[171px] gap-6 text-center lg:text-left'>
        <div>
          <h1 className='text-white text-lg font-semibold'>Owakeel Ahmmed</h1>
          <p className='text-white text-sm'>Web designer and front-end developer</p>
        </div>

        <div>
          <h1 className='text-white text-lg font-semibold'>Media</h1>
          {/* You can add social icons here */}
        </div>
      </div>

      <p className='text-center mt-6 text-white text-sm'>&copy; Copyright {new Date().getFullYear()}. Made by Owakeel</p>
    </div>
  );
};

export default Footer;
