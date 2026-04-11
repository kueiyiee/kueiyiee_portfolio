import {
  FaBrain,
  FaBug,
  FaCloud,
  FaDatabase,
  FaGoogle,
  FaGraduationCap,
  FaMobileAlt,
  FaNetworkWired,
  FaProjectDiagram,
  FaRobot,
  FaShareAlt,
  FaShieldAlt,
  FaSkull,
  FaUniversity,
  FaVoteYea,
} from 'react-icons/fa';

export const profile = {
  name: 'Kuei Poch Kuei',
  initials: 'KP',
  greeting: "Hello! I'm",
  role: ' Full-Stack Developer & Creative Thinker',
  typingRoles: [
    'Full-Stack Developer',
    'Security Engineer',
    'Creative Thinker',
  ],
  heroImage: 'https://i.postimg.cc/gkBqXP2Q/kpk.jpg',
  tagline: 'Building secure, scalable systems and solving real-world problems through code.',
  location: 'Dilla, Ethiopia',
  emailPrimary: 'Kuei.poch@du.edu.et',
  emailSecondary: 'kueiyiee@gmail.com',
  phone: '+251937910246',
  website: 'https://kueiyiee.tech',
  linkedin: 'https://linkedin.com/in/kueiyiee',
  github: 'https://github.com/kueiyiee',
  resumeUrl: 'https://drive.google.com/file/d/1NkPPwQCtxZCFFq31ekMq5PctuLtxydUP/view?usp=drivesdk',
};

export const navItems = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'education', label: 'Education' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'certifications', label: 'Certifications' },
  { id: 'contact', label: 'Contact' },
];

export const experience = [
  {
    role: 'Cyber Security Intern (Remote)',
    company: 'CodeAlpha',
    location: 'Lucknow, India',
    period: '2026 – Present',
    highlights: [
      'Developed 3 cybersecurity projects focused on detection and secure engineering practices.',
      'Performed network traffic analysis to identify anomalies and potential attack signatures.',
      'Applied secure coding standards across scripts and automation tasks.',
      'Delivered technical presentations on threat modeling and mitigation strategy.',
    ],
  },
];

export const aboutText =
  'I am a 3rd-year Computer Science student at Dilla University, building a strong foundation in full-stack engineering and scalable system design. I focus on high-performance, user-centered applications with clean architecture, reliability, and long-term scalability. Driven by a product mindset, I build real-world solutions that bridge ideas and execution through disciplined engineering and continuous learning.';

export const education = [
  {
    degree: 'Bachelor of Science in Computer Science',
    institution: 'Dilla University',
    yearStart: 2023,
    yearEnd: 2027,
    status: 'Ongoing',
    details:
      'Cybersecurity concentration and web development with coursework in algorithms, data structures, system design, network security, and software engineering.',
  },
  {
    degree: 'Secondary School Certificate',
    institution: 'DICAC Secondary School',
    yearStart: 2018,
    yearEnd: 2022,
    status: 'Completed',
    details: 'Science track focused on mathematics, physics, and computing fundamentals.',
  },
  {
    degree: 'South Sudan Certificate of Primary Education',
    institution: 'Motot Primary School',
    yearStart: 2010,
    yearEnd: 2017,
    status: 'Completed',
    details: 'Completed foundational education in Motot Payam, Bieh State.',
  },
];

export const skills = {
  programming: [
    { name: 'Python', color: '#3776AB' },
    { name: 'Java', color: '#007396' },
    { name: 'JavaScript', color: '#F7DF1E', darkText: true },
    { name: 'C++', color: '#00599C' },
    { name: 'PHP', color: '#777BB4' },
    { name: 'HTML5', color: '#E34F26' },
    { name: 'CSS3', color: '#1572B6' },
  ],
  cybersecurity: [
    { name: 'Penetration Testing' },
    { name: 'Network Security' },
    { name: 'Ethical Hacking' },
    { name: 'Threat Analysis' },
  ],
  tools: [
    { name: 'Git', color: '#F1502F' },
    { name: 'Linux', color: '#111827' },
    { name: 'MySQL', color: '#4479A1' },
    { name: 'Power BI', color: '#F2C811', darkText: true },
  ],
};

export const certifications = [
  {
    name: 'CompTIA Security+',
    description: 'Core security concepts, threat management, and cryptography best practices.',
    color: '#cc0000',
    Icon: FaShieldAlt,
  },
  {
    name: 'CompTIA CySA+',
    description: 'Behavioral analytics, detection engineering, and incident response workflows.',
    color: '#f7931e',
    Icon: FaProjectDiagram,
  },
  {
    name: 'Google Data Analytics',
    description: 'Data analysis across SQL, R, and dashboard-driven reporting.',
    color: '#4285f4',
    Icon: FaGoogle,
  },
  {
    name: 'HarvardX Statistics',
    description: 'Probability, statistical inference, and model-driven analysis.',
    color: '#a51c30',
    Icon: FaUniversity,
  },
  {
    name: 'Ethical Hacking (CEHv12)',
    description: 'Footprinting, enumeration, exploitation tactics, and threat simulation.',
    color: '#6a0dad',
    Icon: FaSkull,
  },
  {
    name: 'Cloud Digital Leader',
    description: 'Cloud strategy, architecture fundamentals, and digital transformation.',
    color: '#1a73e8',
    Icon: FaCloud,
  },
  {
    name: 'CCNA Cybersecurity Operations',
    description: 'SOC operations, SIEM monitoring, and practical incident analysis.',
    color: '#0073e6',
    Icon: FaNetworkWired,
  },
  {
    name: 'Monitoring and Evaluation (MEAL)',
    description: 'Data-driven evaluation frameworks and performance accountability models.',
    color: '#e67e22',
    Icon: FaProjectDiagram,
  },
];

export const projects = [
  {
    name: 'AI Threat Intelligence System',
    description:
      'Machine learning workflow that predicts emerging cyber threats by processing CVE feeds and threat signals.',
    Icon: FaRobot,
    iconColor: '#00a86b',
    tags: ['Python', 'scikit-learn', 'Flask'],
    codeUrl: 'https://github.com/kueiyiee/Secure-Guardian-Suite.git',
    demoUrl: 'https://secure-guardian-suite-woad.vercel.app/',
    screenshot:
      'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80',
  },
  {
    name: 'Blockchain Voting Platform',
    description:
      'Secure and transparent voting dApp architecture with smart contracts and rollup-ready verification flow.',
    Icon: FaVoteYea,
    iconColor: '#3498db',
    tags: ['Solidity', 'Web3', 'React'],
    codeUrl: 'https://github.com/kueiyiee/Secure-Guardian-Suite.git',
    demoUrl: 'https://secure-guardian-suite-woad.vercel.app/',
    screenshot:
      'https://images.unsplash.com/photo-1639322537228-f710d846310a?auto=format&fit=crop&w=1200&q=80',
  },
  {
    name: 'Cyber Threat Dashboard',
    description:
      'Real-time security dashboard for SOC analysts using telemetry pipelines and visual correlation alerts.',
    Icon: FaProjectDiagram,
    iconColor: '#e67e22',
    tags: ['Kibana', 'ELK', 'D3'],
    codeUrl: 'https://github.com/kueiyiee/Secure-Guardian-Suite.git',
    demoUrl: 'https://secure-guardian-suite-woad.vercel.app/',
    screenshot:
      'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80',
  },
  {
    name: 'Penetration Testing Toolkit',
    description:
      'Automation toolkit for reconnaissance, reporting, and exploit simulation with modular security plugins.',
    Icon: FaBug,
    iconColor: '#e74c3c',
    tags: ['Python', 'Bash', 'Nmap'],
    codeUrl: 'https://github.com/kueiyiee/Secure-Guardian-Suite.git',
    demoUrl: 'https://secure-guardian-suite-woad.vercel.app/',
    screenshot:
      'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1200&q=80',
  },
  {
    name: 'Secure Data Warehouse',
    description:
      'Encrypted data architecture with role-based policies and governance controls for sensitive workloads.',
    Icon: FaDatabase,
    iconColor: '#9b59b6',
    tags: ['SQL', 'Hadoop', 'Kerberos'],
    codeUrl: 'https://github.com/kueiyiee/Secure-Guardian-Suite.git',
    demoUrl: 'https://secure-guardian-suite-woad.vercel.app/',
    screenshot:
      'https://images.unsplash.com/photo-1510511459019-5dda7724fd87?auto=format&fit=crop&w=1200&q=80',
  },
  {
    name: 'Mobile App Security Scanner',
    description:
      'Hybrid static-dynamic scanner for Android apps with automated findings and policy severity scoring.',
    Icon: FaMobileAlt,
    iconColor: '#1abc9c',
    tags: ['Java', 'APKTool', 'OWASP'],
    codeUrl: 'https://github.com/kueiyiee/Secure-Guardian-Suite.git',
    demoUrl: 'https://secure-guardian-suite-woad.vercel.app/',
    screenshot:
      'https://images.unsplash.com/photo-1527430253228-e93688616381?auto=format&fit=crop&w=1200&q=80',
  },
  {
    name: 'AI for Science: Nonlinear Systems',
    description:
      'Numerical methods project using probabilistic inference and scientific computing for nonlinear systems.',
    Icon: FaBrain,
    iconColor: '#6a4c9c',
    tags: ['Python', 'NumPy', 'SciPy'],
    codeUrl: 'https://github.com/kueiyiee/scienceai-enhancer.git',
    demoUrl: '',
    screenshot:
      'https://i.postimg.cc/2j4NV0Jh/SCREENSHOT.jpg',
  },
  {
    name: 'ShareIT Premium Suite',
    description:
      'Enterprise-grade file sharing platform with real-time desktop notifications and secure transfer channels.',
    Icon: FaShareAlt,
    iconColor: '#007396',
    tags: ['Java', 'JavaFX'],
    codeUrl: 'https://github.com/kueiyiee/ShareIT-Premium-Suite-Ultra.git',
    demoUrl: '',
    screenshot:
      'https://i.postimg.cc/nrGfQJf4/5942933161169849726.jpg',
  },
  {
    name: 'Secure Exam Browser',
    description:
      'Lockdown browser designed for secure exam sessions with proctoring workflow and anti-tamper controls.',
    Icon: FaGraduationCap,
    iconColor: '#e67e22',
    tags: ['Java', 'JavaFX'],
    codeUrl: 'https://github.com/elson2121/Secure_Exam_Control_System.git',
    demoUrl: '',
    screenshot:
      'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&q=80',
  },
];

export const seo = {
  siteUrl: 'https://www.kueiyiee.tech',
  image: 'https://i.postimg.cc/gkBqXP2Q/kpk.jpg',
  title:
    'Kuei Poch Kuei ·Full-Stack Dev & Security Engineer',
  description:
    'Full-Stack Developer and Creative Thinker.',
};
