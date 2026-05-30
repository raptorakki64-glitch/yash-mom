/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Program {
  id: string;
  title: string;
  ageGroup: string;
  description: string;
  detailedDescription: string;
  colorScheme: {
    badge: string;
    bg: string;
    border: string;
    text: string;
    accent: string;
  };
  learningAreas: string[];
  schedule: string;
}

export interface MontessoriArea {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  iconName: string; // Used to determine which Lucide icon to render
}

export interface Testimonial {
  id: string;
  parentName: string;
  childAge: string;
  relationship: string; // e.g., "Mother of Kabir", "Father of Shanaya"
  text: string;
  rating: number;
}

export interface TimelineStep {
  step: number;
  title: string;
  subtitle: string;
  description: string;
  items: string[];
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'sensorial' | 'practical-life' | 'language' | 'math' | 'culture' | 'all';
  imageSrc: string;
  alt: string;
}

export interface EnquiryFormInput {
  parentName: string;
  childName: string;
  childAge: string;
  email: string;
  phone: string;
  programOfInterest: string;
  message: string;
}
