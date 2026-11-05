import { useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { categories, products } from "@/constants/products";
import LuxuryProductCard from "@/components/common/ProductCard";
import bridal from "@/assets/bridal.jpg";
import everyday from "@/assets/everyday.jpg";

const tabs = ["all", "rings", "earrings", "solitaires", "mangalsutras", "bangles"];

export function CategoriesSection() {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialCategory = searchParams.get("category") || "all";
  const [tab, setTab] = useState(initialCategory);



  const handleTabChange = (selectedTab) => {
    setTab(selectedTab);
    if (selectedTab === "all") {
      searchParams.delete("category");
      setSearchParams(searchParams);
    } else {
      setSearchParams({ category: selectedTab });
    }
  };

  const curated = products
    .filter((p) => tab === "all" || p.category?.toLowerCase() === tab.toLowerCase())
    .slice(0, 8);

  return (
    <div className="w-full">
      {/* Category Section + Editorial Highlights */}
      <div className="w-full bg-[linear-gradient(180deg,var(--color-cat-gradient-1)_0%,var(--color-cat-gradient-2)_30%,var(--color-cat-gradient-3)_50%,var(--color-cat-gradient-4)_65%,var(--color-cat-gradient-8)_85%,var(--color-cat-gradient-6)_100%)] px-4 pt-16 pb-8 md:px-8 md:pt-24 md:pb-12">
        {/* 1. Shop by Category */}
        <section className="mx-auto max-w-7xl pb-16">
          <div className="mb-12 text-center">
            <p className="eyebrow text-xs font-medium uppercase tracking-widest text-gold-metallic md:text-sm">
              Find your piece
            </p>
            <h1 className="mt-3 font-serif text-4xl text-white md:text-5xl">
              Shop by Category
            </h1>
          </div>

          <div className="grid grid-cols-3 gap-x-4 gap-y-8 sm:grid-cols-4 lg:grid-cols-8">
            {(categories || []).map((c) => (
              <Link
                key={c.slug}
                to={`/jewellery?category=${c.slug}`}
                className="group text-center"
              >
                <div className="mx-auto aspect-square w-full max-w-[120px] overflow-hidden rounded-full border border-white/20 bg-cat-gradient-1/40 shadow-md backdrop-blur-sm transition duration-300 group-hover:scale-105 group-hover:border-gold-metallic group-hover:shadow-[0_10px_20px_rgba(7,30,23,0.35)]">
                  <img
                    src={c.image}
                    alt={c.name}
                    loading="lazy"
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
                  />
                </div>
                <p className="mt-3 text-xs font-semibold uppercase tracking-wider text-white/90 transition group-hover:text-gold-metallic">
                  {c.name}
                </p>
              </Link>
            ))}
          </div>
        </section>

        {/* 2. Editorial Highlights */}
        <section className="mx-auto max-w-7xl">
          <div className="grid gap-4 md:grid-cols-5">
            <Link
              to="/collections"
              className="group relative overflow-hidden rounded-xl md:col-span-3 shadow-md"
            >
              <img
                src={bridal}
                alt="Bridal gold jewellery on navy velvet"
                loading="lazy"
                width={1408}
                height={1008}
                className="h-full min-h-[380px] w-full object-cover transition duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/20 to-transparent" />
              <div className="absolute bottom-0 p-8 text-white md:p-10">
                <p className="eyebrow text-gold-metallic">Collection</p>
                <h2 className="mt-2 text-4xl md:text-5xl font-serif">The Bridal Trousseau</h2>
                <span className="mt-4 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em]">
                  Discover <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                </span>
              </div>
            </Link>

            <Link
              to="/jewellery?category=rings"
              className="group relative overflow-hidden rounded-xl md:col-span-2 shadow-md"
            >
              <img
                src={everyday}
                alt="Stacked gold rings and bracelet"
                loading="lazy"
                width={1200}
                height={1408}
                className="h-full min-h-[380px] w-full object-cover transition duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/80 to-transparent" />
              <div className="absolute bottom-0 p-8 text-white">
                <p className="eyebrow text-gold-metallic">Under ₹40,000</p>
                <h2 className="mt-2 text-4xl font-serif">Everyday Gold</h2>
                <span className="mt-4 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em]">
                  Shop now <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                </span>
              </div>
            </Link>
          </div>
        </section>
      </div>

      {/* 3. Curated Fine Jewellery */}
      <section className="w-full bg-cat-gradient-6 px-4 pt-12 pb-16 text-stone-900 md:px-8 md:pt-16 md:pb-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 flex flex-col items-center gap-6 text-center">
            <div>
              <p className="eyebrow text-xs font-medium uppercase tracking-widest text-[#B38728]">
                Iconic designs
              </p>
              <h2 className="mt-3 font-serif text-4xl text-stone-900 md:text-5xl">
                Curated Fine Jewellery
              </h2>
              <p className="mt-3 text-sm text-stone-600">
                Everyday brilliance sculpted in 18Kt &amp; 22Kt hallmarked gold.
              </p>
            </div>

            <div className="no-scrollbar flex max-w-full gap-2 overflow-x-auto pb-1">
              {tabs.map((t) => (
                <button
                  key={t}
                  onClick={() => handleTabChange(t)}
                  className={`shrink-0 cursor-pointer rounded-full border px-5 py-2 text-[11px] font-bold uppercase tracking-[0.2em] transition ${tab === t
                      ? "border-gold bg-gold text-navy"
                      : "border-stone-300 bg-white text-stone-700 hover:border-gold hover:text-navy"
                    }`}
                >
                  {t}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-x-4 gap-y-10 md:grid-cols-3 lg:grid-cols-4">
            {curated.map((p) => (
              <LuxuryProductCard key={p.id || p.slug} product={p} />
            ))}
          </div>

          <div className="mt-14 text-center">
            <Link to="/jewellery" className="mt-10 inline-block border border-brand-charcoal bg-transparent px-8 py-3 text-xs font-medium uppercase tracking-widest text-brand-charcoal transition-colors duration-200 hover:bg-gradient-navy hover:text-gold2">
              View all jewellery
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}