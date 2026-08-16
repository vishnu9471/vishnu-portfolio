require("dotenv").config();

const connectDB = require("./config/db");
const Project = require("./models/Project");

const projects = [
  {
    title: "TALENT-HUB",
    slug: "talent-hub",
    description:
      "A centralized platform for discovering and sharing content for cultural and college activities.",
    longDescription:
      "TALENT-HUB was built as a full-stack MERN application focused on making content discovery and sharing easier through a centralized user experience.",
    category: "MERN",
    technologies: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB"
    ],
    features: [
      "Responsive React interface",
      "Node.js and Express REST APIs",
      "MongoDB database integration",
      "Content discovery and sharing",
      "User-focused responsive experience"
    ],
    image: "/images/talent-hub.png",
    liveUrl: "https://talent-hub-client-five.vercel.app",
    githubUrl:
      "https://github.com/vishnu9471/talent-hub-client",
    featured: true
  },

  {
    title: "EZYKART",
    slug: "ezykart",
    description:
      "A full-stack e-commerce application designed to provide a complete online shopping experience.",
    longDescription:
      "EZYKART demonstrates a MERN-based shopping experience with responsive UI, API-driven backend functionality and MongoDB data integration.",
    category: "MERN",
    technologies: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB"
    ],
    features: [
      "Responsive product interface",
      "Product and data management",
      "RESTful backend APIs",
      "MongoDB integration",
      "Frontend-backend communication"
    ],
    image: "/images/ezykart.png",
    liveUrl: "https://ezykart-client.vercel.app",
    githubUrl:
      "https://github.com/vishnu9471/ezykart-client",
    featured: true
  },

  {
    title: "Book-My-Stay",
    slug: "book-my-stay",
    description:
      "A hotel booking application focused on a simple and intuitive experience for discovering and booking stays.",
    longDescription:
      "Book-My-Stay is a MERN application that demonstrates responsive booking flows, backend APIs and database integration.",
    category: "Full Stack",
    technologies: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB"
    ],
    features: [
      "Responsive booking interface",
      "React frontend",
      "Node.js and Express backend",
      "MongoDB integration",
      "REST API architecture"
    ],
    image: "/images/book-my-stay.jpg",
    liveUrl: "https://book-my-stay.vercel.app",
    githubUrl:
      "https://github.com/vishnu9471/book-my-stay",
    featured: true
  },

  {
    title: "SURAKSHA AI",
    slug: "suraksha-ai",
    description:
      "An AI/ML cyclone detection and disaster management solution combining machine learning with a modern web stack.",
    longDescription:
      "SURAKSHA AI combines machine learning, a React frontend, FastAPI backend services, MongoDB Atlas and weather data integration to support cyclone awareness and disaster management.",
    category: "AI / ML",
    technologies: [
      "React.js",
      "FastAPI",
      "MongoDB Atlas",
      "Machine Learning",
      "Weather API"
    ],
    features: [
      "Machine learning prediction system",
      "React frontend",
      "FastAPI backend",
      "MongoDB Atlas integration",
      "Weather API integration",
      "AI/ML model integration"
    ],

    // IMPORTANT
    // Your actual file is public/images/samiksha.png
    image: "/images/samiksha.png",

    liveUrl: "https://suraksha-ai.app",
    githubUrl: "https://github.com/vishnu9471/suraksha-ai",
    featured: true
  }
];

async function seed() {
  try {
    await connectDB();

    await Project.deleteMany({});

    await Project.insertMany(projects);

    console.log(
      `Seeded ${projects.length} projects successfully.`
    );

    process.exit(0);
  } catch (error) {
    console.error("Seed failed:", error);
    process.exit(1);
  }
}

seed();