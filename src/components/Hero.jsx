import { HERO_CONTENT } from "../constants/index";
import porfilePic from "../assets/FelixProfile.png";
import { motion } from "framer-motion";
import Banner from "./Banner";
const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      delay: delay,
      duration: 0.5,
    },
  },
});
const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <motion.h1
              variants={container(0)}
              initial="hidden"
              animate="visible"
              className="pb-10 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl"
            >
              Felix Zheng
            </motion.h1>
            <motion.span
              variants={container(0.5)}
              initial="hidden"
              animate="visible"
              className="bg-gradient-to-r from-pink-500 via-red-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent"
            >
              Obsessed with <Banner />
            </motion.span>
            <motion.p
              variants={container(1)}
              initial="hidden"
              animate="visible"
              className="max-w-xl pt-3 pb-8 font-light tracking-tight text-neutral-300 text-lg lg:text-left text-center"
            >
              {HERO_CONTENT}
            </motion.p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex justify-center">
            <motion.img
              initial={{ y:-20 }}
              animate={[{ y: 0 }, { y: 20 }]}
              transition={
                {
                  duration: 1.5,
                  ease: "linear",
                  repeat: Infinity,
                  repeatType: "reverse",
                }
              }
              className="rounded-3xl"
              src={porfilePic}
              alt="profile"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
