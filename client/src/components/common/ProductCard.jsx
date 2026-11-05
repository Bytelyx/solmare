
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Heart, ShoppingCart, Plus, Minus } from "lucide-react";
import { toast } from "sonner";
import { getCategory } from "@/constants/products";
import { formatINR } from "@/utils/formatters";
import { useCart } from "@/hooks/useCart";

export function ProductCard({ product }) {
  const { add } = useCart();
  const [isHovered, setIsHovered] = useState(false);
  const [wishlisted, setWishlisted] = useState(false);
  const [quantity, setQuantity] = useState(1);

  const primaryImage = product.images?.[0];
  const secondaryImage = product.images?.[1] || primaryImage;

  const originalPrice = product.mrp || product.originalPrice;
  const hasDiscount = originalPrice && originalPrice > product.price;

  const categoryName =
    getCategory(product.category)?.name || product.category || "Jewellery";

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

  const handleQuantityChange = (e, type) => {
    e.preventDefault();
    e.stopPropagation();

    setQuantity((prev) =>
      type === "increase" ? prev + 1 : Math.max(1, prev - 1)
    );
  };

  const handleQuickAdd = (e) => {
    e.preventDefault();
    e.stopPropagation();

    for (let i = 0; i < quantity; i++) {
      add(product.slug || product.id);
    }

    toast.success(`${quantity} x ${product.name} added to your bag`);
    setQuantity(1);
  };

  return (
    <div className="group relative flex flex-col justify-between w-full p-4 rounded-[22px] bg-gradient-to-b from-product-bg-start via-product-bg-middle to-product-bg-end border border-product-gold-light/40 shadow-product-card transition-all duration-300 hover:shadow-product-card-hover hover:border-product-gold/60 min-h-[320px]" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>

      {/* Top Header */}
      <div className="flex items-start justify-between z-10">
        <div className="flex flex-col items-start pr-1.5 flex-1 min-w-0">
          {/* Category */}
          <span className="text-[11px] font-medium text-product-green-muted leading-tight truncate w-full tracking-wide">
            {categoryName}
          </span>

          {/* Product Name */}
          <Link to={`/product/${product.slug}`} className="w-full">
            <h3 className="text-sm font-bold text-product-green tracking-tight hover:text-product-green-muted transition-colors truncate mt-0.5">
              {product.name}
            </h3>
          </Link>

          {/* Product Badge */}
          {(hasDiscount || product.badge || product.isBestseller) && (
            <span className="mt-1 px-2 py-0.5 rounded-md bg-product-green-dark text-product-gold-light border border-product-gold/30 text-[9px] font-semibold tracking-wide uppercase">
              {product.badge
                ? product.badge
                : hasDiscount
                  ? "Sale"
                  : "Bestseller"}
            </span>
          )}
        </div>

        {/* Wishlist */}
        <button type="button" onClick={handleWishlistClick} className="p-1.5 text-product-green-muted hover:text-product-gold transition-all active:scale-90 shrink-0 ml-2 cursor-pointer" aria-label={wishlisted ? "Remove from wishlist" : "Add to wishlist"} >
          <Heart className={`w-4 h-4 stroke-[1.8] transition-all duration-200 ${wishlisted
            ? "fill-product-gold stroke-product-gold"
            : "stroke-product-green-muted hover:stroke-product-gold"
            }`}
          />
        </button>
      </div>

      {/* Product Image */}
      <Link to={`/product/${product.slug}`} className="relative flex-1 w-full flex items-center justify-center my-3 overflow-hidden min-h-[150px]">
        <img src={primaryImage} alt={product.name} loading="lazy" className={`h-36 w-full object-contain drop-shadow-product-image transition-all duration-500 ease-out ${product.images?.[1]
          ? isHovered
            ? "opacity-0 scale-95"
            : "opacity-100 scale-100"
          : "group-hover:scale-105"
          }`}
        />

        {product.images?.[1] && (
          <img src={secondaryImage} alt={`${product.name} alternate view`} loading="lazy" className={`absolute h-36 w-full object-contain drop-shadow-product-image-hover transition-all duration-500 ease-out ${isHovered
            ? "opacity-100 scale-105"
            : "opacity-0 scale-95 pointer-events-none"
            }`}
          />
        )}
      </Link>

      {/* Bottom Footer */}
      <div className="flex items-center justify-between gap-2 pt-3 border-t border-product-gold-light/50 z-10">

        {/* Price */}
        <div className="flex flex-col min-w-0">

          <div className="flex items-baseline gap-1.5 flex-wrap font-bold">
            <span className="text-sm text-product-green-light">
              {formatINR
                ? formatINR(product.price)
                : `₹${product.price?.toLocaleString("en-IN")}`}
            </span>

            {hasDiscount && (
              <span className="text-[11px] font-medium text-product-gold-text line-through">
                {formatINR
                  ? formatINR(originalPrice)
                  : `₹${originalPrice?.toLocaleString("en-IN")}`}
              </span>
            )}
          </div>

          {hasDiscount && (
            <span className="text-[9px] text-product-green-muted font-medium mt-0.5">
              Special price
            </span>
          )}
        </div>

        {/* Quantity + Add To Cart */}
        <div className="flex items-center gap-1.5 shrink-0">

          {/* Quantity Selector */}
          <div className="flex items-center rounded-lg border border-product-gold-light bg-product-white overflow-hidden h-[32px]">
            <button type="button" onClick={(e) => handleQuantityChange(e, "decrease")} disabled={quantity <= 1} aria-label="Decrease quantity" className="w-7 h-full flex items-center justify-center text-product-green-muted hover:bg-product-bg-start hover:text-product-green disabled:opacity-40 disabled:cursor-not-allowed transition-colors cursor-pointer" >
              <Minus className="w-3 h-3 stroke-[2.2]" />
            </button>

            <span className="text-[11px] font-bold text-product-green min-w-[18px] text-center tabular-nums">
              {quantity}
            </span>

            <button type="button" onClick={(e) => handleQuantityChange(e, "increase")} aria-label="Increase quantity" className="w-7 h-full flex items-center justify-center text-product-green-muted hover:bg-product-bg-start hover:text-product-green transition-colors cursor-pointer">
              <Plus className="w-3 h-3 stroke-[2.2]" />
            </button>
          </div>

          {/* Add To Cart */}
          <button type="button" onClick={handleQuickAdd} className="flex items-center justify-center gap-1.5 px-2.5 py-2 rounded-lg bg-gradient-navy text-gold2 active:scale-95 text-[10px] font-semibold tracking-tight transition-all duration-200 shadow-[0_3px_8px_rgba(7,30,23,0.15)] cursor-pointer whitespace-nowrap">
            <span>Add</span>
            <ShoppingCart className="w-3.5 h-3.5 stroke-[2]" />
          </button>

        </div>
      </div>
    </div>
  );
}

export default ProductCard;
