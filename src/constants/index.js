import {
  backend,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  // nodejs,
  mongodb,
  git,
  figma,
  docker,
  // meta,
  // starbucks,
  // tesla,
  // shopify,
  // carrent,
  // jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },

  {
    title: "Back-End Developer",
    icon: backend,
  },
  {
    title: "Business Developer Representative",
  },
  {
    title: "Social Media Marketing Agent  ",
  }
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Front-End Developer",
    company_name: "AuxCode",
    icon: './auxcode.jpeg',
    iconBg: "#383E56",
    date: "January 2019 - March 2021",
    points: [
      "Developing and maintaining web applications using jQuery and other related technologies. (Capitool and Dialogue by KPMG)",
      "Working with cross-functional teams including product managers, designers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser and device compatibility.",
      "Participating in code reviews and team meetings.",
    ],
  },
  {
    title: "Front-End & Back-End Developer",
    company_name: "Capital Tool Company",
    icon: './capitool.jpeg',
    iconBg: "#383E56",
    date: "March 2021 - Present",
    points: [
      "Developing and maintaining the fintech software by Capitool using jQuery, SCSS and PHP.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to continuously develop the software.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full-Stack Developer",
    company_name: "Capital Tool Company (Internship)",
    icon: './capitool.jpeg',
    iconBg: "#383E56",
    date: "August 2022 - January 2023",
    points: [
      "Worked on a restaurant system called Repido, which uses the Capitool payment system",
      "Collaborating with company supervisor and the client, using Agile methodology",
      "Developed the whole system ready for production, connected with the Capitool API",
      "Ensured the system is stable and secure at the final stage (webpack)",
      "Created and implemented the web design using Figma, Bootstrap and SCSS"
    ],
  },
  {
    title: "Business Developer Representative",
    company_name: "Ambitioned",
    icon: './ambitioned.jpeg',
    iconBg: "#383E56",
    date: "August 2023 - Present",
    points: [
      "Attending meetings with clients and potential clients and building a strong relationship with them",
      "Researching for network events and potential clients on LinkedIn and other platforms",
    ],
  },
  
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Capitool",
    image: './capitool.jpeg',
    description:
      "Capitool is a big financial web application that allows users to manage their finances, track their expenses and pay card-less using QR code payments. I developed parts of the front-end, including custom design for the bank ABN AMRO, and made sure the application is stable. For security reasons I can not provide repository link to the project.",
    tags: [
      {
        name: "jQuery",
        color: "orange-text-gradient",
      },
      {
        name: "PHP",
        color: "",
      },
      {
        name: "Bootstrap",
        color: "green-text-gradient",
      },
      {
        name: "SCSS",
        color: "pink-text-gradient",
      },
      {
        name: "Webpack",
        color: "blue-text-gradient",
      },
    ],
    // image: carrent,
    source_code_link: "https://capitool.com/",
  },
  {
    name: "StudioNest",
    description:
      "Web app that allows users to book a rehearsal room or studio for their band, providing a convenient and efficient solution for their music needs. A project I worked on during my studies, which was fully tested, documented, and deployed (no longer ;_;)",
    tags: [
      {
        name: "NextJS",
        color: "blue-text-gradient",
      },
      {
        name: "FastAPI",
        color: "green-text-gradient",
      },
      {
        name: "TailwindCSS",
        color: "blue-text-gradient",
      },
      {
        name: "MongoDB",
        color: "green-text-gradient",
      },
      {
        name: "Docker",
        color: "blue-text-gradient",
      },
      {
        name: "AWS",
        color: "pink-text-gradient",
      },
      {
        name: "Selenium IDE",
        color: "green-text-gradient",
      },
    ],
    image: './studionest.png',
    source_code_link: "https://github.com/Fowthy/StudioNest-API",
  },
  {
    name: "Rizzii Solutions",
    description:
      "Rizzii Solutions is a digital agency created by me, that provides services such as social media marketing and management (Facebook Ads and Google Ads), web development, web design, and SEO. The website is created entirely by me from scratch. ",
    tags: [
      {
        name: "ReactJS",
        color: "pink-text-gradient",
      },
      {
        name: "TailwindCSS",
        color: "blue-text-gradient",
      },
      {
        name: "FastAPI",
        color: "green-text-gradient",
      },
      {
        name: "Facebook Ads",
        color: "blue-text-gradient",
      },
      {
        name: "Web design",
        color: "orange-text-gradient",
      },
    ],
    image: './rizzii.png',
    source_code_link: "https://github.com/Fowthy/Rizzii",
  },
 
];

export { services, technologies, experiences, testimonials, projects };
