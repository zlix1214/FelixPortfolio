import { PROJECTS } from "../constants";
import React from 'react';
import { Link } from 'react-router-dom';
import {animate, motion} from 'framer-motion';


const ProjectsCard = ({ project }) => {
  return (
    <motion.div
    whileInView={{opacity:1, y:0}}
    initial={{opacity:0, y:100}}
    transition={{duration:1.5}}
    className="relative w-full ">
      <Link to={`/project/${project.id}`}>
        <div className="relative w-full h-100">
          <img className="absolute inset-0 w-full h-full object-cover rounded-2xl" src={project.image} alt={project.title} />
          <div className="absolute inset-0 flex flex-col items-center justify-center p-4 opacity-0 hover:opacity-100 transition-opacity duration-600 rounded-2xl" style={{ backgroundColor: 'rgba(0, 0, 0, 0.8)' }}>
            <h6 className="mb-5 font-semibold text-white text-2xl">{project.title}</h6>
            <p className="mb-4 text-neutral-400 text-center">{project.description}</p>
            <div className="flex flex-wrap justify-center">
              {project.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-white"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

const Projects = () => {
  return (
    <div className="border-b border-neutral-900 pb-8">
      <motion.h2 
      whileInView={{opacity:1, y:0}}
      initial={{opacity:0, y:-100}}
      transition={{duration:1}}
      className="my-20 text-center text-4xl">Projects</motion.h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {PROJECTS.map((project, index) => (
          <ProjectsCard key={index} project={project} />
        ))}
      </div>
    </div>
  );
}

export default Projects;
