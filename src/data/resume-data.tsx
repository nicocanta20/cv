import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Nicolas Cantarovici",
  initials: "NC",
  location: "Ciudad Autónoma de Buenos Aires, Argentina, ART",
  locationLink: "https://www.google.com/maps/place/Buenos+Aires",
  about:
    "Estudiante de Tecnologia Digital especializado en negocios, con interés en desarrollo de aplicaciones e inteligencia artificial.",
  summary:
    "Soy una persona apasionada por la tecnología y con un gran interes en los negocios y el emprendimiento. Mi curiosidad se extiende a la IA, áreas que estoy ansioso por explorar más profundamente en el futuro. Estoy emocionado por aplicar mis habilidades e intereses en un entorno dinámico e innovador.",
  avatarUrl: "profile2.png",
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
        url: "https://www.linkedin.com/in/nicolas-cantarovici-3b85a0198",
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
      degree: "Licenciatura en Tecnologia Digital",
      start: "2021",
      end: "2024 (Estimado)",
    },
    {
      school: "Universidad Carlos III (UC3M), Madrid",
      degree: "Programa de intercambio",
      start: "Primer semestre 2024",
      end: "",
    },
    {
      school: "Secundario ORT Argentina",
      degree: "Especialidad en TICs",
      start: "2016",
      end: "2020",
    },
  ],
  work: [
    {
      company: "Capacitación sobre IA generativa",
      link: "", // Agregar un enlace si está disponible
      badges: [],
      title: "Dictado de seminario para secundario ORT",
      logo: "", // Agregar logo si está disponible
      start: "", // Agregar fecha de inicio si está disponible
      end: "", // Agregar fecha de finalización si está disponible
      description:
        "Desarrollo y enseñanza a educadores sobre cómo implementar tecnologías de IA en entornos de aula y cómo mejorar las prácticas educativas.",
    },
    {
      company: "Proyecto Freelance",
      link: "https://www.musicrisepr.com/", // Agregar un enlace si está disponible
      badges: [],
      title: "Desarrollo y diseño de pagina web",
      logo: "", // Agregar logo si está disponible
      start: "", // Agregar fecha de inicio si está disponible
      end: "", // Agregar fecha de finalización si está disponible
      description:
        "Sitio web para compañia especializada en la industria musical",
    },
    {
      company: "Proyecto Freelance",
      link: "", // Agregar un enlace si está disponible
      badges: [],
      title: "Desarrollo de software de gestión para playlists de Spotify",
      logo: "", // Agregar logo si está disponible
      start: "", // Agregar fecha de inicio si está disponible
      end: "", // Agregar fecha de finalización si está disponible
      description:
        "Aplicación para monitorear y gestionar playlists de Spotify dinámicamente.",
    },
  ],
  skills: [
    "Python",
    "C++",
    "JavaScript",
    "React",
    "Figma",
    "Framer",
    "Notion",
    "Zapier",
  ],
  projects: [
    {
      title: "Gestión de horarios de clases",
      techStack: ["Proyecto personal", "Gestión de horarios", "Python"],
      description:
        "Aplicación web para crear y compartir horarios personalizados para estudiantes de universidad a la hora de inscribirse a materias.",
      logo: "", // Agregar logo si está disponible
      link: {
        label: "", // Agregar etiqueta si está disponible
        href: "https://class-schedule-management.streamlit.app/", // Agregar enlace si está disponible
      },
    },
    {
      title: "Audio2Summary",
      techStack: ["Proyecto personal", "OpenAI API", "Procesamiento de Audio", "Python"],
      description:
        "Transforma cualquier archivo de audio en resúmenes concisos, ofreciendo una comprensión rápida del material.",
      logo: "", // Agregar logo si está disponible
      link: {
        label: "", // Agregar etiqueta si está disponible
        href: "https://audio2summary.streamlit.app/", // Agregar enlace si está disponible
      },
    },
    {
      title: "Diseño de app para bienes raíces",
      techStack: ["Proyecto personal", "Diseño", "Figma"],
      description:
        "Diseño de una aplicacion enfocada en democratizar la inversión en bienes raíces, ofreciendo una plataforma para la financiación de proyectos.",
      logo: "", // Agregar logo si está disponible
      link: {
        label: "", // Agregar etiqueta si está disponible
        href: "https://www.figma.com/proto/wHo8U9xJtM5icT7JTdjryG/Real-Estate-Crowdfunding---Biens?page-id=0%3A1&type=design&node-id=83-306&viewport=22%2C95%2C0.15&t=aLIqdyzpzMboWgz5-1&scaling=scale-down&starting-point-node-id=93%3A1187&show-proto-sidebar=1&mode=design", // Agregar enlace si está disponible
      },
    },
    {
      title: "Predicción de conversión en Mercado Libre",
      techStack: ["Proyecto universitario", "Machine Learning", "Python"],
      description:
        "Modelo de machine learning para predecir la conversión de ventas sobre un dataset de Mercado Libre, utilizando datos históricos de transacciones y características de los productos.",
      logo: "", // Agregar logo si está disponible
      link: {
        label: "", // Agregar etiqueta si está disponible
        href: "", // Agregar enlace si está disponible
      },
    },
    {
      title: "Asignación eficiente de transporte",
      techStack: ["Proyecto universitario", "Diseño de Algoritmos", "Jupyter Notebook", "C++"],
      description:
        "Algoritmo optimizado para un servicio de transporte, emparejando vehículos con pasajeros según la ubicación y los datos de viaje. Este proyecto se centró en mejorar la eficiencia del servicio y equilibrar la oferta y la demanda.",
      logo: "", // Agregar logo si está disponible
      link: {
        label: "", // Agregar etiqueta si está disponible
        href: "https://github.com/florianreyes/TP_1_TD5_Algoritmos", // Agregar enlace si está disponible
      },
    },
    {
      title: "Codificador de música",
      techStack: ["Proyecto universitario", "Redes Neuronales", "Análisis de Datos", "Python"],
      description:
        "Codificador de música utilizando redes neuronales para transformar canciones en una representación de espacio latente. Esto involucró procesos de codificación y decodificación para piezas musicales.",
      logo: "", // Agregar logo si está disponible
      link: {
        label: "", // Agregar etiqueta si está disponible
        href: "https://github.com/florianreyes/audio-analisis-tdvi", // Agregar enlace si está disponible
      },
    },
  ],
  languages: [
    {
      language: "Español",
      proficiency: "Nativo",
    },
    {
      language: "Inglés",
      proficiency: "Fludio",
    },
  ],
} as const;

// export const RESUME_DATA = {
//   name: "Nicolas Cantarovici",
//   initials: "NC",
//   location: "Ciudad Autónoma de Buenos Aires, Argentina, ART",
//   locationLink: "https://www.google.com/maps/place/Buenos+Aires",
//   about:
//     "Computer Science Student with a Minor in Business, Specializing in Python Development and Learning AI Technologies",
//   summary:
//     "As a Computer Science student at Universidad Di Tella, I have a keen interest in business and a growing proficiency in Python, complemented by my enthusiasm for entrepreneurship. My curiosity extends to AI and language models, areas I am eager to explore more deeply in the future. I am excited about the prospect of applying my skills and interests in a dynamic, innovative environment.",
//   avatarUrl: "profile2.png",
//   // personalWebsiteUrl: "https://nixo.framer.website",
//   contact: {
//     email: "nicolascantarovici@gmail.com",
//     tel: "+5491130684500",
//     social: [
//       {
//         name: "GitHub",
//         url: "https://github.com/nicocanta20",
//         icon: GitHubIcon,
//       },
//       {
//         name: "LinkedIn",
//         url: "https://www.linkedin.com/in/nicolas-cantarovici-3b85a0198",
//         icon: LinkedInIcon,
//       },
//       {
//         name: "X",
//         url: "https://x.com/N1co_c",
//         icon: XIcon,
//       },
//     ],
//   },
//   education: [
//     {
//       school: "Universidad Di Tella",
//     degree: "Bachelor's Degree in Computer Science with a Minor in Business",
//     start: "2021",
//     end: "Expected in 2024",
//     },
//     {
//       school: "Programa de intercambio ",
//     degree: "Universidad Carlos III (UC3M), Madrid",
//     // start: "2024",
//     // end: "",
//     },
//     {
//       "school": "Secundario ORT Argentina",
//       "degree": "Especialidad en TICs",
//       "start": "2016",
//       "end": "2020"
//   },

//   ],
//   work: [
//     {
//       "company": "ORT High School",
//       "link": "", // Add a link if available
//       "badges": [],
//       "title": "Seminar on Generative AI and Classroom Implementation",
//       "logo": "", // Add logo if available
//       "start": "", // Add start date if available
//       "end": "", // Add end date if available
//       "description": "Led a seminar on generative AI, teaching educators how to implement AI technologies in classroom settings and enhancing educational practices."
// },
//     {
//       company: "Freelance Project",
//       link: "https://www.musicrisepr.com/", // Add a link if available
//       badges: [],
//       title: "Web Development for Music Marketing",
//       logo: "", // Add logo if available
//       start: "", // Add start date if available
//       end: "", // Add end date if available
//       description:
//         "Designed and developed a website for a brand specializing in music marketing, focusing on usability and attractive design.",
//     },
//     {
//       company: "Freelance Project",
//       link: "", // Add a link if available
//       badges: [],
//       title: "Spotify Playlist Management Tools Development",
//       logo: "", // Add logo if available
//       start: "", // Add start date if available
//       end: "", // Add end date if available
//       description:
//         "Built a web app for monitoring and managing Spotify playlists with a dashboard",
//     },
//   ],  
//   skills: [
//     "Python",
//     "C++",
//     "JavaScript",
//     "React",
//     "Figma",
//     "Framer",
//     "Notion",
//     "Zapier",
//     "Excel",


//   ],
//   projects: [
   
//     {
//       title: "Class Schedule Management",
//       techStack: ["Side Project", "Scheduling", "Python"],
//       description:
//         "Developed a web app for logging classes, creating custom timetables, and sharing schedules.",
//       logo: "", // Add logo if available
//       link: {
//         label: "", // Add label if available
//         href: "https://class-schedule-management.streamlit.app/", // Add link if available
//       },
//     }, 
//     {
//       title: "Audio2Summary",
//       techStack: ["Side Project", "OpenAI API", "Audio Processing", "Python"],
//       description:
//         "Transforms audio content into concise summaries, offering a quick grasp of audio material.",
//       logo: "", // Add logo if available
//       link: {
//         label: "", // Add label if available
//         href: "https://audio2summary.streamlit.app/", // Add link if available
//       },
//     },
//     {
//       title: "Design Real Estate App",
//       techStack: ["Side Project","Design Project", "Figma"],
//       description:
//         "Democratizes real estate investment, offering an accessible platform for project funding and capital raising.",
//       logo: "", // Add logo if available
//       link: {
//         label: "", // Add label if available
//         href: "https://www.figma.com/proto/wHo8U9xJtM5icT7JTdjryG/Real-Estate-Crowdfunding---Biens?page-id=0%3A1&type=design&node-id=83-306&viewport=22%2C95%2C0.15&t=aLIqdyzpzMboWgz5-1&scaling=scale-down&starting-point-node-id=93%3A1187&show-proto-sidebar=1&mode=design", // Add link if available
//       },
//     },
//     {
//       title: "Mercado Libre Conversion Prediction",
//       techStack: ["College Assignment", "Machine Learning", "Python"],
//       description:
//         "Developed a machine learning model to predict sales conversion on Mercado Libre, using historical transaction data and product features",
//       logo: "", // Add logo if available
//       link: {
//         label: "", // Add label if available
//         href: "", // Add link if available
//       },
//     },    
//     {
//       title: "Efficient Ride Allocation",
//       techStack: ["College Assignment", "Algorithm Design", "Jupyter Notebook", "C++"],
//       description:
//         "Created an optimized algorithm for a ride-sharing service, matching vehicles to passengers based on location and travel data. This college project focused on enhancing service efficiency and balancing supply and demand in targeted areas.",
//       logo: "", // Add logo if available
//       link: {
//         label: "", // Add label if available
//         href: "https://github.com/florianreyes/TP_1_TD5_Algoritmos", // Add link if available
//       },
//     },
//     {
//       title: "Neural Music Encoder",
//       techStack: ["College Assignment", "Neural Networks", "Data Analysis", "Python"],
//       description:
//         "Developed a music encoder using neural networks to transform songs into a latent space representation. This involved both encoding and decoding processes for musical pieces using the GTZAN dataset.",
//       logo: "", // Add logo if available
//       link: {
//         label: "", // Add label if available
//         href: "https://github.com/florianreyes/audio-analisis-tdvi", // Add link if available
//       },
//     },
//   ],

  
// } as const;

