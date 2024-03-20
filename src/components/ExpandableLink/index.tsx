'use client';
/* eslint-disable @next/next/no-img-element */
import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import styles from './styles.module.css';
import Link from 'next/link';
const variant = {
  initial: {
    height: 0,
  },
  enter: {
    height: 'auto',
    opacity: 1,
    transition: {
      opacity: {
        duration: 2,
      },
    },
  },
  leave: {
    height: 0,
    opacity: 0,
    transition: {
      opacity: {
        duration: 0.1,
      },
    },
  },
};

export const ExpandableLink = ({
  paths,
  label,
}: {
  paths: {
    external?: boolean;
    label: string;
    to: string;
    icon: any;
    desc?: string;
  }[];
  label: string;
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={styles.container}>
      <button className={styles.parent} onClick={() => setIsOpen(!isOpen)}>
        <motion.span
          initial={false}
          animate={{ color: isOpen ? '#939393' : '#000' }}
        >
          {label}
        </motion.span>

        <motion.svg
          width='14'
          height='8'
          viewBox='0 0 14 8'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
          initial={false}
          animate={{
            rotate: isOpen ? 0 : -90,
          }}
          className='ml-auto md:ml-0'
        >
          <path
            d='M1 1L7 7L13 1'
            stroke='black'
            stroke-width='2'
            stroke-linecap='round'
            stroke-linejoin='round'
          />
        </motion.svg>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            layout
            key={label}
            variants={variant}
            initial='initial'
            exit='leave'
            animate='enter'
          >
            <div className={styles.sub_container}>
              {paths.map((sub, index) =>
                sub.external ? (
                  <a
                    href={sub.to}
                    className={styles.sub_label}
                    key={`${sub.label} ${index}`}
                    target='_blank'
                  >
                    <img src={sub.icon} alt={sub.label} />
                    <div className={styles.details}>
                      <span>{sub.label}</span>
                      <p>{sub.desc}</p>
                    </div>
                  </a>
                ) : (
                  <Link
                    href={sub.to}
                    className={styles.sub_label}
                    key={`${sub.label} ${index}`}
                  >
                    <img src={sub.icon} alt={sub.label} />
                    <div className={styles.details}>
                      <span>{sub.label}</span>
                      <p>{sub.desc}</p>
                    </div>
                  </Link>
                )
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
