import { Link } from "react-router-dom";
import { PageHero } from "@/components/layout/PageHero";
import { TIMELINE } from "@/constants/siteConfig";
import craft from "@/assets/craft.jpg";
import hero from "@/assets/hero.jpg";

export function AboutSection() {
  return (
    <>
      <PageHero
        eyebrow="Since 2001"
        title="Our Story"
        subtitle="Sun and sea — Sol & Mare. Warmth and depth, in every piece we make."
        image={craft}
      />
      <section className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-20 md:grid-cols-2 md:px-8">
        <div>
          <p className="eyebrow">Our philosophy</p>
          <h2 className="mt-3 text-4xl md:text-5xl">
            Jewellery is memory you can wear.
          </h2>
          <p className="mt-6 leading-relaxed text-muted-foreground">
            We believe fine jewellery should be honest — in its gold, in its stones
            and in its price. Every Solmare piece is BIS hallmarked, every diamond
            certified, and every price broken down so you know exactly what you're
            paying for.
          </p>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            Our designs blend Indian heritage with a quiet, modern hand: pieces to
            wear on a Tuesday and pass down on a wedding day.
          </p>
        </div>
        <img
          src={hero}
          alt="Solmare diamond necklace"
          loading="lazy"
          className="aspect-[4/5] w-full object-cover shadow-soft"
        />
      </section>
      <section className="bg-secondary">
        <div className="mx-auto max-w-5xl px-4 py-20 md:px-8">
          <h2 className="mb-12 text-center text-4xl">Our journey</h2>
          <ol className="relative space-y-10 border-l border-gold/50 pl-8">
            {TIMELINE.map(([y, t]) => (
              <li key={y} className="relative">
                <span className="absolute -left-[41px] top-1 h-4 w-4 rounded-full bg-gradient-gold" />
                <p className="font-display text-3xl text-gold">{y}</p>
                <p className="mt-1 text-muted-foreground">{t}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>
      <section className="py-20 text-center">
        <h2 className="text-4xl">Come say hello.</h2>
        <Link to="/contact" className="btn-gold mt-6 inline-flex">
          Visit our store
        </Link>
      </section>
    </>
  );
}
