"use client";

import React, { useState } from 'react';
import { 
  Star, 
  Heart, 
  ShoppingCart, 
  Truck, 
  ShieldCheck, 
  RotateCcw,
  ChevronRight,
  Minus,
  Plus,
  Share2,
  Check,
  Sparkles
} from 'lucide-react';
import Link from 'next/link';
import ProductCard from '@/components/home/ProductCard';

// Mock product data - replace with actual data fetching
const productData = {
  id: 1,
  name: "Luxury Hydrating Serum",
  brand: "Cosmetica Premium",
  category: "Skincare",
  price: 89.99,
  originalPrice: 119.99,
  rating: 4.8,
  reviewCount: 1247,
  inStock: true,
  sku: "COS-SER-001",
  images: [
    "/assets/img/product/product1.png",
    "/assets/img/product/product2.png",
    "/assets/img/product/product3.png",
    "/assets/img/product/product4.png",
  ],
  description: "Experience the ultimate in skin hydration with our Luxury Hydrating Serum. Formulated with premium botanical extracts and hyaluronic acid, this lightweight serum penetrates deep into your skin to provide long-lasting moisture and a radiant glow.",
  features: [
    "Hyaluronic acid for deep hydration",
    "Vitamin C for brightening",
    "Antioxidant-rich formula",
    "Suitable for all skin types",
    "Cruelty-free and vegan",
    "Dermatologically tested"
  ],
  ingredients: "Water, Hyaluronic Acid, Vitamin C, Niacinamide, Glycerin, Botanical Extracts, Preservatives",
  howToUse: "Apply 2-3 drops to clean, dry skin. Gently massage in upward circular motions. Use morning and evening for best results. Follow with moisturizer.",
  badge: "BESTSELLER",
  discount: 25
};

// Related products
const relatedProducts = [
  {
    mainImg: "/assets/img/product/product2.png",
    subImg: "/assets/img/product/product1.png",
    rate: 4,
    prevprice: 60.99,
    price: 49.99,
    label: "Night Cream",
    badge: "new",
    discount: "10% off",
    catId: 1,
    category: "Skincare",
    brand: "L'Oréal",
  },
  {
    mainImg: "/assets/img/product/product3.png",
    subImg: "/assets/img/product/product4.png",
    rate: 5,
    prevprice: 45.0,
    price: 35.0,
    label: "Face Cleanser",
    badge: "hot",
    discount: "15% off",
    catId: 1,
    category: "Skincare",
    brand: "Dior",
  },
  {
    mainImg: "/assets/img/product/product2.png",
    subImg: "/assets/img/product/product1.png",
    rate: 4,
    prevprice: 55.0,
    price: 45.0,
    label: "Eye Cream",
    badge: "",
    discount: "",
    catId: 1,
    category: "Skincare",
    brand: "Chanel",
  },
  {
    mainImg: "/assets/img/product/product3.png",
    subImg: "/assets/img/product/product4.png",
    rate: 5,
    prevprice: 70.0,
    price: 60.0,
    label: "Moisturizer",
    badge: "sale",
    discount: "20% off",
    catId: 1,
    category: "Skincare",
    brand: "Fenty Beauty",
  },
];

const ProductDetails = () => {
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [activeTab, setActiveTab] = useState<'description' | 'ingredients' | 'howto' | 'reviews'>('description');

  const handleQuantityChange = (type: 'increase' | 'decrease') => {
    if (type === 'increase') {
      setQuantity(prev => prev + 1);
    } else if (type === 'decrease' && quantity > 1) {
      setQuantity(prev => prev - 1);
    }
  };

  const handleAddToCart = () => {
    console.log(`Added ${quantity} items to cart`);
    // Add your cart logic here
  };

  const discountAmount = productData.originalPrice - productData.price;
  const discountPercentage = Math.round((discountAmount / productData.originalPrice) * 100);

  return (
    <div className="bg-gradient-to-b from-pink-50/30 to-white min-h-screen">
      {/* Breadcrumb */}
      <div className="px-[5%] py-6">
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <Link href="/" className="hover:text-pink-600 transition-colors">Home</Link>
          <ChevronRight className="w-4 h-4" />
          <Link href="/shop" className="hover:text-pink-600 transition-colors">Shop</Link>
          <ChevronRight className="w-4 h-4" />
          <Link href={`/shop?category=${productData.category}`} className="hover:text-pink-600 transition-colors">
            {productData.category}
          </Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-gray-900 font-medium">{productData.name}</span>
        </div>
      </div>

      {/* Main Product Section */}
      <div className="px-[5%] pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Left: Images */}
          <div className="space-y-4">
            {/* Main Image */}
            <div className="relative aspect-square rounded-2xl overflow-hidden bg-white shadow-lg group">
              <img
                src={productData.images[selectedImage]}
                alt={productData.name}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              
              {/* Badges */}
              {productData.badge && (
                <div className="absolute top-4 left-4 z-10">
                  <span className="inline-flex items-center gap-1.5 px-4 py-2 bg-gradient-to-r from-pink-500 to-rose-600 text-white text-xs font-bold uppercase rounded-full shadow-lg">
                    <Sparkles className="w-3 h-3" />
                    {productData.badge}
                  </span>
                </div>
              )}
              
              {discountPercentage > 0 && (
                <div className="absolute top-16 left-4 z-10">
                  <span className="px-4 py-2 bg-gradient-to-r from-emerald-500 to-green-600 text-white text-xs font-bold rounded-full shadow-lg">
                    -{discountPercentage}% OFF
                  </span>
                </div>
              )}

              {/* Wishlist & Share */}
              <div className="absolute top-4 right-4 z-10 flex flex-col gap-2">
                <button
                  onClick={() => setIsWishlisted(!isWishlisted)}
                  className={`p-3 rounded-full backdrop-blur-md transition-all shadow-lg hover:scale-110 ${
                    isWishlisted 
                      ? 'bg-gradient-to-r from-pink-500 to-rose-600 text-white' 
                      : 'bg-white/90 text-gray-700 hover:bg-pink-50'
                  }`}
                >
                  <Heart className={`w-5 h-5 ${isWishlisted ? 'fill-current' : ''}`} />
                </button>
                
                <button className="p-3 bg-white/90 backdrop-blur-md rounded-full text-gray-700 hover:bg-pink-50 hover:text-pink-600 transition-all shadow-lg hover:scale-110">
                  <Share2 className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Thumbnail Images */}
            <div className="grid grid-cols-4 gap-4">
              {productData.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`relative aspect-square rounded-xl overflow-hidden transition-all ${
                    selectedImage === index 
                      ? 'ring-4 ring-pink-500 shadow-lg scale-105' 
                      : 'ring-2 ring-gray-200 hover:ring-pink-300 hover:scale-105'
                  }`}
                >
                  <img
                    src={image}
                    alt={`${productData.name} view ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Right: Product Info */}
          <div className="space-y-6">
            {/* Brand & Category */}
            <div className="flex items-center gap-3">
              <Link href={`/shop?brand=${productData.brand}`}>
                <span className="text-sm font-semibold text-pink-600 hover:text-pink-700 uppercase tracking-wide">
                  {productData.brand}
                </span>
              </Link>
              <span className="text-gray-300">|</span>
              <Link href={`/shop?category=${productData.category}`}>
                <span className="text-sm text-gray-600 hover:text-pink-600 uppercase">
                  {productData.category}
                </span>
              </Link>
            </div>

            {/* Product Name */}
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              {productData.name}
            </h1>

            {/* Rating & Reviews */}
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-5 h-5 ${
                      i < Math.floor(productData.rating)
                        ? 'text-amber-400 fill-amber-400'
                        : 'text-gray-300 fill-gray-300'
                    }`}
                  />
                ))}
              </div>
              <span className="text-lg font-semibold text-gray-900">
                {productData.rating}
              </span>
              <span className="text-gray-400">|</span>
              <button className="text-gray-600 hover:text-pink-600 font-medium transition-colors">
                {productData.reviewCount.toLocaleString()} Reviews
              </button>
            </div>

            {/* Price */}
            <div className="flex items-baseline gap-4 py-4 border-y border-gray-200">
              <span className="text-5xl font-bold bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent">
                ${productData.price.toFixed(2)}
              </span>
              {productData.originalPrice > productData.price && (
                <>
                  <span className="text-2xl text-gray-400 line-through">
                    ${productData.originalPrice.toFixed(2)}
                  </span>
                  <span className="px-3 py-1 bg-emerald-100 text-emerald-700 text-sm font-bold rounded-full">
                    Save ${discountAmount.toFixed(2)}
                  </span>
                </>
              )}
            </div>

            {/* Stock Status */}
            <div className="flex items-center gap-2">
              {productData.inStock ? (
                <>
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                  <span className="text-green-600 font-semibold">In Stock</span>
                </>
              ) : (
                <>
                  <div className="w-3 h-3 bg-red-500 rounded-full" />
                  <span className="text-red-600 font-semibold">Out of Stock</span>
                </>
              )}
              <span className="text-gray-400 text-sm ml-2">SKU: {productData.sku}</span>
            </div>

            {/* Short Description */}
            <p className="text-gray-700 leading-relaxed text-lg">
              {productData.description}
            </p>

            {/* Quantity Selector */}
            <div className="space-y-3">
              <label className="text-sm font-semibold text-gray-900 uppercase tracking-wide">
                Quantity
              </label>
              <div className="flex items-center gap-4">
                <div className="flex items-center border-2 border-gray-300 rounded-xl overflow-hidden">
                  <button
                    onClick={() => handleQuantityChange('decrease')}
                    className="p-3 hover:bg-gray-100 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    disabled={quantity <= 1}
                  >
                    <Minus className="w-5 h-5" />
                  </button>
                  <span className="px-6 py-3 font-bold text-lg min-w-[60px] text-center">
                    {quantity}
                  </span>
                  <button
                    onClick={() => handleQuantityChange('increase')}
                    className="p-3 hover:bg-gray-100 transition-colors"
                  >
                    <Plus className="w-5 h-5" />
                  </button>
                </div>

                <span className="text-gray-600">
                  Total: <span className="font-bold text-gray-900 text-xl">
                    ${(productData.price * quantity).toFixed(2)}
                  </span>
                </span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4 pt-4 max-w-96">
              <button
                onClick={handleAddToCart}
                disabled={!productData.inStock}
                className="flex-1 py-4 px-6 bg-gradient-to-r from-pink-500 to-rose-600 hover:from-pink-600 hover:to-rose-700 text-white font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 flex items-center justify-center gap-3"
              >
                <ShoppingCart className="w-6 h-6" />
                Add to Cart
              </button>

              <button className="p-4 border-2 border-pink-500 text-pink-600 hover:bg-pink-50 rounded-xl transition-all hover:scale-105 active:scale-95">
                <Heart className="w-6 h-6" />
              </button>
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-3 gap-4 pt-6">
              <div className="flex flex-col items-center text-center p-4 bg-gradient-to-br from-pink-50 to-rose-50 rounded-xl">
                <Truck className="w-8 h-8 text-pink-600 mb-2" />
                <span className="text-xs font-semibold text-gray-900">Free Shipping</span>
                <span className="text-xs text-gray-600">Orders over $50</span>
              </div>

              <div className="flex flex-col items-center text-center p-4 bg-gradient-to-br from-pink-50 to-rose-50 rounded-xl">
                <ShieldCheck className="w-8 h-8 text-pink-600 mb-2" />
                <span className="text-xs font-semibold text-gray-900">Authentic</span>
                <span className="text-xs text-gray-600">100% Genuine</span>
              </div>

              <div className="flex flex-col items-center text-center p-4 bg-gradient-to-br from-pink-50 to-rose-50 rounded-xl">
                <RotateCcw className="w-8 h-8 text-pink-600 mb-2" />
                <span className="text-xs font-semibold text-gray-900">Easy Returns</span>
                <span className="text-xs text-gray-600">30-day policy</span>
              </div>
            </div>
          </div>
        </div>

        {/* Product Details Tabs */}
        <div className="mt-16">
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            {/* Tab Headers */}
            <div className="flex border-b border-gray-200">
              <button
                onClick={() => setActiveTab('description')}
                className={`flex-1 py-4 px-6 font-semibold transition-colors ${
                  activeTab === 'description'
                    ? 'text-pink-600 border-b-4 border-pink-600 bg-pink-50'
                    : 'text-gray-600 hover:text-pink-600 hover:bg-gray-50'
                }`}
              >
                Description
              </button>
              <button
                onClick={() => setActiveTab('ingredients')}
                className={`flex-1 py-4 px-6 font-semibold transition-colors ${
                  activeTab === 'ingredients'
                    ? 'text-pink-600 border-b-4 border-pink-600 bg-pink-50'
                    : 'text-gray-600 hover:text-pink-600 hover:bg-gray-50'
                }`}
              >
                Ingredients
              </button>
              <button
                onClick={() => setActiveTab('howto')}
                className={`flex-1 py-4 px-6 font-semibold transition-colors ${
                  activeTab === 'howto'
                    ? 'text-pink-600 border-b-4 border-pink-600 bg-pink-50'
                    : 'text-gray-600 hover:text-pink-600 hover:bg-gray-50'
                }`}
              >
                How to Use
              </button>
              <button
                onClick={() => setActiveTab('reviews')}
                className={`flex-1 py-4 px-6 font-semibold transition-colors ${
                  activeTab === 'reviews'
                    ? 'text-pink-600 border-b-4 border-pink-600 bg-pink-50'
                    : 'text-gray-600 hover:text-pink-600 hover:bg-gray-50'
                }`}
              >
                Reviews ({productData.reviewCount})
              </button>
            </div>

            {/* Tab Content */}
            <div className="p-8">
              {activeTab === 'description' && (
                <div className="space-y-6">
                  <p className="text-gray-700 leading-relaxed text-lg">
                    {productData.description}
                  </p>
                  
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Key Features</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {productData.features.map((feature, index) => (
                        <div key={index} className="flex items-start gap-3">
                          <Check className="w-5 h-5 text-pink-600 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'ingredients' && (
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Full Ingredients List</h3>
                  <p className="text-gray-700 leading-relaxed">{productData.ingredients}</p>
                </div>
              )}

              {activeTab === 'howto' && (
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">How to Use</h3>
                  <p className="text-gray-700 leading-relaxed text-lg">{productData.howToUse}</p>
                </div>
              )}

              {activeTab === 'reviews' && (
                <div className="text-center py-12">
                  <Star className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">No Reviews Yet</h3>
                  <p className="text-gray-600 mb-6">Be the first to review this product!</p>
                  <button className="px-6 py-3 bg-gradient-to-r from-pink-500 to-rose-600 text-white font-semibold rounded-xl hover:from-pink-600 hover:to-rose-700 transition-all shadow-lg hover:scale-105">
                    Write a Review
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Related Products */}
        <div className="mt-16">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              You May Also Like
            </h2>
            <Link 
              href="/shop"
              className="text-pink-600 hover:text-pink-700 font-semibold flex items-center gap-2 group"
            >
              View All
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedProducts.map((product, index) => (
              <ProductCard key={index} product={product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;