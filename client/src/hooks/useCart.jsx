import { createContext, useContext, useEffect, useState } from "react";

const CartContext = createContext(null);
const KEY = "solmare-cart";

export function CartProvider({ children }) {
  const [lines, setLines] = useState([]);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(KEY);
      if (raw) setLines(JSON.parse(raw));
    } catch (e) {
      console.error("Failed to parse cart", e);
    }
    setReady(true);
  }, []);

  useEffect(() => {
    if (ready) {
      try {
        localStorage.setItem(KEY, JSON.stringify(lines));
      } catch (e) {
        console.error("Failed to save cart", e);
      }
    }
  }, [lines, ready]);

  const add = (slug, qty = 1) =>
    setLines((prev) => {
      const found = prev.find((x) => x.slug === slug);
      return found
        ? prev.map((x) => (x.slug === slug ? { ...x, qty: x.qty + qty } : x))
        : [...prev, { slug, qty }];
    });

  const setQty = (slug, qty) =>
    setLines((prev) =>
      qty <= 0
        ? prev.filter((x) => x.slug !== slug)
        : prev.map((x) => (x.slug === slug ? { ...x, qty } : x))
    );

  const remove = (slug) => setLines((prev) => prev.filter((x) => x.slug !== slug));
  const clear = () => setLines([]);
  const count = lines.reduce((s, l) => s + l.qty, 0);

  return (
    <CartContext.Provider value={{ lines, count, add, setQty, remove, clear }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) {
    throw new Error("useCart must be used inside CartProvider");
  }
  return ctx;
}
