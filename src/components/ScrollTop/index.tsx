'use client';
import { gsap } from 'gsap';
import ScrollToPlugin from 'gsap/ScrollToPlugin';
export const ScrollTop = () => {
  gsap.registerPlugin(ScrollToPlugin);

  const scrollToTop = () => {
    gsap.to(window, {
      duration: 1,
      scrollTo: 1,
      ease: 'power2.inOut',
    });
  };
  return (
    <button
      className='flex items-center gap-x-5 max-w-[137px] w-full'
      onClick={scrollToTop}
    >
      <span className='shrink-0 w-[60px] h-[60px] rounded-full p-3 bg-[#414D63] flex items-center justify-center'>
        <svg
          width='28'
          height='28'
          viewBox='0 0 28 28'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            fillRule='evenodd'
            clipRule='evenodd'
            d='M14.8755 26L13.1246 26L13.1246 4.11198L14.8755 4.11198L14.8755 26Z'
            fill='white'
          />
          <path
            fillRule='evenodd'
            clipRule='evenodd'
            d='M26 13.9911L13.9976 2L2 13.9908L3.23819 15.2279L13.9978 4.47433L24.762 15.2284L26 13.9911Z'
            fill='white'
          />
          <path
            fillRule='evenodd'
            clipRule='evenodd'
            d='M14.8755 26L13.1246 26L13.1246 4.11198L14.8755 4.11198L14.8755 26Z'
            stroke='white'
            strokeWidth='4'
            strokeLinejoin='round'
          />
          <path
            fillRule='evenodd'
            clipRule='evenodd'
            d='M26 13.9911L13.9976 2L2 13.9908L3.23819 15.2279L13.9978 4.47433L24.762 15.2284L26 13.9911Z'
            stroke='white'
            strokeWidth='4'
            strokeLinejoin='round'
          />
        </svg>
      </span>
      <span className='text-[#B3B8C1] text-xl leading-normal text-left'>
        Back to top
      </span>
    </button>
  );
};
