import { Menu } from 'lucide-react';

interface TopNavProps {
  onOpenMenu: () => void;
}

export const TopNav = ({ onOpenMenu }: TopNavProps) => {
  return (
    <nav className="pointer-events-none fixed inset-x-0 top-0 z-50 p-6 text-white mix-blend-difference">
      <div className="mx-auto flex max-w-screen-2xl items-center justify-between">
        <a
          href="#inicio"
          className="pointer-events-auto text-xl font-display font-bold tracking-tighter transition-opacity hover:opacity-70"
        >
          CiaphasC<span className="text-zinc-500">.dev</span>
        </a>

        <button
          onClick={onOpenMenu}
          className="group pointer-events-auto flex items-center gap-2 text-sm font-medium transition-colors hover:text-zinc-400"
          aria-label="Abrir menu"
        >
          <span className="hidden opacity-0 transition-opacity duration-300 group-hover:opacity-100 md:block">
            MENU
          </span>
          <Menu size={24} />
        </button>
      </div>
    </nav>
  );
};
