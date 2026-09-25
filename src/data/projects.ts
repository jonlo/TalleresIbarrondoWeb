export type ProjectCategory = 'estructuras' | 'barandillas' | 'escaleras' | 'cerramientos' | 'industrial' | 'otros';
export interface Project { slug: string; title: string; category: ProjectCategory; image?: string; alt?: string; images?: string[]; featured?: boolean; description?: string; }
// These are gallery slots, not claims of completed projects. Replace with verified work.
export const projects: Project[] = [
  { slug: 'estructura-metalica', title: 'Estructuras metálicas', category: 'estructuras', featured: true },
  { slug: 'barandilla-acero', title: 'Barandillas a medida', category: 'barandillas', featured: true },
  { slug: 'escalera-metalica', title: 'Escaleras metálicas', category: 'escaleras', featured: true },
  { slug: 'cerramientos', title: 'Cerramientos', category: 'cerramientos' },
  { slug: 'industrial', title: 'Fabricación industrial', category: 'industrial' },
  { slug: 'a-medida', title: 'Piezas a medida', category: 'otros' },
];
