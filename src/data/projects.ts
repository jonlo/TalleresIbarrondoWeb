import type { ImageMetadata } from 'astro';
import steel from '../assets/concepts/steel.png';
import railing from '../assets/concepts/railing.png';
import staircase from '../assets/concepts/staircase.png';

export type ProjectCategory = 'estructuras' | 'barandillas' | 'escaleras' | 'cerramientos' | 'industrial' | 'otros';
export interface Project { slug: string; title: string; category: ProjectCategory; image?: string; conceptImage?: ImageMetadata; conceptAlt?: string; alt?: string; images?: string[]; featured?: boolean; description?: string; }
// These are gallery slots, not claims of completed projects. Replace with verified work.
export const projects: Project[] = [
  { slug: 'estructura-metalica', title: 'Estructuras metálicas', category: 'estructuras', featured: true, conceptImage: steel, conceptAlt: 'Estudio conceptual de perfiles de acero generado con IA'  },
  { slug: 'barandilla-acero', title: 'Barandillas a medida', category: 'barandillas', featured: true, conceptImage: railing, conceptAlt: 'Concepto de barandilla de acero en un espacio de hormigón generado con IA' },
  { slug: 'escalera-metalica', title: 'Escaleras metálicas', category: 'escaleras', featured: true, conceptImage: staircase, conceptAlt: 'Concepto arquitectónico de escalera metálica generado con IA' },
  { slug: 'cerramientos', title: 'Cerramientos', category: 'cerramientos' },
  { slug: 'industrial', title: 'Fabricación industrial', category: 'industrial' },
  { slug: 'a-medida', title: 'Piezas a medida', category: 'otros' },
];
