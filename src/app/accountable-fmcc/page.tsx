/* eslint-disable @next/next/no-img-element */
import { Metadata } from 'next';
import { Group, SectionHeading, SupportCard, Testimonials } from '~/components';
import { Figtree } from 'next/font/google';

export const metadata: Metadata = {
  title: 'Accountable FMCC | Accountable',
  description: 'Generated by create next app',
};
const figtree = Figtree({ subsets: ['latin'] });

export default function AccFMCC() {
  return (
    <div
      className={[figtree.className, 'flex min-h-screen flex-col pt-24'].join(
        ' '
      )}
    >
      <Group key='home-hero'>
        <div className='pt-24 pb-[120px] max-w-[1230px] mx-auto'>
          <div className='grid grid-cols-2 w-full items-center'>
            <div className='flex flex-col'>
              <p className='text-midnight'>Accountable FMCC</p>
              <h1 className='text-heading text-5xl leading-snug mt-2 max-w-[607px] font-bold'>
                To make creative careers work, we need to talk about money.
                time.
              </h1>
              <p className='mt-4 max-w-[460px] text-body'>
                From negotiating better financial terms for your deals, to
                tracking payments, managing your taxes, royalty statement audits
                and getting the right financial cum investment advice, we’ve got
                you covered.
              </p>

              <div className='mt-10 flex items-center gap-x-4'>
                <a
                  href='https://calendar.app.google/Z9JQd7RHr52r4uoC9'
                  target='_blank'
                  className='bg-midnight text-white py-3 px-6 rounded-xl'
                >
                  Book a meeting
                </a>
                <a
                  href='#'
                  className='border border-midnight text-midnight py-3 px-6 rounded-xl'
                >
                  Watch a demo
                </a>
              </div>
            </div>
            <div>
              <img
                src='https://assets-global.website-files.com/63fde373aa2d3e5dc97c694e/642e6294e42d3191d259a973_fmcc_img.png'
                loading='lazy'
                width='491'
                sizes='(max-width: 479px) 100vw, (max-width: 767px) 92vw, 491px'
                alt=''
                srcSet='https://assets-global.website-files.com/63fde373aa2d3e5dc97c694e/642e6294e42d3191d259a973_fmcc_img-p-500.png 500w, https://assets-global.website-files.com/63fde373aa2d3e5dc97c694e/642e6294e42d3191d259a973_fmcc_img-p-800.png 800w, https://assets-global.website-files.com/63fde373aa2d3e5dc97c694e/642e6294e42d3191d259a973_fmcc_img.png 982w'
              />
            </div>
          </div>
        </div>
      </Group>

      <SupportCard />
      <Testimonials />
    </div>
  );
}
