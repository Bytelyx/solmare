import { PROMISES } from "@/constants/siteConfig";

export function PromiseSection() {
  return (
    <section className="bg-gradient-navy text-navy-foreground">
      <div className="mx-auto max-w-7xl px-4 py-20 md:px-8">
        <div className="mb-12 text-center">
          <p className="eyebrow">The Solmare difference</p>
          <h2 className="mt-3 text-4xl md:text-5xl">The Solmare Promise</h2>
        </div>
        <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-6">
          {PROMISES.map(({ icon: Icon, t, d }) => (
            <div key={t} className="text-center">
              <div className="mx-auto grid h-14 w-14 place-items-center rounded-full border border-gold/50">
                <Icon className="h-6 w-6 text-gold-soft" />
              </div>
              <h3 className="mt-4 text-lg">{t}</h3>
              <p className="mt-2 text-xs leading-relaxed text-navy-foreground/65">
                {d}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
