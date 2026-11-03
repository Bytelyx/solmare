import { Link } from "react-router-dom";
import craft from "@/assets/craft.jpg";

export function CraftSection() {
  return (
    <section className="bg-secondary">
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
          <p className="eyebrow">The atelier</p>
          <h2 className="mt-3 text-4xl md:text-5xl">
            Every piece passes through <em className="text-gold">forty hands.</em>
          </h2>
          <p className="mt-6 text-muted-foreground leading-relaxed">
            From the first sketch to the final polish, our master karigars shape each
            design by hand — setting every diamond under the loupe, checking every
            clasp twice.
          </p>
          <div className="mt-8 grid grid-cols-3 gap-6 border-t pt-8">
            {[
              ["25+", "Years of craft"],
              ["1.2L", "Happy customers"],
              ["100%", "Hallmarked"],
            ].map(([n, l]) => (
              <div key={l}>
                <p className="font-display text-4xl text-gold">{n}</p>
                <p className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">
                  {l}
                </p>
              </div>
            ))}
          </div>
          <Link to="/about" className="btn-outline mt-10">
            Our story
          </Link>
        </div>
      </div>
    </section>
  );
}
