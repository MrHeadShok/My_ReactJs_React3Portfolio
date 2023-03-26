import {
    mobile,
    backend,
    creator,
    web,
    sam,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    tailwind,
    nodejs,
    ionic,
    mongodb,
    angular,
    git,
    hoistfinance,
    pixelraise,
    squaresecure,
    Nlinit,
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
      title: "Ionic framework Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Fitness enthusiast",
      icon: creator,
    },
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
      name: "Ionic",
      icon: ionic
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Angular",
      icon: angular
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
  ];
  
  const experiences = [
    {
      title: "Full stack Developer",
      company_name: "Pixelraise",
      icon: pixelraise,
      iconBg: "#E6DEDD",
      date: "May 2019 - September 2019",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Working on developping additional plug-ins & features in existing web apps.",
      ],
    },
    {
      title: "AI trainer",
      company_name: "Hoist Finance",
      icon: hoistfinance,
      iconBg: "#E6DEDD",
      date: "Jul 2021 - Feb 2022",
      points: [
      "Developping and maintaining conversational AI chatbot.",
      "Contribute in API review & implementation.",  
      ],
    },

    {
      title: "Channel & digital product owner",
      company_name: "Hoist Finance",
      icon: hoistfinance,
      iconBg: "#E6DEDD",
      date: "Feb 2022 - Present",
      points: [
        "Managing & prioritizing backlog according to business value, time required & the order they were created.",
        "Learning customer & market needs.",
        "Creating the link between product and development.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "seamlessly integrates his technical prowess and personal touch in projects. Excelling in multiple technologies while possessing a keen grasp of process logic. ",
      name: "Samuel Buzatu",
      designation: "COF of Grand Store ro",
      company: "COMPANY NAME",
      image: sam,
    },
    { 
      testimonial:
        "Testimonial 1",
      name: "Full name",
      designation: "CFO",
      company: "COMPANY NAME",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "Testimonial 2.",
      name: "Full name",
      designation: "COO",
      company: "COMPANY NAME",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
  ];
  
  const projects = [
    {
      name: "SquareSecure",
      description:
        "An E-commerce website for cyber protection services. Providing annual plan, Registration and details about offers.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "styledcomponent",
          color: "green-text-gradient",
        },
        {
          name: "framer",
          color: "pink-text-gradient",
        },
      ],
      image: squaresecure,
      source_code_link: "https://github.com/MrHeadShok/rjs-cybersecuritywebsite",
      website_link :"https://squaresecure.netlify.app/",
    },
    {
      name: "Nlinit",
      description:
        "A mobile app (from In Line it), to allign your tasks and team. To help you better manage your projects and team. ",
      tags: [
        {
          name: "Ionic",
          color: "blue-text-gradient",
        },
        {
          name: "Angular",
          color: "pink-text-gradient",
        },
      ],
      image: Nlinit,
      source_code_link: "https://github.com/MrHeadShok/Nlinit-Angular",
      website_link :"https://github.com/MrHeadShok/Nlinit-Angular",
    },

  ];
  
  export { services, technologies, experiences, testimonials, projects };