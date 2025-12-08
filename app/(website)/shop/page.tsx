'use client';

import ProductCard from '@/components/home/ProductCard';
import React, { useState } from 'react';
import { SlidersHorizontal, X, ChevronDown, Filter } from 'lucide-react';

// --- Types ---
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

interface Filters {
  category: string[];
  brand: string[];
  price: number;
}

// --- Constants & Data ---
const CATEGORIES = ["Skincare", "Makeup", "Fragrance", "Haircare"];
const BRANDS = ["L'Oréal", "Fenty Beauty", "Dior", "Maybelline", "Chanel"];

const products: Product[] = [
  {
    mainImg: "/assets/img/product/product2.png",
    subImg: "/assets/img/product/product1.png",
    rate: 3,
    prevprice: 60.99,
    price: 49.99,
    label: "Luxury Makeup Kit",
    badge: "new",
    discount: "10% off",
    catId: 1,
    category: "Makeup",
    brand: "L'Oréal",
  },
  {
    mainImg: "/assets/img/product/product3.png",
    subImg: "/assets/img/product/product4.png",
    rate: 4,
    prevprice: 80.0,
    price: 65.5,
    label: "Hydrating Serum",
    badge: "hot",
    discount: "15% off",
    catId: 1,
    category: "Skincare",
    brand: "Dior",
  },
  {
    mainImg: "/assets/img/product/product2.png",
    subImg: "/assets/img/product/product1.png",
    rate: 5,
    prevprice: 45.0,
    price: 30.0,
    label: "Matte Lipstick",
    badge: "sale",
    discount: "20% off",
    catId: 2,
    category: "Makeup",
    brand: "Fenty Beauty",
  },
  {
    mainImg: "/assets/img/product/product3.png",
    subImg: "/assets/img/product/product4.png",
    rate: 4,
    prevprice: 120.0,
    price: 100.0,
    label: "Night Cream",
    badge: "new",
    discount: "5% off",
    catId: 2,
    category: "Skincare",
    brand: "Chanel",
  },
  {
    mainImg: "/assets/img/product/product2.png",
    subImg: "/assets/img/product/product1.png",
    rate: 3,
    prevprice: 55.0,
    price: 45.0,
    label: "Face Cleanser",
    badge: "",
    discount: "",
    catId: 1,
    category: "Skincare",
    brand: "Maybelline",
  },
  {
    mainImg: "/assets/img/product/product3.png",
    subImg: "/assets/img/product/product4.png",
    rate: 5,
    prevprice: 70.0,
    price: 60.0,
    label: "Eye Shadow Palette",
    badge: "hot",
    discount: "10% off",
    catId: 3,
    category: "Makeup",
    brand: "Fenty Beauty",
  },
  {
    mainImg: "/assets/img/product/product2.png",
    subImg: "/assets/img/product/product1.png",
    rate: 4,
    prevprice: 35.0,
    price: 25.0,
    label: "Blush Brush",
    badge: "",
    discount: "",
    catId: 3,
    category: "Makeup",
    brand: "L'Oréal",
  },
  {
    mainImg: "/assets/img/product/product3.png",
    subImg: "/assets/img/product/product4.png",
    rate: 5,
    prevprice: 90.0,
    price: 75.0,
    label: "Floral Perfume",
    badge: "new",
    discount: "15% off",
    catId: 4,
    category: "Fragrance",
    brand: "Dior",
  },
];

const Shop = () => {
  // --- State ---
  const [filters, setFilters] = useState<Filters>({
    category: [],
    brand: [],
    price: 200,
  });
  const [sortBy, setSortBy] = useState("featured");
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  // --- Handlers ---
  const handleFilterChange = (type: 'category' | 'brand', value: string) => {
    setFilters((prev) => {
      const list = prev[type];
      const newList = list.includes(value)
        ? list.filter((item) => item !== value)
        : [...list, value];
      
      return { ...prev, [type]: newList };
    });
  };

  const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilters((prev) => ({ ...prev, price: Number(e.target.value) }));
  };

  const clearAllFilters = () => {
    setFilters({ category: [], brand: [], price: 200 });
  };

  const removeFilter = (type: 'category' | 'brand', value: string) => {
    handleFilterChange(type, value);
  };

  // --- Filtering & Sorting Logic ---
  let filteredProducts = products.filter((product) => {
    const matchCategory = filters.category.length > 0
      ? filters.category.includes(product.category || '')
      : true;

    const matchBrand = filters.brand.length > 0
      ? filters.brand.includes(product.brand || '')
      : true;

    const matchPrice = product.price <= filters.price;

    return matchCategory && matchBrand && matchPrice;
  });

  // Sort products
  if (sortBy === "price-low") {
    filteredProducts = [...filteredProducts].sort((a, b) => a.price - b.price);
  } else if (sortBy === "price-high") {
    filteredProducts = [...filteredProducts].sort((a, b) => b.price - a.price);
  } else if (sortBy === "rating") {
    filteredProducts = [...filteredProducts].sort((a, b) => b.rate - a.rate);
  }

  const activeFiltersCount = filters.category.length + filters.brand.length + (filters.price < 200 ? 1 : 0);

  return (
    <div className="bg-gradient-to-b from-pink-50/30 to-white min-h-screen">
      <div className="px-[5%] py-8 lg:py-12">
        
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent mb-2">
            Shop All Products
          </h1>
          <p className="text-gray-600">Discover our exclusive collection of premium beauty products</p>
        </div>

        {/* Top Bar: Mobile Filter Toggle & Sort */}
        <div className="flex items-center justify-between mb-6 gap-4">
          {/* Mobile Filter Button */}
          <button
            onClick={() => setMobileFiltersOpen(true)}
            className="lg:hidden flex items-center gap-2 px-4 py-2.5 bg-white border-2 border-gray-200 rounded-xl hover:border-pink-400 transition-colors"
          >
            <Filter className="w-4 h-4" />
            <span className="font-medium">Filters</span>
            {activeFiltersCount > 0 && (
              <span className="bg-gradient-to-r from-pink-500 to-rose-600 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                {activeFiltersCount}
              </span>
            )}
          </button>

          {/* Results Count */}
          <div className="text-sm text-gray-600">
            <span className="font-semibold text-gray-900">{filteredProducts.length}</span> products found
          </div>

          {/* Sort Dropdown */}
          <div className="relative">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="appearance-none pl-4 pr-10 py-2.5 bg-white border-2 border-gray-200 rounded-xl hover:border-pink-400 focus:outline-none focus:border-pink-400 focus:ring-4 focus:ring-pink-100 transition-all cursor-pointer text-sm font-medium"
            >
              <option value="featured">Featured</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Top Rated</option>
            </select>
            <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
          </div>
        </div>

        {/* Active Filters Tags */}
        {activeFiltersCount > 0 && (
          <div className="flex flex-wrap items-center gap-2 mb-6">
            <span className="text-sm font-medium text-gray-700">Active filters:</span>
            
            {filters.category.map((cat) => (
              <button
                key={cat}
                onClick={() => removeFilter('category', cat)}
                className="flex items-center gap-1.5 px-3 py-1.5 bg-gradient-to-r from-pink-500 to-rose-600 text-white text-sm rounded-full hover:from-pink-600 hover:to-rose-700 transition-all"
              >
                {cat}
                <X className="w-3 h-3" />
              </button>
            ))}

            {filters.brand.map((brand) => (
              <button
                key={brand}
                onClick={() => removeFilter('brand', brand)}
                className="flex items-center gap-1.5 px-3 py-1.5 bg-gradient-to-r from-pink-500 to-rose-600 text-white text-sm rounded-full hover:from-pink-600 hover:to-rose-700 transition-all"
              >
                {brand}
                <X className="w-3 h-3" />
              </button>
            ))}

            {filters.price < 200 && (
              <button
                onClick={() => setFilters(prev => ({ ...prev, price: 200 }))}
                className="flex items-center gap-1.5 px-3 py-1.5 bg-gradient-to-r from-pink-500 to-rose-600 text-white text-sm rounded-full hover:from-pink-600 hover:to-rose-700 transition-all"
              >
                Max ${filters.price}
                <X className="w-3 h-3" />
              </button>
            )}

            <button
              onClick={clearAllFilters}
              className="text-sm text-gray-600 hover:text-pink-600 font-medium underline ml-2"
            >
              Clear all
            </button>
          </div>
        )}

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          
          {/* Desktop Sidebar Filters */}
          <aside className="hidden lg:block lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 space-y-6 sticky top-24">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                  <SlidersHorizontal className="w-5 h-5 text-pink-600" />
                  Filters
                </h2>
                {activeFiltersCount > 0 && (
                  <button
                    onClick={clearAllFilters}
                    className="text-xs text-pink-600 hover:text-pink-700 font-semibold"
                  >
                    Clear
                  </button>
                )}
              </div>

              {/* Category Filter */}
              <div className="border-b border-gray-100 pb-6">
                <h3 className="font-semibold text-gray-900 mb-3 text-sm uppercase tracking-wide">Category</h3>
                <div className="space-y-2.5">
                  {CATEGORIES.map((cat) => (
                    <label key={cat} className="flex items-center gap-3 cursor-pointer group">
                      <input
                        type="checkbox"
                        value={cat}
                        checked={filters.category.includes(cat)}
                        onChange={() => handleFilterChange('category', cat)}
                        className="w-4 h-4 rounded border-gray-300 text-pink-600 focus:ring-pink-500 focus:ring-2 cursor-pointer"
                      />
                      <span className="text-gray-700 group-hover:text-pink-600 transition-colors text-sm">
                        {cat}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Brand Filter */}
              <div className="border-b border-gray-100 pb-6">
                <h3 className="font-semibold text-gray-900 mb-3 text-sm uppercase tracking-wide">Brand</h3>
                <div className="space-y-2.5">
                  {BRANDS.map((brand) => (
                    <label key={brand} className="flex items-center gap-3 cursor-pointer group">
                      <input
                        type="checkbox"
                        value={brand}
                        checked={filters.brand.includes(brand)}
                        onChange={() => handleFilterChange('brand', brand)}
                        className="w-4 h-4 rounded border-gray-300 text-pink-600 focus:ring-pink-500 focus:ring-2 cursor-pointer"
                      />
                      <span className="text-gray-700 group-hover:text-pink-600 transition-colors text-sm">
                        {brand}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Price Range */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-semibold text-gray-900 text-sm uppercase tracking-wide">Price Range</h3>
                  <span className="text-pink-600 font-bold text-sm">${filters.price}</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="200"
                  step="5"
                  value={filters.price}
                  onChange={handlePriceChange}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-pink-600"
                  style={{
                    background: `linear-gradient(to right, rgb(236, 107, 129) 0%, rgb(236, 107, 129) ${(filters.price / 200) * 100}%, rgb(229, 231, 235) ${(filters.price / 200) * 100}%, rgb(229, 231, 235) 100%)`
                  }}
                />
                <div className="flex justify-between text-xs text-gray-500 mt-2">
                  <span>$0</span>
                  <span>$200</span>
                </div>
              </div>
            </div>
          </aside>

          {/* Product Grid */}
          <main className="lg:col-span-3">
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                {filteredProducts.map((product, index) => (
                  <ProductCard
                    key={index}
                    product={product}
                    className="h-full"
                  />
                ))}
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center py-20 px-4">
                <div className="w-20 h-20 bg-gradient-to-br from-pink-100 to-rose-100 rounded-full flex items-center justify-center mb-6">
                  <Filter className="w-10 h-10 text-pink-400" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">No products found</h3>
                <p className="text-gray-600 mb-6 text-center max-w-md">
                  We couldn't find any products matching your current filters. Try adjusting your selections.
                </p>
                <button 
                  onClick={clearAllFilters}
                  className="px-6 py-3 bg-gradient-to-r from-pink-500 to-rose-600 text-white font-semibold rounded-xl hover:from-pink-600 hover:to-rose-700 transition-all shadow-lg hover:shadow-xl hover:scale-105 active:scale-95"
                >
                  Clear all filters
                </button>
              </div>
            )}
          </main>
        </div>
      </div>

      {/* Mobile Filters Overlay */}
      {mobileFiltersOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setMobileFiltersOpen(false)}
          />
          
          {/* Sidebar */}
          <div className="absolute right-0 top-0 bottom-0 w-full max-w-sm bg-white shadow-2xl overflow-y-auto">
            <div className="p-6 space-y-6">
              {/* Header */}
              <div className="flex items-center justify-between pb-4 border-b border-gray-200">
                <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                  <SlidersHorizontal className="w-5 h-5 text-pink-600" />
                  Filters
                </h2>
                <button
                  onClick={() => setMobileFiltersOpen(false)}
                  className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Category Filter */}
              <div className="border-b border-gray-100 pb-6">
                <h3 className="font-semibold text-gray-900 mb-3 text-sm uppercase tracking-wide">Category</h3>
                <div className="space-y-3">
                  {CATEGORIES.map((cat) => (
                    <label key={cat} className="flex items-center gap-3 cursor-pointer">
                      <input
                        type="checkbox"
                        value={cat}
                        checked={filters.category.includes(cat)}
                        onChange={() => handleFilterChange('category', cat)}
                        className="w-5 h-5 rounded border-gray-300 text-pink-600 focus:ring-pink-500 cursor-pointer"
                      />
                      <span className="text-gray-700">{cat}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Brand Filter */}
              <div className="border-b border-gray-100 pb-6">
                <h3 className="font-semibold text-gray-900 mb-3 text-sm uppercase tracking-wide">Brand</h3>
                <div className="space-y-3">
                  {BRANDS.map((brand) => (
                    <label key={brand} className="flex items-center gap-3 cursor-pointer">
                      <input
                        type="checkbox"
                        value={brand}
                        checked={filters.brand.includes(brand)}
                        onChange={() => handleFilterChange('brand', brand)}
                        className="w-5 h-5 rounded border-gray-300 text-pink-600 focus:ring-pink-500 cursor-pointer"
                      />
                      <span className="text-gray-700">{brand}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Price Range */}
              <div className="pb-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-semibold text-gray-900 text-sm uppercase tracking-wide">Price Range</h3>
                  <span className="text-pink-600 font-bold">${filters.price}</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="200"
                  step="5"
                  value={filters.price}
                  onChange={handlePriceChange}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-pink-600"
                />
                <div className="flex justify-between text-xs text-gray-500 mt-2">
                  <span>$0</span>
                  <span>$200</span>
                </div>
              </div>

              {/* Apply Button */}
              <button
                onClick={() => setMobileFiltersOpen(false)}
                className="w-full py-3 bg-gradient-to-r from-pink-500 to-rose-600 text-white font-semibold rounded-xl hover:from-pink-600 hover:to-rose-700 transition-all shadow-lg"
              >
                Apply Filters ({activeFiltersCount})
              </button>

              {activeFiltersCount > 0 && (
                <button
                  onClick={() => {
                    clearAllFilters();
                    setMobileFiltersOpen(false);
                  }}
                  className="w-full py-3 border-2 border-gray-300 text-gray-700 font-semibold rounded-xl hover:border-pink-400 hover:text-pink-600 transition-all"
                >
                  Clear All Filters
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Shop;