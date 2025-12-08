import React, { useState } from 'react';
import { Star, ShoppingCart, Heart, Eye, Sparkles } from 'lucide-react';
import Link from 'next/link';

// Define the shape of the product data
interface Product {
  mainImg: string;
  subImg: string;
  rate: number;
  prevprice: number;
  price: number;
  label: string;
  badge: string;
  discount: string;
  catId: number;
  category?: string;
  brand?: string;
}

interface ProductCardProps {
  product?: Product;
  className?: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ 
  product = {
    mainImg: "/assets/img/product/product2.png",
    subImg: "/assets/img/product/product1.png",
    rate: 4,
    prevprice: 69.99,
    price: 49.99,
    label: "Luxury Makeup Kit",
    badge: "New",
    discount: "10% Off",
    catId: 1,
    category: "Makeup",
    brand: "Luxury Brand"
  }, 
  className = "" 
}) => {
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [imageError, setImageError] = useState(false);

  const discountPercentage = product.prevprice > product.price 
    ? Math.round(((product.prevprice - product.price) / product.prevprice) * 100)
    : 0;

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    console.log('Added to cart:', product.label);
    // Add your cart logic here
  };

  const handleQuickView = (e: React.MouseEvent) => {
    e.preventDefault();
    console.log('Quick view:', product.label);
    // Add your quick view modal logic here
  };

  const toggleWishlist = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsWishlisted(!isWishlisted);
  };

  const getBadgeStyles = (badge: string) => {
    const lowerBadge = badge.toLowerCase();
    if (lowerBadge === 'new') return 'bg-gradient-to-r from-blue-500 to-blue-600';
    if (lowerBadge === 'hot' || lowerBadge === 'sale') return 'bg-gradient-to-r from-red-500 to-rose-600';
    return 'bg-gradient-to-r from-pink-500 to-rose-600';
  };

  return (
    <Link href={product ? `/shop/${encodeURIComponent(product.label.toLowerCase().replace(/\s+/g, '-'))}` : '#'}
      className={`group relative bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 cursor-pointer ${className}`}
    >
      {/* Image Container */}
      <div className="relative h-64 md:h-72 overflow-hidden bg-gray-100">
        {/* Gradient Overlay on Hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />

        {/* Main Image (Default) */}
        <img
          src={imageError ? '/assets/img/product/placeholder.png' : product.mainImg}
          alt={product.label}
          onError={() => setImageError(true)}
          className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110"
        />
        
        {/* Secondary Image (Hover - Fade In) */}
        <img
          src={product.subImg}
          alt={`${product.label} alternate view`}
          className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-all duration-500 scale-105 group-hover:scale-110"
        />

        {/* Badges */}
        <div className="absolute top-3 left-3 z-20 flex flex-col gap-2">
          {product.badge && (
            <span className={`${getBadgeStyles(product.badge)} text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg backdrop-blur-sm flex items-center gap-1 animate-in fade-in slide-in-from-left-2 duration-500`}>
              <Sparkles className="w-3 h-3" />
              {product.badge}
            </span>
          )}

          {discountPercentage > 0 && (
            <span className="bg-gradient-to-r from-emerald-500 to-green-600 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg backdrop-blur-sm animate-in fade-in slide-in-from-left-2 duration-700">
              -{discountPercentage}%
            </span>
          )}
        </div>

        {/* Quick Action Buttons */}
        <div className="absolute top-3 right-3 z-20 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-4 group-hover:translate-x-0">
          {/* Wishlist Button */}
          <button
            onClick={toggleWishlist}
            className={`p-2.5 rounded-full backdrop-blur-md transition-all duration-300 hover:scale-110 active:scale-95 shadow-lg ${
              isWishlisted 
                ? 'bg-gradient-to-r from-pink-500 to-rose-600 text-white' 
                : 'bg-white/90 text-gray-700 hover:bg-pink-50'
            }`}
            aria-label="Add to wishlist"
          >
            <Heart className={`w-4 h-4 ${isWishlisted ? 'fill-current' : ''}`} />
          </button>

          {/* Quick View Button */}
          <button
            onClick={handleQuickView}
            className="p-2.5 bg-white/90 backdrop-blur-md rounded-full text-gray-700 hover:bg-pink-50 hover:text-pink-600 transition-all duration-300 hover:scale-110 active:scale-95 shadow-lg"
            aria-label="Quick view"
          >
            <Eye className="w-4 h-4" />
          </button>
        </div>

        {/* Add to Cart - Hover Button */}
        <div className="absolute bottom-0 left-0 right-0 z-20 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
          <button
            onClick={handleAddToCart}
            className="w-full cursor-pointer py-3 px-4 bg-gradient-to-r from-pink-500 to-rose-600 hover:from-pink-600 hover:to-rose-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 hover:scale-105 active:scale-95"
          >
            <ShoppingCart className="w-5 h-5" />
            Add to Cart
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="p-5 space-y-3">
        {/* Category/Brand */}
        {product.category && (
          <p className="text-xs font-medium text-pink-600 uppercase tracking-wide">
            {product.category}
          </p>
        )}

        {/* Product Name */}
        <h3 className="text-base font-bold text-gray-900 group-hover:text-pink-600 transition-colors duration-300 line-clamp-2 min-h-[3rem]">
          {product.label}
        </h3>

        {/* Star Rating */}
        <div className="flex items-center gap-2">
          <div className="flex gap-0.5">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-4 h-4 transition-all duration-200 ${
                  i < product.rate 
                    ? "text-amber-400 fill-amber-400" 
                    : "text-gray-300 fill-gray-300"
                }`}
              />
            ))}
          </div>
          <span className="text-xs text-gray-500 font-medium">
            ({product.rate}.0)
          </span>
        </div>

        {/* Price Section */}
        <div className="flex items-center justify-between pt-2 border-t border-gray-100">
          <div className="flex items-baseline gap-2">
            <p className="text-2xl font-bold bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent">
              ${product.price.toFixed(2)}
            </p>
            {product.prevprice > product.price && (
              <p className="text-sm text-gray-400 line-through">
                ${product.prevprice.toFixed(2)}
              </p>
            )}
          </div>

          {/* Mobile Add to Cart Icon */}
          <button
            onClick={handleAddToCart}
            className="lg:hidden p-2 bg-gradient-to-r from-pink-500 to-rose-600 text-white rounded-full hover:from-pink-600 hover:to-rose-700 transition-all hover:scale-110 active:scale-95 shadow-md"
            aria-label="Add to cart"
          >
            <ShoppingCart className="w-5 h-5" />
          </button>
        </div>

        {/* Savings Badge */}
        {discountPercentage > 0 && (
          <div className="flex items-center justify-center">
            <span className="text-xs font-semibold text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full">
              Save ${(product.prevprice - product.price).toFixed(2)}
            </span>
          </div>
        )}
      </div>

      {/* Decorative Corner Accent */}
      <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-pink-500/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    </Link>
  );
};

export default ProductCard;