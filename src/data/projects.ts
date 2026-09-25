import type { ImageMetadata } from 'astro';
import image0 from '../assets/projects/cerramiento-cocina.jpg';
import image1 from '../assets/projects/escalera-acero-madera.jpg';
import image2 from '../assets/projects/barandilla-cables.jpg';
import image3 from '../assets/projects/estanteria-suspendida.jpeg';
import image4 from '../assets/projects/porton-exterior.jpg';
import image5 from '../assets/projects/estructura-forjado.jpg';
import image6 from '../assets/projects/division-interior.jpg';
import image7 from '../assets/projects/puerta-acristalada.jpg';
import image8 from '../assets/projects/escalera-caracol.jpg';
import image9 from '../assets/projects/escalera-edificio.jpg';
import image10 from '../assets/projects/barandilla-inoxidable.jpg';
import image11 from '../assets/projects/barandilla-vidrio.jpg';
import image12 from '../assets/projects/mueble-metal-madera.jpg';
import image13 from '../assets/projects/mobiliario-exterior.jpg';
import image14 from '../assets/projects/cierre-ornamental.jpg';
import image15 from '../assets/projects/cierre-portal.jpg';
import image16 from '../assets/projects/marquesina.png';
import image17 from '../assets/projects/refuerzo-estructural.jpg';
import interiorDetail from '../assets/projects/detalle-cerramiento.jpg';
import stairDetail from '../assets/projects/escalera-acero-madera-frontal.jpg';
import furnitureDetail from '../assets/projects/mueble-metal-madera-detalle.jpg';

export const categories = [
  { id: 'interiores', label: 'Cierres interiores' },
  { id: 'exteriores', label: 'Cierres exteriores' },
  { id: 'escaleras', label: 'Escaleras' },
  { id: 'barandillas', label: 'Barandillas' },
  { id: 'mobiliario', label: 'Mobiliario' },
  { id: 'estructuras', label: 'Estructuras metálicas' },
] as const;

export type ProjectCategory = typeof categories[number]['id'];
export interface ProjectPhoto { image: ImageMetadata; alt: string; }
export interface Project {
  slug: string;
  title: string;
  category: ProjectCategory;
  description: string;
  image: ImageMetadata;
  alt: string;
  featured: boolean;
  position: string;
  additionalPhotos?: ProjectPhoto[];
}

export const projects: Project[] = [
{
  "slug": "cerramiento-cocina",
  "title": "Cerramiento de cocina",
  "category": "interiores",
  "description": "Perfilería negra y vidrio para separar cocina y comedor.",
  "alt": "Cerramiento de perfiles negros y vidrio con vistas a un comedor de pared verde",
  "featured": true,
  "position": "45% 55%",
  "image": image0,
  additionalPhotos: [{ image: interiorDetail, alt: 'Detalle de la perfilería negra y del vidrio del cerramiento de cocina' }]
},
{
  "slug": "escalera-acero-madera",
  "title": "Escalera de acero y madera",
  "category": "escaleras",
  "description": "Estructura metálica con peldaños y barandilla de madera.",
  "alt": "Escalera interior con zanca negra, peldaños de madera y barrotes verticales de madera",
  "featured": true,
  "position": "45% 45%",
  "image": image1,
  additionalPhotos: [{ image: stairDetail, alt: 'Vista frontal de la escalera de acero con peldaños de madera' }]
},
{
  "slug": "barandilla-cables",
  "title": "Barandilla con cables",
  "category": "barandillas",
  "description": "Postes metálicos y cables horizontales en un espacio exterior.",
  "alt": "Barandilla metálica con cables horizontales junto al agua",
  "featured": true,
  "position": "50% 60%",
  "image": image2
},
{
  "slug": "estanteria-suspendida",
  "title": "Estantería suspendida",
  "category": "mobiliario",
  "description": "Baldas y estructura metálica para separar ambientes sin cerrarlos.",
  "alt": "Estantería negra suspendida entre un salón y un comedor",
  "featured": true,
  "position": "40% 50%",
  "image": image3
},
{
  "slug": "porton-exterior",
  "title": "Portón de acceso",
  "category": "exteriores",
  "description": "Cierre metálico de dos hojas para el acceso a una vivienda.",
  "alt": "Portón metálico oscuro de dos hojas frente a una casa de piedra",
  "featured": true,
  "position": "50% 70%",
  "image": image4
},
{
  "slug": "estructura-forjado",
  "title": "Estructura para forjado",
  "category": "estructuras",
  "description": "Vigas metálicas y chapa perfilada durante el montaje.",
  "alt": "Vigas de acero de color rojizo y chapa perfilada vistas desde abajo",
  "featured": true,
  "position": "50% 30%",
  "image": image5
},
{
  "slug": "division-interior",
  "title": "División interior acristalada",
  "category": "interiores",
  "description": "Una separación de metal y vidrio junto a una escalera.",
  "alt": "Cerramiento negro acristalado entre una estancia y una escalera de madera",
  "featured": false,
  "position": "50% 50%",
  "image": image6
},
{
  "slug": "puerta-acristalada",
  "title": "Puerta interior acristalada",
  "category": "interiores",
  "description": "Puerta abatible con perfilería metálica y paños de vidrio.",
  "alt": "Puerta de marco metálico negro abierta hacia una cocina",
  "featured": false,
  "position": "50% 50%",
  "image": image7
},
{
  "slug": "escalera-caracol",
  "title": "Escalera de caracol exterior",
  "category": "escaleras",
  "description": "Acceso exterior con estructura y barandilla metálicas.",
  "alt": "Escalera de caracol negra instalada entre una pared de piedra y una fachada blanca",
  "featured": false,
  "position": "50% 50%",
  "image": image8
},
{
  "slug": "escalera-edificio",
  "title": "Escalera de acceso interior",
  "category": "escaleras",
  "description": "Escalera metálica de tramo recto con barandillas laterales.",
  "alt": "Escalera metálica gris con pasamanos de madera en el vestíbulo de un edificio",
  "featured": false,
  "position": "50% 50%",
  "image": image9
},
{
  "slug": "barandilla-inoxidable",
  "title": "Barandilla de acero inoxidable",
  "category": "barandillas",
  "description": "Postes y pasamanos de acero inoxidable en un entorno costero.",
  "alt": "Barandilla de acero inoxidable con cables frente al mar",
  "featured": false,
  "position": "50% 60%",
  "image": image10
},
{
  "slug": "barandilla-vidrio",
  "title": "Barandilla de metal y vidrio",
  "category": "barandillas",
  "description": "Pasamanos y soportes metálicos con paños de vidrio.",
  "alt": "Barandilla acristalada con postes y pasamanos de acero inoxidable en una escalera interior",
  "featured": false,
  "position": "50% 50%",
  "image": image11
},
{
  "slug": "mueble-metal-madera",
  "title": "Mueble de metal y madera",
  "category": "mobiliario",
  "description": "Estructura metálica, baldas y encimera de madera.",
  "alt": "Mueble auxiliar negro con baldas de madera, platos y cuencos",
  "featured": false,
  "position": "50% 55%",
  "image": image12,
  additionalPhotos: [{ image: furnitureDetail, alt: 'Detalle lateral del mueble con estructura negra y baldas de madera' }]
},
{
  "slug": "mobiliario-exterior",
  "title": "Mobiliario para espacios exteriores",
  "category": "mobiliario",
  "description": "Bancos y elementos de metal y madera para una plaza.",
  "alt": "Bancos con estructura metálica roja y asientos de madera en una plaza",
  "featured": false,
  "position": "50% 55%",
  "image": image13
},
{
  "slug": "cierre-ornamental",
  "title": "Cierre de herrería ornamental",
  "category": "exteriores",
  "description": "Puerta y vallado con barrotes y remates ornamentales.",
  "alt": "Puerta de herrería negra con barrotes verticales junto a un edificio de piedra",
  "featured": false,
  "position": "50% 60%",
  "image": image14
},
{
  "slug": "cierre-portal",
  "title": "Cierre para portal",
  "category": "exteriores",
  "description": "Puerta metálica de barrotes para el acceso a un edificio.",
  "alt": "Cierre metálico negro con barrotes verticales en el portal de un edificio",
  "featured": false,
  "position": "50% 50%",
  "image": image15
},
{
  "slug": "marquesina",
  "title": "Marquesina metálica",
  "category": "estructuras",
  "description": "Estructura exterior para cubrir una zona de acceso.",
  "alt": "Marquesina metálica frente a la entrada de una nave de fachada roja",
  "featured": false,
  "position": "50% 50%",
  "image": image16
},
{
  "slug": "refuerzo-estructural",
  "title": "Refuerzo con perfiles de acero",
  "category": "estructuras",
  "description": "Perfiles metálicos integrados en una estructura existente.",
  "alt": "Unión de vigas rojizas de acero bajo una cubierta de madera y junto a muros de piedra",
  "featured": false,
  "position": "50% 50%",
  "image": image17
},
];
