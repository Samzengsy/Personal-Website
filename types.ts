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

export interface ProjectGroup {
  id: string;
  label: string;
  items: string[];
}
