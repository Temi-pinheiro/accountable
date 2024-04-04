'use client';
import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

import { Group } from '..';
import { accordionVariants } from '~/constants/framer';

export const Accordion = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='pb-8 border-b border-[#D9E4F6] flex flex-col text-white h-full'>
      <Group key='title'>
        <div
          className='hover:cursor-pointer flex gap-x-3 justify-between items-center '
          onClick={() => setIsOpen(!isOpen)}
        >
          <h1 className='md:text-xl font-medium'>{title}</h1>
          <motion.svg
            width='20'
            height='20'
            viewBox='0 0 16 16'
            fill='white'
            xmlns='http://www.w3.org/2000/svg'
            animate={{
              rotate: isOpen ? 180 : 0,
            }}
          >
            <path
              fillRule='evenodd'
              clipRule='evenodd'
              d='M13.7071 4.79289C14.0976 5.18342 14.0976 5.81658 13.7071 6.20711L8.70711 11.2071C8.31658 11.5976 7.68342 11.5976 7.29289 11.2071L2.29289 6.20711C1.90237 5.81658 1.90237 5.18342 2.29289 4.79289C2.68342 4.40237 3.31658 4.40237 3.70711 4.79289L8 9.08579L12.2929 4.79289C12.6834 4.40237 13.3166 4.40237 13.7071 4.79289Z'
              fill='inherit'
            />
          </motion.svg>
        </div>
      </Group>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.section
            key={title}
            initial='collapsed'
            animate='open'
            exit='collapsed'
            variants={accordionVariants}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            // className='flex flex-col mt-6'
          >
            <div className=' pt-5 max-md:text-sm'>{children}</div>
          </motion.section>
        )}
      </AnimatePresence>
    </div>
  );
};
