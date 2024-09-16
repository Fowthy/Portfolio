import {
  backend,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  tailwind,
  mongodb,
  git,
  figma,
  docker,
  creator,
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
    title: "Front-End Developer",
    icon: web,
  },

  {
    title: "Back-End Developer",
    icon: web,
  },
  {
    title: "Business Developer Representative",
    icon: backend,
  },
  {
    title: "AI Engineer",
    icon: creator,
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
    title: "Junior Front-End Developer",
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
    title: "Front-End Developer",
    company_name: "Capital Tool Company",
    icon: './capitool.jpeg',
    iconBg: "#383E56",
    date: "March 2021 - September 2024",
    points: [
      "Developing and maintaining the fintech software by Capitool using jQuery, SCSS and PHP.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to continuously develop the software.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full-Stack Developer (Internship)",
    company_name: "Capital Tool Company",
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
    date: "August 2023 - July 2024",
    points: [
      "Attending meetings with clients and potential clients and building a strong relationship with them",
      "Researching for network events and potential clients on LinkedIn and other platforms",
    ],
  },
  {
    title: "AI Engineer (Internship)",
    company_name: "d-centralize",
    icon: './d_centralize.jpeg',
    iconBg: "#383E56",
    date: "February 2024 - July 2024",
    points: [
      "Worked on the implementation of LLM (Large Language Model) workflows within the Appsemble platform",
      "Research for optimization of current LLMs and future possibilities for the low-code platform",
    ],
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
    name: "DAF Maintenance Predictor",
    description:
      "DAF Maintenance Predictor is an AI tool specialized to predict machine failure during the production of engines in DAF Trucks company. For privacy reasons some parts of the project are not shown.",
    tags: [
      {
        name: "Bash Scripting",
        color: "blue-text-gradient",
      },
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "Grafana",
        color: "orange-text-gradient",
      },
      {
        name: "Kubernetes",
        color: "blue-text-gradient",
      },
      {
        name: "Prometheus",
        color: "green-text-gradient",
      },
      {
        name: "MySQL",
        color: "blue-text-gradient",
      },
    ],
    image: './daf.jpg',
    source_code_link: "https://github.com/Fowthy/DAF-Maintenance-Prediction",
  },
  {
    name: "Appsemble AI",
    description:
      "Appsemble AI is designed to simplify the process of integrating and chaining multiple Large Language Models (LLMs) to create powerful and flexible AI workflows. Chaining allows you to pass outputs from one model to another, enabling more complex AI interactions.",
    tags: [
      {
        name: "NextJS",
        color: "blue-text-gradient",
      },
      {
        name: "LLM engineering",
        color: "orange-text-gradient",
      },
      {
        name: "Ollama",
        color: "blue-text-gradient",
      },
      {
        name: "Langchain",
        color: "orange-text-gradient",
      },
      {
        name: "Python",
        color: "green-text-gradient",
      },
    ],
    image: './appsembleai.png',
    source_code_link: "https://gitlab.com/appsemble/appsemble-ai/",
  },
  {
    name: "BandAI",
    description:
      "BandAI is an AI tool aimed to faciliate the mucisian work. It allows users to upload their music, generate short songs, images and lyrics with AI and share projects with other mucisians.",
    tags: [
      {
        name: "NextJS",
        color: "blue-text-gradient",
      },
      {
        name: "Web design",
        color: "orange-text-gradient",
      },
      {
        name: "TailwindCSS",
        color: "blue-text-gradient",
      },
      {
        name: "AI",
        color: "orange-text-gradient",
      },
      {
        name: "MongoDB",
        color: "green-text-gradient",
      },
    ],
    image: './bandai.png',
    source_code_link: "https://github.com/Fowthy/BandAI",
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
  {
    name: "Ordina Train Predictor",
    description:
      "Ordina Train Predictor is an AI tool specialized to predict train delays in the Netherlands for a given period of time. It was build for the company Ordina. For privacy reasons, the dataset is not available.",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "Jupyter Notebook",
        color: "orange-text-gradient",
      },
      {
        name: "Tensorflow",
        color: "blue-text-gradient",
      },
      {
        name: "Documentation",
        color: "green-text-gradient",
      },
      {
        name: "AI",
        color: "orange-text-gradient",
      },
    ],
    image: './ordina.jpg',
    source_code_link: "https://github.com/Fowthy/Train-Delay-Predictor",
  },
 
 
];

export { services, technologies, experiences, projects };
