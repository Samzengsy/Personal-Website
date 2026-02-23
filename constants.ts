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
      '📷 Photography',
      'I shoot with a Canon EOS 6D Mark II and a DJI Pocket 3 📸. Compared to portraits, I’m more drawn to natural landscapes — mountains ⛰️, open skies ☁️, quiet light before sunset 🌅. During my university years in the U.S., I fell in love with photographing the night sky ✨. There was something peaceful about standing alone with a tripod under the stars 🌌. Occasionally, I capture city skylines too 🏙️, but most of these photos were taken while I was studying abroad, when I first began carrying a camera everywhere I went 🎒.'
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
      '🌍 Travel',
      'Born and raised in Nanjing 📍, I’ve always been curious about how different places feel and function 🗺️. Over the years, I’ve traveled across five continents and visited more than ten countries ✈️ — from Thailand 🇹🇭, Japan 🇯🇵, and Korea 🇰🇷, to Germany 🇩🇪, France 🇫🇷, Italy 🇮🇹, and Switzerland 🇨🇭; from South Africa 🇿🇦, Seychelles 🇸🇨, and Kenya 🇰🇪, to the United States 🇺🇸, Mexico 🇲🇽, Australia 🇦🇺, and New Zealand 🇳🇿. Each place reshaped my sense of scale and perspective in its own way 🌍.'
    ],
    items: []
  },
  sports: {
    title: 'Sports',
    subtitle: 'Movement, discipline, and the habits that keep me sharp.',
    intro: [
      '🏀 Sports',
      'I started practicing Chinese martial arts when I was young — mainly Tai Chi ☯️ and Baguazhang 🥋. Those early years shaped my sense of balance and discipline 🧘‍♂️. I also enjoy playing basketball ⛹️‍♂️ and going to the gym 💪. To be honest, I love food even more 🍔, which means I often find myself going through repeated cutting phases 🏃‍♂️. It’s an ongoing cycle 🔄.'
    ],
    items: []
  },
  music: {
    title: 'Music',
    subtitle: 'Listening notes, live sets, and pieces on repeat.',
    intro: [
      '🎵 Music',
      'Music has always been part of my life 🎶. I was a tenor in choir during both high school and university 🎤, and I still enjoy singing whenever I get the chance. I also play the guitar 🎸. Some of my favorite memories are from my time at UC Santa Barbara 🌴 — singing by the ocean at sunset felt simple and unexpectedly romantic 🌅🌊.'
    ],
    items: []
  },
  'wine-tasting': {
    title: 'Wine Tasting',
    subtitle: 'Notes on regions, pairings, and craft.',
    intro: [
      '🍷 Wine Tasting',
      'After turning 21 and living in Santa Barbara — one of California’s well-known wine regions 🍇 — I naturally became interested in wine 🍷. I took a wine class at UCSB 🎓 and began exploring different varietals and regions on my own 🗺️. I often visited tasting rooms downtown 🥂 and gradually learned to appreciate balance, structure, and how wine evolves with time ⏳. It became less about drinking and more about understanding 💡.'
    ],
    items: []
  }
};
