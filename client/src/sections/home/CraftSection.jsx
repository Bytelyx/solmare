import { Link } from "react-router-dom";
import craft from "@/assets/craft.jpg";

export function CraftSection() {
  return (
    <section className="bg-cat-gradient-6">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-20 md:grid-cols-2 md:px-8">
        <img
          src={craft}
          alt="Goldsmith setting a diamond"
          loading="lazy"
          width={1200}
          height={1408}
          className="aspect-[4/5] w-full object-cover shadow-soft"
        />
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-caramel">
            The atelier
          </p>

          <h2 className="mt-3 text-4xl font-normal leading-tight text-brand-charcoal md:text-5xl">
            Every piece passes through{" "}
            <em className="font-serif italic text-gold2">forty hands.</em>
          </h2>

          <p className="mt-6 leading-relaxed text-body-dark">
            From the first sketch to the final polish, our master karigars shape each
            design by hand — setting every diamond under the loupe, checking every
            clasp twice.
          </p>

          {/* Stats Section */}
          <div className="mt-8 grid grid-cols-3 gap-6 border-t border-warm-border pt-8">
            {[
              ["25+", "Years of craft"],
              ["1.2L", "Happy customers"],
              ["100%", "Hallmarked"],
            ].map(([n, l]) => (
              <div key={l}>
                <p className="font-display text-4xl font-normal text-brand-charcoal">
                  {n}
                </p>
                <p className="mt-1 text-xs uppercase tracking-widest text-body-gray">
                  {l}
                </p>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <Link
            to="/about"
            className="mt-10 inline-block border border-brand-charcoal bg-transparent px-8 py-3 text-xs font-medium uppercase tracking-widest text-brand-charcoal transition-colors duration-200 hover:bg-gradient-navy hover:text-gold2"
          >
            Our story
          </Link>
        </div>
      </div>
    </section>
  );
}