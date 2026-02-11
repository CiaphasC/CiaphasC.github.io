import { Code2, Database, Layout, Server } from 'lucide-react';

import type { LucideIcon } from 'lucide-react';

export interface StackCategory {
  id: string;
  title: string;
  icon: LucideIcon;
  items: string[];
}

export const stackCategories: ReadonlyArray<StackCategory> = [
  {
    id: 'frontend',
    title: 'Frontend & UI',
    icon: Layout,
    items: ['React 19 / Next.js 15', 'Tailwind CSS v4', 'Three.js / R3F / GSAP', 'Shadcn/UI / Radix'],
  },
  {
    id: 'backend',
    title: 'Backend & Core',
    icon: Server,
    items: ['Node.js / NestJS', '.NET Core (C#) / Avalonia', 'Python / C++', 'Microservicios gRPC'],
  },
  {
    id: 'data',
    title: 'Data & Cloud',
    icon: Database,
    items: ['PostgreSQL / SQL Server', 'Supabase / Firebase', 'Redis / Prisma ORM', 'Docker / CI/CD'],
  },
  {
    id: 'architecture',
    title: 'Arquitectura',
    icon: Code2,
    items: ['Clean Architecture', 'Domain Driven Design', 'SOLID Principles', 'Optimization & Perf'],
  },
] as const;
