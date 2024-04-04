import React from 'react';

export const SectionHeading = ({
  title,
  heading,
  paragraph,
}: {
  title: string;
  heading: string;
  paragraph: string;
}) => {
  return (
    <div className='flex flex-col items-center max-md:px-6'>
      <div className='flex flex-col items-center'>
        <h4 className='text-sm text-midnight border border-midnight py-1 px-[10px] rounded-full w-fit'>
          {title}
        </h4>
        <h1 className='text-2xl md:text-[40px] max-w-[620px] font-bold text-center leading-tight mt-4'>
          {heading}
        </h1>
        <p className='text-lg md:text-xl text-[#575e66] max-w-[620px] text-center mt-[10px]'>
          {paragraph}
        </p>
      </div>
    </div>
  );
};
