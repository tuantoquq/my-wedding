import React from 'react';
import { CgWorkAlt } from 'react-icons/cg';
import { LuGraduationCap } from 'react-icons/lu';
import spark from '@/public/spark.jpg';
import crm from '@/public/crm.jpg';
import eWallet from '@/public/e-wallet.jpg';
import dkBanking from '@/public/dk-banking.png';

export const groomEmail = 'tuantoquq@gmail.com';
export const brideEmail = 'truongbich21092000@gmail.com';
export const links = [
  {
    name: 'Home',
    hash: '#home',
  },
  {
    name: 'About',
    hash: '#about',
  },
  {
    name: 'Projects',
    hash: '#projects',
  },
  {
    name: 'Skills',
    hash: '#skills',
  },
  {
    name: 'Experience',
    hash: '#experience',
  },
  {
    name: 'Wishes',
    hash: '#contact',
  },
] as const;

export const experiencesData = [
  {
    title: 'Intern BigData',
    location: 'VC Corp, Hanoi, Vietnam',
    description:
      'I worked as an intern in the BigData team. I learned about Hadoop, Spark, Kafka, MySQL, and cronjob. I also learned about the software development process in a company.',
    icon: React.createElement(CgWorkAlt),
    date: 'Dec 2020 - June 2021',
  },
  {
    title: 'Intern Backend Developer',
    location: 'SunIvy International .Inc, Hanoi, Vietnam',
    description:
      'I worked as an intern in the Backend team. I learned about Java, Spring Boot, MySQL, and Docker. During this time, I have built CRM product to connect to social network as Facebook, Zalo,...',
    icon: React.createElement(CgWorkAlt),
    date: 'July 2021 - Nov 2021',
  },
  {
    title: 'Intern Backend Developer',
    location: 'OpenWay Vietnam, Hanoi, Vietnam',
    description:
      'I worked as an intern in the Backend team. I learned about Typescript, NestJS, Prisma, MySQL, and Docker. During this time, I have built backend for new product - Apollo, is an end to end solution, supporting customers is digital banking.',
    icon: React.createElement(CgWorkAlt),
    date: 'March 2022 - Oct 2022',
  },
  {
    title: 'Graduated Hanoi University of Science and Technology',
    location:
      'School of Information and Communication Technology, Hanoi University of Science and Technology, Hanoi, Vietnam',
    description:
      'I graduated from Hanoi University of Science and Technology with a very good Engineering degree of Computer Science.',
    icon: React.createElement(LuGraduationCap),
    date: 'May 2023',
  },
  {
    title: 'Associate Solution Consultant',
    location: 'OpenWay Asia, Hanoi, Vietnam',
    description:
      'I work as backend developer at OpenWay Asia. I join some projects as DK Banking Application, Apollo e-Wallet. I build backend with some frameworks as ExpressJS, NestJS, Spring Boot and deploy application to AWS using Docker, Gitlab CI/CD.',
    icon: React.createElement(CgWorkAlt),
    date: 'Oct 2022 - Present',
  },
] as const;

export const projectsData = [
  {
    title: 'Logs Analysis',
    description:
      'Load and filter data from HDFS, analyze it with Spark and store it in MySQL. Using cronjob to schedule submit Spark jobs.',
    tags: ['Scala', 'Spark', 'Hadoop', 'MySQL'],
    imageUrl: spark,
  },
  {
    title: 'CRM Bank',
    description:
      'Build CRM system connect with social network (Facebook and Zalo) using Kafka, Webhook',
    tags: ['Spring Boot', 'Kafka', 'Webhook'],
    imageUrl: crm,
  },
  {
    title: 'Apollo e-Wallet',
    description:
      'Build backend for new product - Apollo, is an end to end solution, supporting customers is digital banking.',
    tags: [
      'Java',
      'Spring Boot',
      'Typescript',
      'NestJS',
      'GraphQL',
      'Prisma',
      'MySQL',
      'Docker',
      'AWS',
    ],
    imageUrl: eWallet,
  },
  {
    title: 'DK Banking Application',
    description:
      'Build backend for banking applications on web and mobile platforms for Digital Kidu Bank of Bhutan',
    tags: [
      'Typescript',
      'NestJS',
      'GraphQL',
      'Prisma',
      'MySQL',
      'Docker',
      'AWS',
    ],
    imageUrl: dkBanking,
  },
] as const;

export const skillsData = [
  'JavaScript',
  'TypeScript',
  'Java',
  'C/C++',
  'Python',
  'Scala',
  'NestJS',
  'NodeJS',
  'Express',
  'Spring Boot',
  'FastAPI',
  'React',
  'NextJS',
  'Git',
  'Docker',
  'Prisma',
  'GraphQL',
  'Kubernetes',
  'AWS',
  'GCP',
  'Linux',
  'HTML',
  'CSS',
] as const;
