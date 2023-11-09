'use client';
import React from 'react';
import { motion } from 'framer-motion';
type DividerProps = {
  className?: string;
};
export default function Divider({ className = 'h-1 w-1' }: DividerProps) {
  return (
    <motion.div
      className={`bg-gray-200 my-12 sm:my-16 md:my-20 rounded-full hidden sm:block xs:block ${className}`}
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.125 }}
    ></motion.div>
  );
}
