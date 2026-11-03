import { Link } from "react-router-dom";
import { X } from "lucide-react";
import { NAV_CATEGORIES } from "@/constants/navigation";

export function MobileMenu({ open, onClose }) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[60] lg:hidden">
      <div className="absolute inset-0 bg-navy/70" onClick={onClose} />
      <aside className="absolute left-0 top-0 h-full w-[80%] max-w-xs overflow-y-auto bg-background p-6 animate-in slide-in-from-left">
        <div className="mb-8 flex items-center justify-between">
          <span className="font-display text-2xl tracking-[0.3em]">SOLMARE</span>
          <button aria-label="Close menu" onClick={onClose} className="cursor-pointer">
            <X className="h-6 w-6" />
          </button>
        </div>
        <nav className="flex flex-col gap-5">
          {NAV_CATEGORIES.map((c) => (
            <Link
              key={c.label}
              to={c.to}
              onClick={onClose}
              className="font-display text-2xl hover:text-gold transition"
            >
              {c.label}
            </Link>
          ))}
          <Link
            to="/collections"
            onClick={onClose}
            className="font-display text-2xl hover:text-gold transition"
          >
            Collections
          </Link>
          <div className="my-2 h-px bg-border" />
          <Link
            to="/about"
            onClick={onClose}
            className="text-sm uppercase tracking-widest hover:text-gold transition"
          >
            Our Story
          </Link>
          <Link
            to="/contact"
            onClick={onClose}
            className="text-sm uppercase tracking-widest hover:text-gold transition"
          >
            Store & Contact
          </Link>
        </nav>
      </aside>
    </div>
  );
}
