import { Link } from "react-router-dom";
import { categories } from "@/constants/products";

export function CategoriesSection() {
  return (
    <section className="relative -mt-px w-full bg-[linear-gradient(180deg,var(--color-cat-gradient-1)_0%,var(--color-cat-gradient-2)_20%,var(--color-cat-gradient-3)_42%,var(--color-cat-gradient-4)_70%,var(--color-cat-gradient-5)_88%,var(--color-cat-gradient-6)_100%)] px-4 py-20 text-white md:px-8">
      <div className="mb-12 text-center">
        <p className="eyebrow tracking-widest text-gold-metallic uppercase text-xs md:text-sm font-medium">
          Find your piece
        </p>
        <h2 className="mt-3 font-serif text-4xl text-white md:text-5xl">
          Shop by Category
        </h2>
      </div>
      <div className="mx-auto max-w-7xl grid grid-cols-3 gap-x-4 gap-y-8 sm:grid-cols-4 lg:grid-cols-8">
        {categories.map((c) => (
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
  );
}