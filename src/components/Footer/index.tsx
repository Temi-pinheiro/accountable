/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import { Group } from '../Group';
import styles from './styles.module.css';
import { ScrollTop } from '../ScrollTop';

export const Footer = () => {
  return (
    <div
      id='footer'
      style={{ backgroundImage: 'url(/footerbg.png)' }}
      className='w-full bg-[#12213C] bg-cover bg-center z-[20] relative hidden min-[1060px]:block text-white'
    >
      <footer className={styles.footer}>
        <Group key='top'>
          <div className={styles.top}>
            <Group key='logo'>
              {' '}
              <div className='flex flex-col'>
                <img
                  src='/footerlogo.png'
                  alt='footer logo'
                  className='max-w-[176px]'
                />
                <div className='flex flex-col gap-y-[10px] mt-[42px]'>
                  <h3 className='text-xl font-medium'>
                    Accounting as a Service
                  </h3>
                  <p>We are accountable, your trustworthy advisors</p>
                </div>
              </div>
            </Group>
            <Group key='Links'>
              <div className={styles.links}>
                <Group key='services'>
                  <div className='max-w-[211px]'>
                    <h4>Services</h4>
                    <ul>
                      <li>
                        <Link href='/bookkeeping'>Monthly Bookkeeping</Link>
                      </li>
                      <li>
                        <Link href='/tax'>Tax Filing & Advisory</Link>
                      </li>
                      <li>
                        <Link href='accountable-pisp'>Accountable PISP</Link>
                      </li>
                      <li>
                        <Link href='accountable-fmcc'>Accountable FMCC</Link>
                      </li>
                    </ul>
                  </div>
                </Group>
                <Group key='company'>
                  {' '}
                  <div className='max-w-[111px]'>
                    <h4>Company</h4>
                    <ul>
                      <li>
                        <Link href='/about-us'>About Us</Link>
                      </li>

                      <li>
                        <Link href='/blog'>Blog</Link>
                      </li>
                      <li>
                        <Link href='/resources'>Resources</Link>
                      </li>
                      <li>
                        <Link href='/careers'>Careers</Link>
                      </li>
                    </ul>
                  </div>
                </Group>
              </div>
            </Group>
            <Group>
              <div className='flex flex-col gap-y-6'>
                <h4 className='font-bold'>Our Social Media</h4>
                <div>
                  <Group key='icons'>
                    <div className='flex items-center gap-x-4'>
                      <IconContainer
                        key='instagram'
                        to='https://instagram.com/p2vestapp'
                      >
                        <svg
                          width='14'
                          height='14'
                          viewBox='0 0 24 24'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <g clipPath='url(#clip0_889_203)'>
                            <path
                              d='M17.5034 0H6.49657C2.9143 0 0 2.9143 0 6.49657V17.5036C0 21.0857 2.9143 24 6.49657 24H17.5036C21.0857 24 24 21.0857 24 17.5036V6.49657C24 2.9143 21.0857 0 17.5034 0V0ZM12 18.5623C8.38145 18.5623 5.43767 15.6185 5.43767 12C5.43767 8.38145 8.38145 5.43767 12 5.43767C15.6185 5.43767 18.5623 8.38145 18.5623 12C18.5623 15.6185 15.6185 18.5623 12 18.5623ZM18.7192 6.98528C17.6499 6.98528 16.7801 6.11553 16.7801 5.04619C16.7801 3.97686 17.6499 3.10693 18.7192 3.10693C19.7885 3.10693 20.6585 3.97686 20.6585 5.04619C20.6585 6.11553 19.7885 6.98528 18.7192 6.98528Z'
                              fill='white'
                            />
                            <path
                              d='M12.0001 6.84473C9.15753 6.84473 6.84473 9.15734 6.84473 12.0001C6.84473 14.8426 9.15753 17.1554 12.0001 17.1554C14.8428 17.1554 17.1554 14.8426 17.1554 12.0001C17.1554 9.15734 14.8428 6.84473 12.0001 6.84473Z'
                              fill='white'
                            />
                            <path
                              d='M18.7191 4.51416C18.4258 4.51416 18.187 4.75293 18.187 5.04626C18.187 5.3396 18.4258 5.57837 18.7191 5.57837C19.0126 5.57837 19.2514 5.33978 19.2514 5.04626C19.2514 4.75275 19.0126 4.51416 18.7191 4.51416Z'
                              fill='white'
                            />
                          </g>
                          <defs>
                            <clipPath id='clip0_889_203'>
                              <rect width='24' height='24' fill='white' />
                            </clipPath>
                          </defs>
                        </svg>
                      </IconContainer>

                      <IconContainer
                        to='https://www.linkedin.com/company/p2vest/?lipi=urn%3Ali%3Apage%3Ad_flagship3_search_srp_all%3B%2FAqfIqXWTjy7sddOyG5ZfQ%3D%3D'
                        key='Linkedin'
                      >
                        <span>
                          <svg
                            width='14'
                            height='14'
                            viewBox='0 0 24 24'
                            fill='none'
                            xmlns='http://www.w3.org/2000/svg'
                          >
                            <path
                              d='M23.9942 24.0001V23.9992H24.0002V15.1972C24.0002 10.8913 23.0732 7.57422 18.0392 7.57422C15.6191 7.57422 13.9952 8.90232 13.3322 10.1611H13.2623V7.97622H8.48926V23.9992H13.4594V16.0651C13.4594 13.9762 13.8554 11.956 16.4423 11.956C18.9914 11.956 19.0292 14.3401 19.0292 16.1989V24.0001H23.9942Z'
                              fill='white'
                            />
                            <path
                              d='M0.395996 7.97656H5.3721V23.9996H0.395996V7.97656Z'
                              fill='white'
                            />
                            <path
                              d='M2.8821 0C1.2909 0 0 1.2909 0 2.8821C0 4.4733 1.2909 5.7912 2.8821 5.7912C4.4733 5.7912 5.7642 4.4733 5.7642 2.8821C5.763 1.2909 4.4721 0 2.8821 0Z'
                              fill='white'
                            />
                          </svg>
                        </span>
                      </IconContainer>
                      <IconContainer
                        to='https://twitter.com/P2Vest'
                        key='Twitter'
                      >
                        <span>
                          <svg
                            width='16'
                            height='14'
                            viewBox='0 0 26 24'
                            fill='none'
                            xmlns='http://www.w3.org/2000/svg'
                          >
                            <path
                              d='M22.967 5.97835C22.9768 6.23815 22.9815 6.49925 22.9815 6.76149C22.9815 14.7675 17.874 23.9994 8.53359 24H8.53391H8.53359C5.66582 24 2.99726 22.997 0.75 21.2783C1.14732 21.3343 1.55174 21.3622 1.96123 21.3622C4.34048 21.3622 6.53002 20.3938 8.26827 18.7686C6.04526 18.7196 4.17101 16.9678 3.52422 14.5605C3.83379 14.6313 4.15211 14.6699 4.47856 14.6699C4.94205 14.6699 5.39103 14.5955 5.81773 14.4565C3.49418 13.9015 1.74384 11.4513 1.74384 8.51748C1.74384 8.49017 1.74384 8.46568 1.7445 8.44024C2.42878 8.89408 3.21128 9.16724 4.04444 9.19776C2.68094 8.11226 1.78467 6.2568 1.78467 4.15466C1.78467 3.0446 2.03617 2.00463 2.47232 1.10924C4.97649 4.77529 8.71896 7.18632 12.9393 7.4397C12.8523 6.99585 12.8072 6.53354 12.8072 6.05823C12.8072 2.7135 15.0815 0 17.8859 0C19.3465 0 20.6658 0.736683 21.5925 1.91441C22.7494 1.64213 23.8357 1.13784 24.817 0.443867C24.4373 1.85802 23.6325 3.0446 22.584 3.79498C23.6111 3.64836 24.5901 3.32333 25.5 2.84078C24.8203 4.05598 23.9586 5.12325 22.967 5.97835Z'
                              fill='white'
                            />
                          </svg>
                        </span>
                      </IconContainer>
                    </div>
                  </Group>
                </div>
                <span className='text-sm'>Accountable TechServe Inc.</span>
              </div>
            </Group>
          </div>
        </Group>
        <Group key='bottom'>
          <div className={styles.bottom}>
            <span>© 2023 Accountable Techserve, Inc. All rights reserved.</span>
            <div className='flex items-center gap-x-2'>
              <Link href='#'>Privacy Policy</Link>
              <Link href='#'>Terms of use</Link>
            </div>
          </div>
        </Group>
      </footer>
    </div>
  );
};

export const IconContainer = ({
  children,
  to,
}: {
  children: React.ReactNode;
  to?: string;
}) => (
  <a
    href={to}
    target='_blank'
    className='w-[32px] fr:w-8 h-[32px] fr:h-8 bg-[#06238e] rounded-full flex items-center justify-center '
  >
    {children}
  </a>
);
