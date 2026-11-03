import { Link } from "react-router-dom";
import { categories } from "@/constants/products";

export function CategoriesSection() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-20 md:px-8">
      <div className="mb-12 text-center">
        <p className="eyebrow">Find your piece</p>
        <h2 className="mt-3 text-4xl md:text-5xl">Shop by Category</h2>
      </div>
      <div className="grid grid-cols-3 gap-x-4 gap-y-8 sm:grid-cols-4 lg:grid-cols-8">
        {categories.map((c) => (
          <Link
            key={c.slug}
            to={`/jewellery?category=${c.slug}`}
            className="group text-center"
          >
            <div className="mx-auto aspect-square w-full max-w-[120px] overflow-hidden rounded-full border border-border bg-secondary transition group-hover:border-gold group-hover:shadow-soft">
              <img
                src={c.image}
                alt={c.name}
                loading="lazy"
                className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
              />
            </div>
            <p className="mt-3 text-xs font-semibold uppercase tracking-wider group-hover:text-gold transition">
              {c.name}
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
}
