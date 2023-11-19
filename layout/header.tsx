'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { links } from '@/utils/data';
import Link from 'next/link';
import clsx from 'clsx';
import { useActiveSectionContext } from '@/context/active-section-context';
import { useWindowSize } from '@/hooks/useWindowSize';
import { RiMenuLine } from 'react-icons/ri';
import Drawer from '@/components/main/drawer';

export default function Header() {
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();
  const { isBelowMd } = useWindowSize();
  const [openDrawer, setOpenDrawer] = useState(false);

  return (
    <header className="z-[999] relative">
      {isBelowMd ? (
        <>
          <button
            onClick={() => setOpenDrawer(true)}
            className="fixed flex top-[1.5rem] text-white hover:bg-cs-green-700 right-[1rem] p-2 rounded-full w-[2.5rem] h-[2.5rem] bg-cs-green-900 justify-center items-center"
          >
            <RiMenuLine className="text-xl opacity-80 transition-all" />
          </button>
          <Drawer open={openDrawer} onClose={() => setOpenDrawer(false)}>
            <nav className="flex py-2 h-[initial] w-full items-stretch justify-center">
              <ul
                className={`
                  flex flex-grow flex-col items-stretch justify-center gap-y-1 
                  text-[0.9rem] font-medium text-black
                  w-[initial] sm:flex-nowrap sm:gap-2
                `}
              >
                {links.map((link, index) => (
                  <motion.li
                    className="flex items-center justify-center relative w-full"
                    key={index}
                    initial={{ opacity: 0, y: -100 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    <Link
                      className={clsx(
                        'flex w-full items-center justify-center px-3 py-3 hover:text-title transition',
                        {
                          'text-title': activeSection === link.name,
                        },
                      )}
                      href={link.hash}
                      onClick={() => {
                        setActiveSection(link.name);
                        setTimeOfLastClick(Date.now());
                        setOpenDrawer(false);
                      }}
                    >
                      {link.name}
                      {link.name === activeSection && (
                        <motion.span
                          className="bg-cs-green-300 rounded-full absolute inset-0 -z-10"
                          layoutId="activeSection"
                          transition={{
                            type: 'spring',
                            stiffness: 380,
                            damping: 30,
                          }}
                        ></motion.span>
                      )}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </nav>
          </Drawer>
        </>
      ) : (
        <>
          <motion.div
            className="fixed top-0 left-1/2 -translate-x-1/2 h-12 xl:w-[54%] xlm:w-[48%] md:w-3/4 lg:w-[66%] lgm:w-[60%] rounded-none 
            border border-white border-opacity-30 bg-white bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] sm:top-6 sm:rounded-full"
            initial={{ y: -100, x: '-50%', opacity: 0 }}
            animate={{ y: 0, x: '-50%', opacity: 1 }}
          >
            <nav className="flex fixed left-1/2 w-full -translate-x-1/2 py-2 sm:h-[initial] sm:py-0 items-center justify-center">
              <ul
                className="sm:flex w-full flex-wrap items-center justify-center gap-y-1 text-[0.9rem] font-medium text-black
        sm:w-[initial] sm:flex-nowrap sm:gap-5 xs:hidden"
              >
                {links.map((link, index) => (
                  <motion.li
                    className="h-3/4 flex items-center justify-center relative"
                    key={index}
                    initial={{ opacity: 0, y: -100 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    <Link
                      className={clsx(
                        'flex w-full items-center justify-center px-4 py-3 hover:text-title transition',
                        {
                          'text-title': activeSection === link.name,
                        },
                      )}
                      href={link.hash}
                      onClick={() => {
                        setActiveSection(link.name);
                        setTimeOfLastClick(Date.now());
                      }}
                    >
                      {link.name}
                      {link.name === activeSection && (
                        <motion.span
                          className="bg-cs-green-300 rounded-full absolute inset-0 -z-10"
                          layoutId="activeSection"
                          transition={{
                            type: 'spring',
                            stiffness: 380,
                            damping: 30,
                          }}
                        ></motion.span>
                      )}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </nav>
          </motion.div>
        </>
      )}
    </header>
  );
}
