export const siteMeta = {
  title: 'Angel Cilfone | Full Stack Developer',
  description:
    'Full stack developer in Rosario, Argentina building production systems end-to-end, from architecture and backend to deployment and support.',
  siteName: 'Angel Cilfone Portfolio',
  ogImagePath: '/og-image.svg',
  themeColor: '#0a0a0f',
  keywords:
    'Angel Cilfone, full stack developer, backend developer, Laravel developer, React developer, Rosario Argentina, portfolio',
};

export const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#stack', label: 'Stack' },
  { href: '#featured', label: 'Featured' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
];

export const aboutParagraphs = [
  'Self-directed full stack developer based in <strong>Rosario, Argentina</strong>. <strong>3+ years of freelance experience</strong> building and maintaining real production systems solo &mdash; from requirements to deployment.',
  'Systems Engineering student at <strong>UTN</strong>. Passionate about backend architecture, cloud infrastructure, and building tools that solve actual problems &mdash; not just demos.',
  "I work best on systems where correctness and reliability matter: billing platforms, multi-tenant SaaS, integrations with external APIs. If it runs in production and real users depend on it, that's where I thrive.",
];

export const traits = [
  {
    iconHtml: '&#9889;',
    title: 'Curiosity-driven',
    description:
      'Constantly exploring new patterns, architectures, and tooling &mdash; then actually using them in production.',
  },
  {
    iconHtml: '&#127760;',
    title: 'Remote-native',
    description:
      'Built for async collaboration. Clear communicator across time zones, zero hand-holding needed.',
  },
  {
    iconHtml: '&#127959;&#65039;',
    title: 'End-to-end ownership',
    description: 'Requirements &rarr; architecture &rarr; deployment &rarr; support. No handoffs, no gaps.',
  },
];

export const stackCategories = [
  { label: 'Languages', techs: ['PHP', 'Java', 'JavaScript', 'TypeScript', 'SQL'] },
  { label: 'Frameworks', techs: ['Laravel', 'Spring Boot', 'React', 'React Native', 'Vite', 'Tailwind CSS'] },
  { label: 'Databases', techs: ['MySQL'] },
  { label: 'Cloud & Infra', techs: ['AWS', 'REST APIs', 'JWT', 'Multi-tenant architecture'] },
  { label: 'Tools', techs: ['Git', 'Postman', 'Maven', 'Flyway'] },
];

export const experienceItems = [
  {
    role: 'Senior Developer',
    company: 'Transban &middot; SUBE &middot; Banco Municipal de Rosario',
    period: 'March 2023 &ndash; Present',
    type: 'Freelance &middot; Remote',
    description:
      "Built and maintain a billing management system integrated with Argentina's national transit card (SUBE) and Banco Municipal de Rosario. Handled full project lifecycle solo: requirements, architecture, development, deployment, testing, and ongoing support.",
    stack: ['PHP', 'Laravel', 'React Native', 'MySQL', 'AWS'],
  },
  {
    role: 'Full Stack Developer',
    company: 'Freelance Projects',
    period: 'Feb 2023 &ndash; Oct 2023',
    type: 'Remote',
    description:
      'Multiple simultaneous client projects: church data management system, maintenance department workflow system, billing and collections web + mobile app.',
    stack: ['PHP', 'Laravel', 'React Native', 'MySQL'],
  },
];

export const featuredProject = {
  productionStatus: 'Live in Production',
  productionNote: '2+ years in active use',
  name: 'CobroConnect',
  tagline: 'Production Billing Management System &middot; AWS &middot; Rosario, Argentina',
  description:
    "A billing and collections management system deployed on AWS, currently in active daily use. Integrated with <strong>SUBE</strong> (Argentina's national transit card) and <strong>Banco Municipal de Rosario</strong>. Built and maintained solo &mdash; requirements gathering, architecture, development, deployment, testing, and ongoing support from day one.",
  highlights: [
    { iconHtml: '&#128179;', text: 'Live system handling real financial transactions' },
    { iconHtml: '&#128241;', text: 'Web app + companion mobile app for field workers' },
    { iconHtml: '&#9729;&#65039;', text: 'Multi-user, deployed and hosted on AWS' },
    { iconHtml: '&#128295;', text: '2+ years of continuous maintenance & feature additions' },
  ],
  stack: ['PHP', 'Laravel', 'React Native', 'MySQL', 'AWS'],
  accessNote: 'Access restricted to client users.',
};

export const projects = [
  {
    name: 'Electroclima',
    tagline: 'Multi-tenant SaaS for HVAC professionals',
    description:
      'Vertical SaaS platform for independent HVAC technicians in Argentina. Centralizes client management, equipment registry, service orders, budgets, PDF generation, and Argentine-specific billing logic (monotributo limit tracking).',
    tech: ['Spring Boot', 'Java', 'React', 'TypeScript', 'Vite', 'Tailwind', 'TanStack Query', 'MySQL', 'JWT'],
    status: 'In Development',
    link: null,
  },
];

export const pipelineCard = {
  title: 'More in the pipeline',
  description: 'Additional projects shipping in 2025.<br />Reach out to hear more.',
};

export const contactLinks = [
  {
    href: 'mailto:angelcilfone@hotmail.com',
    label: 'Email',
    sublabel: 'angelcilfone@hotmail.com',
    variant: 'email',
  },
  {
    href: 'https://linkedin.com/in/angelcilfone',
    label: 'LinkedIn',
    sublabel: 'linkedin.com/in/angelcilfone',
    variant: 'linkedin',
    external: true,
  },
];
