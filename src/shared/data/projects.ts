import { Briefcase, Box, Circle, Globe, Layers, Monitor, Smartphone } from 'lucide-react';

import type { Project } from '@/shared/types/portfolio';

const preview = (url: string): string => `https://image.thum.io/get/width/1200/noanimate/${url}`;

export const projects: ReadonlyArray<Project> = [
  {
    title: 'Cuenca & Asociados',
    subtitle: 'Auditoria & Finanzas',
    description:
      'Plataforma corporativa integral. Portal de clientes seguro, gestion documental automatizada y CMS a medida para la firma auditora lider.',
    tags: ['Next.js 15', 'Tailwind', 'PostgreSQL', 'AWS S3'],
    icon: Briefcase,
    theme: 'blue',
    link: 'https://cuenca-asociados.vercel.app/',
    previewImage: preview('https://cuenca-asociados.vercel.app/'),
    size: 'large',
  },
  {
    title: 'Avalu',
    subtitle: 'Consultoria Estrategica',
    description:
      'Experiencia web inmersiva para consultoria de negocios. Animaciones fluidas que guian al usuario a traves de la propuesta de valor.',
    tags: ['React 19', 'GSAP', 'Vite'],
    icon: Globe,
    theme: 'indigo',
    link: 'https://devciaphasavalu.vercel.app/',
    previewImage: preview('https://devciaphasavalu.vercel.app/'),
    size: 'small',
  },
  {
    title: 'Dr. Jonathan Gil Flores',
    subtitle: 'Salud & Bienestar',
    description:
      'Ecosistema digital para cirugia bariatrica. Agendamiento inteligente y optimizacion SEO tecnica para maxima conversion.',
    tags: ['Next.js', 'Radix UI', 'Supabase'],
    icon: Box,
    theme: 'cyan',
    link: 'https://drjonathangilbariatra.com/',
    previewImage: preview('https://drjonathangilbariatra.com/'),
    size: 'small',
  },
  {
    title: '911 Medical Marketing',
    subtitle: 'SaaS Medico',
    description:
      'Dashboard analitico para cirujanos. Visualizacion de datos complejos, seguimiento de leads y reportes automatizados en tiempo real.',
    tags: ['React', 'Tremor', '.NET Core', 'SQL Server'],
    icon: Layers,
    theme: 'emerald',
    link: 'https://vsl-2-page.vercel.app/',
    previewImage: preview('https://vsl-2-page.vercel.app/'),
    size: 'large',
  },
  {
    title: 'BookNow',
    subtitle: 'Marketplace de Experiencias',
    description:
      'Motor de reservas de alta concurrencia. Gestion de disponibilidad en tiempo real y pasarela de pagos integrada.',
    tags: ['Node.js', 'Redis', 'Socket.io'],
    icon: Circle,
    theme: 'orange',
    link: 'https://book-now-xi.vercel.app/',
    previewImage: preview('https://book-now-xi.vercel.app/'),
    size: 'small',
  },
  {
    title: "L'Elite Gastro",
    subtitle: 'Hospitality Tech',
    description:
      'Menu digital interactivo. UI/UX premium enfocada en fotografia gastronomica y la facilidad de pedido movil.',
    tags: ['React Mobile', 'Framer Motion', 'Firebase'],
    icon: Smartphone,
    theme: 'violet',
    link: 'https://l-elite-gastro.vercel.app/',
    previewImage: preview('https://l-elite-gastro.vercel.app/'),
    size: 'small',
  },
  {
    title: 'Aura Hotel System',
    subtitle: 'Desktop Software',
    description:
      'Sistema de gestion hotelera (PMS) robusto. Control de habitaciones, facturacion electronica y reportes financieros.',
    tags: ['C#', 'Avalonia UI', 'Entity Framework'],
    icon: Monitor,
    theme: 'rose',
    link: 'https://aura-hotel-system.vercel.app/',
    previewImage: preview('https://aura-hotel-system.vercel.app/'),
    size: 'large',
  },
  {
    title: 'PropTech Inmobiliaria',
    subtitle: 'Plataforma Inmobiliaria',
    description:
      'Plataforma inmobiliaria moderna con catalogo de propiedades, busqueda avanzada y dashboard administrativo. Incluye experiencia visual premium con efectos 3D y arquitectura Feature-Sliced Design.',
    tags: ['React 18', 'TypeScript 5.8', 'Vite 6', 'Tailwind 3.4', 'Three.js 0.172'],
    icon: Box,
    theme: 'yellow',
    link: 'https://proptech-seven.vercel.app/',
    previewImage: preview('https://proptech-seven.vercel.app/'),
    size: 'small',
  },
  {
    title: 'Revenue Nexus',
    subtitle: 'CRM / Workspace Demo',
    description:
      'Demo SaaS premium con flujo CRM/Workspace, animaciones de luz y componentes listos para produccion. Adaptada a espanol y moneda local (PEN) para mercados LATAM.',
    tags: ['Next.js 15', 'React 19', 'Tailwind v4', 'OKLCH', 'shadcn/ui'],
    icon: Globe,
    theme: 'indigo',
    link: 'https://revenue-nexus.vercel.app/',
    previewImage: preview('https://revenue-nexus.vercel.app/'),
    size: 'small',
  },
] as const;
