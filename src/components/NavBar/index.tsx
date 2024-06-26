'use client';
/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { Group } from '../Group';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { NavLink } from '../NavLink';

export const NavBar = () => {
  const pathName = usePathname();
  return (
    <div
      className='w-full max-w-[1440px] px-10 fr:px-10 xl:px-12 ds:px-20 py-10 mx-auto hidden fr:flex items-center text-black rounded-lg justify-between z-[30] bg-transparent absolute inset-0 h-fit '
      style={{
        color:
          pathName == '/business' || pathName == '/contact' ? '#000' : '#fff',
        fill:
          pathName == '/business' || pathName == '/contact' ? '#000' : '#fff',
      }}
    >
      <Group key='left'>
        <Link href='/'>
          <img src='/logo.png' alt='logo' className='w-[137px]' />
        </Link>
      </Group>
      <Group key='center'>
        <ul className='flex gap-x-8 items-center text-sm font-medium text-black'>
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
                  to: '/accountable-pisp',
                },
                {
                  label: 'Monthly Bookkeeping',
                  to: '/bookkeeping',
                },
                {
                  label: 'Tax Filing & Advisory',
                  to: '/tax',
                },
                {
                  label: 'Accountable FMCC',
                  to: '/accountable-fmcc',
                },
                {
                  label: 'Catchup Accounting',
                  to: '/catchup-bookkeeping',
                },
                {
                  label: 'Retroactive Accounting',
                  to: '/retrospective-bookkeeping',
                },
              ]}
            />
          </li>
          <Link href='/about-us'>Blog</Link>
        </ul>
      </Group>
      <Group key='right'>
        <div className=' flex items-center gap-x-3 text-sm'>
          <Link className='text-black' href='#'>
            Watch a demo
          </Link>
          <Link
            href='https://calendar.app.google/Z9JQd7RHr52r4uoC9'
            // dark:bg-[#001b84] dark:text-white
            className='text-white py-2 px-3 rounded-md font-medium transition duration-200 hover:bg-[#313e74] bg-[#001b84] '
            target='_blank'
          >
            Talk to an expert
          </Link>
        </div>
      </Group>
    </div>
  );
};
