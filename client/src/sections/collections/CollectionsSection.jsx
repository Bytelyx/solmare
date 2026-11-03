import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { PageHero } from "@/components/layout/PageHero";
import bridal from "@/assets/bridal.jpg";
import everyday from "@/assets/everyday.jpg";
import hero from "@/assets/hero.jpg";
import craft from "@/assets/craft.jpg";

const list = [
  {
    title: "The Bridal Trousseau",
    copy: "22Kt heirlooms — bangles, mangalsutras and jhumkas for the day you'll remember forever.",
    img: bridal,
    cat: "mangalsutras",
  },
  {
    title: "Everyday Gold",
    copy: "Stackable rings and fine chains designed for coffee runs, boardrooms and everything in between.",
    img: everyday,
    cat: "rings",
  },
  {
    title: "Diamond Evenings",
    copy: "Brilliant-cut diamonds in rose and white gold, made to catch candlelight.",
    img: hero,
    cat: "earrings",
  },
  {
    title: "Solitaire Atelier",
    copy: "Certified solitaires, hand-set by our master karigars. Built for the big question.",
    img: craft,
    cat: "solitaires",
  },
];

export function CollectionsSection() {
  return (
    <>
      <PageHero
        eyebrow="Stories in gold"
        title="Our Collections"
        subtitle="Four worlds, one promise: jewellery made for your moments."
        image={bridal}
      />
      <div className="mx-auto max-w-7xl space-y-20 px-4 py-20 md:space-y-28 md:px-8">
        {list.map((c, i) => (
          <article
            key={c.title}
            className="grid items-center gap-10 md:grid-cols-2"
          >
            <div className={`overflow-hidden ${i % 2 ? "md:order-2" : ""}`}>
              <img
                src={c.img}
                alt={c.title}
                loading="lazy"
                className="aspect-[4/3] w-full object-cover transition duration-1000 hover:scale-105"
              />
            </div>
            <div>
              <p className="eyebrow">Collection 0{i + 1}</p>
              <h2 className="mt-3 text-4xl md:text-5xl">{c.title}</h2>
              <p className="mt-5 max-w-md leading-relaxed text-muted-foreground">
                {c.copy}
              </p>
              <Link
                to={`/jewellery?category=${c.cat}`}
                className="btn-navy mt-8"
              >
                Shop the collection <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </article>
        ))}
      </div>
    </>
  );
}
