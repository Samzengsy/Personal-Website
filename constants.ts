import { 
  Linkedin, 
  Github, 
  Home, 
  Box, 
  MessageSquare, 
  GraduationCap,
  Camera,
  Instagram
} from 'lucide-react';
import { SocialLink, NavItem, ProjectGroup } from './types';

// Using string paths for images in the public/root data directory
// Note: Ensure the 'data' folder is at the project root and served by the web server
export const PROFILE = {
  name: "Shenyan Zeng",
  title: "Applied Math @ UCSB | AI Researcher",
  avatar: "/data/selfie.jpg", 
  heroImage: "/data/selfie.jpg", 
  bioPoints: [
    "Research Assistant @ State Key Lab of CAD & CG, Zhejiang University (Advisor: Prof. Chunhua Shen).",
    "B.S. in Applied Mathematics @ UC Santa Barbara (Sep 2021–Mar 2025).",
    "Intern Experience: AI Algorithm Engineer @ Wind Information Co., Ltd.",
    "Tech Stack: Python, PyTorch, vLLM, HuggingFace, Multimodal LLMs, Computer Vision."
  ]
};

export const RESUME_URL = "/data/resume.pdf"; 

export const SOCIAL_LINKS: SocialLink[] = [
  { name: 'Instagram', icon: Instagram, url: 'https://www.instagram.com/sam_zengsy/', bgColor: 'bg-gradient-to-br from-pink-500 via-purple-500 to-yellow-500', textColor: 'text-white' },
  { name: 'GitHub', icon: Github, url: 'https://github.com/Samzengsy', bgColor: 'bg-[#333]', textColor: 'text-white' },
  { name: 'UCSB Math', icon: GraduationCap, url: 'https://www.math.ucsb.edu/', bgColor: 'bg-[#4285F4]', textColor: 'text-white' },
  { name: 'LinkedIn', icon: Linkedin, url: 'https://www.linkedin.com/in/shenyanzeng-1949442b7', bgColor: 'bg-[#0077b5]', textColor: 'text-white' }
];

export const NAV_ITEMS: NavItem[] = [
  { label: 'About me', icon: Home, id: 'home' },
  { label: '求学经历', icon: GraduationCap, id: 'education' },
  { label: '项目回顾', icon: Box, id: 'projects' },
  { label: '生活掠影', icon: Camera, id: 'life' },
  { label: 'contact me', icon: MessageSquare, id: 'contact' },
];

export const PROJECT_GROUPS: ProjectGroup[] = [
  {
    id: 'undergrad',
    label: '本科',
    items: ['本科1', '本科2']
  },
  {
    id: 'wind',
    label: '万得',
    items: ['万得1', '万得2']
  },
  {
    id: 'zju',
    label: 'ZJU',
    items: ['ZJU1', 'ZJU2']
  }
];
