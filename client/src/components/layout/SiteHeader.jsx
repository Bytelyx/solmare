import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { Heart, Mic, Search, ShoppingBag, User, } from "lucide-react";
import solmareLogo from "../../assets/Logo-SVG/Logo_ 1.2-1.svg";
import { useCart } from "@/hooks/useCart";
import { useScrollPosition } from "@/hooks/useScrollPosition";
import { useVoiceSearch } from "@/hooks/useVoiceSearch";

function SearchBar() {
  const navigate = useNavigate();
  const [q, setQ] = useState("");
  const go = (value) => {
    const trimmed = (value || "").trim();

    navigate(
      trimmed
        ? `/jewellery?q=${encodeURIComponent(trimmed)}`
        : "/jewellery"
    );
  };

  const { listening, startListening } = useVoiceSearch((transcript) => {
    setQ(transcript);
    go(transcript);
  });

  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      go(q);
    }}
      className="flex h-10 w-full min-w-0 items-center gap-2 rounded-full border border-gold/40 bg-card px-3 transition focus-within:border-gold md:h-11 md:px-4">
      <Search className="h-4 w-4 shrink-0 text-gold" />
      <input type="search" value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search rings, earrings, diamonds..." className="min-w-0 flex-1 bg-transparent text-sm outline-none placeholder:text-muted-foreground" />
      <button type="button" aria-label="Voice search" onClick={startListening} className={`shrink-0 cursor-pointer transition ${listening
        ? "animate-pulse text-gold"
        : "text-foreground/70 hover:text-gold"
        }`}>
        <Mic className="h-4 w-4" />
      </button>
    </form>
  );
}

function IconBadge({ n }) {
  return (
    <span className="absolute -right-1.5 -top-1.5 grid h-4 min-w-4 place-items-center rounded-full bg-gold px-1 text-[9px] font-bold text-navy md:-right-2 md:-top-2 md:h-5 md:min-w-5 md:text-[10px]">
      {n}
    </span>
  );
}

export function SiteHeader() {
  const { count } = useCart();
  const scrolled = useScrollPosition(20);

  return (
    <header
      className={`sticky top-0 z-50 w-full border-b bg-[image:var(--gradient-navy)] transition-all ${scrolled ? "shadow-soft backdrop-blur" : ""}`}>
      {/* Main Header Row */}
      <div className="mx-0 flex w-full min-h-16 items-center justify-between gap-2 px-3 py-2 sm:gap-4 sm:px-6 md:h-20 md:gap-8 md:px-16">

        {/* Solmare Logo */}
        <Link to="/" aria-label="SOLMARE Home" className="flex min-w-0 shrink items-center">
          <img src={solmareLogo} alt="SOLMARE - Redefining Everyday Luxury" className="block h-9 w-auto max-w-[155px] shrink object-contain sm:h-10 sm:max-w-[180px] md:h-14 md:max-w-[260px]" />
        </Link>

        {/* Desktop Search Bar */}
        <div className="hidden min-w-0 flex-1 md:block">
          <div className="mx-auto w-full max-w-xl">
            <SearchBar />
          </div>
        </div>

        {/* Header Actions */}
        <div className="ml-auto flex shrink-0 items-center gap-3 sm:gap-4 md:ml-0 md:gap-5">
          {/* Wishlist */}
          <button type="button" aria-label="Wishlist" className="relative flex shrink-0 items-center justify-center transition hover:text-gold">
            <Heart className="h-[18px] w-[18px] sm:h-5 sm:w-5" />
            <IconBadge n={0} />
          </button>

          {/* Shopping Bag */}
          <Link to="/cart" aria-label="Shopping Bag" className="relative flex shrink-0 items-center justify-center transition hover:text-gold">
            <ShoppingBag className="h-[18px] w-[18px] sm:h-5 sm:w-5" />
            <IconBadge n={count} />
          </Link>

          {/* Account */}
          <Link to="/account" aria-label="My Profile" className="grid h-8 w-8 shrink-0 place-items-center rounded-full border border-gold/50 transition hover:bg-gold hover:text-navy sm:h-9 sm:w-9">
            <User className="h-4 w-4" />
          </Link>
        </div>
      </div>

      {/* Mobile Search Bar */}
      <div className="w-full px-3 pb-3 sm:px-6 md:hidden">
        <SearchBar />
      </div>
    </header>
  );
}
