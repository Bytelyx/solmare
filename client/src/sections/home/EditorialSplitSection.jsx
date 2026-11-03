import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import bridal from "@/assets/bridal.jpg";
import everyday from "@/assets/everyday.jpg";

export function EditorialSplitSection() {
  return (
    <section className="mx-auto grid max-w-7xl gap-4 px-4 md:grid-cols-5 md:px-8 ">
      <Link to="/collections" className="group relative overflow-hidden md:col-span-3">
        <img
          src={bridal}
          alt="Bridal gold jewellery on navy velvet"
          loading="lazy"
          width={1408}
          height={1008}
          className="h-full min-h-[380px] w-full object-cover transition duration-1000 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/20 to-transparent" />
        <div className="absolute bottom-0 p-8 text-navy-foreground md:p-10">
          <p className="eyebrow">Collection</p>
          <h3 className="mt-2 text-4xl md:text-5xl">The Bridal Trousseau</h3>
          <span className="mt-4 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em]">
            Discover <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
          </span>
        </div>
      </Link>
      <Link
        to="/jewellery?category=rings"
        className="group relative overflow-hidden md:col-span-2"
      >
        <img
          src={everyday}
          alt="Stacked gold rings and bracelet"
          loading="lazy"
          width={1200}
          height={1408}
          className="h-full min-h-[380px] w-full object-cover transition duration-1000 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy/80 to-transparent" />
        <div className="absolute bottom-0 p-8 text-navy-foreground">
          <p className="eyebrow">Under ₹40,000</p>
          <h3 className="mt-2 text-4xl">Everyday Gold</h3>
          <span className="mt-4 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em]">
            Shop now <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
          </span>
        </div>
      </Link>
    </section>
  );
}
