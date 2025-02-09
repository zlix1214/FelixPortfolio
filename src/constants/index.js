import project1 from "../assets/projects/project-1.png";
import project2 from "../assets/projects/project-2.png";
import project3 from "../assets/projects/project-3.png";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = ` I am passionate about crafting user-friendly websites and
              delivering seamless digital experiences. My goal is to combine
              creativity and technology to solve real-world problems and bring
              ideas to life.`;

export const ABOUT_TEXT = `Hi, I'm Felix, a senior in Information Management at Tamkang University.`;

export const ABOUT_TEXT2 = 'I enjoy web development, movies, music, drawing, and dancing. I had no programming experience before college, but writing my first C loop sparked my passion for coding. While exploring different fields, I discovered a strong interest in front-end development during my capstone project.';

export const ABOUT_TEXT3 =`Since then, I've been self-learning and improving my skills. Though new to this field, my enthusiasm drives me to overcome challenges and pursue a career in web development.`;



export const EXPERIENCES = [
  {
    year: "2023 - Present",
    role: "Senior Full Stack Developer",
    company: "Google Inc.",
    description: `Led a team in developing and maintaining web applications using JavaScript, React.js, and Node.js. Implemented RESTful APIs and integrated with MongoDB databases. Collaborated with stakeholders to define project requirements and timelines.`,
    technologies: ["Javascript", "React.js", "Next.js", "mongoDB"],
  },
  {
    year: "2022 - 2023",
    role: "Frontend Developer",
    company: "Adobe",
    description: `Designed and developed user interfaces for web applications using Next.js and React. Worked closely with backend developers to integrate frontend components with Node.js APIs. Implemented responsive designs and optimized frontend performance.`,
    technologies: ["HTML", "CSS", "Vue.js", "mySQL"],
  },
  {
    year: "2021 - 2022",
    role: "Full Stack Developer",
    company: "Facebook",
    description: `Developed and maintained web applications using JavaScript, React.js, and Node.js. Designed and implemented RESTful APIs for data communication. Collaborated with cross-functional teams to deliver high-quality software products on schedule.`,
    technologies: ["Python", "Svelte", "Three.js", "Postgres"],
  },
  {
    year: "2020 - 2021",
    role: "Software Engineer",
    company: "Paypal",
    description: `Contributed to the development of web applications using JavaScript, React.js, and Node.js. Managed databases and implemented data storage solutions using MongoDB. Worked closely with product managers to prioritize features and enhancements.`,
    technologies: ["Ruby", "Rails", "PHP", "Sqlite"],
  },
];

export const PROJECTS = [
  {
    id: 1,
    title: "PokeDex",
    image: project1,
    description:
      "An interesting Pokédex app that allows you to search for various Pokémon and obtain their information.",
    technologies: ["React", "PokeAPI", "TailwindCSS"],
    detail : 'The Pokédex is built using React and styled with Tailwind CSS. From the main interface, users can view all Pokémon and search by their number or English name. The app fetches Pokémon data from the PokéAPI, including name, number, type, height, weight, stats, and more.',
    liveDemo: "https://poke-dex-azure.vercel.app/",
    githubRepo: "https://github.com/zlix1214/PokeDex",
  },
  {
    id: 2,
    title: "Product Store",
    image: project2,
    description:
      "A store that allows users to add, delete, and modify products, with options to set the product name, price, and image.",
    technologies: ["React", "node.js","Express.js","MongoDB"],
    detail : 'This project was built using React for the frontend, Node.js for the backend, and MongoDB for the database. It features a responsive design, user authentication, and a shopping cart with checkout functionality.',
    liveDemo: "https://productcrud-3g3z.onrender.com/",
    githubRepo: "https://github.com/zlix1214/ProductCRUD",
  },
];

export const CONTACT = {
  address: "767 Fifth Avenue, New York, NY 10153 ",
  phoneNo: "+886 963 061 131 ",
  email: "rraefelix@gmail.com",
};
