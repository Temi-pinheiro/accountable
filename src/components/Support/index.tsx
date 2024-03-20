/* eslint-disable @next/next/no-img-element */
import React from 'react';

export const SupportCard = () => {
  return (
    <div className='mt-[120px] py-24 bg-[#f9f7f4]'>
      <div className='max-w-[990px] mx-auto'>
        <div className='flex flex-col items-center'>
          <h4 className='text-sm text-midnight border border-midnight py-1 px-[10px] rounded-full w-fit'>
            CUSTOMER SUPPORT
          </h4>
          <h1 className='text-[40px] max-w-[620px] text-[#020d35] font-black text-center leading-tight mt-4'>
            We are here for you, always
          </h1>
          <p className='text-xl text-[#575e66] max-w-[620px] text-center mt-[10px]'>
            Finance for businesses, powered by real humans. We work round the
            clock to assist you with anything you need.
          </p>
        </div>
        <div className='mt-[80px] flex items-center justify-between'>
          <div className='flex flex-col gap-y-6 max-w-[376px] w-full'>
            <div className='flex py-5 pr-8 pl-6 gap-x-3 bg-white rounded-xl'>
              <div className='shrink-0'>
                <img
                  src='https://assets-global.website-files.com/63fde373aa2d3e5dc97c694e/6405a926a4181a6cdda55939_phone_img.png'
                  loading='lazy'
                  alt=''
                  width='48'
                />
              </div>
              <div className='div-block-26'>
                <h1 className='text-heading text-sm font-bold'>
                  24/7 Phone &amp; Email Support
                </h1>
                <p className='text-sm text-body'>
                  Call us on{' '}
                  <a
                    target='_blank'
                    href='tel:+2348104221909'
                    className='link-3'
                  >
                    <span className='text-midnight'>+234 906 995 9632</span>
                  </a>{' '}
                  or email at{' '}
                  <span className='text-midnight'>
                    hello@accountable.global
                  </span>
                </p>
              </div>
            </div>
            <div className='flex py-5 pr-8 pl-6 gap-x-3 bg-white rounded-xl'>
              <div className='shrink-0'>
                <img
                  src='https://assets-global.website-files.com/63fde373aa2d3e5dc97c694e/6405a926f801e2c3fd8e85fa_caller_img.png'
                  loading='lazy'
                  alt=''
                  width='48'
                />
              </div>
              <div className='div-block-26'>
                <h1 className='text-heading text-sm font-bold'>
                  Chat with a real person in realtime
                </h1>
                <p className='text-sm text-body'>
                  Speak with a real human by clicking on the chat icon in the
                  bottom-right
                </p>
              </div>
            </div>
            <div className='flex py-5 pr-8 pl-6 gap-x-3 bg-white rounded-xl'>
              <div className='shrink-0'>
                <img
                  src='https://assets-global.website-files.com/63fde373aa2d3e5dc97c694e/6405a926e8bfaf07612bf566_chat_img.png'
                  loading='lazy'
                  alt=''
                  width='48'
                />
              </div>
              <div className='div-block-26'>
                <h1 className='text-heading text-sm font-bold'>Speak to us</h1>
                <p className='text-sm text-body'>
                  Get access to more resources, help and information in our{' '}
                  <span className='text-span-3'>Speak to sales</span>
                </p>
              </div>
            </div>
          </div>
          <div className='div-block-27 shrink-0'>
            <img
              src='https://assets-global.website-files.com/63fde373aa2d3e5dc97c694e/6405a984a68c026d05dac5e8_cx_img.png'
              loading='lazy'
              width='471'
              sizes='(max-width: 479px) 80vw, (max-width: 767px) 45vw, (max-width: 991px) 48vw, 471px'
              alt=''
              srcSet='https://assets-global.website-files.com/63fde373aa2d3e5dc97c694e/6405a984a68c026d05dac5e8_cx_img-p-500.png 500w, https://assets-global.website-files.com/63fde373aa2d3e5dc97c694e/6405a984a68c026d05dac5e8_cx_img-p-800.png 800w, https://assets-global.website-files.com/63fde373aa2d3e5dc97c694e/6405a984a68c026d05dac5e8_cx_img.png 942w'
              className='image-4'
            />
          </div>
        </div>
      </div>
    </div>
  );
};
