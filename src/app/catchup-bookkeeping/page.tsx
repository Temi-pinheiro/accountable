/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import { Metadata } from 'next';
import { Group, SectionHeading, SupportCard, Testimonials } from '~/components';
import { Figtree } from 'next/font/google';
import Link from 'next/link';
const figtree = Figtree({ subsets: ['latin'] });
export const metadata: Metadata = {
  title: 'Catchup Bookkeeping | Accountable',
  description: 'Generated by create next app',
};
export default function CatchupBKK() {
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
              <p className='text-midnight'>Catch Up Bookkeeping.</p>
              <h1 className='text-heading text-5xl leading-snug mt-2 max-w-[607px] font-bold'>
                Tidy up your financial records with Catch Up Bookkeeping.
              </h1>
              <p className='mt-4 max-w-[460px] text-body'>
                Don't let overdue bookkeeping stress you out. With Accountable,
                you can get your books up-to-date and ready for filing quickly
                with the help of our expert bookkeepers.
                <br />
                <br />
                For businesses that are two years or less behind on their
                bookkeeping
                <br />
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
                src='https://assets-global.website-files.com/63fde373aa2d3e5dc97c694e/642e8561f8ce14e3d5182150_image_services.png'
                loading='lazy'
                sizes='(max-width: 767px) 100vw, 673.5px'
                width='673.5'
                alt=''
                srcSet='https://assets-global.website-files.com/63fde373aa2d3e5dc97c694e/642e8561f8ce14e3d5182150_image_services-p-500.png 500w, https://assets-global.website-files.com/63fde373aa2d3e5dc97c694e/642e8561f8ce14e3d5182150_image_services-p-800.png 800w, https://assets-global.website-files.com/63fde373aa2d3e5dc97c694e/642e8561f8ce14e3d5182150_image_services-p-1080.png 1080w, https://assets-global.website-files.com/63fde373aa2d3e5dc97c694e/642e8561f8ce14e3d5182150_image_services.png 1347w'
              />
            </div>
          </div>
        </div>
      </Group>
      <Group key='how it works'>
        <div className='mt-[120px] bg-[#f7f9fb]'>
          <div className='pt-[120px] pb-[160px] max-w-[1230px] mx-auto'>
            <div className='flex flex-col items-center'>
              <SectionHeading
                title='HOW IT WORKS'
                heading='Need historical Bookeeping?'
                paragraph='Finance for businesses, powered by real humans. We work round the clock to assist you with anything you need.'
              />
              <div className='grid grid-cols-2 gap-x-6 gap-y-8 max-w-[924px] mt-[80px]'>
                <div className='flex flex-col p-6 rounded-lg border border-[#e8ecfc] bg-white'>
                  <div className='w-10 h-10 rounded-full flex items-center justify-center border-[#8a9ff2] text-[#8a9ff2] border'>
                    <div className='text-block-16'>01</div>
                  </div>
                  <h1 className='mt-3 font-semibold text-heading'>
                    Catchup Bookkeeping
                  </h1>
                  <p className='text-body text-sm mt-2'>
                    For businesses that are two years or less behind on their
                    bookkeeping
                  </p>
                  <Link
                    href='/catchup-bookkeeping'
                    className='border rounded-lg border-midnight py-2 px-4 w-fit mt-6'
                  >
                    <div className='text-midnight'>Read more</div>
                  </Link>
                </div>
                <div className='flex flex-col p-6 rounded-lg border border-[#e8ecfc] bg-white'>
                  <div className='w-10 h-10 rounded-full flex items-center justify-center border-[#8a9ff2] text-[#8a9ff2] border'>
                    <div className='text-block-16'>02</div>
                  </div>
                  <h1 className='mt-3 font-semibold text-heading'>
                    Retroactive Accounting
                  </h1>
                  <p className='text-body text-sm mt-2'>
                    For businesses that are more than two years behind on your
                    books and taxes
                  </p>
                  <Link
                    href='/retrospective-bookkeeping'
                    className='border rounded-lg border-midnight py-2 px-4 w-fit mt-6'
                  >
                    <div className='text-midnight'>Read more</div>
                  </Link>
                </div>
              </div>
              <div className='mt-[80px]'></div>
            </div>
          </div>
        </div>
      </Group>

      <Group key='benefits'>
        <div className='mt-[120px] bg-[#fcfeff]'>
          <div className=' pb-[80px] max-w-[1230px] mx-auto flex flex-col items-center'>
            <SectionHeading
              title='BENEFITS'
              heading='Benefits of using Accountable for your bookkeeping'
              paragraph='Finance for businesses, powered by real humans. We work round the clock to assist you with anything you need.'
            />
            <div className='flex flex-col items-center justify-between max-w-[1112px] w-full mt-[82px]'>
              <Group key='benefits grid'>
                <div className='flex items-center justify-between w-full'>
                  <div className='max-w-[220px] flex flex-col items-center gap-y-3 text-center'>
                    <img
                      src='https://assets-global.website-files.com/63fde373aa2d3e5dc97c694e/642510bdb6ff9a11f9016272_accounting%202.png'
                      loading='lazy'
                      width='56'
                      alt=''
                    />
                    <div className=' text-heading font-semibold'>
                      Your own accountant
                    </div>
                    <p className='text-body text-sm'>
                      Your accountant, with help from a team and resources,
                      provides personalized assistance for informed financial
                      decisions.
                    </p>
                  </div>
                  <div className='max-w-[220px] flex flex-col items-center gap-y-3 text-center'>
                    <img
                      src='https://assets-global.website-files.com/63fde373aa2d3e5dc97c694e/642510bd943fc89907d9e658_tax%202.png'
                      loading='lazy'
                      width='56'
                      alt=''
                    />
                    <div className=' text-heading font-semibold'>
                      Taxes handled, without stress
                    </div>
                    <p className='text-body text-sm'>
                      By enrolling in the Essential Plan, we will assist you in
                      relieving the stress related to taxes and provide constant
                      peace of mind.
                    </p>
                  </div>
                  <div className='max-w-[220px] flex flex-col items-center gap-y-3 text-center'>
                    <img
                      src='https://assets-global.website-files.com/63fde373aa2d3e5dc97c694e/642510bd8054c53eac77d37c_verify%202.png'
                      loading='lazy'
                      width='56'
                      alt=''
                    />
                    <div className=' text-heading font-semibold'>
                      Powerful financial reporting
                    </div>
                    <p className='text-body text-sm'>
                      We help keep track of current and past performance for
                      valuable insights to make informed financial decisions for
                      your business.
                    </p>
                  </div>
                  <div className='max-w-[220px] flex flex-col items-center gap-y-3 text-center'>
                    <img
                      src='https://assets-global.website-files.com/63fde373aa2d3e5dc97c694e/642510bd658b1d109cf4e936_customer-service%202.png'
                      loading='lazy'
                      width='56'
                      alt=''
                    />
                    <div className=' text-heading font-semibold'>
                      Get answers in real-time
                    </div>
                    <p className='text-body text-sm'>
                      Our AI chatbot can assist with tax compliance, financial
                      planning, and accounting advice for quick and immediate
                      answers.
                    </p>
                  </div>
                </div>
              </Group>
              <Group key='cta'>
                <div className='mt-[72px] flex items-center gap-x-4'>
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
              </Group>
            </div>
          </div>
        </div>
      </Group>

      <SupportCard />
      <Testimonials />
    </div>
  );
}
