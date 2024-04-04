/* eslint-disable @next/next/no-img-element */
import React from 'react';

export const Check = ({
  title,
  details,
}: {
  title: string;
  details: string;
}) => (
  <div className=' flex gap-x-5 w-full'>
    <div className='flex flex-col gap-y-3 items-center '>
      <img
        src='https://assets-global.website-files.com/63fde373aa2d3e5dc97c694e/642419a97e6e5476a23da966_check.png'
        loading='lazy'
        width='24'
        alt=''
      />{' '}
    </div>

    <div className='flex flex-col md:gap-y-5 w-full pb-3'>
      <h4 className='text-heading text-xl font-bold'>{title}</h4>
      <p className='text-body md:text-sm'>{details}</p>
    </div>
  </div>
);
