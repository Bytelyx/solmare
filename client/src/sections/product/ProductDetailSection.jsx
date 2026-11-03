import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import { Minus, Plus, ShieldCheck, Truck, RotateCcw, Star } from "lucide-react";
import { toast } from "sonner";
import { formatINR } from "@/utils/formatters";
import { getCategory, getProduct, products } from "@/constants/products";
import { useCart } from "@/hooks/useCart";
import { ProductCard } from "@/components/common/ProductCard";

export function ProductDetailSection() {
  const { slug } = useParams();
  const p = getProduct(slug);
  const { add } = useCart();
  const [active, setActive] = useState(0);
  const [qty, setQty] = useState(1);
  const [size, setSize] = useState("12");

  if (!p) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center px-4">
        <div className="max-w-md text-center">
          <p className="eyebrow">Lost sparkle</p>
          <h1 className="mt-3 text-4xl">Design not found</h1>
          <p className="mt-2 text-sm text-muted-foreground">
            The design you're looking for doesn't exist or has been moved.
          </p>
          <Link to="/jewellery" className="btn-navy mt-6">
            View all jewellery
          </Link>
        </div>
      </div>
    );
  }

  const isRing = p.category === "rings" || p.category === "solitaires";
  const related = products
    .filter((x) => x.slug !== p.slug && x.category !== "gift-cards")
    .slice(0, 4);

  return (
    <div className="mx-auto max-w-7xl px-4 py-10 md:px-8">
      <nav className="mb-8 text-xs uppercase tracking-widest text-muted-foreground">
        <Link to="/" className="hover:text-gold transition">
          Home
        </Link>{" "}
        /{" "}
        {p.category === "gift-cards" ? (
          <Link to="/gift-cards" className="hover:text-gold transition">
            Gift Cards
          </Link>
        ) : (
          <Link
            to={`/jewellery?category=${p.category}`}
            className="hover:text-gold transition"
          >
            {getCategory(p.category)?.name}
          </Link>
        )}{" "}
        / <span className="text-foreground">{p.name}</span>
      </nav>

      <div className="grid gap-12 lg:grid-cols-2">
        <div>
          <div className="aspect-square bg-secondary">
            <img
              src={p.images[active]}
              alt={p.name}
              className="h-full w-full object-contain p-10"
            />
          </div>
          {p.images.length > 1 && (
            <div className="mt-4 flex gap-3">
              {p.images.map((im, i) => (
                <button
                  key={im}
                  onClick={() => setActive(i)}
                  className={`h-20 w-20 border bg-secondary cursor-pointer ${
                    i === active ? "border-gold" : ""
                  }`}
                >
                  <img
                    src={im}
                    alt=""
                    className="h-full w-full object-contain p-2"
                  />
                </button>
              ))}
            </div>
          )}
        </div>

        <div>
          {p.badge && <span className="eyebrow">{p.badge}</span>}
          <h1 className="mt-2 text-4xl md:text-5xl">{p.name}</h1>
          <div className="mt-3 flex items-center gap-2 text-sm text-muted-foreground">
            <Star className="h-4 w-4 fill-gold text-gold" /> {p.rating} · {p.metal}
          </div>
          <div className="mt-6 flex items-baseline gap-3">
            <span className="text-3xl font-semibold">{formatINR(p.price)}</span>
            {p.mrp > p.price && (
              <>
                <span className="text-muted-foreground line-through">
                  {formatINR(p.mrp)}
                </span>
                <span className="text-sm font-bold text-mauve">
                  Save {formatINR(p.mrp - p.price)}
                </span>
              </>
            )}
          </div>
          <p className="mt-1 text-xs text-muted-foreground">
            Inclusive of all taxes
          </p>
          <p className="mt-6 leading-relaxed text-muted-foreground">
            {p.description}
          </p>

          {isRing && (
            <div className="mt-8">
              <p className="mb-3 text-xs font-bold uppercase tracking-widest">
                Ring size
              </p>
              <div className="flex flex-wrap gap-2">
                {["10", "11", "12", "13", "14", "15"].map((s) => (
                  <button
                    key={s}
                    onClick={() => setSize(s)}
                    className={`h-11 w-11 border text-sm cursor-pointer transition ${
                      size === s
                        ? "border-navy bg-navy text-navy-foreground"
                        : "hover:border-gold"
                    }`}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>
          )}

          <div className="mt-8 flex gap-3">
            <div className="flex items-center border">
              <button
                aria-label="Decrease"
                className="px-3 py-3 cursor-pointer"
                onClick={() => setQty((q) => Math.max(1, q - 1))}
              >
                <Minus className="h-4 w-4" />
              </button>
              <span className="w-8 text-center">{qty}</span>
              <button
                aria-label="Increase"
                className="px-3 py-3 cursor-pointer"
                onClick={() => setQty((q) => q + 1)}
              >
                <Plus className="h-4 w-4" />
              </button>
            </div>
            <button
              className="btn-navy flex-1 cursor-pointer"
              onClick={() => {
                add(p.slug, qty);
                toast.success(`${p.name} added to your bag`);
              }}
            >
              Add to bag
            </button>
          </div>

          {p.category === "gift-cards" ? (
            <p className="mt-3 text-xs text-muted-foreground">
              Delivered by email within minutes of checkout, or in a Solmare
              keepsake box at your doorstep.
            </p>
          ) : (
            <Link to="/contact" className="btn-outline mt-3 w-full">
              Try at home / book video call
            </Link>
          )}

          <ul className="mt-10 grid gap-4 border-t pt-8 text-sm sm:grid-cols-3">
            <li className="flex items-center gap-2">
              <ShieldCheck className="h-5 w-5 text-gold" />
              BIS hallmarked
            </li>
            <li className="flex items-center gap-2">
              <Truck className="h-5 w-5 text-gold" />
              Free insured shipping
            </li>
            <li className="flex items-center gap-2">
              <RotateCcw className="h-5 w-5 text-gold" />
              15-day returns
            </li>
          </ul>
        </div>
      </div>

      <section className="mt-24">
        <h2 className="mb-10 text-center text-4xl">You may also love</h2>
        <div className="grid grid-cols-2 gap-x-4 gap-y-10 lg:grid-cols-4">
          {related.map((r) => (
            <ProductCard key={r.slug} product={r} />
          ))}
        </div>
      </section>
    </div>
  );
}
