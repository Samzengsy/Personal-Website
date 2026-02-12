import { LucideIcon } from 'lucide-react';

export interface SocialLink {
  name: string;
  icon: LucideIcon;
  url: string;
  bgColor?: string;
  textColor?: string;
}

export interface NavItem {
  label: string;
  icon: LucideIcon;
  id: string;
}

export interface Project {
  id: string;
  title: string;
  icon: string; // Emoji or URL
  stats: string;
  description?: string;
}

export interface ContentItem {
  id: string;
  title: string;
  thumbnail: string;
  url: string;
}

export interface PhotoItem {
  id: string;
  src: string;
  caption: string;
}