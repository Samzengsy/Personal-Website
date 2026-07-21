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

export interface ProjectItem {
  label: string;
  url?: string;
  links?: {
    label: string;
    url: string;
  }[];
  thumbnail?: string;
}

export interface ProjectGroup {
  id: string;
  label: string;
  items: ProjectItem[];
}

export type LifestyleSlug = 'photography' | 'travel' | 'music' | 'wine-tasting';

export interface LifestyleGalleryItem {
  id: string;
  src?: string;
  alt?: string;
  width?: number;
  height?: number;
  location?: string;
  year?: string;
  note?: string;
}

export interface LifestylePageData {
  title: string;
  subtitle?: string;
  intro?: string[];
  items: LifestyleGalleryItem[];
}
