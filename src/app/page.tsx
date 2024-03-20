/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image';
import {
  FaqsSection,
  FeaturedIn,
  Group,
  ServiceCard,
  SupportCard,
  TestimonialCard,
} from '~/components';

export default function Home() {
  const services = [
    {
      'imageSrc':
        'https://assets-global.website-files.com/63fde373aa2d3e5dc97c694e/6409ac90d83697efab4ce90c_PISP.png',
      'srcSet':
        'https://assets-global.website-files.com/63fde373aa2d3e5dc97c694e/6409ac90d83697efab4ce90c_PISP-p-500.png 500w, https://assets-global.website-files.com/63fde373aa2d3e5dc97c694e/6409ac90d83697efab4ce90c_PISP.png 660w',
      'title': 'Accountable PISP',
      'text':
        'Process Improvement or Succession Planning? We’ve got you covered',
      'url': '/accountable-pisp',
    },
    {
      'imageSrc':
        'https://assets-global.website-files.com/63fde373aa2d3e5dc97c694e/6408b2087780a7e1e10a7387_Bookkeeping.png',
      'srcSet':
        'https://assets-global.website-files.com/63fde373aa2d3e5dc97c694e/6408b2087780a7e1e10a7387_Bookkeeping-p-500.png 500w, https://assets-global.website-files.com/63fde373aa2d3e5dc97c694e/6408b2087780a7e1e10a7387_Bookkeeping.png 660w',
      'title': 'Monthly Bookkeeping',
      'text':
        'Get a dedicated accountant. Start tracking your finances like a pro today.',
      'url': '/bookkeeping',
    },
    {
      'imageSrc':
        'https://assets-global.website-files.com/63fde373aa2d3e5dc97c694e/6408b4a3b8c50c852c25845a_Tax.png',
      'srcSet':
        'https://assets-global.website-files.com/63fde373aa2d3e5dc97c694e/6408b4a3b8c50c852c25845a_Tax-p-500.png 500w, https://assets-global.website-files.com/63fde373aa2d3e5dc97c694e/6408b4a3b8c50c852c25845a_Tax.png 660w',
      'title': 'Tax Filling &amp;&nbsp;Advisory',
      'text':
        'Get year-round tax advisory, support and your filings done on time.',
      'url': '/tax',
    },
    {
      'imageSrc':
        'https://assets-global.website-files.com/63fde373aa2d3e5dc97c694e/6408b5c639bebb8a5d77e295_Accounting.png',
      'srcSet':
        'https://assets-global.website-files.com/63fde373aa2d3e5dc97c694e/6408b5c639bebb8a5d77e295_Accounting-p-500.png 500w, https://assets-global.website-files.com/63fde373aa2d3e5dc97c694e/6408b5c639bebb8a5d77e295_Accounting.png 660w',
      'title': 'Accountable FMCC',
      'text':
        'Specifically designed for creatives - music artists, producers, influencers',
      'url': '/accountable-fmcc',
    },
    {
      'imageSrc':
        'https://assets-global.website-files.com/63fde373aa2d3e5dc97c694e/6408b6cd31ea2be63ec2cf80_creative.png',
      'srcSet':
        'https://assets-global.website-files.com/63fde373aa2d3e5dc97c694e/6408b6cd31ea2be63ec2cf80_creative-p-500.png 500w, https://assets-global.website-files.com/63fde373aa2d3e5dc97c694e/6408b6cd31ea2be63ec2cf80_creative.png 660w',
      'title': 'Catchup Accounting',
      'text':
        "Are you behind on your bookkeeping for two years or less? Let's Catchup!",
      'url': '/catchup-bookkeeping',
    },
    {
      'imageSrc':
        'https://assets-global.website-files.com/63fde373aa2d3e5dc97c694e/6408b66bd83119b149dda544_Accounting2.png',
      'srcSet':
        'https://assets-global.website-files.com/63fde373aa2d3e5dc97c694e/6408b66bd83119b149dda544_Accounting2-p-500.png 500w, https://assets-global.website-files.com/63fde373aa2d3e5dc97c694e/6408b66bd83119b149dda544_Accounting2.png 660w',
      'title': 'Retroactive Accounting',
      'text':
        'More than two years behind? Backlog tax issues too? This is for you',
      'url': '/retrospective-bookkeeping',
    },
  ];
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
    <main className='flex min-h-screen flex-col  pt-24'>
      <Group key='home-hero'>
        <div className='pt-24 flex flex-col items-center'>
          <div className='flex flex-col items-center text-center'>
            <h1 className='text-[#1d1e20] font-black text-7xl max-w-[720px]'>
              Optimize your financial processes
            </h1>
            <p className='text-[#575e66] font-bold max-w-[680px] mt-4 text-xl'>
              We're here to help you every step of the way - from optimising
              your financial processes to managing bookkeeping and taxes
            </p>
            <div className='flex flex-col mt-12'>
              <a
                href='https://calendar.app.google/Z9JQd7RHr52r4uoC9'
                target='_blank'
                className='bg-[#001b84] py-3 px-4 rounded-xl text-white'
              >
                Book a meeting now
              </a>
            </div>
            <div className='text-block-21 mt-3'>It's completely free!</div>
          </div>
          <img
            src='https://assets-global.website-files.com/63fde373aa2d3e5dc97c694e/64077b54ef0fa04740839061_hero_img.png'
            loading='lazy'
            sizes='(max-width: 479px) 100vw, 990px'
            width='990'
            alt='Hero Image'
            className='mt-10'
          />
        </div>
      </Group>
      <Group key='home-brands'>
        <div className='wrapper mx-auto pt-14 pb-[88px]'>
          <div className='flex flex-col max-w-[1020px]'>
            <div className='flex items-center justify-between gap-x-14'>
              <span className='h-[1px] border border-[#001b84] max-w-[380px] block w-full'></span>
              <div className='shrink-0'>
                Helping proactive brands secure their future
              </div>
              <span className='h-[1px] border border-[#001b84] max-w-[380px] block w-full'></span>
            </div>
            <Group key='images'>
              <div className='flex items-center gap-x-8 mt-16'>
                <a
                  id='w-node-_1a320622-88c5-7a58-ab65-3c736092803d-4c7c6952'
                  href='https://www.nguvuhealth.com/'
                  target='_blank'
                  className='w-inline-block'
                >
                  <img
                    src='https://assets-global.website-files.com/63fde373aa2d3e5dc97c694e/642db5545dcdd0ef983b3de7_nguvu.png'
                    loading='lazy'
                    width='151'
                    id='w-node-_43c4caee-62a8-d7b1-15a3-f151d39d1c97-4c7c6952'
                    alt="Brands we've worked for"
                  />
                </a>
                <a
                  id='w-node-de16174b-05f6-9806-7010-a854d543aba2-4c7c6952'
                  href='https://www.synlab.com.ng/'
                  target='_blank'
                  className='w-inline-block'
                >
                  <img
                    src='https://assets-global.website-files.com/63fde373aa2d3e5dc97c694e/642db5551db0d9922caac882_synlab.png'
                    loading='lazy'
                    width='142'
                    id='w-node-_77530c64-cf87-e99d-4a64-14d6092904ef-4c7c6952'
                    alt="Brands we've worked for"
                  />
                </a>
                <div id='w-node-_6f206e6b-0a8f-740e-6525-7fd520a560f6-4c7c6952'>
                  <a
                    href='https://bogobiri.com/'
                    target='_blank'
                    className='w-inline-block'
                  >
                    <img
                      src='https://assets-global.website-files.com/63fde373aa2d3e5dc97c694e/642db555b19bd657d90166bb_bogobiri.png'
                      loading='lazy'
                      width='48'
                      alt="Brands we've worked for"
                    />
                  </a>
                </div>
                <a
                  id='w-node-b1529afd-5873-4b29-6d2f-a7a3837561f7-4c7c6952'
                  href='https://afnigeria.org/'
                  target='_blank'
                  className='w-inline-block'
                >
                  <img
                    src='https://assets-global.website-files.com/63fde373aa2d3e5dc97c694e/642db5546368423129825884_alliance.png'
                    loading='lazy'
                    width='80'
                    id='w-node-_2f23e0b4-113d-dad9-22d6-63fb1e763818-4c7c6952'
                    alt=''
                  />
                </a>
                <a
                  id='w-node-_562ba969-7db5-38a4-10f3-f81c53d32ab1-4c7c6952'
                  href='https://spottr.app/'
                  target='_blank'
                  className='w-inline-block'
                >
                  <img
                    src='https://assets-global.website-files.com/63fde373aa2d3e5dc97c694e/642db555a1d33154734ee2cf_spottr.png'
                    loading='lazy'
                    width='143'
                    id='w-node-_9ae2146a-07a5-4db0-fbb8-06956b654875-4c7c6952'
                    alt="Brands we've worked for"
                  />
                </a>
                <a
                  id='w-node-_1fa73465-9011-e109-5ddb-def8ed7f500d-4c7c6952'
                  href='https://cometoidesign.com/'
                  target='_blank'
                  className='w-inline-block'
                >
                  <img
                    src='https://assets-global.website-files.com/63fde373aa2d3e5dc97c694e/642db555d9658a58a50d9915_idesign.png'
                    loading='lazy'
                    width='138.5'
                    id='w-node-_3e2f2884-2880-7f8d-bc14-12ba34107dae-4c7c6952'
                    alt="Brands we've worked for"
                  />
                </a>
              </div>
            </Group>
          </div>
        </div>
      </Group>
      <Group key='services'>
        <div className='py-20'>
          <div className='max-w-[1028px] mx-auto'>
            <div className='flex flex-col items-center'>
              <h4 className='text-sm text-midnight border border-midnight py-1 px-[10px] rounded-full w-fit'>
                OUR SERVICES
              </h4>
              <h1 className='text-[40px] max-w-[620px] font-black text-center leading-tight mt-4'>
                We can help you and your team achieve much more
              </h1>
              <p className='text-xl text-[#575e66] max-w-[620px] text-center mt-[10px]'>
                With our customised solutions, you can trust that your finances
                are in good hands, so you can focus on running your business and
                improving your bottom line.
              </p>
            </div>
            <div className='grid grid-cols-3 gap-x-10 gap-y-8 mt-[88px]'>
              {services.map((service) => (
                <ServiceCard key={service.title} {...service} />
              ))}
            </div>
          </div>
        </div>
      </Group>
      <Group key='processes'>
        <div className='mt-30 py-24 bg-[#f8fafe]'>
          <div className='max-w-[1200px] mx-auto'>
            <div className='flex flex-col items-center'>
              <h4 className='text-sm text-midnight border border-midnight py-1 px-[10px] rounded-full w-fit'>
                OUR PROCESS
              </h4>
              <h1 className='text-[40px] max-w-[620px] font-black text-center leading-tight mt-4'>
                Here's how we love to work
              </h1>
              <p className='text-xl text-[#575e66] max-w-[620px] text-center mt-[10px]'>
                Over the years, we have perfected our work process that allows
                us help businesses reach their full potential
              </p>
            </div>
            <div className='mt-[120px] gap-x-10 flex items-center'>
              <div className='div-block-46 shrink-0'>
                <img
                  src='https://assets-global.website-files.com/63fde373aa2d3e5dc97c694e/6408a5c97fd405dd86deb79e_processNew_image.png'
                  loading='lazy'
                  sizes='(max-width: 479px) 343px, (max-width: 991px) 400px, 640px'
                  width='640'
                  alt=''
                  srcSet='https://assets-global.website-files.com/63fde373aa2d3e5dc97c694e/6408a5c97fd405dd86deb79e_processNew_image-p-500.png 500w, https://assets-global.website-files.com/63fde373aa2d3e5dc97c694e/6408a5c97fd405dd86deb79e_processNew_image-p-800.png 800w, https://assets-global.website-files.com/63fde373aa2d3e5dc97c694e/6408a5c97fd405dd86deb79e_processNew_image-p-1080.png 1080w, https://assets-global.website-files.com/63fde373aa2d3e5dc97c694e/6408a5c97fd405dd86deb79e_processNew_image.png 1278w'
                  className='image-16'
                />
              </div>
              <div className='flex flex-col gap-y-10'>
                <div>
                  <img
                    src='https://assets-global.website-files.com/63fde373aa2d3e5dc97c694e/642d8b977499632ba517eaa2_discovery.png'
                    loading='lazy'
                    alt=''
                    width='36'
                  />
                  <h1 className='text-heading font-semibold mt-5'>DISCOVERY</h1>
                  <p className='text-sm text-body mt-2'>
                    We get to know more about you and your business, your staff
                    strength, challenges encountered in the past your history
                    and also your current needs.
                  </p>
                </div>
                <div className='div-block-16'>
                  <img
                    src='https://assets-global.website-files.com/63fde373aa2d3e5dc97c694e/642d8b973be9f81cc71895c4_design.png'
                    loading='lazy'
                    alt=''
                    width='36'
                  />
                  <h1 className='text-heading font-semibold mt-5'>
                    ASSESS&nbsp;&amp;&nbsp;DESIGN
                  </h1>
                  <p className='text-sm text-body mt-2'>
                    At this stage, we compare your current state with your short
                    &amp; long term vision, after which our team will brainstorm
                    to design a custom solution that works just for you.
                  </p>
                </div>
                <div className='div-block-132'>
                  <img
                    src='https://assets-global.website-files.com/63fde373aa2d3e5dc97c694e/642d8b971d2685c2ed2a692b_implement.png'
                    loading='lazy'
                    alt=''
                    width='36'
                  />
                  <h1 className='text-heading font-semibold mt-5'>
                    IMPLEMENT&nbsp;&amp;&nbsp;MONITOR
                  </h1>
                  <p className='text-sm text-body mt-2'>
                    We implement, monitor and tweak as required. We take
                    feedback from you, iterate accordingly and measure success
                    and impact
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Group>
      <Group key='number'>
        <div className='mt-[96px] mb-[120px]'>
          <div className='bg-[#fafafa] max-w-[1260px] border border-[#eaeaea] rounded-lg mx-auto py-4 px-[82px] flex items-center justify-between'>
            <div className='flex flex-col'>
              <h1 className='text-[52px] font-bold text-heading'>65yrs+</h1>
              <div className='text-sm text-body mt-6'>
                COMBINED MGT. EXPERIENCE
              </div>
            </div>
            <div className='w-[1px] border border-[#eaeaea] bg-[#eaeaea] h-[133px]'></div>
            <div className='div-block-49'>
              <h1 className='text-[52px] font-bold text-heading'>60+</h1>
              <div className='text-sm text-body mt-6'>HAPPY CUSTOMERS</div>
            </div>
            <div className='w-[1px] border border-[] bg-[#eaeaea] h-[133px]'></div>
            <div className='div-block-50'>
              <h1 className='text-[52px] font-bold text-heading'>4+</h1>
              <div className='text-sm text-body mt-6'>COUNTRIES</div>
            </div>
            <div className='w-[1px] border border-[] bg-[#eaeaea] h-[133px]'></div>
            <div className='div-block-51'>
              <h1 className='text-[52px] font-bold text-heading'>91.7%</h1>
              <div className='text-sm text-body mt-6'>CUSTOMER RETENTION</div>
            </div>
          </div>
        </div>
      </Group>
      <Group key='Testimonials'>
        <div className='mt-10 py-24 bg-[#b7c4f7]'>
          <div className='max-w-[1040px] mx-auto'>
            <div className='flex flex-col items-center'>
              <h4 className='text-sm text-midnight border border-midnight py-1 px-[10px] rounded-full w-fit'>
                TESTIMONIALS
              </h4>
              <h1 className='text-[40px] max-w-[620px] text-[#020d35] font-black text-center leading-tight mt-4'>
                Trust us to keep all our promises
              </h1>
              <p className='text-xl text-[#575e66] max-w-[620px] text-center mt-[10px]'>
                Don't just take our word for granted, here's what some of our
                customers have to say about us.
              </p>
            </div>
            <div className='mt-[80px] grid grid-cols-3 gap-x-10'>
              {testimonials.map((testimonial) => (
                <TestimonialCard
                  key={testimonial.testimonial}
                  {...testimonial}
                />
              ))}
            </div>
          </div>
        </div>
      </Group>
      <FeaturedIn />
      <SupportCard />
      <FaqsSection />
    </main>
  );
}
