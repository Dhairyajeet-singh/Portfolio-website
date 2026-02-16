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
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
