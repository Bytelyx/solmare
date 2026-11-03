import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import heroVideo from "@/assets/hero-video.mp4";
import bridal from "@/assets/bridal.jpg";
import bannerBridal from "@/assets/banner-bridal.jpg";
import bannerSolitaire from "@/assets/banner-solitaire.jpg";
import bannerEveryday from "@/assets/banner-everyday.jpg";

const banners = [
  {
    image: bannerBridal,
    alt: "The Bridal Trousseau — discover the collection",
    to: "/collections",
  },
  {
    image: bannerSolitaire,
    alt: "The Solitaire Edit — certified diamonds",
    to: "/jewellery?category=solitaires",
  },
  {
    image: bannerEveryday,
    alt: "Everyday Gold — under ₹40,000",
    to: "/jewellery?metal=gold",
  },
  {
    image: bridal,
    alt: "Bridal gold jewellery collection",
    to: "/collections",
  },
];

function BannerSlider() {
  const n = banners.length;
  const track = Array.from({ length: n * 3 }, (_, k) => banners[k % n]);
  const [k, setK] = useState(n);
  const [anim, setAnim] = useState(true);

  const next = () => setK((x) => x + 1);
  const prev = () => setK((x) => x - 1);

  useEffect(() => {
    const t = setInterval(() => setK((x) => x + 1), 5000);
    return () => clearInterval(t);
  }, [k]);

  useEffect(() => {
    if (k >= n && k < 2 * n) return;
    const t = setTimeout(() => {
      setAnim(false);
      setK((x) => x + (x < n ? n : -n));
    }, 720);
    return () => clearTimeout(t);
  }, [k, n]);

  useEffect(() => {
    if (anim) return;
    let inner = 0;
    const outer = requestAnimationFrame(() => {
      inner = requestAnimationFrame(() => setAnim(true));
    });
    return () => {
      cancelAnimationFrame(outer);
      cancelAnimationFrame(inner);
    };
  }, [anim]);

  const active = ((k % n) + n) % n;

  const goTo = (j) => {
    const base = n + j;
    setK(
      [base - n, base, base + n].reduce((a, b) =>
        Math.abs(b - k) < Math.abs(a - k) ? b : a
      )
    );
  };

  return (
    <div className="overflow-hidden [--peak:6vw] [--sw:88vw] md:[--peak:11vw] md:[--sw:78vw]">
      <div
        className="flex w-max"
        style={{
          transform: `translate3d(calc(var(--peak) - ${k} * var(--sw)), 0, 0)`,
          transition: anim
            ? "transform 700ms cubic-bezier(0.22, 0.61, 0.36, 1)"
            : "none",
        }}
      >
        {track.map((b, idx) => {
          const on = idx === k;
          return (
            <div key={idx} className="w-[var(--sw)] shrink-0 px-1.5 md:px-3">
              <Link
                to={b.to}
                className={`block aspect-[16/9] overflow-hidden rounded-3xl shadow-soft transition duration-700 md:aspect-[21/8] ${
                  on ? "scale-100 opacity-100" : "scale-[0.93] opacity-45"
                }`}
              >
                <img
                  src={b.image}
                  alt={b.alt}
                  loading={idx === k ? "eager" : "lazy"}
                  className="h-full w-full object-cover"
                />
              </Link>
            </div>
          );
        })}
      </div>

      <div className="mt-6 flex items-center justify-center gap-5">
        <button
          aria-label="Previous banner"
          onClick={prev}
          className="grid h-10 w-10 place-items-center rounded-full border border-gold/50 bg-navy/60 text-gold backdrop-blur transition hover:bg-gold hover:text-navy cursor-pointer"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <div className="flex items-center gap-2.5">
          {banners.map((_, j) => (
            <button
              key={j}
              aria-label={`Go to banner ${j + 1}`}
              onClick={() => goTo(j)}
              className={`h-2.5 rounded-full transition-all cursor-pointer ${
                j === active ? "w-8 bg-gold" : "w-2.5 bg-gold/40 hover:bg-gold/70"
              }`}
            />
          ))}
        </div>
        <button
          aria-label="Next banner"
          onClick={next}
          className="grid h-10 w-10 place-items-center rounded-full border border-gold/50 bg-navy/60 text-gold backdrop-blur transition hover:bg-gold hover:text-navy cursor-pointer"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
}

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-navy">
      <video
        src={heroVideo}
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-b from-transparent to-background" />
      <div className="relative pb-12 pt-[32vh] md:pt-[40vh]">
        <BannerSlider />
      </div>
    </section>
  );
}