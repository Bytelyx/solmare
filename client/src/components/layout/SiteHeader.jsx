import { Link, useNavigate, useLocation } from "react-router-dom";
import { useRef, useState } from "react";
import { Camera, Heart, Menu, Mic, Search, ShoppingBag, User } from "lucide-react";
import { toast } from "sonner";
import { useCart } from "@/hooks/useCart";
import { useScrollPosition } from "@/hooks/useScrollPosition";
import { useVoiceSearch } from "@/hooks/useVoiceSearch";
import { NAV_CATEGORIES } from "@/constants/navigation";
import { MobileMenu } from "./MobileMenu";

function SearchBar({ onDone }) {
  const navigate = useNavigate();
  const [q, setQ] = useState("");
  const fileRef = useRef(null);

  const go = (value) => {
    const trimmed = (value || "").trim();
    navigate(trimmed ? `/jewellery?q=${encodeURIComponent(trimmed)}` : "/jewellery");
    if (onDone) onDone();
  };

  const { listening, startListening } = useVoiceSearch((transcript) => {
    setQ(transcript);
    go(transcript);
  });

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        go(q);
      }}
      className="flex h-11 w-full items-center gap-2 rounded-full border border-gold/40 bg-card px-4 transition focus-within:border-gold"
    >
      <Search className="h-4 w-4 shrink-0 text-gold" />
      <input
        value={q}
        onChange={(e) => setQ(e.target.value)}
        placeholder="Search rings, earrings, diamonds…"
        className="min-w-0 flex-1 bg-transparent text-sm outline-none placeholder:text-muted-foreground"
      />
      <input
        ref={fileRef}
        type="file"
        accept="image/*"
        className="hidden"
        onChange={(e) => {
          if (e.target.files?.[0]) {
            toast.success("Photo received — showing similar designs");
            go("");
          }
          e.target.value = "";
        }}
      />
      <button
        type="button"
        aria-label="Search by photo"
        onClick={() => fileRef.current?.click()}
        className="text-foreground/70 hover:text-gold cursor-pointer"
      >
        <Camera className="h-4 w-4" />
      </button>
      <span className="h-5 w-px bg-border" />
      <button
        type="button"
        aria-label="Voice search"
        onClick={startListening}
        className={`cursor-pointer ${
          listening ? "text-gold animate-pulse" : "text-foreground/70 hover:text-gold"
        }`}
      >
        <Mic className="h-4 w-4" />
      </button>
    </form>
  );
}

function IconBadge({ n }) {
  return (
    <span className="absolute -right-2 -top-2 grid h-5 min-w-5 place-items-center rounded-full bg-gold px-1 text-[10px] font-bold text-navy">
      {n}
    </span>
  );
}

export function SiteHeader() {
  const { count } = useCart();
  const [open, setOpen] = useState(false);
  const scrolled = useScrollPosition(20);
  const location = useLocation();

  const isCurrent = (to) => {
    if (to.includes("?")) {
      const [path, search] = to.split("?");
      return location.pathname === path && location.search.includes(search);
    }
    return location.pathname === to && !location.search;
  };

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-all ${
        scrolled ? "bg-navy/95 backdrop-blur shadow-soft" : "bg-navy"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center gap-4 px-4 md:h-20 md:gap-8 md:px-8">
        <button
          className="lg:hidden cursor-pointer"
          aria-label="Open menu"
          onClick={() => setOpen(true)}
        >
          <Menu className="h-6 w-6" />
        </button>
        <Link to="/" className="font-display text-2xl tracking-[0.3em] md:text-3xl">
          SOL<span className="text-gradient-gold">MARE</span>
        </Link>
        <div className="hidden flex-1 md:block">
          <div className="mx-auto max-w-xl">
            <SearchBar />
          </div>
        </div>
        <div className="ml-auto flex items-center gap-5 md:ml-0">
          <button aria-label="Wishlist" className="relative hover:text-gold cursor-pointer">
            <Heart className="h-5 w-5" />
            <IconBadge n={0} />
          </button>
          <Link to="/cart" aria-label="Bag" className="relative hover:text-gold">
            <ShoppingBag className="h-5 w-5" />
            <IconBadge n={count} />
          </Link>
          <Link
            to="/account"
            aria-label="My profile"
            className="grid h-9 w-9 place-items-center rounded-full border border-gold/50 hover:bg-gold hover:text-navy transition"
          >
            <User className="h-4 w-4" />
          </Link>
        </div>
      </div>
      <div className="px-4 pb-3 md:hidden">
        <SearchBar />
      </div>
      <nav className="hidden border-t border-gold/15 lg:block">
        <div className="mx-auto flex max-w-7xl items-center justify-center gap-10 px-8 py-3">
          {NAV_CATEGORIES.map((c) => (
            <Link
              key={c.label}
              to={c.to}
              className={`text-xs font-semibold uppercase tracking-[0.2em] transition ${
                isCurrent(c.to) ? "text-gold" : "text-foreground/80 hover:text-gold"
              }`}
            >
              {c.label}
            </Link>
          ))}
          <Link
            to="/collections"
            className={`text-xs font-semibold uppercase tracking-[0.2em] transition ${
              location.pathname === "/collections"
                ? "text-gold"
                : "text-foreground/80 hover:text-gold"
            }`}
          >
            Collections
          </Link>
        </div>
      </nav>

      <MobileMenu open={open} onClose={() => setOpen(false)} />
    </header>
  );
}
