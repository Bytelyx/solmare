import React, { useRef } from "react";
import {
  Star,
  ChevronLeft,
  ChevronRight,
  Quote,
  Heart,
  Sparkles,
} from "lucide-react";
import { testimonials } from "@/constants/products";

export function TestimonialsSection() {
  const scrollRef = useRef(null);

  const handleScroll = (direction) => {
    if (!scrollRef.current) return;

    const container = scrollRef.current;
    const card = container.querySelector("[data-review-card]");
    const cardWidth = card ? card.getBoundingClientRect().width : 340;
    const gap = typeof window !== "undefined" && window.innerWidth < 640 ? 16 : 24;

    container.scrollBy({
      left: direction === "left" ? -(cardWidth + gap) : cardWidth + gap,
      behavior: "smooth",
    });
  };

  return (
    <section className="bg-cat-gradient-6 py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        {/* Section Heading */}
        <div className="mb-10 flex flex-col gap-6 sm:mb-14 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <div className="mb-3 inline-flex items-center gap-2">
              <span className="h-px w-6 bg-brand-bronze/40" />
              <Sparkles className="h-3.5 w-3.5 text-brand-bronze" strokeWidth={1.5} />
              <span className="text-[11px] font-medium uppercase tracking-[0.25em] text-brand-bronze sm:text-xs">
                Loved by you
              </span>
              <span className="h-px w-6 bg-brand-bronze/40" />
            </div>

            <h2 className="text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
              <span className="text-gradient-navy">Treasured for a</span>{" "}
              <span className="font-normal italic text-gold2">lifetime</span>
            </h2>

            <p className="mt-4 max-w-xl text-sm leading-relaxed text-body-muted sm:text-base">
              Every jewel holds a story. Discover the special moments, meaningful
              gifts, and little joys our customers celebrate with us.
            </p>
          </div>

          {/* Navigation Arrows */}
          <div className="flex items-center justify-between gap-4 sm:justify-end">
            <p className="text-[11px] uppercase tracking-[0.2em] text-body-subtle sm:text-xs">
              Stories that sparkle
            </p>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => handleScroll("left")}
                className="group flex h-10 w-10 items-center justify-center rounded-full border border-warm-cream bg-white/80 text-brand-brown shadow-sm backdrop-blur-sm transition-all duration-300 hover:border-brand-gold-icon hover:bg-white hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold-icon sm:h-12 sm:w-12"
                aria-label="Previous testimonials"
              >
                <ChevronLeft className="h-5 w-5 transition-transform group-hover:-translate-x-0.5" />
              </button>

              <button
                type="button"
                onClick={() => handleScroll("right")}
                className="group flex h-10 w-10 items-center justify-center rounded-full border border-warm-cream bg-white/80 text-brand-brown shadow-sm backdrop-blur-sm transition-all duration-300 hover:border-brand-gold-icon hover:bg-white hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold-icon sm:h-12 sm:w-12"
                aria-label="Next testimonials"
              >
                <ChevronRight className="h-5 w-5 transition-transform group-hover:translate-x-0.5" />
              </button>
            </div>
          </div>
        </div>

        {/* Testimonials Carousel */}
        <div
          ref={scrollRef}
          className="no-scrollbar flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth pb-6 sm:gap-6"
          aria-label="Customer testimonials"
        >
          {testimonials.map((t, index) => (
            <article
              key={`${t.name}-${index}`}
              data-review-card
              className="group relative flex w-[290px] flex-shrink-0 snap-start flex-col justify-between overflow-hidden rounded-3xl border border-warm-cream bg-white/85 p-6 shadow-sm backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-md sm:w-[350px] sm:p-7"
            >
              {/* Gold Top Accent Line */}
              <div className="absolute left-0 top-0 h-[2.5px] w-full bg-gradient-to-r from-transparent via-brand-gold-icon to-transparent opacity-50 transition-opacity duration-300 group-hover:opacity-100" />

              <div>
                {/* Rating & Quote */}
                <div className="mb-4 flex items-center justify-between">
                  <div
                    className="flex items-center gap-1"
                    aria-label={`${t.rating ?? 5} out of 5 stars`}
                  >
                    {Array.from({ length: t.rating ?? 5 }, (_, i) => (
                      <Star
                        key={i}
                        className="h-3.5 w-3.5 fill-gold2 text-gold2"
                        strokeWidth={1.5}
                      />
                    ))}
                  </div>

                  <Quote
                    className="h-7 w-7 text-brand-gold-icon/70"
                    strokeWidth={1.3}
                  />
                </div>

                {/* Quote Text */}
                <p className="min-h-[105px] text-[13px] leading-relaxed text-body-muted sm:text-sm">
                  "{t.quote || t.text}"
                </p>
              </div>

              {/* Customer Details & Product */}
              <div className="mt-6 border-t border-warm-cream pt-5">
                <div className="flex items-center gap-3">
                  <div className="relative h-12 w-12 flex-shrink-0">
                    <img
                      src={t.image}
                      alt={t.name}
                      loading="lazy"
                      className="h-full w-full rounded-full object-cover ring-2 ring-ring-tan"
                    />
                    <span className="absolute -bottom-0.5 -right-0.5 flex h-4 w-4 items-center justify-center rounded-full border-2 border-white bg-gold2">
                      <Heart className="h-2 w-2 fill-white text-white" strokeWidth={2} />
                    </span>
                  </div>

                  <div className="min-w-0 flex-1">
                    <h3 className="truncate font-serif text-sm font-semibold text-brand-brown">
                      {t.name}
                    </h3>
                    {t.city && (
                      <p className="text-[11px] text-body-subtle">{t.city}</p>
                    )}
                  </div>
                </div>

                {/* Loved Tag */}
                {(t.loved || t.product) && (
                  <div className="mt-4 flex items-start gap-2 rounded-2xl border border-warm-cream/60 bg-warm-cream/20 px-3 py-2.5">
                    <Sparkles
                      className="mt-0.5 h-3.5 w-3.5 flex-shrink-0 text-brand-bronze"
                      strokeWidth={1.5}
                    />
                    <p className="text-[11px] leading-snug text-body-subtle">
                      <span className="font-medium text-brand-brown">Loved:</span>{" "}
                      {t.loved || t.product}
                    </p>
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>

        {/* Bottom Accent */}
        <div className="mt-8 flex items-center justify-center gap-3 text-center">
          <span className="h-px w-8 bg-warm-cream" />
          <p className="text-[10px] uppercase tracking-[0.2em] text-brand-bronze sm:text-xs">
            Made for your moments. Treasured for a lifetime.
          </p>
          <span className="h-px w-8 bg-warm-cream" />
        </div>
      </div>
    </section>
  );
}

export default TestimonialsSection;