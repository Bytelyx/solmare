
import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import { Minus, Plus, ShieldCheck, Truck, RotateCcw, Star, } from "lucide-react";
import { toast } from "sonner";
import { formatINR } from "@/utils/formatters";
import { getCategory, getProduct, products, } from "@/constants/products";
import { useCart } from "@/hooks/useCart";
import { ProductCard } from "@/components/common/ProductCard";

export function ProductDetailSection() {
  const { slug } = useParams();
  const p = getProduct(slug);
  const { add } = useCart();

  const [active, setActive] = useState(0);
  const [qty, setQty] = useState(1);
  const [size, setSize] = useState("12");

  const productBackground =
    "bg-gradient-to-b from-product-bg-start via-product-bg-middle to-product-bg-end";

  if (!p) {
    return (
      <div className={`${productBackground} flex min-h-[60vh] items-center justify-center px-4`}>
        <div className="max-w-md text-center">
          <p className="eyebrow text-product-gold-text">
            Lost sparkle
          </p>

          <h1 className="mt-3 text-4xl text-product-green">
            Design not found
          </h1>

          <p className="mt-2 text-sm text-product-green-muted">
            The design you're looking for doesn't exist or has been moved.
          </p>

          <Link
            to="/jewellery"
            className="mt-6 inline-flex rounded-lg bg-product-green-dark px-6 py-3 text-sm font-semibold text-product-gold-light transition hover:bg-product-green"
          >
            View all jewellery
          </Link>
        </div>
      </div>
    );
  }

  const isRing =
    p.category === "rings" || p.category === "solitaires";

  const related = products
    .filter(
      (x) =>
        x.slug !== p.slug &&
        x.category !== "gift-cards"
    )
    .slice(0, 4);

  return (
    <div className={`${productBackground} min-h-screen`}>

      <div className="mx-auto max-w-7xl px-4 py-10 md:px-8">

        {/* Breadcrumb Navigation */}
        <nav className="mb-8 text-xs uppercase tracking-widest text-product-green-muted">
          <Link to="/" className="transition hover:text-product-gold-text">
            Home
          </Link>{" "}
          /{" "}

          {p.category === "gift-cards" ? (
            <Link to="/gift-cards" className="transition hover:text-product-gold-text">
              Gift Cards
            </Link>
          ) : (
            <Link to={`/jewellery?category=${p.category}`} className="transition hover:text-product-gold-text">
              {getCategory(p.category)?.name}
            </Link>
          )}{" "}
          / <span className="font-semibold text-product-green">{p.name}</span>
        </nav>

        {/* Product Details */}
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-14">

          {/* Product Images */}
          <div>
            <div className="flex aspect-square items-center justify-center overflow-hidden rounded-[22px] border border-product-gold-light/40 bg-gradient-to-b from-product-bg-start via-product-bg-middle to-product-bg-end p-6 shadow-product-card md:p-10">
              <img src={p.images[active]} alt={p.name} className="h-full w-full object-contain drop-shadow-product-image transition-all duration-500" />
            </div>

            {p.images.length > 1 && (
              <div className="mt-4 flex flex-wrap gap-3">
                {p.images.map((im, i) => (
                  <button key={im} onClick={() => setActive(i)} aria-label={`View product image ${i + 1}`} className={`h-20 w-20 cursor-pointer overflow-hidden rounded-xl border bg-product-white p-2 transition-all duration-300 ${i === active
                    ? "border-product-gold shadow-product-card"
                    : "border-product-gold-light/50 hover:border-product-gold"
                    }`}
                  >
                    <img src={im} alt="" className="h-full w-full object-contain" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product Information */}
          <div className="flex flex-col">

            {p.badge && (
              <span className="w-fit rounded-md border border-product-gold/30 bg-product-green-dark px-3 py-1 text-[10px] font-semibold uppercase tracking-widest text-product-gold-light">
                {p.badge}
              </span>
            )}

            <h1 className="mt-4 text-3xl font-bold tracking-tight text-product-green md:text-5xl">
              {p.name}
            </h1>

            <div className="mt-4 flex items-center gap-2 text-sm text-product-green-muted">
              <Star className="h-4 w-4 fill-product-gold-text text-product-gold-text" />
              <span className="font-semibold text-product-green">
                {p.rating}
              </span>
              <span>·</span>
              <span>{p.metal}</span>
            </div>

            {/* Price */}
            <div className="mt-7 flex flex-wrap items-baseline gap-3">
              <span className="text-3xl font-bold text-product-green">
                {formatINR(p.price)}
              </span>

              {p.mrp > p.price && (
                <>
                  <span className="text-base text-product-gold-text line-through">
                    {formatINR(p.mrp)}
                  </span>

                  <span className="rounded-md bg-product-green-dark px-2 py-1 text-xs font-semibold text-product-gold-light">
                    Save {formatINR(p.mrp - p.price)}
                  </span>
                </>
              )}
            </div>

            <p className="mt-2 text-xs font-medium text-product-green-muted">
              Inclusive of all taxes
            </p>

            <div className="my-7 h-px bg-product-gold-light/60" />

            {/* Description */}
            <p className="leading-7 text-product-green-muted">
              {p.description}
            </p>

            {/* Ring Size */}
            {isRing && (
              <div className="mt-8">
                <p className="mb-3 text-xs font-bold uppercase tracking-widest text-product-green">
                  Ring size
                </p>

                <div className="flex flex-wrap gap-2">
                  {["10", "11", "12", "13", "14", "15"].map((s) => (
                    <button key={s} onClick={() => setSize(s)} className={`flex h-11 w-11 cursor-pointer items-center justify-center rounded-lg border text-sm font-semibold transition-all duration-200 ${size === s
                      ? "border-product-green-dark bg-product-green-dark text-product-gold-light shadow-sm"
                      : "border-product-gold-light bg-product-white text-product-green hover:border-product-gold hover:bg-product-bg-start"
                      }`}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Quantity and Add to Bag */}
            <div className="mt-8 flex flex-wrap gap-3">

              {/* Quantity Selector */}
              <div className="flex h-12 items-center overflow-hidden rounded-lg border border-product-gold-light bg-product-white">
                <button type="button" aria-label="Decrease quantity" disabled={qty <= 1} className="flex h-full cursor-pointer items-center px-4 text-product-green-muted transition hover:bg-product-bg-start disabled:cursor-not-allowed disabled:opacity-40" onClick={() => setQty((q) => Math.max(1, q - 1))}>
                  <Minus className="h-4 w-4" />
                </button>

                <span className="w-8 text-center text-sm font-bold tabular-nums text-product-green">
                  {qty}
                </span>

                <button type="button" aria-label="Increase quantity" className="flex h-full cursor-pointer items-center px-4 text-product-green-muted transition hover:bg-product-bg-start" onClick={() => setQty((q) => q + 1)}>
                  <Plus className="h-4 w-4" />
                </button>
              </div>

              {/* Add to Bag */}
              <button type="button" className="flex min-h-12 flex-1 cursor-pointer items-center justify-center rounded-lg bg-product-green-dark px-6 py-3 text-sm font-semibold tracking-wide text-product-gold-light shadow-[0_4px_12px_rgba(7,30,23,0.15)] transition-all duration-300 hover:bg-product-green hover:shadow-lg active:scale-[0.98]"
                onClick={() => {
                  add(p.slug, qty);
                  toast.success(`${qty} x ${p.name} added to your bag`);
                }}
              >
                Add to Cart
              </button>
            </div>

            {/* Additional Information */}
            {p.category === "gift-cards" ? (
              <p className="mt-4 text-xs leading-relaxed text-product-green-muted">
                Delivered by email within minutes of checkout, or in a keepsake box at your doorstep.
              </p>
            ) : (
              <Link to="/contact" className="mt-3 flex min-h-12 w-full items-center justify-center rounded-lg border border-product-gold/60 bg-product-white/60 px-4 py-3 text-sm font-semibold text-product-green-dark transition-all hover:border-product-gold hover:bg-product-bg-start">
                Buy Now
              </Link>
            )}

            {/* Product Benefits */}
            <ul className="mt-10 grid gap-5 border-t border-product-gold-light/60 pt-7 text-xs font-medium text-product-green-muted sm:grid-cols-3">
              <li className="flex items-center gap-2">
                <ShieldCheck className="h-5 w-5 shrink-0 text-product-gold-text" />
                BIS hallmarked
              </li>

              <li className="flex items-center gap-2">
                <Truck className="h-5 w-5 shrink-0 text-product-gold-text" />
                Free insured shipping
              </li>

              <li className="flex items-center gap-2">
                <RotateCcw className="h-5 w-5 shrink-0 text-product-gold-text" />
                15-day returns
              </li>
            </ul>
          </div>
        </div>

        {/* Related Products */}
        <section className="mt-24">
          <h2 className="mb-10 text-center text-3xl font-bold tracking-tight text-product-green md:text-4xl">
            You may also love
          </h2>

          <div className="grid grid-cols-2 gap-x-4 gap-y-8 lg:grid-cols-4">
            {related.map((r) => (
              <ProductCard
                key={r.slug}
                product={r}
              />
            ))}
          </div>
        </section>

      </div>
    </div>
  );
}

export default ProductDetailSection;
