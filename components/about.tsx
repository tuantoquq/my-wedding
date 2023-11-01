'use client';
import React from 'react';
import SectionHeading from './section-heading';
import { motion } from 'framer-motion';
import { useSectionInView } from '@/libs/hooks';

export default function About() {
  const { ref } = useSectionInView({
    sectionName: 'About',
    thresholdInView: 0.75,
  });

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40
      scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.125 }}
      id="about"
    >
      <SectionHeading>About Me</SectionHeading>
      <p className="mb-3">
        I graduated from{' '}
        <span className="font-medium">
          School of Information and Communications Technology (SOICT), Hanoi
          University of Science and Technology (HUST)
        </span>{' '}
        with major: <span className="font-medium">Computer Science.</span> I
        have <span className="font-medium">2 years </span> of experience in
        software development. My favorite path of programming is system
        implementation. I&apos;m really happy to be able to develop a system
        myself until it becomes a usable part. My core stack is{' '}
        <span className="font-medium">
          NestJS, ExpressJS, FastAPI and Spring Boot.
        </span>{' '}
        In addition, I also use{' '}
        <span className="font-medium">Docker and Kubernetes</span> for system
        deployment. I like learning about new technologies, it makes me feel
        more passionate about my job and motivated to work more.
      </p>
      <p>
        In free time, I like to play sports like{' '}
        <span className="font-medium">badminton, volleyball and football.</span>{' '}
        I&apos;m also pretty good at games and like listening to music and
        singing aimlessly.
      </p>
    </motion.section>
  );
}
