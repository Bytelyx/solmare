import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect, Suspense, lazy } from "react";
import { CartProvider } from "@/hooks/useCart";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { Toaster } from "@/components/common/Toaster";

import { HeroSection } from "@/sections/home/HeroSection";
import { CategoriesSection } from "@/sections/home/CategoriesSection";
import { EditorialSplitSection } from "@/sections/home/EditorialSplitSection";
import { CuratedSection } from "@/sections/home/CuratedSection";
import { CraftSection } from "@/sections/home/CraftSection";
import { TestimonialsSection } from "@/sections/home/TestimonialsSection";
import { PromiseSection } from "@/sections/home/PromiseSection";

const JewellerySection = lazy(() =>
  import("@/sections/jewellery/JewellerySection").then((m) => ({
    default: m.JewellerySection,
  }))
);
const CollectionsSection = lazy(() =>
  import("@/sections/collections/CollectionsSection").then((m) => ({
    default: m.CollectionsSection,
  }))
);
const ProductDetailSection = lazy(() =>
  import("@/sections/product/ProductDetailSection").then((m) => ({
    default: m.ProductDetailSection,
  }))
);
const AboutSection = lazy(() =>
  import("@/sections/about/AboutSection").then((m) => ({
    default: m.AboutSection,
  }))
);
const ContactSection = lazy(() =>
  import("@/sections/contact/ContactSection").then((m) => ({
    default: m.ContactSection,
  }))
);
const GiftCardsSection = lazy(() =>
  import("@/sections/gift-cards/GiftCardsSection").then((m) => ({
    default: m.GiftCardsSection,
  }))
);
const CartSection = lazy(() =>
  import("@/sections/cart/CartSection").then((m) => ({
    default: m.CartSection,
  }))
);
const AuthSection = lazy(() =>
  import("@/sections/auth/AuthSection").then((m) => ({
    default: m.AuthSection,
  }))
);
const AccountSection = lazy(() =>
  import("@/sections/account/AccountSection").then((m) => ({
    default: m.AccountSection,
  }))
);
const NotFoundSection = lazy(() =>
  import("@/sections/not-found/NotFoundSection").then((m) => ({
    default: m.NotFoundSection,
  }))
);

function ScrollToTop() {
  const { pathname, search } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname, search]);

  return null;
}

function HomePage() {
  return (
    <>
      <HeroSection />
      <CategoriesSection />
      <EditorialSplitSection />
      <CuratedSection />
      <CraftSection />
      <TestimonialsSection />
      <PromiseSection />
    </>
  );
}

function RouteLoading() {
  return <div className="min-h-[60vh]" />;
}

export default function App() {
  return (
    <CartProvider>
      <ScrollToTop />
      <SiteHeader />
      <main className="min-h-[60vh]">
        <Suspense fallback={<RouteLoading />}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/jewellery" element={<JewellerySection />} />
            <Route path="/collections" element={<CollectionsSection />} />
            <Route path="/product/:slug" element={<ProductDetailSection />} />
            <Route path="/about" element={<AboutSection />} />
            <Route path="/contact" element={<ContactSection />} />
            <Route path="/gift-cards" element={<GiftCardsSection />} />
            <Route path="/cart" element={<CartSection />} />
            <Route path="/auth" element={<AuthSection />} />
            <Route path="/account" element={<AccountSection />} />
            <Route path="*" element={<NotFoundSection />} />
          </Routes>
        </Suspense>
      </main>
      <SiteFooter />
      <Toaster position="bottom-right" />
    </CartProvider>
  );
}