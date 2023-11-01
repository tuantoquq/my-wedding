'use client';
import React from 'react';
import SectionHeading from './section-heading';
import { projectsData } from '@/libs/data';
import Project from './project';
import { useSectionInView } from '@/libs/hooks';
export default function Projects() {
  const { ref } = useSectionInView({
    sectionName: 'Projects',
  });
  return (
    <section id="projects" className="scroll-mt-28 mb-28" ref={ref}>
      <SectionHeading>My Projects</SectionHeading>
      <div>
        {projectsData.map((project, index) => (
          <React.Fragment key={index}>
            <Project {...project} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}
