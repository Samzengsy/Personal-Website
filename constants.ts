import {
  Linkedin,
  Github,
  Home,
  MessageSquare,
  GraduationCap,
  Camera,
  Instagram,
  User,
  BookOpen,
  Briefcase,
  Wrench,
  Box
} from 'lucide-react';
import { SocialLink, NavItem, ProjectGroup } from './types';

const getRuntimeBase = () => {
  const base = import.meta.env.BASE_URL || '/';
  const ensureSlash = (value: string) => (value.endsWith('/') ? value : `${value}/`);

  if (typeof window === 'undefined') {
    return ensureSlash(base);
  }

  if (base === './') {
    const path = window.location.pathname;
    const root = path.includes('/lifestyle/') ? path.split('/lifestyle/')[0] : path;
    const normalized = ensureSlash(root === '' ? '/' : root);
    return `${window.location.origin}${normalized}`;
  }

  if (base.startsWith('http')) {
    return ensureSlash(base);
  }

  const normalizedBase = base.startsWith('/') ? base : `/${base}`;
  return `${window.location.origin}${ensureSlash(normalizedBase)}`;
};

export const ASSET_BASE = getRuntimeBase();

// Using string paths for images in the public/root data directory
// Note: Ensure the 'data' folder is at the project root and served by the web server
export const PROFILE = {
  name: 'Shenyan Zeng',
  title: 'Applied Mathematics B.S. | Research Assistant (CAD & CG Lab)',
  avatar: `${ASSET_BASE}data/selfie.jpg`,
  heroImage: `${ASSET_BASE}data/selfie.jpg`,
  aboutText:
    'I studied Applied Mathematics at UC Santa Barbara. During my gap year, I explored applied AI through an internship at Wind and research work at Zhejiang University. I’m especially interested in computer vision and multimodal reasoning, and I like building evaluation workflows that make model behavior easier to understand. I also enjoy creating clean data pipelines and small tools that help teams test ideas quickly. This site collects my academic background, project work, and a few personal notes as I continue learning.'
};

export const HERO_KEYWORDS = [
  'Multimodal AI',
  'Long-Video Understanding',
  'Generative AI'
];

export const EMAIL = 'zengshenyan0308@163.com';

export const RESUME_URL = `${ASSET_BASE}data/resume.pdf`;

export const SOCIAL_LINKS: SocialLink[] = [
  { name: 'Instagram', icon: Instagram, url: 'https://www.instagram.com/sam_zengsy/', bgColor: 'bg-gradient-to-br from-pink-500 via-purple-500 to-yellow-500', textColor: 'text-white' },
  { name: 'GitHub', icon: Github, url: 'https://github.com/Samzengsy', bgColor: 'bg-[#333]', textColor: 'text-white' },
  { name: 'UCSB Math', icon: GraduationCap, url: 'https://www.math.ucsb.edu/', bgColor: 'bg-[#4285F4]', textColor: 'text-white' },
  { name: 'LinkedIn', icon: Linkedin, url: 'https://www.linkedin.com/in/shenyanzeng-1949442b7', bgColor: 'bg-[#0077b5]', textColor: 'text-white' }
];

export const NAV_ITEMS: NavItem[] = [
  { label: 'Hero', icon: Home, id: 'home' },
  { label: 'About', icon: User, id: 'about' },
  { label: 'Publications', icon: BookOpen, id: 'publications' },
  { label: 'Academic', icon: GraduationCap, id: 'academic' },
  { label: 'Industry', icon: Briefcase, id: 'industry' },
  { label: 'Research', icon: BookOpen, id: 'research' },
  { label: 'Projects', icon: Box, id: 'projects' },
  { label: 'Skills', icon: Wrench, id: 'skills' },
  { label: 'Lifestyle', icon: Camera, id: 'life' },
  { label: 'Contact', icon: MessageSquare, id: 'contact' }
];

export const PUBLICATIONS = [
  {
    id: 'cvpr-accepted',
    title: 'Eliciting Complex Spatial Reasoning in MLLMs through Wide-Baseline Matching',
    status: 'Accepted to CVPR 2026 (to appear)',
    venue: 'CVPR 2026',
    links: {
      openReview: undefined,
      preprint: undefined,
      project: undefined
    }
  }
];

export const PROJECT_GROUPS: ProjectGroup[] = [
  {
    id: 'undergrad',
    label: 'Undergrad',
    items: [
      { label: 'Undergrad 1', url: `${ASSET_BASE}data/Math_Final_Project.pdf` },
      {
        label: 'HOUSING CRISIS AWARENESS CAMPAIGN',
        url: `${ASSET_BASE}data/Final%20Report_%20Housing%20Crisis%20Awareness%20Campaign.pdf`,
        thumbnail: `${ASSET_BASE}data/housing-crisis-preview.png`
      }
    ]
  },
  {
    id: 'wind',
    label: 'Wind',
    items: [
      {
        label: 'Dataset Prep Tools',
        url: 'https://github.com/Samzengsy/dataset-prep-tools',
        thumbnail: 'https://opengraph.githubassets.com/1/Samzengsy/dataset-prep-tools'
      },
      {
        label: 'Vision Eval Tools',
        url: 'https://github.com/Samzengsy/vision-eval-tools',
        thumbnail: 'https://opengraph.githubassets.com/1/Samzengsy/vision-eval-tools'
      },
      {
        label: 'Error Analysis UI',
        url: 'https://github.com/Samzengsy/error-analysis-ui',
        thumbnail: 'https://opengraph.githubassets.com/1/Samzengsy/error-analysis-ui'
      }
    ]
  },
  {
    id: 'zju',
    label: 'ZJU',
    items: [
      { label: 'ZJU 1' },
      { label: 'ZJU 2' }
    ]
  }
];

export const LIFESTYLE_PAGES = {
  photography: {
    title: 'Photography',
    subtitle: 'Studies in light, landscape, and atmosphere.',
    intro: [
      'Gear: Canon EOS 6D Mark II and DJI Pocket 3. 📷',
      'I prefer natural landscapes over portraits, and fell in love with astrophotography during college. I occasionally shoot cityscapes. 🌌',
      'Most of these photos were taken while I was studying in the U.S. 🇺🇸'
    ],
    items: [
      {
        id: '1',
        src: `${ASSET_BASE}data/joshua-tree.jpg`,
        alt: 'Joshua Tree',
        location: 'Joshua Tree',
        year: 'Undated',
        note: 'From existing photography archive.'
      },
      {
        id: '2',
        src: `${ASSET_BASE}data/yosemite.jpg`,
        alt: 'Yosemite',
        location: 'Yosemite',
        year: 'Undated',
        note: 'From existing photography archive.'
      },
      {
        id: '3',
        src: `${ASSET_BASE}data/meteor.jpg`,
        alt: 'Meteor',
        location: 'Meteor',
        year: 'Undated',
        note: 'From existing photography archive.'
      },
      {
        id: '4',
        src: `${ASSET_BASE}data/los-angeles.jpg`,
        alt: 'Los Angeles',
        location: 'Los Angeles',
        year: 'Undated',
        note: 'From existing photography archive.'
      }
    ]
  },
  travel: {
    title: 'Travel',
    subtitle: 'Places, routes, and observations from the road.',
    intro: [
      'Born and raised in Nanjing. 📍',
      'I have visited five continents and more than ten countries, including Thailand, Japan, South Korea, Germany, France, Italy, Switzerland, South Africa, Seychelles, Kenya, the United States, Mexico, Australia, and New Zealand. ✈️'
    ],
    items: []
  },
  sports: {
    title: 'Sports',
    subtitle: 'Movement, discipline, and the habits that keep me sharp.',
    intro: [
      'I have practiced Chinese martial arts since childhood (Taiji and Baguazhang). 🥋',
      'I enjoy basketball and strength training, but I also love good food, so I cycle through cutting phases. 🏀'
    ],
    items: []
  },
  music: {
    title: 'Music',
    subtitle: 'Listening notes, live sets, and pieces on repeat.',
    intro: [
      'I love singing and was a tenor in choir through high school and college. 🎶',
      'I also play guitar, and singing by the UCSB shoreline felt especially romantic. 🎸'
    ],
    items: []
  },
  'wine-tasting': {
    title: 'Wine Tasting',
    subtitle: 'Notes on regions, pairings, and craft.',
    intro: [
      'After turning 21 and living in Santa Barbara, I became interested in wine in a strong local wine region. 🍷',
      'I took the UCSB wine class, explore different bottles regularly, and visit downtown tasting rooms. 🍇'
    ],
    items: []
  }
};
