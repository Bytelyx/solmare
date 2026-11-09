import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Heart, ShoppingCart, Plus, Minus } from "lucide-react";
import { toast } from "sonner";
import { getCategory } from "@/constants/products";
import { formatINR } from "@/utils/formatters";
import { useCart } from "@/hooks/useCart";

export function ProductCard({ product }) {
  const { add, setQty, lines } = useCart();

  const [isHovered, setIsHovered] = useState(false);
  const [wishlisted, setWishlisted] = useState(false);

  const productSlug = product.slug || product.id;

  // Get quantity directly from cart
  const cartItem = lines.find((item) => item.slug === productSlug);
  const quantity = cartItem?.qty || 0;
  const isAddedToCart = quantity > 0;

  const primaryImage = product.images?.[0];
  const secondaryImage = product.images?.[1] || primaryImage;

  const originalPrice = product.mrp || product.originalPrice;
  const hasDiscount = originalPrice && originalPrice > product.price;

  const categoryName =
    getCategory(product.category)?.name || product.category || "Jewellery";

  // Wishlist
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

  // Add to cart
  const handleQuickAdd = (e) => {
    e.preventDefault();
    e.stopPropagation();

    add(productSlug, 1);

    toast.success(`${product.name} added to your bag`);
  };

  // Increase quantity
  const handleIncrease = (e) => {
    e.preventDefault();
    e.stopPropagation();

    setQty(productSlug, quantity + 1);
  };

  // Decrease quantity
  const handleDecrease = (e) => {
    e.preventDefault();
    e.stopPropagation();

    if (quantity <= 1) {
      setQty(productSlug, 0);
      toast.success(`${product.name} removed from your bag`);
    } else {
      setQty(productSlug, quantity - 1);
    }
  };

  return (
    <div className="group relative flex flex-col justify-between w-full min-w-0 p-3 sm:p-4 rounded-[18px] sm:rounded-[22px] bg-gradient-to-b from-[#FBF7F2] via-[#F6EEE7] to-[#EEE3D8] border border-[#D8C5B0]/50 shadow-[0_4px_20px_rgba(75,55,35,0.045)] transition-all duration-300 hover:shadow-[0_10px_30px_rgba(75,55,35,0.10)] hover:border-[#C6A15B]/55 min-h-[330px] sm:min-h-[320px]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >

      {/* TOP HEADER */}
      <div className="flex items-start justify-between gap-1 z-10">

        <div className="flex flex-col items-start flex-1 min-w-0 pr-1">

          {/* Category */}
          <span className="text-[10px] sm:text-[11px] font-medium text-product-green-muted leading-tight truncate w-full tracking-wide">
            {categoryName}
          </span>

          {/* Product Name */}
          <Link to={`/product/${product.slug}`} className="w-full">
            <h3 className="text-[12px] sm:text-sm font-bold text-product-green tracking-tight hover:text-product-green-muted transition-colors truncate mt-0.5">
              {product.name}
            </h3>
          </Link>

          {/* Product Badge */}
          {(hasDiscount || product.badge || product.isBestseller) && (
            <span className="mt-1 px-2 py-0.5 rounded-md bg-product-green-dark text-product-gold-light border border-product-gold/30 text-[8px] sm:text-[9px] font-semibold tracking-wide uppercase">
              {product.badge
                ? product.badge
                : hasDiscount
                  ? "Sale"
                  : "Bestseller"}
            </span>
          )}
        </div>

        {/* Wishlist */}
        <button type="button" onClick={handleWishlistClick} className="p-1 text-product-green-muted hover:text-product-gold transition-all active:scale-90 shrink-0 cursor-pointer" aria-label={wishlisted ? "Remove from wishlist" : "Add to wishlist"}>
          <Heart className={`w-4 h-4 sm:w-[18px] sm:h-[18px] stroke-[1.8] transition-all duration-200 ${wishlisted
            ? "fill-product-gold stroke-product-gold"
            : "stroke-product-green-muted hover:stroke-product-gold"
            }`}
          />
        </button>
      </div>

      {/* PRODUCT IMAGE */}
      <Link
        to={`/product/${product.slug}`}
        className="relative flex-1 w-full flex items-center justify-center my-2 sm:my-3 overflow-hidden min-h-[145px] sm:min-h-[150px]">
        <img src={primaryImage} alt={product.name} loading="lazy" className={`h-32 sm:h-36 w-full object-contain drop-shadow-product-image transition-all duration-500 ease-out ${product.images?.[1]
          ? isHovered
            ? "opacity-0 scale-95"
            : "opacity-100 scale-100"
          : "group-hover:scale-105"
          }`}
        />

        {product.images?.[1] && (
          <img src={secondaryImage} alt={`${product.name} alternate view`} loading="lazy" className={`absolute h-32 sm:h-36 w-full object-contain drop-shadow-product-image-hover transition-all duration-500 ease-out ${isHovered
            ? "opacity-100 scale-105"
            : "opacity-0 scale-95 pointer-events-none"
            }`}
          />
        )}
      </Link>

      {/* BOTTOM FOOTER */}
      <div
        className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-2 pt-3 border-t border-product-gold-light/50 z-10">

        {/* PRICE */}
        <div className="flex flex-col min-w-0">
          <div className="flex items-baseline gap-1.5 flex-wrap font-bold">
            <span className="text-[13px] sm:text-sm text-product-green-light">
              {formatINR
                ? formatINR(product.price)
                : `₹${product.price?.toLocaleString("en-IN")}`}
            </span>

            {hasDiscount && (
              <span className="text-[10px] sm:text-[11px] font-medium text-product-gold-text line-through">
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

        {/* CART CONTROLS */}
        <div className="w-full sm:w-auto shrink-0">
          {!isAddedToCart ? (
            /* ADD TO CART BUTTON */
            <button type="button" onClick={handleQuickAdd} className="flex items-center justify-center gap-1.5 w-full sm:w-auto px-3 py-2 rounded-lg bg-gradient-navy text-gold2 active:scale-[0.97] text-[10px] sm:text-[11px] font-semibold tracking-tight transition-all duration-200 shadow-[0_3px_8px_rgba(7,30,23,0.15)] hover:shadow-[0_5px_12px_rgba(7,30,23,0.22)] cursor-pointer whitespace-nowrap">
              <span>Add to Cart</span>
              <ShoppingCart className="w-3.5 h-3.5 stroke-[2]" />
            </button>
          ) : (
            /* QUANTITY SELECTOR */
            <div className="flex items-center justify-between sm:justify-center w-full sm:w-auto border-product-gold-light bg-product-white overflow-hidden h-[34px] ">

              {/* DECREASE */}
              <button type="button" onClick={handleDecrease} aria-label="Decrease quantity" className="w-10 sm:w-7 h-full flex items-center justify-center text-product-green-muted hover:bg-product-bg-start hover:text-product-green transition-colors cursor-pointer ">
                <Minus className="w-3 h-3 stroke-[2.2]" />
              </button>

              {/* QUANTITY */}
              <span className="text-[11px] font-bold text-product-green min-w-[24px] text-center tabular-nums">
                {quantity}
              </span>

              {/* INCREASE */}
              <button type="button" onClick={handleIncrease} aria-label="Increase quantity" className="w-10 sm:w-7 h-full flex items-center justify-center text-product-green-muted hover:bg-product-bg-start hover:text-product-green transition-colors cursor-pointer">
                <Plus className="w-3 h-3 stroke-[2.2]" />
              </button>

            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProductCard;