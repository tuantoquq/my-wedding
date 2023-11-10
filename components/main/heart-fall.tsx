'use client'
import { motion } from 'framer-motion';
import React from 'react';
import { BsFillHeartFill } from 'react-icons/bs';

export default function HeartFalling() {
  return (
    <div className="fixed z-[99999] top-0 left-0 w-full h-full pointer-events-none ">
      {[...Array(10)].map((_, index) => (
        <motion.div
          key={index}
          className="absolute text-red-500/[.85] rounded-full pointer-events-auto"
          initial={{
            y: -100,
            x: `${Math.random() * 100}vw`,
          }}
          animate={{
            y: '100vh',
            x: `${Math.random() * 100}vw`,
          }}
          transition={{
            duration: Math.random() * 10 + 5,
            ease: 'easeIn',
            repeat: Infinity,
          }}
          style={{
            fontSize: `${Math.random() * 1.5 + 1}rem`,
          }}
        >
          <BsFillHeartFill />
        </motion.div>
      ))}
    </div>
  );
}
