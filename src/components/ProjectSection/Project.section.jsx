/* eslint-disable no-param-reassign */
import React, { useState } from 'react';
import PropTypes from 'prop-types';

import SectionHeader from '../layout/Sections/SectionHeader.component';
import ProjectCard from './ProjectCard.component';
import RightArrow from './RightArrow';
import LeftArrow from './LeftArrow';
import { ReactComponent as RightLink } from '../../vectors/RightArrow.svg';

import { PROJECTS } from '../../DataStore';

const Projects = ({ findOffset }) => {
  const [projects] = useState(PROJECTS);

  let node;

  const scrollHorizontally = (element, direction, speed, distance, step) => {
    let scrollAmount = 0;
    const slideTimer = setInterval(() => {
      if (direction === 'right') {
        element.scrollLeft += step;
      } else {
        element.scrollLeft -= step;
      }
      scrollAmount += step;
      if (scrollAmount >= distance) {
        window.clearInterval(slideTimer);
      }
    }, speed);
  };

  return (
    <section
      ref={el => {
        if (!el) return;
        findOffset(el.getBoundingClientRect().y - 180);
      }}
      className="text-center my-12"
      id="projects-section"
    >
      <SectionHeader>Projects</SectionHeader>
      <div className="flex">
        <div className="w-32 flex-shrink-0 flex justify-center items-center">
          <div
            onClick={() => scrollHorizontally(node, 'left', 25, 480, 48)}
            role="button"
            tabIndex="-1"
          >
            <LeftArrow />
          </div>
        </div>
        <div
          className="hide-scrollbar flex overflow-x-scroll items-stretch p-16 px-4"
          ref={el => {
            if (!el) return;
            node = el;
          }}
        >
          {projects.map(project => (
            <ProjectCard
              key={project.id}
              description={project.description}
              image={project.image}
              url={project.url}
            >
              {project.title}
            </ProjectCard>
          ))}
        </div>
        <div className="w-32 flex-shrink-0 flex justify-center items-center">
          <div
            onClick={() => scrollHorizontally(node, 'right', 25, 480, 48)}
            role="button"
            tabIndex="-1"
          >
            <RightArrow />
          </div>
        </div>
      </div>
      <div className="text-acm-blue text-2xl px-32 underline">
        <div className="flex items-center flex-no-wrap justify-end">
          <a href="https://github.com/acm-vit">
            <div className="flex items-center flex-no-wrap justify-end">
              <div>View All Projects</div>
              <RightLink />
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

Projects.propTypes = { findOffset: PropTypes.func.isRequired };

export default Projects;
