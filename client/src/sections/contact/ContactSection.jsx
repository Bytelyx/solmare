import { useState } from "react";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { toast } from "sonner";
import { PageHero } from "@/components/layout/PageHero";
import { BOUTIQUE_INFO } from "@/constants/siteConfig";
import hero from "@/assets/hero.jpg";

export function ContactSection() {
  const [sent, setSent] = useState(false);
  const field =
    "w-full border bg-transparent px-4 py-3 text-sm focus:border-gold focus:outline-none";

  return (
    <>
      <PageHero
        eyebrow="We're here for you"
        title="Book an Appointment"
        subtitle="Visit our boutique or meet an expert on video — we'll have your favourites ready."
        image={hero}
      />
      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-20 md:px-8 lg:grid-cols-3">
        <div className="space-y-8">
          {[
            [MapPin, "Boutique", BOUTIQUE_INFO.address],
            [Phone, "Call us", BOUTIQUE_INFO.phone],
            [Mail, "Write to us", BOUTIQUE_INFO.email],
            [Clock, "Hours", BOUTIQUE_INFO.hours],
          ].map(([Icon, t, d]) => (
            <div key={t} className="flex gap-4">
              <div className="grid h-12 w-12 shrink-0 place-items-center rounded-full border border-gold/60">
                <Icon className="h-5 w-5 text-gold" />
              </div>
              <div>
                <p className="font-display text-xl">{t}</p>
                <p className="text-sm text-muted-foreground">{d}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="border bg-card p-6 shadow-soft md:p-10 lg:col-span-2">
          {sent ? (
            <div className="py-16 text-center">
              <p className="eyebrow">Thank you</p>
              <h2 className="mt-3 text-4xl">We'll be in touch shortly.</h2>
              <p className="mt-3 text-sm text-muted-foreground">
                A Solmare expert will call you within 24 hours to confirm.
              </p>
            </div>
          ) : (
            <form
              className="grid gap-5 sm:grid-cols-2"
              onSubmit={(e) => {
                e.preventDefault();
                setSent(true);
                toast.success("Appointment request sent");
              }}
            >
              <input
                required
                maxLength={80}
                placeholder="Full name"
                className={field}
              />
              <input
                required
                type="tel"
                maxLength={15}
                placeholder="Phone number"
                className={field}
              />
              <input
                required
                type="email"
                maxLength={120}
                placeholder="Email"
                className={`${field} sm:col-span-2`}
              />
              <select className={field} defaultValue="store">
                <option value="store">Store visit</option>
                <option value="video">Video consultation</option>
                <option value="home">Try at home</option>
              </select>
              <input required type="date" className={field} />
              <textarea
                maxLength={1000}
                rows={4}
                placeholder="What are you looking for?"
                className={`${field} sm:col-span-2`}
              />
              <button className="btn-navy sm:col-span-2 cursor-pointer">
                Request appointment
              </button>
            </form>
          )}
        </div>
      </div>
    </>
  );
}
