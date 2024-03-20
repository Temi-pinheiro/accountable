/* eslint-disable @next/next/no-img-element */
import React from 'react';

export const TestimonialCard = ({
  testimonial,
  person,
}: {
  testimonial: string;
  person: { name: string; position: string; imgSrc: string };
}) => {
  return (
    <div className='testimony-card middle bg-white max-w-[320px] px-6 pb-7 rounded-lg h-[392px]'>
      <div className='flex flex-col h-full'>
        <h1 className='text-[#001b84] text-[80px]'>“</h1>
        <div className='text-body text-sm -mt-7'>{testimonial}</div>
        <div className=' mt-auto flex items-center gap-x-2'>
          <img src={person.imgSrc} loading='lazy' alt='' width='40' />
          <div className='div-block-67'>
            <h1 className='heading-24 text-xs font-bold'>{person.name}</h1>
            <div className='text-[#333] text-sm'>{person.position}</div>
          </div>
        </div>
      </div>
    </div>
  );
};
