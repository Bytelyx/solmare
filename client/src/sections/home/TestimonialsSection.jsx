import { Quote } from "lucide-react";
import { testimonials } from "@/constants/products";

export function TestimonialsSection() {
  return (
    <section className="bg-cat-gradient-6 py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="mb-12 text-center">
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-brand-bronze">
            Loved by you
          </p>
          <h2 className="mt-3 font-serif text-4xl text-brand-brown md:text-5xl">
            Treasured for a <span className="italic text-gold2">lifetime</span>
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <figure
              key={t.name}
              className="flex flex-col rounded-3xl border border-warm-cream bg-white/80 p-8 shadow-sm backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-md"
            >
              <Quote className="h-8 w-8 text-brand-gold-icon" />
              <blockquote className="mt-4 flex-1 text-base leading-relaxed text-body-muted">
                "{t.quote}"
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-4 border-t border-warm-cream pt-6">
                <img
                  src={t.image}
                  alt={t.name}
                  loading="lazy"
                  className="h-12 w-12 rounded-full object-cover ring-2 ring-ring-tan"
                />
                <div>
                  <p className="font-serif font-semibold text-brand-brown">{t.name}</p>
                  <p className="text-xs text-body-subtle">Loved: {t.loved}</p>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}