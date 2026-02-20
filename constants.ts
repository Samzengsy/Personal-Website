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
  title: "Applied Math @ UCSB",
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
  { label: 'About Me', icon: Home, id: 'home' },
  { label: 'Experience', icon: GraduationCap, id: 'experience' },
  { label: 'Project Review', icon: Box, id: 'projects' },
  { label: 'Lifestyle', icon: Camera, id: 'life' },
  { label: 'Contact Me', icon: MessageSquare, id: 'contact' },
];

export const PROJECT_GROUPS: ProjectGroup[] = [
  {
    id: 'undergrad',
    label: 'Undergrad',
    items: [
      { label: 'Undergrad 1' },
      { 
        label: 'HOUSING CRISIS AWARENESS CAMPAIGN', 
        url: '/data/Final%20Report_%20Housing%20Crisis%20Awareness%20Campaign.pdf',
        thumbnail: '/data/housing-crisis-preview.png'
      }
    ]
  },
  {
    id: 'wind',
    label: 'Wind',
    items: [
      { label: 'Dataset Prep Tools', url: 'https://github.com/Samzengsy/dataset-prep-tools' },
      { label: 'Vision Eval Tools', url: 'https://github.com/Samzengsy/vision-eval-tools' },
      { label: 'Error Analysis UI', url: 'https://github.com/Samzengsy/error-analysis-ui' }
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
