import React, { useState } from "react";
import logo from '../assets/images/logo.png';

type Link = {
  name: string;
  href: string;
  options?: any[];
};

const links: Link[] = [
  {
    name: 'Home',
    href: '#',
  },
  {
    name: 'Services',
    href: '#services',
  },
  {
    name: 'About us',
    href: '#about-us',
  },
  {
    name: 'Why choose us?',
    href: '#why-choose-us',
  },
  {
    name: 'Contact us',
    href: '#contact-us',
  },
];

const Nav = () => {
  const [isOpen, setisOpen] = useState(false);

  return (
    <nav className='bg-white border-gray-200 py-2.5'>
      <div className='flex flex-wrap items-center justify-between px-10 mx-auto'>
        <a href='/' className='flex items-center'>
          <img
            src={logo}
            className='h-20 w-50 ml-10'
            alt='Exhibition Excellence Solutions'
          />
        </a>
        <div className='md:hidden flex items-center lg:order-2'>
          <button
            onClick={() => setisOpen(!isOpen)}
            type='button'
            className='inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200'
          >
            <span className='sr-only'>Open main menu</span>
            <svg
              className='w-6 h-6'
              fill='currentColor'
              viewBox='0 0 20 20'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                fillRule='evenodd'
                d='M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z'
                clipRule='evenodd'
              ></path>
            </svg>
            <svg
              className='hidden w-6 h-6'
              fill='currentColor'
              viewBox='0 0 20 20'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                fillRule='evenodd'
                d='M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z'
                clipRule='evenodd'
              ></path>
            </svg>
          </button>
        </div>

        <div
          className='items-center justify-between w-full lg:flex lg:w-auto lg:order-1'
          id='mobile-menu-2'
        >
          <ul
            className={`${
              isOpen ? 'flex' : 'hidden'
            } flex-col mt-4 font-medium lg:flex-row lg:flex lg:space-x-8 lg:mt-0`}
          >
            {links.map((link, index) => (
              <li key={index}>
                {link.options && (
                  <div className='group relative py-2 lg:py-0'>
                    <span className='py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-purple-700 lg:p-0'>
                      {link.name}
                    </span>
                    <svg
                      className='w-4 h-4 ml-2 -mr-1 inline'
                      xmlns='http://www.w3.org/2000/svg'
                      viewBox='0 0 20 20'
                      fill='currentColor'
                    >
                      <path fillRule='evenodd' d='M10 12l-5-5h10l-5 5z' />
                    </svg>

                    <div className='z-10 absolute left-0 w-60 lg:-ml-12 -mt-1 origin-top-left bg-white divide-y divide-gray-100 rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition duration-300'>
                      <div className='py-1'>
                        {link.options.map((option) => (
                          <a
                            href={option.href}
                            key={option.href}
                            className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100'
                          >
                            {option.name}
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {!link.options && (
                  <a
                    href={link.href}
                    className='block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-purple-700 lg:p-0'
                  >
                    {link.name}
                  </a>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
