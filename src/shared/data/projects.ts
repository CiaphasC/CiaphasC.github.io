import { Briefcase, Box, Circle, Globe, Layers, Monitor, Smartphone } from 'lucide-react';

import type { Project } from '@/shared/types/portfolio';

export const projects: ReadonlyArray<Project> = [
  {
    title: 'Cuenca & Asociados',
    subtitle: 'Auditoria & Finanzas',
    description:
      'Plataforma corporativa integral. Portal de clientes seguro, gestion documental automatizada y CMS a medida para la firma auditora lider.',
    tags: ['Next.js 15', 'Tailwind', 'PostgreSQL', 'AWS S3'],
    icon: Briefcase,
    theme: 'blue',
    link: 'https://github.com/CiaphasC',
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
    link: 'https://github.com/CiaphasC',
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
    link: 'https://github.com/CiaphasC',
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
    link: 'https://github.com/CiaphasC',
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
    link: 'https://github.com/CiaphasC',
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
    link: 'https://github.com/CiaphasC',
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
    link: 'https://github.com/CiaphasC',
    size: 'large',
  },
  {
    title: 'PropTech Inmobiliaria',
    subtitle: 'Real Estate 3D',
    description:
      'Visualizacion arquitectonica en la web. Recorridos virtuales interactivos y renderizado de planos en tiempo real.',
    tags: ['Three.js', 'React Fiber', 'WebGL'],
    icon: Box,
    theme: 'yellow',
    link: 'https://github.com/CiaphasC',
    size: 'small',
  },
] as const;
