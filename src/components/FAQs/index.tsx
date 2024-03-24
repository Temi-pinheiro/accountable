import React from 'react';
import { Accordion } from '../Accordion';

export const FaqsSection = () => {
  const faqs = [
    {
      question: 'How can I avoid tax problems and penalties?',
      answer:
        'To avoid tax problems and penalties, it is important to keep accurate and complete records, file tax returns on time, and pay taxes owed in full and on time. It is also important to stay up-to-date on changes to tax laws and regulations and seek professional advice when necessary. ',
    },
    {
      question: 'What can Accountable do for me?',
      answer:
        "With over 52 million SMEs in Africa, less than 60 African-owned businesses are actually 100 years or older. That's why we exist - to support you through your journey and provide you with the tools and resources you need to succeed. We understand that managing your finances can be challenging, especially for SMEs and NGOs. We also offer a specific program for creatives - musicians, producers, influencers, art directors etc. ",
    },
    {
      question: 'How is bookkeeping different from accounting?',
      answer:
        'Bookkeeping records financial transactions, while accounting interprets and analyses financial data to provide strategic advice. While bookkeeping is focused on the daily recording and organising of financial transactions, accounting involves the interpretation and analysis of financial data to provide strategic advice and make recommendations. You can have both on our Essential plan',
    },
    {
      question: 'When should I consider outsourcing my accounting?',
      answer:
        'If your company needs the resources of a complete accounting team but is not in a position to support the costs and management time of that entire, full-time team, then outsourcing your accounting functions is a very viable, flexible, and turn-key option for your business.',
    },
  ];
  return (
    <div
      style={{ backgroundImage: 'url(/faqsbg.png)' }}
      className='mt-10 py-24 bg-cover bg-center text-white'
    >
      <div className='max-w-[910px] mx-auto flex flex-col items-center'>
        <div className='flex flex-col items-center'>
          <h4 className='text-xs border border-white py-1 px-[10px] rounded-full w-fit'>
            FAQS
          </h4>
          <h1 className='text-[40px] max-w-[620px] font-bold text-center leading-tight mt-4'>
            Some recurring questions we get asked a lot...
          </h1>
          <p className='text-xl max-w-[620px] text-center mt-[10px]'>
            We have taken out the time to help answer some of the most
            frequently asked questions we get.
          </p>
        </div>
        <div className='flex flex-col mt-[80px] gap-y-6 max-w-[640px] w-full'>
          {faqs.map((faq) => (
            <Accordion title={faq.question} key={faq.question}>
              <p className='text-[#ccc]'>{faq.answer}</p>
            </Accordion>
          ))}
        </div>
        <div className='mt-[120px] flex items-center justify-between w-full'>
          <h2 className='text-[40px] font-bold'>Ready to get started?</h2>
          <a
            className='bg-white text-midnight py-4 px-10 rounded-xl text-lg'
            href=''
            target='_blank'
          >
            Talk to an expert
          </a>
        </div>
      </div>
    </div>
  );
};
