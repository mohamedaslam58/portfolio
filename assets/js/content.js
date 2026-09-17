/* Structural content manifest.
   Only IDs, images and translation-key references live here —
   the actual copy comes from assets/data/localization/{lang}.json
   at render time, so every entry below is automatically available
   in all 31 shipped languages. */

const SPECIALIST_TAGS = [
  "C#",
  ".NET Core",
  "ASP.NET MVC",
  "React.js",
  "Vue.js",
  "TypeScript",
  "RESTful APIs",
  "Microsoft Azure",
  "PostgreSQL",
  "SQL Server",
  "Cosmos DB",
  "Azure Service Bus",
  "Agile Methodologies"
];

const PROJECTS = [
  {
    id: "essential_studio",
    img: "assets/images/projects/essential-studio.jpg",
    feature: true,
    logo: true,
    logoWide: true,
    detailDesc: true,
    links: [
      {
        kind: "site",
        href: "https://ej2.syncfusion.com/",
      },
    ],
  },
  {
    id: "boldsign",
    img: "assets/images/projects/boldsign_sitelogo.svg",
    feature: true,
    logo: true,
    logoWide: true,
    detailDesc: true,
    links: [
      {
        kind: "site",
        href: "https://www.boldsign.com/",
      },
    ],
  },
  {
    id: "bolddesk",
    img: "assets/images/projects/BoldDesk-Logo-Color.svg",
    feature: true,
    logo: true,
    logoWide: true,
    detailDesc: true,
    links: [
      {
        kind: "site",
        href: "https://www.bolddesk.com/",
      },
    ],
  },
  {
    id: "boldbi",
    img: "assets/images/projects/bold-bi-logo.svg",
    feature: true,
    logo: true,
    logoWide: true,
    detailDesc: true,
    links: [
      {
        kind: "site",
        href: "https://www.boldbi.com/",
      },
    ],
  },
  {
    id: "thrifty_app",
    img: "assets/images/projects/triftify-img.jpeg",
    feature: true,
    links: [
      {
        kind: "site",
        href: "https://thriftifyfund.com/",
      },
    ],
  },
  {
    id: "darbaar",
    img: "assets/images/projects/dgh.png",
    feature: true,
    links: [
      {
        kind: "site",
        href: "https://darbaarguesthouse.com/",
      },
    ],
  },
  {
    id: "bairuha",
    img: "assets/images/projects/bairuha.jpg",
    links: [
      {
        kind: "site",
        href: "https://bairuha.gen2k.org/",
      },
    ],
  },
  {
    id: "vms",
    img: "assets/images/projects/vms.jpg",
    links: [],
  },
  {
    id: "inventory",
    img: "assets/images/projects/inventory.png",
    links: [],
  },
  {
    id: "syncfusion_fusion_theme",
    img: "assets/images/projects/dark-theme.jpg",
    links: [],
  },
];

const EXPERIENCE_LOGO_FALLBACK =
  "assets/images/experience/fallback-company.svg";

const EXPERIENCE = [
  {
    id: "sps",
    points: 3,
    logo: "assets/images/experience/sps.jpg",
    logoFallback: EXPERIENCE_LOGO_FALLBACK,
    brandLogo: true,
    current: true,
  },
  {
    id: "syncfusion",
    points: 6,
    logo: "assets/images/experience/syncfusion.png",
    logoFallback: EXPERIENCE_LOGO_FALLBACK,
    brandLogo: true,
  },
  {
    id: "gen2k",
    points: 10,
    logo: "assets/images/experience/gen2k.png",
    logoFallback: EXPERIENCE_LOGO_FALLBACK,
    brandLogo: true,
  },
];

const EDUCATION = [
  {
    id: "anna_university",
    period: "education_anna_university_period",
    degree: "education_anna_university_degree",
    desc: "education_anna_university_desc",
    location: "education_anna_university_location",
    title: "education_anna_university",
  },
];

const SKILL_GROUPS = [
  {
    title: "Development",
    icon: "fa-solid fa-code",
    keys: [
      "csharp",
      "dotnet_core",
      "aspnet_mvc",
      "reactjs",
      "vuejs",
      "typescript",
      "javascript",
      "restapi",
      "nodejs",
      "html5",
      "css3",
      "bootstrap",
      "oops",
      "sdlc",
    ],
  },
  {
    title: "Databases & Cloud",
    icon: "fa-solid fa-cloud",
    keys: [
      "sql_server",
      "postgresql",
      "mysql",
      "cosmos_db",
      "azure_blob_storage",
      "azure_service_bus",
      "azure_devops",
      "firebase",
      "elasticsearch",
    ],
  },
  {
    title: "Tools & DevOps",
    icon: "fa-solid fa-wrench",
    keys: [
      "visual_studio",
      "vscode",
      "git",
      "docker",
      "azure",
      "jira",
      "ms_office",
      "agile",
    ],
  },
  {
    title: "Languages",
    icon: "fa-solid fa-language",
    keys: ["en", "ta"],
  },
  {
    title: "AI Tools",
    icon: "fa-solid fa-wand-magic-sparkles",
    keys: [
    "chatgpt",
    "claude",
    "github_copilot",
    "gemini",
    "ai_productivity",
    "ai_debugging"
  ],
  },
];

/** Devicon (`devicon-*`) or Font Awesome (`fa-*`) class for ability chips */
const SKILL_LOGOS = {
  // Development
  csharp: "devicon-csharp-plain colored",
  dotnet_core: "devicon-dotnetcore-plain colored",
  aspnet_mvc: "devicon-dotnetcore-plain colored",
  reactjs: "devicon-react-original colored",
  vuejs: "devicon-vuejs-plain colored",
  typescript: "devicon-typescript-plain colored",
  javascript: "devicon-javascript-plain colored",
  restapi: "fa-solid fa-plug",
  nodejs: "devicon-nodejs-plain colored",
  html5: "devicon-html5-plain colored",
  css3: "devicon-css3-plain colored",
  bootstrap: "devicon-bootstrap-plain colored",
  oops: "fa-solid fa-cubes",
  sdlc: "fa-solid fa-diagram-project",

  // Databases & Cloud
  sql_server: "devicon-microsoftsqlserver-plain colored",
  postgresql: "devicon-postgresql-plain colored",
  mysql: "devicon-mysql-plain colored",
  cosmos_db: "devicon-azure-plain colored",
  azure_blob_storage: "devicon-azure-plain colored",
  azure_service_bus: "devicon-azure-plain colored",
  azure_devops: "devicon-azuredevops-plain colored",
  firebase: "devicon-firebase-plain colored",
  elasticsearch: "devicon-elasticsearch-plain colored",

  // Tools & DevOps
  visual_studio: "devicon-visualstudio-plain colored",
  vscode: "devicon-vscode-plain colored",
  git: "devicon-git-plain colored",
  docker: "devicon-docker-plain colored",
  azure: "devicon-azure-plain colored",
  jira: "devicon-jira-plain colored",
  ms_office: "fa-solid fa-file-excel",
  agile: "fa-solid fa-arrows-spin",

  // Languages
  en: "fa-solid fa-earth-americas",
  ta: "fa-solid fa-earth-asia",

  // AI Tools
  chatgpt: "fa-solid fa-robot",
  claude: "img:https://cdn.simpleicons.org/anthropic/D97757",
  github_copilot: "img:https://cdn.simpleicons.org/githubcopilot/0066FF",
  gemini: "img:https://cdn.simpleicons.org/googlegemini/8E75B2",
  ai_productivity: "fa-solid fa-wand-magic-sparkles",
  ai_debugging: "fa-solid fa-bug-slash",
};

/** Contact section — same channels as portfolio 1.0 */
const CONTACT_SOCIAL = [
  {
    label: "LinkedIn",
    labelKey: "contact_social_linkedin",
    brand: "linkedin",
    href: "https://www.linkedin.com/in/mohamed-aslam-575199203/",
    icon: "fa-brands fa-linkedin-in",
  },
  {
    label: "WhatsApp",
    labelKey: "contact_social_whatsapp",
    brand: "whatsapp",
    href: "tel:+971563374166",
    icon: "fa-brands fa-whatsapp",
  },
  {
    label: "YouTube",
    labelKey: "contact_social_youtube",
    brand: "youtube",
    href: "https://youtube.com/@aslammohamed9912?si=wJ2JpvYPtfblAM57",
    icon: "fa-brands fa-youtube",
  },
  {
    label: "Email",
    labelKey: "contact_social_email",
    brand: "email",
    email: true,
    icon: "fa-solid fa-envelope",
  },
  {
    label: "GitHub",
    labelKey: "contact_social_github",
    brand: "github",
    href: "https://github.com/mohamedaslam58",
    icon: "fa-brands fa-github",
  },
];

// const MEDIUM_USERNAME = "@amirmustafaofficial";
// const MEDIUM_PROFILE_URL = "https://medium.com/@amirmustafaofficial";
// const MEDIUM_BLOG_LIMIT = 9;

const VIDEOS = [
  {
    titleKey: "videos_feat1",
    linkKey: "videos_feat1_link",
    href: "https://www.youtube.com/playlist?list=PLiZdgZd6wod3MnaV_pPBsM2fLmJUQuGRa",
    embed:
      "https://www.youtube.com/embed/videoseries?list=PLiZdgZd6wod3MnaV_pPBsM2fLmJUQuGRa",
  },
  {
    titleKey: "videos_feat2",
    linkKey: "videos_feat2_link",
    href: "https://www.youtube.com/playlist?list=PLiZdgZd6wod2Tnd5eATCNtbdMPDwi7FuB",
    embed:
      "https://www.youtube.com/embed/videoseries?list=PLiZdgZd6wod2Tnd5eATCNtbdMPDwi7FuB",
  },
  {
    titleKey: "videos_feat3",
    linkKey: "videos_feat3_link",
    href: "https://www.youtube.com/playlist?list=PLiZdgZd6wod2B8VE-JGYuR8vQ997oLxs9",
    embed:
      "https://www.youtube.com/embed/videoseries?list=PLiZdgZd6wod2B8VE-JGYuR8vQ997oLxs9",
  },
];