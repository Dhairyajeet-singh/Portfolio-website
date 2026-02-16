import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  kvc,
  tlg,
  pw,
  minda,
  azure,
  python,
  hgf,
  java,
  langchain,
  pytorch,
  tf,
  scikit,
  opencv,
  sql,
  flask,
  fastapi,
  talkready,
  text3d,
  nimbus,
  mm,
  ak,
  mk,
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
    title: "AI Engineer",
    icon: web,
  },
  {
    title: "Cloud and DevOps Engineer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "AI Freelancer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "Scikit Learn",
    icon: scikit,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "Java",
    icon: java,
  },
  {
    name: "TensorFlow",
    icon: tf,
  },
  {
    name: "PyTorch",
    icon: pytorch,
  },
  {
    name: "Hugging face",
    icon: hgf,
  },
  {
    name: "Langchain",
    icon: langchain,
  },
  {
    name: "Flask",
    icon: flask,
  },
  {
    name: "MySQL",
    icon: sql,
  },
  {
    name: "OpenCV",
    icon: opencv,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "FastAPI",
    icon: fastapi,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Data Analyst Intern",
    company_name: "To-Let Globe",
    icon: tlg,
    iconBg: "#E6DEDD",
    date: "May 2024 - Aug 2024",
    points: [
      "The startup aims to establish a link between tenants and property owners without any middleman",
      "Analyzed rental market data for 20+ neighborhoods in Lucknow, identifying trends and pricing discrepancies provided actionable insights that increased client decision-making efficiency by 40%",
      "Pre-processing of the data for data mining , data visualization and exploratory data analysis",
    ],
  },
  {
    title: "SWE Intern",
    company_name: "UNO Minda",
    icon: minda,
    iconBg: "#E6DEDD",
    date: "July 2024 - September 2024",
    points: [
      "Developed a comprehensive Python-based automation tool using Pandas for data management, resulting in a 50% reduction in manual data entry and saving the team 60 hours per month",
      "Time series model using Long Short Term Memory Model for predicting the running cost of a machinewith an accuracy of 80%.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    ],
  },
  {
    title: "AI and DevOps Engineer",
    company_name: "Knovon Consulting",
    icon: kvc,
    iconBg: "#E6DEDD",
    date: "June 2025 - December 2025",
    points: [
      "Contributed to the development of TalkReady, an AI driven interview platform used by recruiters for automated candidate evaluation. Developed and Deployed a real time proctoring system using FastAPI on Azure VM, ensuring secure and scalable AI-monitored interviews.Implemented a comprehensive computer vision pipeline featuring Face Verification (93% accuracy via Buffalo L), Anti-Spoofing (83%), and Mobile Detection and face detection (87% via YOLOv11m).Integrated Voice Verification using the Encapa model to strengthen multi-factor candidate authentication. Integrated HTTPS via Certbot and ensured reliable deployment.",
      "Built a resume text-extraction pipeline (OCR from images PDFs) using PyTesseract, PDFPlumber, and PyPDF2, optimized for multiple resume formats, currently live in production. Developed an internal full-stack bulk email automation system with Microsoft authentication, CSV-based variable mapping, and organization-wide mail support.",
      "Managed end-to-end deployments and DevOps operations on the companies and clients projects: Dockerization, CI/CD pipeline creation maintenance, Nginx configurations, Azure VM provisioning, resource group management, VPN setup, API deployments, and cloud infrastructure monitoring.",
    ],
  },
  {
    title: "PwC Launchpad Program Fellow",
    company_name: "PwC",
    icon: pw,
    iconBg: "#E6DEDD",
    date: "February 2026 - Present",
    points: [
      "A comprehensive 6-month program designed to equip aspiring professionals with the skills and knowledge needed to excel in the dynamic world of technology and consulting.",
      "Focusing on industry relevant skills like Generative AI, Cloud Computing, Java Programming, and SAP",
      
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Through advanced model tuning and data optimization, Dhairyajeet improved our predictive accuracy by 25% while reducing processing time by almost 40%",
    name: "Angad Khurana",
    designation: "AI Consultant",
    company: "D-Fine",
    image: ak,
  },
  {
    testimonial:
      "Exceptional at taking complex requirements, and turning them into seamless, user-friendly applications.",
    name: "Mannica Khurana",
    designation: "Growth Manager",
    company: "Zoca AI",
    image: mk,
  },
  {
    testimonial:
      "Dhairyajeet combines deep technical knowledge in AI with a practical approach to DevOps, consistently delivering robust and scalable solutions.",
    name: "Mudit Mangtani",
    designation: "Manager",
    company: "Knovon Consulting",
    image: mm,
  },
];

const projects = [
  {
    name: "Text-To-3D tool",
    description:
      "A web-based text-to-3D generation system that transforms natural language descriptions into downloadable 3D models. Users can enter a text prompt and receive a downloadable .ply file containing the generated 3D model.",
    tags: [
      {
        name: "LLM",
        color: "blue-text-gradient",
      },
      {
        name: "Huggingface",
        color: "green-text-gradient",
      },
      {
        name: "FastAPI",
        color: "pink-text-gradient",
      },
      {
        name: "Model Training",
        color: "blue-text-gradient",
      },
    ],
    image: text3d,
    source_code_link: "https://github.com/Dhairyajeet-singh/text-to-3d",
    drive_link: "https://drive.google.com/drive/folders/1pjkX2UzNGBVwCxaF2SlgGvZub93OfVdI?usp=sharing",
  },
  {
    name: "Nimbus AI",
    description:
      "Nimbus-AI is an AI-powered competitive intelligence platform that autonomously crawls and analyzes publicly available data on market competitors to extract actionable insights. It benchmarks your competitors’ marketing strategies, funding patterns, investor relations, and business growth tactics, and then provides tailored recommendations to help your business surpass them.",
    tags: [
      {
        name: "Flask",
        color: "blue-text-gradient",
      },
      {
        name: "LLM",
        color: "green-text-gradient",
      },
      {
        name: "Langchain",
        color: "pink-text-gradient",
      },
      {
        name: "Beautiful Soup",
        color: "blue-text-gradient",
      },
    ],
    image: nimbus,
    source_code_link: "https://github.com/Dhairyajeet-singh/Nimbus-AI",
    drive_link: "https://drive.google.com/drive/folders/1-BNJpf-yEpE2A6daCz9BtBoMrtDuxT_G?usp=sharing",
  },
  {
    name: "TalkReady",
    description:
      "TalkReady brings structure, fairness, and expert-designed intelligence to early-stage hiring, helping organisations replace guesswork with confident decisions. It is an AI driven hiring platform to assist HR in interview process. Developed a real time multi checks and active proctoring system, which outclasses paid proctoring systems.",
    tags: [
      {
        name: "Computer Vision",
        color: "blue-text-gradient",
      },
      {
        name: "Voice Recognition",
        color: "green-text-gradient",
      },
      {
        name: "Ultralytics",
        color: "pink-text-gradient",
      },
      {
        name: "Deployment and CICD pipelines",
        color: "blue-text-gradient",
      },
    ],
    image: talkready,
    source_code_link: "https://github.com/",
    drive_link: "https://drive.google.com/drive/folders/18OZxy90W5wBD7fFaZHZi395Udu_CdzNv?usp=drive_link",
  },
];

export { services, technologies, experiences, testimonials, projects };
