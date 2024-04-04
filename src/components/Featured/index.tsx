/* eslint-disable @next/next/no-img-element */
import React from 'react';

export const FeaturedIn = () => {
  return (
    <div className='mt-14 md:mt-[80px]'>
      <div className='flex flex-col mx-auto items-center max-w-[690px]'>
        <h1 className='text-heading font-bold text-[38px]'>As featured in</h1>
        <div className='flex items-center justify-between mt-8 md:mt-[72px] gap-x-14 max-md:px-6'>
          <a
            href='https://businessday.ng/brands-advertising/article/firm-opens-operation-to-provide-financial-solutions-for-businesses/'
            target='_blank'
            className='w-inline-block'
          >
            <img
              src='https://assets-global.website-files.com/63fde373aa2d3e5dc97c694e/640a3c141d7c9728a163221e_businessDay.png'
              loading='lazy'
              width='233'
              alt=''
            />
          </a>
          <a
            href='https://techcabal.com/2023/03/13/accountable-wants-to-help-startups-outlive-their-founders/?utm_source=dlvr.it&amp;utm_medium=twitter'
            target='_blank'
            className='link-block w-inline-block'
          >
            <img
              src='https://assets-global.website-files.com/63fde373aa2d3e5dc97c694e/640a3c143676a775721eda71_techCabal.png'
              loading='lazy'
              width='180'
              alt=''
              className='image-13'
            />
          </a>
          <a
            href='https://techpoint.africa/2023/03/28/accountable-calls-for-easing-the-financial-burden-of-smes/'
            target='_blank'
            className='w-inline-block'
          >
            <img
              src='https://assets-global.website-files.com/63fde373aa2d3e5dc97c694e/640a3c14f03c2f0e0977ea47_techPoint.png'
              loading='lazy'
              width='134'
              alt=''
              className='image-12'
            />
          </a>
        </div>
      </div>
    </div>
  );
};
