/* eslint-disable @next/next/no-img-element */
import React from 'react';

export const ServiceCard = ({
  imageSrc,
  srcSet,
  title,
  text,
  url,
}: {
  imageSrc: string;
  srcSet: string;
  title: string;
  text: string;
  url: string;
}) => {
  return (
    <div className='rounded-lg shadow-md'>
      <div className='rounded-t-lg overflow-clip'>
        <img
          src={imageSrc}
          loading='lazy'
          width='314'
          sizes='(max-width: 479px) 100vw, 314px'
          alt={title}
          srcSet={srcSet}
          className='image-6'
        />
      </div>
      <div className='flex flex-col pb-6 pt-5 px-4'>
        <h1 className='text-heading font-bold'>{title}</h1>
        <p className='text-sm font-medium text-body mt-1'>{text}</p>
        <a
          href={url}
          target='_blank'
          className='flex items-center mt-4 text-[#394898] text-sm gap-x-2 font-medium'
        >
          <div className='text-block-10'>Learn more</div>
          <img
            src='https://assets-global.website-files.com/63fde373aa2d3e5dc97c694e/6408ba9d92670b140e5f5ae4_righIcon_img.png'
            loading='lazy'
            width='22'
            alt=''
            className='image-14'
          />
        </a>
      </div>
    </div>
  );
};
