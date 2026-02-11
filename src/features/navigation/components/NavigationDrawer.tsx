import { gsap } from 'gsap';
import { X, Zap } from 'lucide-react';
import { useLayoutEffect, useRef } from 'react';

import { NavItem } from '@/features/navigation/components/NavItem';
import { navigationItems } from '@/shared/data/navigation';
import { cn } from '@/shared/lib/cn';
import type { SectionId } from '@/shared/types/portfolio';

interface NavigationDrawerProps {
  isOpen: boolean;
  activeSection: SectionId;
  onClose: () => void;
  onNavigate: (id: SectionId) => void;
}

export const NavigationDrawer = ({
  isOpen,
  activeSection,
  onClose,
  onNavigate,
}: NavigationDrawerProps) => {
  const overlayRef = useRef<HTMLButtonElement>(null);
  const drawerRef = useRef<HTMLElement>(null);
  const navRef = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const overlay = overlayRef.current;
    const drawer = drawerRef.current;
    const nav = navRef.current;

    if (!overlay || !drawer || !nav) return;

    const navItems = nav.querySelectorAll<HTMLElement>('[data-nav-item]');
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion) {
      gsap.set(overlay, { autoAlpha: isOpen ? 1 : 0 });
      gsap.set(drawer, { xPercent: isOpen ? 0 : 100 });
      gsap.set(navItems, { autoAlpha: isOpen ? 1 : 0, x: isOpen ? 0 : 18 });
      return;
    }

    const timeline = gsap.timeline({ defaults: { ease: 'power3.out' } });

    if (isOpen) {
      timeline
        .set(drawer, { xPercent: 100 })
        .set(overlay, { autoAlpha: 0 })
        .to(overlay, { autoAlpha: 1, duration: 0.26 }, 0)
        .to(drawer, { xPercent: 0, duration: 0.52 }, 0)
        .fromTo(
          navItems,
          { autoAlpha: 0, x: 28 },
          {
            autoAlpha: 1,
            x: 0,
            duration: 0.42,
            stagger: 0.055,
            ease: 'power2.out',
          },
          0.14,
        );
    } else {
      timeline
        .to(
          navItems,
          {
            autoAlpha: 0,
            x: 16,
            duration: 0.2,
            stagger: {
              each: 0.03,
              from: 'end',
            },
            ease: 'power2.in',
          },
          0,
        )
        .to(drawer, { xPercent: 100, duration: 0.34, ease: 'power3.in' }, 0.04)
        .to(overlay, { autoAlpha: 0, duration: 0.22 }, 0.08);
    }

    return () => {
      timeline.kill();
    };
  }, [isOpen]);

  return (
    <>
      <button
        ref={overlayRef}
        aria-hidden={!isOpen}
        tabIndex={-1}
        onClick={onClose}
        className={cn(
          'fixed inset-0 z-[60] bg-black/80 backdrop-blur-md',
          isOpen ? 'pointer-events-auto' : 'pointer-events-none',
        )}
      />

      <aside
        ref={drawerRef}
        className={cn(
          'fixed right-0 top-0 z-[70] flex h-full w-[310px] flex-col bg-[#02060c] shadow-[0_16px_56px_-18px_rgba(0,101,145,0.42)]',
          isOpen ? 'pointer-events-auto' : 'pointer-events-none',
        )}
        aria-label="Navegacion principal"
      >
        <div className="flex items-center justify-between px-5 pb-4 pt-6">
          <span className="text-xs font-semibold uppercase tracking-[0.16em] text-cyan-100/90">
            Navegacion
          </span>
          <button
            onClick={onClose}
            className="rounded-full p-2 text-zinc-200 transition-colors hover:bg-zinc-900/80 hover:text-white"
            aria-label="Cerrar menu"
          >
            <X size={20} />
          </button>
        </div>

        <nav ref={navRef} className="flex-1 overflow-y-auto px-3 py-5" aria-label="Secciones">
          {navigationItems.map((item, index) => (
            <NavItem
              key={item.id}
              label={item.label}
              icon={item.icon}
              theme={item.theme}
              isActive={activeSection === item.id}
              delayMs={index * 50}
              onClick={() => onNavigate(item.id)}
            />
          ))}
        </nav>

        <div className="mt-auto p-4">
          <div className="mx-1 h-px bg-gradient-to-r from-transparent via-zinc-800/70 to-transparent" />
          <div className="mb-3 px-2 text-[10px] font-bold uppercase tracking-[0.18em] text-zinc-500">
            System Status
          </div>

          <div className="group relative overflow-hidden rounded-xl bg-gradient-to-r from-pink-900/35 to-pink-950/20 p-4 shadow-[0_0_30px_-8px_rgba(236,72,153,0.25)]">
            <div className="relative z-10 flex items-center gap-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-pink-500/12 text-pink-400 shadow-[0_0_15px_rgba(236,72,153,0.12)]">
                <Zap size={20} fill="currentColor" />
              </div>

              <div>
                <div className="mb-0.5 text-[14px] font-semibold leading-tight text-white">High Performance</div>
                <div className="text-[11px] font-medium text-pink-200/65">All systems operational</div>
              </div>

              <div className="ml-auto h-1.5 w-1.5 rounded-full bg-pink-500 shadow-[0_0_10px_#ec4899]" />
            </div>

            <div className="pointer-events-none absolute right-0 top-0 h-20 w-20 rounded-full bg-pink-500/10 blur-[40px]" />
          </div>
        </div>
      </aside>
    </>
  );
};
