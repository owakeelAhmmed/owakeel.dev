import React from 'react'
import quote from '../assets/Frame 49.png'

const Quotebox = () => {
  return (
    <div className='mt-20 px-4 flex flex-col items-center gap-4 relative'>
      {/* Main Quote Box */}
      <div className='w-full max-w-[712px] bg-[#373c45] relative'>
        <img
          src={quote}
          className='absolute left-3 top-0 -translate-y-3 w-6 md:w-8'
          alt='quote-icon'
        />
        <p className='border border-gray px-6 py-6 md:px-8 md:py-8 tracking-[.10em] text-white text-base md:text-xl leading-relaxed'>
          Make it work, make it right, make it fast.
        </p>
      </div>

      {/* Author Box */}
      <div className='w-full max-w-[712px] flex justify-end absolute mt-[101px] mr-8 lg:mt-[98px] lg:ml-8'>
        <div className='relative'>
          <img
            src={quote}
            className='absolute right-3 top-0 -translate-y-3 w-6 md:w-8'
            alt='quote-icon'
          />
          <p className='border border-gray px-4 py-3 text-white text-sm md:text-lg'>
            - Kent Beck
          </p>
        </div>
      </div>
    </div>
  )
}

export default Quotebox
