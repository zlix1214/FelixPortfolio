import React from "react";
import { useNavigate } from "react-router-dom";
import { PROJECTS } from "../constants";
import Navbar from "../components/Navbar";
import Contact from "../components/Contact";
import { RiReactjsLine } from "react-icons/ri";
import { SiMongodb } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import projectImg1 from "../assets/projects/project-2-1.png";
import { motion } from "framer-motion";

const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

const Project2 = () => {
  const project = PROJECTS.find((p) => p.id === 2);
  const navigate = useNavigate();
  return (
    <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900">
      <div className="fixed top-0 -z-10 h-full w-full">
        <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>
      </div>

      <div className="container mx-auto px-8 pt-40">
        <Navbar />
        <div className="flex flex-col items-center gap-5">
          <motion.img
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: -100 }}
            transition={{ duration: 1 }}
            src={projectImg1}
            className="w-3/4 rounded-lg shadow-lg"
          />
          <motion.h1
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: -100 }}
            transition={{ duration: 1.1 }}
            className="text-5xl font-bold text-white my-3"
          >
            {project.title}
          </motion.h1>
          <motion.p
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: -100 }}
            transition={{ duration: 1.2 }}
            className="text-xl text-white  my-3"
          >
            {project.description}
          </motion.p>
          <div className="flex gap-4">
            <a
              href={project.liveDemo}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-purple-600 text-white px-4 py-2 rounded-lg shadow hover:bg-purple-900 transition"
            >
              Live Demo
            </a>
            <a
              href={project.githubRepo}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-800 text-white px-4 py-2 rounded-lg shadow hover:bg-gray-900 transition"
            >
              GitHub Repo
            </a>
          </div>
        </div>
        <div className="flex flex-col items-center mt-20">
          <motion.h1
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 100 }}
            transition={{ duration: 1 }}
            className="text-4xl text-white text-center"
          >
            About
          </motion.h1>
          <motion.p
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 100 }}
            transition={{ duration: 1 }}
            className="p-5 text-xl text-white text-center max-w-xl leading-relaxed"
          >
            {project.detail}
          </motion.p>
        </div>
        <div className="flex flex-col items-center mt-20">
          <div>
            <motion.h1
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 100 }}
              transition={{ duration: 1 }}
              className="text-4xl text-white"
            >
              Technique
            </motion.h1>
          </div>
          <div className="flex">
            <div className="border-b border-neutral-800 pb-24">
              <h2 className="my-20" text-center text-4xl></h2>
              <motion.div
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 100 }}
                transition={{ duration: 1 }}
                className="flex flex-wrap items-center justify-center gap-4"
              >
                <motion.div
                  variants={iconVariants(2.5)}
                  initial="initial"
                  animate="animate"
                  className="rounded-2xl p-4"
                >
                  <RiReactjsLine className="text-7xl text-cyan-400" />
                  <p className="text-white text-center mt-3">React</p>
                </motion.div>
                <motion.div
                  variants={iconVariants(3)}
                  initial="initial"
                  animate="animate"
                  className="rounded-2xl p-4"
                >
                  <SiMongodb className="text-7xl text-green-500" />
                  <p className="text-white text-center mt-3">MongoDB</p>
                </motion.div>
                <motion.div
                  variants={iconVariants(6)}
                  initial="initial"
                  animate="animate"
                  className="rounded-2xl p-4"
                >
                  <FaNodeJs className="text-7xl text-green-500" />
                  <p className="text-white text-center mt-3">Node.js</p>
                </motion.div>
                <motion.div
                  variants={iconVariants(4)}
                  initial="initial"
                  animate="animate"
                  className="rounded-2xl p-4"
                >
                  <SiExpress className="text-7xl text-white" />
                  <p className="text-white text-center mt-3">Express.js</p>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-10">
          <button
            onClick={() => navigate("/")}
            className="bg-purple-600 text-white px-4 py-2 rounded-lg shadow cursor-pointer hover:bg-purple-900 transition">         
            HomePage
          </button>
        </div>
        <Contact />
      </div>
    </div>
  );
};

export default Project2;
