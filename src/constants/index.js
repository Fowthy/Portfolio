import {
  // mobile,
  backend,
  // creator,
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
    title: "Backend Developer",
    icon: backend,
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
  // {
  //   title: "Junior Software Engineer",
  //   company_name: "School of Computer Technologies and Systems",
  //   iconBg: "#383E56",
  //   date: "September 2017 - June 2020",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
  {
    title: "Front-End Developer",
    company_name: "AuxCode",
    // icon: starbucks,
    iconBg: "#383E56",
    date: "January 2019 - March 2021",
    points: [
      "Developing and maintaining web applications using jQuery and other related technologies.",
      "Working with cross-functional teams including product managers, designers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser and device compatibility.",
      "Participating in code reviews and team meetings.",
    ],
  },
  // {
  //   title: "Senior Software Engineer",
  //   company_name: "Fontys University of Applied Sciences",
  //   // icon: starbucks,
  //   iconBg: "#383E56",
  //   date: "September 2020 - Present",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
  {
    title: "Full-Stack Developer",
    company_name: "Capital Tool Company",
    // icon: tesla,
    iconBg: "#E6DEDD",
    date: "March 2021 - Present",
    points: [
      "Developing and maintaining web applications using jQuery, React, PHP and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
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
        color: "blue-text-gradient",
      },
      {
        name: "PHP",
        color: "green-text-gradient",
      },
      {
        name: "Bootstrap",
        color: "pink-text-gradient",
      },
      {
        name: "SCSS",
        color: "red-text-gradient",
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
        color: "lightblue-text-gradient",
      },
      {
        name: "MongoDB",
        color: "yellow-text-gradient",
      },
      {
        name: "Docker",
        color: "blue-text-gradient",
      },
      {
        name: "AWS",
        color: "red-text-gradient",
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
        color: "purple-text-gradient",
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
        color: "yellow-text-gradient",
      },
    ],
    image: './rizzii.png',
    source_code_link: "https://rizzii.net/",
  },
 
];

export { services, technologies, experiences, testimonials, projects };
