import { useCallback, useEffect, useMemo, useState } from 'react';

import type { SectionId } from '@/shared/types/portfolio';

const SECTION_IDS: ReadonlyArray<SectionId> = ['inicio', 'proyectos', 'laboratorio', 'contacto'];

export const useSectionNavigation = () => {
  const [activeSection, setActiveSection] = useState<SectionId>('inicio');

  const scrollToSection = useCallback((id: SectionId) => {
    const section = document.getElementById(id);
    if (!section) return;

    section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    setActiveSection(id);
  }, []);

  useEffect(() => {
    const sections = SECTION_IDS.map((id) => document.getElementById(id)).filter(
      (section): section is HTMLElement => Boolean(section),
    );

    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const topVisible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (!topVisible) return;

        setActiveSection(topVisible.target.id as SectionId);
      },
      {
        threshold: [0.3, 0.5, 0.7],
        rootMargin: '-15% 0px -55% 0px',
      },
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return useMemo(
    () => ({
      activeSection,
      scrollToSection,
      setActiveSection,
    }),
    [activeSection, scrollToSection],
  );
};
