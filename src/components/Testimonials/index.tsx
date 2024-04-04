/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { TestimonialCard } from '../Testimonial';

export const Testimonials = () => {
  const testimonials = [
    {
      testimonial:
        'As a team of young professionals who specialize in delivering high value-added accounting services,Accountable services thrives on the strength of adopting a customized approach that boost client business performance and financial operations',
      person: {
        name: 'Oluwaseun Orepekan',
        position: 'Managing Partner, STOT',
        imgSrc:
          'https://assets-global.website-files.com/63fde373aa2d3e5dc97c694e/6409e5f3f02f12214850844b_testimonial_one.png',
      },
    },
    {
      testimonial:
        'Working with accountable has been nothing short of amazing really truly. Great attitude to work',
      person: {
        name: 'Okikiola Osunkoya',
        position: 'CEO, Perception Technologies',
        imgSrc:
          'https://assets-global.website-files.com/63fde373aa2d3e5dc97c694e/6409e5f3ceb6bd5d4f04c3b2_testimonial_two.png',
      },
    },
    {
      testimonial:
        'Accountable has been a game-changer for us. Their expert team has helped us streamline our financial processes and stay on top of compliance requirements. Thanks to their personalised support, we now have a clear understanding of our financial position',
      person: {
        name: 'Oluwaseun Adedokun',
        position: 'CFO, The Bulb Africa',
        imgSrc:
          'https://assets-global.website-files.com/63fde373aa2d3e5dc97c694e/6409e5f30f1b4fa3d4e2bc91_testimonial_three.png',
      },
    },
  ];
  return (
    <div className='py-10 md:py-24 bg-[#b7c4f7]'>
      <div className='max-w-[1040px] mx-auto max-md:px-6'>
        <div className='flex flex-col items-center'>
          <h4 className='text-sm text-midnight border border-midnight py-1 px-[10px] rounded-full w-fit'>
            TESTIMONIALS
          </h4>
          <h1 className='text-2xl md:text-[40px] max-w-[620px] text-[#020d35] font-medium md:font-black text-center leading-tight mt-4'>
            Trust us to keep all our promises
          </h1>
          <p className='text-sm md:text-xl text-[#575e66] max-w-[620px] text-center mt-[10px]'>
            Don't just take our word for granted, here's what some of our
            customers have to say about us.
          </p>
        </div>
        <div className='mt-16 md:mt-[80px] grid md:grid-cols-3 gap-y-6 md:gap-x-10 max-md:justify-center'>
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.testimonial} {...testimonial} />
          ))}
        </div>
      </div>
    </div>
  );
};
