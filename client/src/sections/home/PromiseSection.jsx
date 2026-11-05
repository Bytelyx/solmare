import { PROMISES } from "@/constants/siteConfig";

export function PromiseSection() {
  return (
    <section className="bg-cat-gradient-6 py-14 text-slate-800 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-8">

        {/* Header */}
        <div className="mb-10 text-center sm:mb-14">
          <div className="flex items-center justify-center gap-3 text-xs font-medium uppercase tracking-[0.25em] text-brand-bronze">
            <span className="h-px w-8 bg-[#C5A880]/60" />
            <span className="flex items-center gap-1.5">
              <span>✦</span> THE SOLMARE DIFFERENCE
            </span>
            <span className="h-px w-8 bg-[#C5A880]/60" />
          </div>  

          <h2 className="mt-3 font-serif text-4xl md:text-5xl">
            <span className="text-gradient-navy">The Solmare</span>{" "}
            <span className="font-normal italic text-gold2">Promise</span>
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-slate-600 sm:text-base">
            Beautiful jewellery deserves a beautiful experience. Thoughtful
            details, transparent service, and care at every step.
          </p>
        </div>

        {/* Promise Cards Grid */}
        <div className="grid grid-cols-2 gap-3 sm:gap-5 md:grid-cols-3 lg:grid-cols-6 lg:gap-4">
          {PROMISES.map(({ icon: Icon, t, d }) => (
            <div
              key={t}
              className="group relative flex flex-col items-center overflow-hidden rounded-2xl border border-slate-200/80 bg-white px-3 py-6 text-center transition-all duration-300 hover:-translate-y-1 hover:border-[#C5A880] hover:shadow-[0_12px_32px_rgba(90,70,35,0.08)] sm:rounded-3xl sm:px-4 sm:py-7"
            >
              {/* Fine Top Accent Line on Hover */}
              <div className="absolute left-1/2 top-0 h-[2px] w-0 -translate-x-1/2 bg-[#B89047] transition-all duration-300 group-hover:w-full" />

              {/* Circular Icon Container */}
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full border border-[#FAF5EE] bg-[#FAF5EE] text-[#B89047] transition-all duration-300 group-hover:border-[#B89047] group-hover:bg-cat-gradient-2 group-hover:text-[#FAF5EE] sm:h-14 sm:w-14">
                <Icon className="h-5 w-5 sm:h-6 sm:w-6" strokeWidth={1.5} />
              </div>

              {/* Decorative Divider Line */}
              <span className="mb-3 h-px w-7 bg-[#C5A880]/50 transition-all duration-300 group-hover:w-12" />

              {/* Title */}
              <h3 className="font-serif text-xs font-semibold leading-5 text-[#1A2744] sm:text-sm">
                {t}
              </h3>

              {/* Description */}
              <p className="mt-2 text-[10px] leading-[1.8] text-slate-500 sm:text-xs sm:leading-6">
                {d}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom Tagline Divider */}
        <div className="mt-12 flex items-center justify-center gap-4 text-[10px] font-medium uppercase tracking-[0.25em] text-[#8C7A6B] sm:text-[11px]">
          <span className="h-px w-12 bg-[#C5A880]/40 sm:w-16" />
          <span>EVERY DETAIL. EVERY PROMISE. EVERY SOLMARE MOMENT.</span>
          <span className="h-px w-12 bg-[#C5A880]/40 sm:w-16" />
        </div>

      </div>
    </section>
  );
}