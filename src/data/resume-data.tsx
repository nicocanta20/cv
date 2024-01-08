import {
  AmbitLogo,
  BarepapersLogo,
  BimLogo,
  CDGOLogo,
  ClevertechLogo,
  ConsultlyLogo,
  EvercastLogo,
  Howdy,
  JarockiMeLogo,
  JojoMobileLogo,
  Minimal,
  MobileVikingsLogo,
  MonitoLogo,
  NSNLogo,
  ParabolLogo,
  TastyCloudLogo,
  YearProgressLogo,
} from "@/images/logos";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Nicolas Cantarovici",
  initials: "NC",
  location: "Ciudad Autónoma de Buenos Aires, Argentina, ART",
  locationLink: "https://www.google.com/maps/place/Buenos+Aires",
  about:
    "Computer Science Student with a Minor in Business, Specializing in Python Development and Learning Front-End Technologies",
  summary:
    "As a Computer Science student at Universidad Di Tella, I have a keen interest in business and a growing proficiency in Python, complemented by my enthusiasm for front-end technologies. Outside of academics, I enjoy engaging in ping pong and maintaining fitness at the gym. My curiosity extends to AI and language models, areas I am eager to explore more deeply in the future. I am excited about the prospect of applying my skills and interests in a dynamic, innovative environment.",
  avatarUrl: "profile.png",
  personalWebsiteUrl: "https://nixo.framer.website",
  contact: {
    email: "nicolascantarovici@gmail.com",
    tel: "+5491130684500",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/nicocanta20",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/nicolas-cantarovici",
        icon: LinkedInIcon,
      },
      {
        name: "X",
        url: "https://x.com/N1co_c",
        icon: XIcon,
      },
    ],
  },
  education: [
    {
      school: "Universidad Di Tella",
    degree: "Bachelor's Degree in Computer Science with a Minor in Business",
    start: "2021",
    end: "Expected in 2024",
    },
  ],
  work: [
    {
      company: "Freelance Project",
      link: "", // Add a link if available
      badges: [],
      title: "Content Creation for Medical Center",
      logo: "", // Add logo if available
      start: "", // Add start date if available
      end: "", // Add end date if available
      description:
        "Utilized AI tools to generate visual content, simplifying the explanation of complex medical concepts for social media platforms.",
    },
    {
      company: "Freelance Project",
      link: "", // Add a link if available
      badges: [],
      title: "Web Development for Music Marketing",
      logo: "", // Add logo if available
      start: "", // Add start date if available
      end: "", // Add end date if available
      description:
        "Designed and developed a website for a brand specializing in music marketing, focusing on usability and attractive design.",
    },
    {
      company: "Freelance Project",
      link: "", // Add a link if available
      badges: [],
      title: "Spotify Analysis Tools Development",
      logo: "", // Add logo if available
      start: "", // Add start date if available
      end: "", // Add end date if available
      description:
        "Created a web application for monitoring playlist followers on Spotify, providing valuable insights for engagement strategies.",
    },
  ],  
  skills: [
    "Python",
    "JavaScript",
    "React/Next.js",
    "Figma",
    "Framer",
    "Notion",
    "Zapier",
  ],
  projects: [
    {
      title: "WhisperChain",
      techStack: ["Side Project", "Whisper", "Ollama", "Langchain", "Streamlit", "Python"],
      description:
        "A locally-run tool integrating advanced audio transcription with interactive Q&A capabilities, designed to enhance user engagement while maintaining privacy.",
      logo: "", // Add logo if available
      link: {
        label: "", // Add label if available
        href: "", // Add link if available
      },
    },
    {
      title: "CSV Merger",
      techStack: ["Side Project", "Data Processing", "Streamlit", "Python"],
      description:
        "Simplifies data management by consolidating multiple CSV files into one streamlined dataset.",
      logo: "", // Add logo if available
      link: {
        label: "", // Add label if available
        href: "", // Add link if available
      },
    },
    {
      title: "Memory Assistant",
      techStack: ["Side Project", "OpenAI API", "Streamlit", "Python"],
      description:
        "Enhances memory recall with an intuitive application for managing contacts, ideas, and projects.",
      logo: "", // Add logo if available
      link: {
        label: "", // Add label if available
        href: "", // Add link if available
      },
    },
    {
      title: "Spotify Tracker",
      techStack: ["Spotify API", "React", "JavaScript"],
      description:
        "Provides real-time monitoring and insights into the follower trends of Spotify playlists.",
      logo: "", // Add logo if available
      link: {
        label: "", // Add label if available
        href: "", // Add link if available
      },
    },
    {
      title: "Autogen Research",
      techStack: ["Side Project", "OpenAI API", "Langchain", "Autogen", "Python"],
      description:
        "Facilitates the creation of AI research agents, aiming to revolutionize data analysis and insight generation.",
      logo: "", // Add logo if available
      link: {
        label: "", // Add label if available
        href: "", // Add link if available
      },
    },
    {
      title: "Audio2Summary",
      techStack: ["Side Project", "OpenAI API", "Audio Processing", "Streamlit", "Python"],
      description:
        "Transforms audio content into concise summaries, offering a quick grasp of audio material.",
      logo: "", // Add logo if available
      link: {
        label: "", // Add label if available
        href: "", // Add link if available
      },
    },
    {
      title: "Terminal Chatbot",
      techStack: ["Side Project", "OpenAI API", "Chatbot", "Python"],
      description:
        "Brings intelligent conversation to the terminal, offering a unique interactive experience.",
      logo: "", // Add logo if available
      link: {
        label: "", // Add label if available
        href: "", // Add link if available
      },
    },
    {
      title: "AI Journal",
      techStack: ["Side Project", "Notion API", "OpenAI API", "Python"],
      description:
        "Automates daily journaling, capturing thoughts and ideas with ease and integrating them into a digital archive.",
      logo: "", // Add logo if available
      link: {
        label: "", // Add label if available
        href: "", // Add link if available
      },
    },
    {
      title: "Text2Speech Tester",
      techStack: ["Side Project", "ElevenLabs API", "Streamlit", "Python"],
      description:
        "Evaluates and enhances text-to-speech capabilities, offering a versatile auditory experience.",
      logo: "", // Add logo if available
      link: {
        label: "", // Add label if available
        href: "", // Add link if available
      },
    },
    {
      title: "Startup Feedback Tool",
      techStack: ["Side Project", "OpenAI API", "Streamlit", "Python"],
      description:
        "Provides critical insights and feedback for startup ideas, fostering innovation and growth.",
      logo: "", // Add logo if available
      link: {
        label: "", // Add label if available
        href: "", // Add link if available
      },
    },
    {
      title: "Personal Portfolio",
      techStack: ["Side Project", "HTML", "CSS"],
      description:
        "Showcases professional and personal achievements in a clean, user-friendly web format.",
      logo: "", // Add logo if available
      link: {
        label: "", // Add label if available
        href: "", // Add link if available
      },
    },
    {
      title: "Real Estate Crowdfunding App",
      techStack: ["Side Project","Design Project", "Figma"],
      description:
        "Democratizes real estate investment, offering an accessible platform for project funding and capital raising.",
      logo: "", // Add logo if available
      link: {
        label: "", // Add label if available
        href: "", // Add link if available
      },
    },
    {
      title: "MAIER Art Gallery Website",
      techStack: ["Web Development", "Framer"],
      description:
        "Reimagines the art gallery experience, connecting communities through a unique digital platform.",
      logo: "", // Add logo if available
      link: {
        label: "", // Add label if available
        href: "", // Add link if available
      },
    },
  ],

  
} as const;

