// src/constants/constants.js

import { TbBrandTelegram, TbWorld } from "react-icons/tb";
import { FiGithub } from "react-icons/fi";
import { CiLinkedin } from "react-icons/ci";

// Navigation Links
export const NAV_LINKS = [
  { id: "about", label: { en: "About", am: "ስለ" } },
  { id: "projects", label: { en: "Projects", am: "ፕሮጀክቶች" } },
  { id: "contact", label: { en: "Contact", am: "እንኳን" } },
];

// Social Media Links
export const SOCIAL_MEDIA = [
  {
    id: "telegram",
    label: { en: "Telegram", am: "ቴሌግራም" },
    icon: TbBrandTelegram,
    link: "https://t.me/SoloAk21",
  },
  {
    id: "linkedin",
    label: { en: "LinkedIn", am: "ሊንክዲን" },
    icon: CiLinkedin,
    link: "https://linkedin.com/in/soloak",
  },
  {
    id: "website",
    label: { en: "Website", am: "ድረ-ገጽ" },
    icon: TbWorld,
    link: "https://soloak.dev",
  },
  {
    id: "github",
    label: { en: "GitHub", am: "ጊትሃብ" },
    icon: FiGithub,
    link: "https://github.com/SoloAk21",
  },
];

// Tools Data
export const TOOLS_DATA = [
  {
    id: 15,
    name: { en: "CSS", am: "CSS" },
    type: { en: "Style Sheet", am: "የንባብ ገፅ" }, // Cascading Style Sheets
    logo: "assets/images/css-logo.png",
  },
  {
    id: 16,
    name: { en: "JavaScript", am: "ጃቫስክሪፕት" },
    type: { en: "Scripting", am: "ንባብ" }, // Scripting Language
    logo: "assets/images/js-logo.png",
  },
  {
    id: 1,
    name: { en: "VS Code", am: "VS ኮድ" },
    type: { en: "Editor", am: "ኤዲተር" },
    logo: "assets/images/vs-code-logo.png",
  },
  {
    id: 2,
    name: { en: "Git", am: "ጊት" },
    type: { en: "Version Control", am: "የታሪክ አንቀጽ" },
    logo: "assets/images/git-logo.png",
  },
  {
    id: 3,
    name: { en: "React", am: "ሪአክት" },
    type: { en: "Library", am: "ቤተ መዋቅር" },
    logo: "assets/images/react-logo.png",
  },
  {
    id: 4,
    name: { en: "Node.js", am: "ኖድ.js" },
    type: { en: "Runtime", am: "ሪንታይም" },
    logo: "assets/images/nodejs-logo.png",
  },
  {
    id: 5,
    name: { en: "Postman", am: "ፖስትማን" },
    type: { en: "API Tool", am: "API መሣሪያ" },
    logo: "assets/images/postman-logo.png",
  },
  {
    id: 6,
    name: { en: "MongoDB", am: "ሞንጎDB" },
    type: { en: "DB", am: "ዳታቤዝ" }, // Database
    logo: "assets/images/mongodb-logo.png",
  },
  {
    id: 7,
    name: { en: "Express.js", am: "ኤክስፕሬስ.js" },
    type: { en: "Web Framework", am: "ድረ-ገጽ አወታረ ክፍል" },
    logo: "assets/images/express-logo.png",
  },
  {
    id: 8,
    name: { en: "Mongoose", am: "ሞንጉስ" },
    type: { en: "ODM", am: "የውህብ መሠረት" }, // Object Data Modeling
    logo: "assets/images/mongoose-logo.png",
  },
  {
    id: 9,
    name: { en: "GitHub", am: "ጊትሃብ" },
    type: { en: "VCS Host", am: "የVCS ቤተሰብ" }, // Version Control System Hosting
    logo: "assets/images/github-logo.png",
  },
  {
    id: 10,
    name: { en: "Insomnia", am: "እንቁላል" },
    type: { en: "API Client", am: "API ክላይንት" },
    logo: "assets/images/insomnia-logo.svg",
  },
  {
    id: 11,
    name: { en: "Bootstrap", am: "ቡድስትራፕ" },
    type: { en: "CSS Framework", am: "የCSS መዋቅር" },
    logo: "assets/images/bootstrap-logo.svg",
  },
  {
    id: 12,
    name: { en: "Tailwind CSS", am: "ታይልዊንድ CSS" },
    type: { en: "CSS Utility", am: "የCSS መዋቅር" },
    logo: "assets/images/tailwind-logo.png",
  },
  {
    id: 13,
    name: { en: "Material-UI", am: "ማቲሪያል-UI" },
    type: { en: "UI Framework", am: "የUI መዋቅር" },
    logo: "assets/images/material-ui-logo.svg",
  },
  {
    id: 14,
    name: { en: "Redux", am: "ሪዳክስ" },
    type: { en: "State Mgmt", am: "የስርዓት አስተዳደር" }, // State Management
    logo: "assets/images/redux-logo.svg",
  },
];

export const ABOUT_DATA = {
  title: {
    en: "About Me",
    am: "ስለ እኔ",
  },
  description: {
    en: "Full Stack Developer & Graphics Designer",
    am: "ፈላጊ የቅንብር እና የግራፊክ ንብረት አሳዳጅ",
  },
  sections: [
    {
      title: {
        en: "The Face Behind the Screen",
        am: "ከእንቅስቃሴ በላይ የሚታየው",
      },
      description: {
        en: "Hello! I'm Solomon Asefa, a passionate Full Stack Developer based in Addis Ababa, Ethiopia. With a strong foundation in both front-end and back-end technologies, I specialize in creating modern, intuitive web applications that deliver exceptional user experiences.",
        am: "ሰላም! እኔ ሶሎሞን አሰፋ ነኝ፣ በአዲስ አበባ ኢትዮጵያ የምኖር የፈላጊ የቅንብር አሳዳጅ ነኝ። በፊት እና በኋላ ቴክኖሎጂዎች ላይ የተገንዘብ መሠረት እንደ መዋቅር ተመዝግቦ የሚስተካክል የድህረ ገፅ አመራሚዎችን ይፈጥር ይቻላል።",
      },
    },
    {
      title: {
        en: "Technical Skills",
        am: "ቴክኖሎጂ ችሎታዎች",
      },
      description: {
        en: "Front-End: HTML, CSS, Tailwind CSS, Bootstrap, JavaScript, React, Next.js. Back-End: Node.js, Express.js, MongoDB. I thrive on tackling complex challenges and enjoy finding innovative solutions to enhance functionality and design. My commitment to continuous learning drives me to explore new frameworks and technologies, ensuring that I stay ahead of industry trends.",
        am: "ፊት-አቀማመጥ: HTML, CSS, Tailwind CSS, Bootstrap, JavaScript, React, Next.js. ኋላ-አቀማመጥ: Node.js, Express.js, MongoDB. የድርጅቱን ችግኝ ማቅረብ እና አዳዲስ መዋቅርን ማሰብ ይቻላል።",
      },
    },
    {
      title: {
        en: "Why Work With Me?",
        am: "ለምን ከእኔ ጋር ስራ እንደሚሰሩ?",
      },
      description: {
        en: "I believe in collaboration and open communication, which allows me to understand your vision and bring it to life effectively. Whether you're looking for a sleek website or a robust application, I'm here to help you achieve your goals. When I'm not coding, you can find me diving into the latest tech developments or experimenting with new tools to sharpen my skills.",
        am: "በስራ ቡድን ውስጥ አውቅ የማለውን አስተዳደር እመነቃችሁ ይቻላል። በምን ይኖሩ? ቢሆንም በግንዛቤ መለኪያ ይገኙልኝ።",
      },
    },
  ],
  additionalInfo: {
    title: {
      en: "Let’s build something amazing together!",
      am: "እንቅስቃሴ ይስሩ እንዴት ይመለከቱ!",
    },
    description: {
      en: "Feel free to reach out at soloasefa6603@gmail.com if you’re interested in collaborating or just want to connect!",
      am: "እባክዎን ወይንን ከእኔ ጋር ይገናኙ ከአንዳንድ በማንኛውም ቀን ወይም ተወዳጅ ለመስራት ይታወቁ!",
    },
  },
  button: {
    en: "Resume",
    am: "እኔን ይገዙ",
  },
};

// constants/constants.js

export const PROJECT_DATA = {
  title: {
    en: "Projects",
    am: "ፕሮጀክቶች",
  },
  description: {
    en: "A showcase of my recent projects highlighting various technologies and functionalities.",
    am: "የእኔን የRecent ፕሮጀክቶች ዝርዝር እና የተለያዩ መሳሪያዎች ባለው ዝርዝር እንዲያመልክቱ።",
  },
  projects: [
    {
      title: {
        en: "Influencer Hub Website",
        am: "የኢንፍሉዌንሰር ሃብ መስሪያ",
      },
      description: {
        en: "A platform that connects influencers with companies for collaboration, featuring influencer registration, campaign management, and secure payment processing.",
        am: "ኢንፍሉዌንሰሮችን ከድርጅቶች ጋር ለሥራ እንቅስቃሴ የሚያገናኝ መድረክ፣ የኢንፍሉዌንሰር ምዝገባ፣ የዘመቻ አስተዳደር፣ እና ደህንነት ያለው የክፍያ አሰራርን ያካትታል።",
      },
      techStack: {
        en: "React.js, Node.js, Express.js, MongoDB, Mongoose, Socket.io, Chapa Payment Gateway, Material Tailwind",
        am: "React.js, Node.js, Express.js, MongoDB, Mongoose, Socket.io, Chapa Payment Gateway, Material Tailwind",
      },
      githubLink: {
        en: "GitHub Link",
        am: "ጂትሃብ አገናኝ",
      },
      liveSite: {
        en: "Live Website",
        am: "በህይወት ያለ ድህረ ገጽ",
      },
      githubUrl: "https://github.com/your-repo-link",
      liveUrl: "https://your-live-site.com",
      image: "https://your-image-url.com/image1.jpg",
    },
    {
      title: {
        en: "E-Commerce Store",
        am: "የኢንቨንተር ድርጅት",
      },
      description: {
        en: "A full-featured e-commerce website with product listings, shopping cart, user authentication, and secure payment options.",
        am: "የምርቶች ዝርዝር፣ የግዥ ጭነት፣ የተጠቃሚ መለያ የሚያቀርብ ፣ እና ደህንነት ያለው የክፍያ አሰራር ያለው ሙሉ አርእስት ድህረ ገጽ።",
      },
      techStack: {
        en: "React.js, Node.js, Redux, MongoDB, Stripe Payment, Material UI",
        am: "React.js, Node.js, Redux, MongoDB, Stripe Payment, Material UI",
      },
      githubLink: {
        en: "GitHub Link",
        am: "ጂትሃብ አገናኝ",
      },
      liveSite: {
        en: "Live Website",
        am: "በህይወት ያለ ድህረ ገጽ",
      },
      githubUrl: "https://github.com/your-ecommerce-repo-link",
      liveUrl: "https://your-ecommerce-live-site.com",
      image: "/assets/images/e-commerce.jpg", // Replace with your actual project image URL
    },
    {
      title: {
        en: "Fitness Tracker App",
        am: "የጤና መከታተያ መተግበሪያ",
      },
      description: {
        en: "A mobile app that helps users track their workouts, monitor their progress, and achieve their fitness goals.",
        am: "ተጠቃሚዎችን የእንቅስቃሴ ምክትታትን እንዲከተቱ ይረዱኣቸው፣ እንዲያሳምር እና የጤና ተቋማቸውን እንዲያገኙ የሚያደርገው ሞባይል መተግበሪያ።",
      },
      techStack: {
        en: "React Native, Redux, Firebase, Expo",
        am: "React Native, Redux, Firebase, Expo",
      },
      githubLink: {
        en: "GitHub Link",
        am: "ጂትሃብ አገናኝ",
      },
      liveSite: {
        en: "Live App",
        am: "በህይወት ያለ መተግበሪያ",
      },
      githubUrl: "https://github.com/your-fitness-tracker-repo-link",
      liveUrl: "https://your-fitness-tracker-live-site.com",
      image: "/assets/images/fitness-tracker.jpg",
    },
    {
      title: {
        en: "Travel Blog Platform",
        am: "የጉዞ ብሎግ መድረክ",
      },
      description: {
        en: "A travel blogging platform where users can share their travel experiences and explore new destinations.",
        am: "ተጠቃሚዎችን ጉዞ እንዲካፈሉ እና አዳዲስ መዳረሻዎችን እንዲጎበኙ የሚያስችለው የጉዞ ብሎግ መድረክ።",
      },
      techStack: {
        en: "Next.js, Tailwind CSS, GraphQL, Apollo",
        am: "Next.js, Tailwind CSS, GraphQL, Apollo",
      },
      githubLink: {
        en: "GitHub Link",
        am: "ጂትሃብ አገናኝ",
      },
      liveSite: {
        en: "Live Blog",
        am: "በህይወት ያለ ብሎግ",
      },
      githubUrl: "https://github.com/your-travel-blog-repo-link",
      liveUrl: "https://your-travel-blog-live-site.com",
      image: "/assets/images/travel-blog.jpg",
    },
    {
      title: {
        en: "Recipe Sharing App",
        am: "የአሰራር አካፍላ መተግበሪያ",
      },
      description: {
        en: "An app that allows users to share and discover recipes from around the world.",
        am: "ተጠቃሚዎችን እንዲካፈሉ እና ከዓለም በሙሉ የሚነሱ አሰራሮችን እንዲገነቡ የሚያስችለው መተግበሪያ።",
      },
      techStack: {
        en: "Vue.js, Vuetify, Firebase, Firestore",
        am: "Vue.js, Vuetify, Firebase, Firestore",
      },
      githubLink: {
        en: "GitHub Link",
        am: "ጂትሃብ አገናኝ",
      },
      liveSite: {
        en: "Live App",
        am: "በህይወት ያለ መተግበሪያ",
      },
      githubUrl: "https://github.com/your-recipe-sharing-repo-link",
      liveUrl: "https://your-recipe-sharing-live-site.com",
      image: "/assets/images/recipe-sharing.jpg",
    },
    {
      title: {
        en: "Educational Platform",
        am: "የትምህርት መድረክ",
      },
      description: {
        en: "A platform that provides online courses and resources for students and educators.",
        am: "ተማሪዎችን እና መምህራን የመሰጠ ነገሮችን እንዲያገኙ የሚያስችለው የመስክ መድረክ።",
      },
      techStack: {
        en: "Django, React.js, PostgreSQL, Docker",
        am: "Django, React.js, PostgreSQL, Docker",
      },
      githubLink: {
        en: "GitHub Link",
        am: "ጂትሃብ አገናኝ",
      },
      liveSite: {
        en: "Live Platform",
        am: "በህይወት ያለ መድረክ",
      },
      githubUrl: "https://github.com/your-educational-repo-link",
      liveUrl: "https://your-educational-live-site.com",
      image: "/assets/images/educational-platform.jpg",
    },
    {
      title: {
        en: "Weather Forecast App",
        am: "የየአየር ንብረት መተግበሪያ",
      },
      description: {
        en: "A weather app that provides real-time weather updates and forecasts for various locations.",
        am: "ለተለያዩ አካባቢዎች የእውነተኛ ሕጋዊ መረጃ እና እገታታዮችን የሚያቀርበው የአየር ንብረት መተግበሪያ።",
      },
      techStack: {
        en: "Flutter, Dart, OpenWeather API, Firebase",
        am: "Flutter, Dart, OpenWeather API, Firebase",
      },
      githubLink: {
        en: "GitHub Link",
        am: "ጂትሃብ አገናኝ",
      },
      liveSite: {
        en: "Live App",
        am: "በህይወት ያለ መተግበሪያ",
      },
      githubUrl: "https://github.com/your-weather-forecast-repo-link",
      liveUrl: "https://your-weather-forecast-live-site.com",
      image: "/assets/images/weather-forecast.jpg",
    },
  ],
};
