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

export const ASSET_BASE = import.meta.env.BASE_URL;

// Using string paths for images in the public/root data directory
// Note: Ensure the 'data' folder is at the project root and served by the web server
export const PROFILE = {
  name: 'Shenyan Zeng',
  title: 'Applied Mathematics B.S. | Research Assistant (CAD & CG Lab)',
  avatar: `${ASSET_BASE}data/selfie.jpg`,
  heroImage: `${ASSET_BASE}data/selfie.jpg`,
  aboutText:
    'Shenyan Zeng holds a B.S. in Applied Mathematics from UC Santa Barbara and is currently taking a deliberate gap year as a Research Assistant at Zhejiang University\'s State Key Lab of CAD & CG. His research interests are in Artificial Intelligence, especially multimodal systems, long-video understanding, and generative AI. He is motivated by building careful data pipelines and evaluation setups that make model behavior measurable and reproducible. This perspective comes from mathematical training and hands-on work with real-world data, where clarity and rigor matter as much as performance. He values interdisciplinary collaboration, clear communication, and translating research ideas into practical, well-documented systems. Originally from Nanjing, he values observation and craft, whether in field work or everyday life. Outside of research, he enjoys photography, exploring nature, experimenting with cooking, appreciating fragrance, and spending time with dogs. He aims to grow as an early-stage researcher by combining theoretical grounding with practical system building.'
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
    title: 'CVPR Paper',
    status: 'Accepted (to appear)',
    venue: 'CVPR',
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
      { label: 'Undergrad 1' },
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
    items: [
      {
        id: '1',
        src: `${ASSET_BASE}data/joshua-tree.jpg`,
        alt: 'Joshua Tree',
        location: 'Joshua Tree',
        year: 'Not specified',
        note: 'From existing photography set.'
      },
      {
        id: '2',
        src: `${ASSET_BASE}data/yosemite.jpg`,
        alt: 'Yosemite',
        location: 'Yosemite',
        year: 'Not specified',
        note: 'From existing photography set.'
      },
      {
        id: '3',
        src: `${ASSET_BASE}data/meteor.jpg`,
        alt: 'Meteor',
        location: 'Meteor',
        year: 'Not specified',
        note: 'From existing photography set.'
      },
      {
        id: '4',
        src: `${ASSET_BASE}data/los-angeles.jpg`,
        alt: 'Los Angeles',
        location: 'Los Angeles',
        year: 'Not specified',
        note: 'From existing photography set.'
      }
    ]
  },
  travel: {
    title: 'Travel',
    subtitle: 'Places, routes, and observations from the road.',
    items: []
  },
  sports: {
    title: 'Sports',
    subtitle: 'Movement, discipline, and the habits that keep me sharp.',
    items: []
  },
  music: {
    title: 'Music',
    subtitle: 'Listening notes, live sets, and pieces on repeat.',
    items: []
  },
  wine: {
    title: 'Wine',
    subtitle: 'Notes on regions, pairings, and craft.',
    items: []
  },
  fragrance: {
    title: 'Fragrance',
    subtitle: 'Scent, memory, and the small details that linger.',
    items: []
  }
};
