import { Link, useSearchParams } from "react-router-dom";
import { useMemo } from "react";
import { categories, getCategory, products } from "@/constants/products";
import {
  SHOP_FOR,
  METALS,
  OCCASION_OPTS,
  PRICES,
  STYLES,
} from "@/constants/filters";
import {
  audienceOf,
  materialsOf,
  occasionsOf,
  styleOf,
} from "@/utils/formatters";
import { ProductCard } from "@/components/common/ProductCard";
import { PageHero } from "@/components/layout/PageHero";
import everyday from "@/assets/everyday.jpg";

function Filter({ label, value, onChange, options }) {
  return (
    <label className="flex flex-col gap-1.5">
      <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-gold">
        {label}
      </span>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={`h-11 rounded-full border bg-card px-4 text-sm outline-none focus:border-gold ${
          value !== "all" ? "border-gold" : ""
        }`}
      >
        {options.map((o) => (
          <option key={o.value} value={o.value}>
            {o.label}
          </option>
        ))}
      </select>
    </label>
  );
}

export function JewellerySection() {
  const [searchParams, setSearchParams] = useSearchParams();

  const category = searchParams.get("category") || undefined;
  const q = searchParams.get("q") || undefined;
  const shopFor = searchParams.get("shopFor") || "all";
  const metal = searchParams.get("metal") || "all";
  const occasion = searchParams.get("occasion") || "all";
  const price = searchParams.get("price") || "all";
  const style = searchParams.get("style") || "all";

  const setFilter = (patch) => {
    const next = new URLSearchParams(searchParams);
    Object.entries(patch).forEach(([key, val]) => {
      if (!val || val === "all") {
        next.delete(key);
      } else {
        next.set(key, val);
      }
    });
    setSearchParams(next);
  };

  const cat = category ? getCategory(category) : undefined;

  const list = useMemo(() => {
    const pr = PRICES.find((x) => x.value === price);
    const term = (q ?? "").toLowerCase();
    return products.filter(
      (p) =>
        p.category !== "gift-cards" &&
        (!category || p.category === category) &&
        (p.name + " " + p.metal).toLowerCase().includes(term) &&
        (shopFor === "all" ||
          audienceOf(p) === shopFor ||
          (shopFor.startsWith("kid") && audienceOf(p) === "kids-unisex")) &&
        (metal === "all" || materialsOf(p).includes(metal)) &&
        (occasion === "all" || occasionsOf(p).includes(occasion)) &&
        (style === "all" ||
          styleOf(p) === style ||
          (style === "yellow-white" &&
            ["yellow", "white"].includes(styleOf(p)))) &&
        (!pr || (p.price >= pr.min && p.price < pr.max))
    );
  }, [category, q, shopFor, metal, occasion, price, style]);

  const clear = () => {
    setFilter({
      shopFor: undefined,
      metal: undefined,
      occasion: undefined,
      price: undefined,
      style: undefined,
    });
  };

  const makeCategoryUrl = (catSlug) => {
    const next = new URLSearchParams(searchParams);
    if (catSlug) {
      next.set("category", catSlug);
    } else {
      next.delete("category");
    }
    const str = next.toString();
    return str ? `/jewellery?${str}` : "/jewellery";
  };

  return (
    <>
      <PageHero
        eyebrow="The Jewellery"
        title={cat?.name ?? "All Jewellery"}
        subtitle="Hallmarked gold. Certified diamonds. Designed to be worn, every day."
        image={everyday}
      />
      <div className="mx-auto max-w-7xl px-4 py-12 md:px-8">
        <div className="-mx-4 mb-8 flex gap-2 overflow-x-auto px-4 pb-2 no-scrollbar">
          <Link
            to={makeCategoryUrl(undefined)}
            className={`shrink-0 border px-4 py-2 text-[11px] font-bold uppercase tracking-[0.15em] transition ${
              !category
                ? "border-navy bg-navy text-navy-foreground"
                : "hover:border-gold"
            }`}
          >
            All
          </Link>
          {categories.map((c) => (
            <Link
              key={c.slug}
              to={makeCategoryUrl(c.slug)}
              className={`flex shrink-0 items-center gap-2 border px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.15em] transition ${
                category === c.slug
                  ? "border-navy bg-navy text-navy-foreground"
                  : "hover:border-gold"
              }`}
            >
              <img
                src={c.image}
                alt=""
                className="h-6 w-6 rounded-full object-cover"
              />
              {c.name}
            </Link>
          ))}
        </div>

        <div className="mb-10 border-y py-5">
          <div className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-5">
            <Filter
              label="Shop for"
              value={shopFor}
              onChange={(v) => setFilter({ shopFor: v === "all" ? undefined : v })}
              options={SHOP_FOR}
            />
            <Filter
              label="Metals"
              value={metal}
              onChange={(v) => setFilter({ metal: v === "all" ? undefined : v })}
              options={METALS}
            />
            <Filter
              label="Occasion"
              value={occasion}
              onChange={(v) =>
                setFilter({ occasion: v === "all" ? undefined : v })
              }
              options={OCCASION_OPTS}
            />
            <Filter
              label="Price"
              value={price}
              onChange={(v) => setFilter({ price: v === "all" ? undefined : v })}
              options={PRICES}
            />
            <Filter
              label="Style"
              value={style}
              onChange={(v) => setFilter({ style: v === "all" ? undefined : v })}
              options={STYLES}
            />
          </div>
          <div className="mt-4 flex items-center justify-between text-sm text-muted-foreground">
            <p>
              {list.length} {list.length === 1 ? "design" : "designs"}
              {cat ? ` in ${cat.name}` : ""}
            </p>
            <button
              onClick={clear}
              className="text-xs font-bold uppercase tracking-[0.15em] text-gold hover:underline cursor-pointer"
            >
              Clear filters
            </button>
          </div>
        </div>

        {list.length ? (
          <div className="grid grid-cols-2 gap-x-4 gap-y-10 md:grid-cols-3 lg:grid-cols-4">
            {list.map((p) => (
              <ProductCard key={p.slug} product={p} />
            ))}
          </div>
        ) : (
          <div className="py-24 text-center">
            <h2 className="text-3xl">New designs arriving soon</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Our karigars are crafting this collection. Explore everything else
              meanwhile.
            </p>
            <Link to="/jewellery" className="btn-navy mt-6">
              View all jewellery
            </Link>
          </div>
        )}
      </div>
    </>
  );
}
