'use client';
import React from 'react';
import SectionHeading from './section-heading';
import { skillsData } from '@/libs/data';
import { useSectionInView } from '@/libs/hooks';
import { motion } from 'framer-motion';
export default function Skills() {
  const { ref } = useSectionInView({ sectionName: 'Skills' });
  return (
    <section
      className="mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40"
      id="skills"
      ref={ref}
    >
      <SectionHeading>My Skills</SectionHeading>
      <ul className="flex flex-wrap justify-center gap-2 text-lg text-gray-800">
        {skillsData.map((skill, index) => (
          <motion.li
            initial={{ opacity: 0, y: 100 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: { delay: 0.05 * index },
            }}
            viewport={{ once: true }}
            className="bg-white border border-black/[0.2] rounded-xl px-5 py-3"
            key={index}
            custom={index}
          >
            {skill}
          </motion.li>
        ))}
      </ul>
    </section>
  );
}
