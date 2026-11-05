import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Heart, ShoppingCart } from "lucide-react";
import { toast } from "sonner";
import { getCategory } from "@/constants/products";
import { formatINR } from "@/utils/formatters";
import { useCart } from "@/hooks/useCart";

export function ProductCard({ product }) {
  const { add } = useCart();
  const [isHovered, setIsHovered] = useState(false);
  const [wishlisted, setWishlisted] = useState(false);

  const primaryImage = product.images?.[0];
  const secondaryImage = product.images?.[1] || primaryImage;

  const originalPrice = product.mrp || product.originalPrice;
  const hasDiscount = originalPrice && originalPrice > product.price;

  const categoryName = getCategory(product.category)?.name || product.category || "Jewellery";

  const handleWishlistClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setWishlisted(!wishlisted);
    toast.success(
      wishlisted
        ? `${product.name} removed from wishlist`
        : `${product.name} added to wishlist`
    );
  };

  const handleQuickAdd = (e) => {
    e.preventDefault();
    e.stopPropagation();
    add(product.slug || product.id);
    toast.success(`${product.name} added to your bag`);
  };

  return (
    <div
      className="group relative flex flex-col justify-between w-full p-4 rounded-[22px] bg-gradient-to-b from-[#dddee1] via-[#e6e9ec] to-white border border-white/60 shadow-[0_10px_24px_-6px_rgba(0,0,0,0.12),0_4px_10px_-4px_rgba(0,0,0,0.05)] transition-all duration-300 hover:shadow-[0_14px_30px_-6px_rgba(0,0,0,0.16)] min-h-[320px]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Top Header: Category, Title & Badges + Wishlist */}
      <div className="flex items-start justify-between z-10">
        <div className="flex flex-col items-start pr-1.5 flex-1 min-w-0">
          <span className="text-[11px] font-medium text-stone-500 leading-tight truncate w-full">
            {categoryName}
          </span>

          <Link to={`/product/${product.slug}`} className="w-full">
            <h3 className="text-sm font-bold text-stone-900 tracking-tight hover:text-stone-700 transition-colors truncate mt-0.5">
              {product.name}
            </h3>
          </Link>

          {(hasDiscount || product.badge || product.isBestseller) && (
            <span className="mt-1 px-1.5 py-0.5 rounded-md bg-[#2B2B2B] text-white text-[9px] font-semibold tracking-wide">
              {product.badge ? product.badge : hasDiscount ? "Sale" : "Hot"}
            </span>
          )}
        </div>

        {/* Wishlist Button */}
        <button
          type="button"
          onClick={handleWishlistClick}
          className="p-1.5 text-stone-600 hover:text-stone-900 transition-transform active:scale-90 shrink-0 ml-2 cursor-pointer"
          aria-label={wishlisted ? "Remove from wishlist" : "Add to wishlist"}
        >
          <Heart
            className={`w-4 h-4 stroke-[1.8] transition-colors ${
              wishlisted
                ? "fill-stone-900 stroke-stone-900"
                : "stroke-stone-700 hover:stroke-stone-950"
            }`}
          />
        </button>
      </div>

      {/* Center Visual Area */}
      <Link
        to={`/product/${product.slug}`}
        className="relative flex-1 w-full flex items-center justify-center my-3 overflow-hidden min-h-[150px]"
      >
        <img
          src={primaryImage}
          alt={product.name}
          loading="lazy"
          className={`h-36 w-full object-contain drop-shadow-[0_6px_12px_rgba(0,0,0,0.1)] transition-all duration-500 ease-out ${
            product.images?.[1]
              ? isHovered
                ? "opacity-0 scale-95"
                : "opacity-100 scale-100"
              : "group-hover:scale-105"
          }`}
        />

        {product.images?.[1] && (
          <img
            src={secondaryImage}
            alt={`${product.name} alternate view`}
            loading="lazy"
            className={`absolute h-36 w-full object-contain drop-shadow-[0_6px_12px_rgba(0,0,0,0.12)] transition-all duration-500 ease-out ${
              isHovered
                ? "opacity-100 scale-105"
                : "opacity-0 scale-95 pointer-events-none"
            }`}
          />
        )}
      </Link>

      {/* Bottom Footer: Price & Add To Cart Button */}
      <div className="flex items-center justify-between pt-2 border-t border-black/5 z-10">
        <div className="flex items-baseline gap-1.5 font-bold">
          <span className="text-sm text-stone-900">
            {formatINR ? formatINR(product.price) : `₹${product.price?.toLocaleString()}`}
          </span>
          {hasDiscount && (
            <span className="text-[11px] font-medium text-stone-400 line-through">
              {formatINR ? formatINR(originalPrice) : `₹${originalPrice?.toLocaleString()}`}
            </span>
          )}
        </div>

        <button
          type="button"
          onClick={handleQuickAdd}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-stone-900 text-white hover:bg-stone-800 active:scale-95 text-[11px] font-semibold tracking-tight transition-all duration-200 shadow-sm cursor-pointer"
        >
          <span>Add To Cart</span>
          <ShoppingCart className="w-3.5 h-3.5 stroke-[2.2]" />
        </button>
      </div>
    </div>
  );
}

export default ProductCard;