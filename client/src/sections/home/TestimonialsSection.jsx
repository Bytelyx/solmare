import { Quote } from "lucide-react";
import { testimonials } from "@/constants/products";

export function TestimonialsSection() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-24 md:px-8">
      <div className="mb-12 text-center">
        <p className="eyebrow">Loved by you</p>
        <h2 className="mt-3 text-4xl md:text-5xl">Treasured for a lifetime</h2>
      </div>
      <div className="grid gap-6 md:grid-cols-3">
        {testimonials.map((t) => (
          <figure
            key={t.name}
            className="flex flex-col border bg-card p-8 transition hover:shadow-soft"
          >
            <Quote className="h-8 w-8 text-gold" />
            <blockquote className="mt-4 flex-1 font-display text-xl italic leading-snug">
              "{t.quote}"
            </blockquote>
            <figcaption className="mt-6 flex items-center gap-4 border-t pt-6">
              <img
                src={t.image}
                alt={t.name}
                loading="lazy"
                className="h-12 w-12 rounded-full object-cover"
              />
              <div>
                <p className="font-semibold">{t.name}</p>
                <p className="text-xs text-muted-foreground">Loved: {t.loved}</p>
              </div>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
