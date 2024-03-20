'use client';
/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from 'react';
import { Group } from '../Group';
import { NavLink } from '../NavLink';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  AnimatePresence,
  motion,
  useMotionTemplate,
  useMotionValue,
  useScroll,
  useTransform,
} from 'framer-motion';
import { clamp } from '~/helper/clamp';
import { useBoundedScroll } from '~/hooks/useBoundedScroll';

export const ScrollingNav = () => {
  let { scrollYBounded, scrollY } = useBoundedScroll(80);
  let scrollYBoundedProgressDelayed = useTransform(
    scrollYBounded,
    [0, 80],
    [10, -90]
  );
  let toDisplay = useTransform(scrollY, [92, 440], [0, 1]);
  let zIndex = useTransform(scrollY, [92, 440], [0, 33]);

  return (
    <AnimatePresence initial={false}>
      <motion.div
        style={{
          opacity: toDisplay,
          zIndex,
          top: scrollYBoundedProgressDelayed,
        }}
        className=' w-full fixed hidden fr:block '
      >
        <div
          className='w-full max-w-[1440px] px-10 fr:px-10 xl:px-12 ds:px-12 shadow-md py-6 mx-auto flex bg-white bg-opacity-20 backdrop-blur-[9px] items-center justify-between h-fit rounded-[18px] '
          style={{
            color: '#000',
            fill: '#000',
          }}
        >
          <Group key='left'>
            <Link href='/'>
              <img src='/logo.png' alt='logo' className='w-[137px]' />
            </Link>
          </Group>
          <Group key='center'>
            <ul className='flex gap-x-8 items-center text-sm font-medium'>
              <li>
                <Link href='/about-us'>About Us</Link>
              </li>
              <li>
                <NavLink
                  label='Services'
                  key={'personal'}
                  paths={[
                    {
                      label: 'Accountable PISP',
                      to: '/lend',
                    },
                    {
                      label: 'Monthly Bookkeeping',
                      to: '/borrow',
                    },
                    {
                      label: 'Tax Filing & Advisory',
                      to: '/bnpl',
                    },
                    {
                      label: 'Accountable FMCC',
                      to: '/parasol-insurance',
                    },
                    {
                      label: 'Catchup Accounting',
                      to: '/bail-me',
                    },
                  ]}
                />
              </li>
              <Link href='/about-us'>Blog</Link>
            </ul>
          </Group>
          <Group key='right'>
            <div className=' flex items-center gap-x-3 text-sm'>
              <Link href='#'>Watch a demo</Link>
              <Link
                href='https://calendar.app.google/Z9JQd7RHr52r4uoC9'
                // dark:bg-[#001b84] dark:text-white
                className='bg-white py-2 px-3 rounded-md font-medium transition duration-200 hover:text-[#313e74] text-[#001b84] '
                target='_blank'
              >
                Talk to an expert
              </Link>
            </div>
          </Group>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
