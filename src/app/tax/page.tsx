/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import {
  Check,
  Group,
  SectionHeading,
  SupportCard,
  Testimonials,
} from '~/components';
import { Figtree } from 'next/font/google';
import { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'Tax Advisory | Accountable',
  description: 'Generated by create next app',
};
const figtree = Figtree({ subsets: ['latin'] });

export default function Tax() {
  return (
    <div
      className={[
        figtree.className,
        'flex min-h-screen flex-col pt-10 md:pt-24',
      ].join(' ')}
    >
      <Group key='home-hero'>
        <div className='bg-[#fffcfa] w-full'>
          <div className='pt-16 md:pt-24 pb-20 md:pb-[120px] max-w-[1230px] mx-auto max-md:px-6'>
            <div className=' grid max-md:flex flex-col grid-cols-2 w-full items-center'>
              <div className='flex flex-col max-md:items-center max-md:text-center'>
                <p className='text-midnight'>Tax Filling and Advisory</p>
                <h1 className='text-heading text-3xl md:text-5xl leading-none md:leading-snug mt-2 max-w-[607px] font-bold'>
                  Get year-round tax advisory, support and your filings done on
                  time.
                </h1>
                <p className='mt-4 max-w-[460px] text-body'>
                  Tax returns don’t need to be stressful. We’ll sort your taxes
                  for you whether current or backlog. We’ve saved our clients
                  over <span className='text-span-5'>N9.35bn</span> in taxes
                  <br />‍<br />
                  Simple, fast, all online
                  <br />
                  Sorted by an accredited tax expert
                </p>

                <div className='mt-10 flex items-center gap-x-4'>
                  <a
                    href='https://calendar.app.google/Z9JQd7RHr52r4uoC9'
                    target='_blank'
                    className='bg-midnight text-white py-3 px-6 rounded-xl'
                  >
                    Book a meeting
                  </a>
                </div>
              </div>
              <div>
                <img
                  src='https://assets-global.website-files.com/63fde373aa2d3e5dc97c694e/641d97ade7fcfb6de8a0a32b_img_pisp.png'
                  loading='lazy'
                  width='682'
                  sizes='(max-width: 767px) 100vw, 682px'
                  alt=''
                  srcSet='https://assets-global.website-files.com/63fde373aa2d3e5dc97c694e/641d97ade7fcfb6de8a0a32b_img_pisp-p-500.png 500w, https://assets-global.website-files.com/63fde373aa2d3e5dc97c694e/641d97ade7fcfb6de8a0a32b_img_pisp-p-800.png 800w, https://assets-global.website-files.com/63fde373aa2d3e5dc97c694e/641d97ade7fcfb6de8a0a32b_img_pisp-p-1080.png 1080w, https://assets-global.website-files.com/63fde373aa2d3e5dc97c694e/641d97ade7fcfb6de8a0a32b_img_pisp.png 1364w'
                />
              </div>
            </div>
          </div>
        </div>
      </Group>
      <Group key='benefits'>
        <div className='mt-[120px] bg-[#fcfeff] max-md:px-6'>
          <div className='pb-14 md:pb-[80px] max-w-[1230px] mx-auto flex flex-col items-center'>
            <SectionHeading
              title='BENEFITS'
              heading='Benefits of using Accountable for your Tax Filing & Advisory'
              paragraph='Finance for businesses, powered by real humans. We work round the clock to assist you with anything you need.'
            />
            <div className='flex flex-col items-center justify-between max-w-[1204px] w-full mt-[82px]'>
              <Group key='benefits grid'>
                <div className='flex max-md:flex-col max-md:gap-y-10 items-center justify-between w-full gap-x-8'>
                  <div className='max-w-[380px] flex flex-col items-center gap-y-3 text-center'>
                    <img
                      src='https://assets-global.website-files.com/63fde373aa2d3e5dc97c694e/642510bdb6ff9a11f9016272_accounting%202.png'
                      loading='lazy'
                      width='56'
                      alt=''
                    />
                    <div className=' text-heading font-semibold'>
                      Maximize your tax saving
                    </div>
                    <p className='text-body text-sm'>
                      Don't leave money on the table - we will help you minimise
                      your tax liability. Our tax experts work closely with you
                      to identify all available tax deductions and credits,
                      ensuring that you save as much tax as legally possible
                    </p>
                  </div>
                  <div className='max-w-[380px] flex flex-col items-center gap-y-3 text-center'>
                    <img
                      src='https://assets-global.website-files.com/63fde373aa2d3e5dc97c694e/642510bd943fc89907d9e658_tax%202.png'
                      loading='lazy'
                      width='56'
                      alt=''
                    />
                    <div className=' text-heading font-semibold'>
                      Never miss a tax deadline
                    </div>
                    <p className='text-body text-sm'>
                      Avoid costly penalties with our tax services. We ensure
                      you never miss a tax deadline with timely reminders and
                      expert guidance. Let us help you stay compliant and avoid
                      any last-minute rush.
                    </p>
                  </div>
                  <div className='max-w-[380px] flex flex-col items-center gap-y-3 text-center'>
                    <img
                      src='https://assets-global.website-files.com/63fde373aa2d3e5dc97c694e/642510bd8054c53eac77d37c_verify%202.png'
                      loading='lazy'
                      width='56'
                      alt=''
                    />
                    <div className=' text-heading font-semibold'>
                      Tax support all year long
                    </div>
                    <p className='text-body text-sm'>
                      Tax season doesn’t last for a few months, it’s a
                      year-round commitment. This is why we offer year-long tax
                      support. Our team is available to answer your questions
                      about taxes, provide guidance and help plan for your
                      future.
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
      <Group key='features'>
        <div className='mt-14 md:mt-20 md:mb-[120px] max-md:px-6'>
          <div className='flex flex-col items-center max-w-[1064px] w-full mx-auto'>
            <div className='flex flex-col text-center max-w-[620px] pb-20 '>
              <h3 className='text-heading text-3xl md:text-[40px] font-bold leading-tight'>
                Features available to our tax filling & advisory service{' '}
              </h3>
              <p className='text-lg md:text-xl text-body mt-[10px]'>
                Finance for businesses, powered by real humans. We work round
                the clock to assist you with anything you need.
              </p>
            </div>
            <Group key='check grid'>
              <Group key='first'>
                <div className='border-t border-[#f2f2f2] md:pt-20 flex max-md:flex-col max-md:items-center items-start md:justify-between w-full'>
                  <div className='max-w-[364px] w-full flex flex-col max-md:items-center max-md:text-center'>
                    <h3 className='mt-4 text-heading font-bold text-2xl md:text-[32px]'>
                      Tax support that is uniquely designed for your business
                    </h3>
                    <p className='mt-2 text-body'>
                      From startup to enterprise, Accountable has you covered
                      with tax support, preparation, and filing services from
                      start to finish.
                    </p>
                  </div>
                  <div className='flex flex-col max-w-[530px] w-full gap-y-5 max-md:mt-10'>
                    <Check
                      title='Your bookkeeping taken care of'
                      details="With our monthly bookkeeping service, we'll organise your business transactions and provide you with a complete year-in-review snapshot of your finances at year-end tax time."
                    />
                    <Check
                      title='Count on us for ongoing tax support'
                      details='Stay ahead of the game with our year-round tax advisory services. We offer unlimited consultations and check-ins throughout the year to make sure that nothing is left behind.'
                    />
                    <Check
                      title='Get your monthly tax filed'
                      details='Our Essential plan gives you an all-in-one tax and bookkeeping solution. We file your monthly tax returns without stress and on time. At year end, we can also help you with your year end tax filings for a fee.'
                    />
                  </div>
                </div>
              </Group>
              <Group key='second'>
                <div className='border-t border-[#f2f2f2] md:pt-20 pt-10 mt-10 md:mt-20 flex max-md:flex-col items-start justify-between w-full'>
                  <div className='max-w-[364px] w-full flex flex-col max-md:items-center max-md:text-center'>
                    <h3 className='mt-4 text-heading font-bold text-2xl md:text-[32px]'>
                      Maximum tax-efficiency in the short and long-term.
                    </h3>
                    <p className='mt-2 text-body'>
                      Achieve maximum tax efficiency for your business with our
                      comprehensive tax services that cover every facet of the
                      tax spectrum.
                    </p>
                  </div>
                  <div className='flex flex-col max-w-[530px] w-full gap-y-5 max-md:mt-10'>
                    <Check
                      title='Tax planning & advisory'
                      details="Whether you're a creative, small firm, partnership, or private limited company, our experienced team can help you develop effective tax strategies to maximise your income. We will help you navigate the complex world of tax laws and regulations, and identify tax-saving opportunities that you may have overlooked."
                    />
                    <Check
                      title='Payroll and Payroll Taxes'
                      details='Even the most meticulous and experienced professionals find that payroll can be a headache.Let’s take off that headache, compute your employee benefits, get them paid, send payslips and make regulatory filings. Enjoy Complete, 99.9% Accurate Payroll Processing and Payroll Tax Compliance'
                    />
                    <Check
                      title='Tax representation'
                      details="During these periods of heightened government focus on tax revenue, businesses may face tax audits or investigations that can result in penalties, fines, or closure. These inquiries can have significant consequences, and it's crucial to respond adequately and navigate the complex procedures. At Accountable, we offer representation in tax disputes, audits, and investigations with revenue services. "
                    />
                  </div>
                </div>
              </Group>
              <Group key='third'>
                <div className='border-t border-[#f2f2f2] md:pt-20 pt-10 mt-10 md:mt-20 max-md:mb-10 flex max-md:flex-col items-start justify-between w-full'>
                  <div className='max-w-[364px] w-full flex flex-col max-md:items-center max-md:text-center'>
                    <h3 className='mt-4 text-heading font-bold text-2xl md:text-[32px]'>
                      Year-End Financial Package
                    </h3>
                    <p className='mt-2 text-body'>
                      Let’s handle your catch up and we will give you a year-end
                      financial package for each year of catch up.
                    </p>
                  </div>
                  <div className='flex flex-col max-w-[530px] w-full gap-y-5 max-md:mt-10'>
                    <Check
                      title='All your reports in one place'
                      details='Say goodbye to scattered financial documents - our Year End Financial Package includes your IFRS compliant income statement, balance sheet, statement of cash flows, and notes to the accounts, all in one place.'
                    />
                    <Check
                      title='Tax-Ready Documentation'
                      details='Our Year End Financial Package includes tax-ready documentation, making it easy to file your taxes and avoid accumulating penalties for missed deadlines. Our expert team ensures that all documentation is accurate and complete, so you can file with confidence.'
                    />
                    <Check
                      title='Organised and Efficient'
                      details='Our Year End Financial Package is designed to make catching up on years of financial records as efficient and organised as possible making it easy for you to understand your financial situation.'
                    />
                  </div>
                </div>
              </Group>
            </Group>
          </div>
        </div>
      </Group>
      <SupportCard />
      <Testimonials />
    </div>
  );
}
