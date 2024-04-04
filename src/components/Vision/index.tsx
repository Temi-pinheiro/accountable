'use client';
import React, { useState } from 'react';
import { Panes } from '../Panes';
import { AnimatePresence, motion } from 'framer-motion';
import { fadeIn } from '~/constants/framer';

export const VisionPane = () => {
  const [active, setActive] = useState('vision');
  const panes = [
    { label: 'Our Vision', id: 'vision', show: true },
    { label: 'Our Mission', id: 'mission', show: true },
  ];
  return (
    <div className='py-10 md:py-[120px] mt-6 w-full bg-midnight'>
      <div className='flex flex-col items-center text-center max-w-[940px] mx-auto'>
        <Panes panes={panes} active={active} handleChange={setActive} />
        <AnimatePresence mode={'wait'}>
          <motion.p
            variants={fadeIn}
            key={active}
            animate='animate'
            exit='exit'
            initial='initial'
            className='text-center text-white text-xl md:text-[32px] font-bold mt-14 max-md:px-6'
          >
            {active == 'vision'
              ? 'Our vision is to be the preferred professional service firm, making exceptional accounting, financial and management consulting services accessible to businesses.'
              : 'To help our clients attain and sustain business and financial growth, by providing intelligible accounting insight and making significant performance improvements.'}
          </motion.p>
        </AnimatePresence>
      </div>
    </div>
  );
};
