import { 
  Linkedin, 
  Github, 
  Twitter, 
  Home, 
  Box, 
  Youtube, 
  MessageSquare, 
  GraduationCap,
  Mail,
  Camera,
  FileText
} from 'lucide-react';
import { SocialLink, NavItem, Project, ContentItem, PhotoItem } from './types';

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
  { name: 'Email', icon: Mail, url: 'mailto:zengshenyan0308@163.com', bgColor: 'bg-red-500', textColor: 'text-white' },
  { name: 'GitHub', icon: Github, url: 'https://github.com/your-github-id', bgColor: 'bg-[#333]', textColor: 'text-white' },
  { name: 'Scholar', icon: GraduationCap, url: '#', bgColor: 'bg-[#4285F4]', textColor: 'text-white' },
  { name: 'LinkedIn', icon: Linkedin, url: '#', bgColor: 'bg-[#0077b5]', textColor: 'text-white' }
];

export const NAV_ITEMS: NavItem[] = [
  { label: '主页', icon: Home, id: 'home' },
  { label: '科研项目', icon: Box, id: 'projects' },
  { label: '技术分享', icon: Youtube, id: 'videos' },
  { label: '生活掠影', icon: Camera, id: 'life' },
  { label: '联系我', icon: MessageSquare, id: 'contact' },
];

export const PROJECTS: Project[] = [
  { 
    id: '1', 
    title: 'Multimodal Reasoning', 
    icon: '🧠', 
    stats: '+43% F1',
    description: 'Benchmarked Qwen3-VL+DCRL model, achieving SOTA on ReasonMatch.'
  },
  { 
    id: '2', 
    title: 'Document AI Pipeline', 
    icon: '📄', 
    stats: '98.8% Acc',
    description: 'Fine-tuned SmolVLM2 for automated PDF-to-Excel conversion.'
  },
  { 
    id: '3', 
    title: 'Inference Optimization', 
    icon: '⚡', 
    stats: '3.2x Speed',
    description: 'Deployed vLLM pipelines on NAS with FlashAttention & TensorRT.'
  },
];

export const CONTENT_ITEMS: ContentItem[] = [
  { 
    id: '1', 
    title: 'Spatial Reasoning in VLMs: A Unified Evaluation Pipeline', 
    thumbnail: '/data/joshua-tree.jpg', // Placeholder
    url: '#' 
  },
  { 
    id: '2', 
    title: 'Optimizing Model Inference with vLLM & TensorRT', 
    thumbnail: '/data/yosemite.jpg', // Placeholder
    url: '#' 
  },
  { 
    id: '3', 
    title: 'Deep Dive into RANSAC & Circular Evaluation', 
    thumbnail: '/data/meteor.jpg', // Placeholder
    url: '#' 
  },
];

export const LIFESTYLE = {
  description: "Based in Nanjing. 📍 Dog lover 🐕 | Nature Seeker 🌲 | Traveler ✈️ Capturing the wild and the beautiful. 📸",
  photos: [
    { 
      id: '1', 
      src: '/data/joshua-tree.jpg', 
      caption: '约书亚树国家公园的荒漠' 
    },
    { 
      id: '2', 
      src: '/data/yosemite.jpg', 
      caption: '优胜美地国家公园的星空' 
    },
    { 
      id: '3', 
      src: '/data/meteor.jpg', 
      caption: '流星' 
    },
    { 
      id: '4', 
      src: '/data/los-angeles.jpg', 
      caption: '洛杉矶' 
    },
  ] as PhotoItem[]
};