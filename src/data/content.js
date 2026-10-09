// ============================================================================
//  ALL WEBSITE CONTENT LIVES HERE.
//  Edit this file to update text, links, skills or projects — no need to touch
//  the components. Everything below comes from Nikhil's resume.
// ============================================================================

export const PROFILE = {
  name: 'Nikhil Jomon',
  role: 'Full-Stack Developer',
  subtitle: 'Full-Stack Developer | CSE Student',
  location: 'Kerala, India',
  email: 'nikhilaerathu@gmail.com',
  intro:
    'Computer Science Engineering student with hands-on experience in full-stack web development, React, Node.js, MongoDB, and Java. Passionate about building practical digital solutions and solving real-world problems.',
}

export const SOCIAL = {
  github: 'https://github.com/Nikhiljomon05',
  // Double-check this URL by opening it once — the resume PDF and brief differ slightly.
  linkedin: 'https://www.linkedin.com/in/nikhil-jomon-78b518313/',
}

export const NAV_LINKS = [
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'education', label: 'Education' },
  { id: 'experience', label: 'Experience' },
  { id: 'process', label: 'Process' },
  { id: 'contact', label: 'Contact' },
]

export const HERO_HIGHLIGHTS = [
  'MERN Stack Development',
  'REST APIs & Authentication',
  'Frontend & Backend Integration',
]

export const ABOUT = {
  paragraph:
    "I'm a Computer Science Engineering student at St. Joseph's College of Engineering and Technology, working toward my B.Tech. I like turning ideas into working web applications, from the React interface someone clicks on to the Node.js and MongoDB layers behind it. Projects, hackathons and a MERN stack internship have shaped how I build, and I'm always looking for the next problem worth solving, the next team worth learning from and the next technology worth picking up.",
  facts: [
    { label: 'Degree', value: 'B.Tech, Computer Science and Engineering' },
    { label: 'College', value: "St. Joseph's College of Engineering and Technology" },
    { label: 'Graduation', value: '2023 – 2027' },
    { label: 'CGPA', value: '7.27' },
    { label: 'Based in', value: 'Kerala, India' },
  ],
}

// ---------------------------------------------------------------------------
//  PROJECTS
//  To add a project, copy the commented template at the bottom into the array.
//  `art` picks a built-in illustration ('stillgood' | 'generic').
//  Add `image: yourImportedImage` later if you want a real screenshot instead.
// ---------------------------------------------------------------------------
export const PROJECTS = [
  {
    title: 'StillGood',
    category: 'Smart Surplus Food Sharing Platform',
    year: '2026',
    description:
      'A platform that enables restaurants to sell surplus food at discounted prices, so good food gets eaten instead of thrown away.',
    tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB'],
    responsibilities: [
      'Worked on frontend design.',
      'Contributed to backend integration as part of a team project.',
    ],
    // Replace with the repository or live-demo URL when it is ready.
    href: SOCIAL.github,
    linkLabel: 'View on GitHub',
    art: 'stillgood',
  },

  /* ---- TEMPLATE: copy, uncomment and fill in when you add another project ----
  {
    title: 'Project name',
    category: 'What kind of project it is',
    year: '2026',
    description: 'One or two sentences about what it does.',
    tech: ['Tech 1', 'Tech 2'],
    responsibilities: ['What you built or owned.'],
    href: 'https://github.com/Nikhiljomon05/your-repo',
    linkLabel: 'View on GitHub',
    art: 'generic',
  },
  ---------------------------------------------------------------------------- */
]

export const SKILL_GROUPS = [
  {
    title: 'Programming Languages',
    icon: 'code',
    items: ['Java', 'Python', 'C', 'JavaScript'],
  },
  {
    title: 'Frontend & Web',
    icon: 'layout',
    items: ['HTML', 'CSS', 'React.js'],
  },
  {
    title: 'Backend',
    icon: 'server',
    items: ['Node.js', 'Express.js', 'REST APIs', 'Authentication'],
  },
  {
    title: 'Database',
    icon: 'database',
    items: ['MongoDB', 'SQL'],
  },
  {
    title: 'Tools & Platforms',
    icon: 'wrench',
    items: ['Git', 'GitHub', 'VS Code'],
  },
]

export const CORE_CONCEPT = {
  title: 'Full-Stack Development',
  text: 'Building the interface people use and the server, database and authentication behind it.',
}

export const EDUCATION = [
  {
    degree: 'Bachelor of Technology — Computer Science and Engineering',
    school: "St. Joseph's College of Engineering and Technology",
    period: '2023 – 2027',
    note: 'CGPA: 9.06',
  },
  {
    degree: 'Higher Secondary',
    school: 'St Augustine HSS, Ramapuram',
    period: '2021 – 2023',
  },
]

export const CERTIFICATIONS = [
  { issuer: 'Infosys Springboard', title: 'Data Structures and Algorithms' },
  { issuer: 'Infosys Springboard', title: 'Java Programming Fundamentals' },
  { issuer: 'Infosys Springboard', title: 'Basics of Python' },
  { issuer: 'Infosys Springboard', title: 'Software Engineering' },
  { issuer: 'Infosys Springboard', title: 'CompTIA IT Fundamentals: Operating Systems' },
]

export const EXPERIENCE = [
  {
    role: 'MERN Stack Intern',
    company: 'Spectrum Softtech Solutions Pvt. Ltd.',
    period: 'June 2025 – July 2025',
    points: [
      'Worked with React.js, MongoDB, Express.js, HTML and CSS during a MERN stack internship.',
      'Gained exposure to frontend development, backend integration and database connectivity.',
    ],
    tech: ['React.js', 'MongoDB', 'Express.js', 'HTML', 'CSS'],
  },
]

// A general workflow — not a claim that every project followed these exact steps.
export const PROCESS = [
  { title: 'Discover', text: 'Understand the problem and requirements.', icon: 'search' },
  { title: 'Plan', text: 'Organize features and architecture.', icon: 'clipboard' },
  { title: 'Design', text: 'Prepare the interface and user flow.', icon: 'pen' },
  { title: 'Develop', text: 'Build frontend and backend functionality.', icon: 'code' },
  { title: 'Test', text: 'Identify and fix issues.', icon: 'bug' },
  { title: 'Deliver', text: 'Prepare the final application.', icon: 'rocket' },
]

export const LANGUAGES = ['English', 'Malayalam', 'Hindi']

export const INTERESTS = [
  { label: 'Reading & Writing', icon: 'book' },
  { label: 'Travelling', icon: 'plane' },
  { label: 'Sports', icon: 'trophy' },
]
