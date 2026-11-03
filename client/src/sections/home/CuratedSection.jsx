import { Link } from "react-router-dom";
import { useState } from "react";
import { products } from "@/constants/products";
import { ProductCard } from "@/components/common/ProductCard";

const tabs = ["all", "rings", "earrings", "solitaires", "mangalsutras", "bangles"];

export function CuratedSection() {
  const [tab, setTab] = useState("all");
  const curated = products
    .filter((p) => tab === "all" || p.category === tab)
    .slice(0, 8);

  return (
    <section className="mx-auto max-w-7xl px-4 py-24 md:px-8">
      <div className="mb-10 flex flex-col items-center gap-6 text-center">
        <div>
          <p className="eyebrow">Iconic designs</p>
          <h2 className="mt-3 text-4xl md:text-5xl">Curated Fine Jewellery</h2>
          <p className="mt-3 text-sm text-muted-foreground">
            Everyday brilliance sculpted in 18Kt & 22Kt hallmarked gold.
          </p>
        </div>
        <div className="flex max-w-full gap-2 overflow-x-auto pb-1 no-scrollbar">
          {tabs.map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className={`shrink-0 rounded-full border px-5 py-2 text-[11px] font-bold uppercase tracking-[0.2em] transition cursor-pointer ${
                tab === t
                  ? "border-gold bg-gold text-navy"
                  : "border-border hover:border-gold"
              }`}
            >
              {t}
            </button>
          ))}
        </div>
      </div>
      <div className="grid grid-cols-2 gap-x-4 gap-y-10 md:grid-cols-3 lg:grid-cols-4">
        {curated.map((p) => (
          <ProductCard key={p.slug} product={p} />
        ))}
      </div>
      <div className="mt-12 text-center">
        <Link to="/jewellery" className="btn-navy">
          View all jewellery
        </Link>
      </div>
    </section>
  );
}
