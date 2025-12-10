"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Search, User, Heart, ShoppingCart, Menu, X } from "lucide-react";

interface NavItem {
  id: string;
  label: string;
  link: string;
}

const navdata: NavItem[] = [
  { id: "home", label: "Home", link: "/" },
  { id: "shop", label: "Shop", link: "/shop" },
  { id: "contact", label: "Contact", link: "/contact" },
  { id: "blog", label: "Blog", link: "/blog" },
];

export default function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <>
      {/* Elegant Top Bar with Gradient */}
      <div className="bg-gradient-to-r from-pink-500 via-rose-500 to-pink-600 text-white shadow-sm">
        <div className="px-[5%] flex items-center justify-between text-[11px] md:text-xs">
          <div className="flex items-center divide-x divide-pink-400/30">
            <p className="py-2.5 pr-4 md:pr-6 hidden sm:block font-light">
              ✨ Free Shipping on Orders Over $50
            </p>
            <p className="py-2.5 px-4 md:px-6 font-light hover:text-pink-100 cursor-pointer transition-colors">
              Help & Advice
            </p>
          </div>
          <div className="py-2.5 pl-4 md:pl-6 font-light hover:text-pink-100 cursor-pointer transition-colors">
            Welcome (Login)
          </div>
        </div>
      </div>

      {/* Premium Sticky Navbar */}
      <div className="sticky top-0 bg-white/95 backdrop-blur-xl shadow-sm z-50 border-b border-gray-100">
        <div className="px-[5%]">
          <div className="flex items-center justify-between py-4 md:py-5 gap-4">

            {/* Logo */}
            <Link href="/" className="flex-shrink-0">
              <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-pink-500 to-rose-600 bg-clip-text text-transparent hover:from-pink-600 hover:to-rose-700 transition-all duration-300 italic tracking-tight">
                Cosmetica
              </h2>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8 xl:gap-10 font-medium text-sm">
              {navdata.map((item) => (
                <Link
                  key={item.id}
                  href={item.link}
                  className={`relative py-1 transition-all duration-300 group ${
                    pathname === item.link 
                      ? "text-pink-600" 
                      : "text-gray-700 hover:text-pink-600"
                  }`}
                >
                  {item.label}
                  <span 
                    className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-pink-500 to-rose-600 transition-all duration-300 ${
                      pathname === item.link 
                        ? "w-full" 
                        : "w-0 group-hover:w-full"
                    }`}
                  />
                </Link>
              ))}
            </nav>

            {/* Desktop Icons */}
            <div className="hidden md:flex items-center gap-4 lg:gap-6">
              
              {/* Search */}
              <div className="relative">
                {searchOpen ? (
                  <div className="flex items-center gap-2 border-2 border-pink-500 rounded-full px-4 py-2 bg-pink-50/50 animate-in fade-in slide-in-from-right-2 duration-300">
                    <input
                      type="text"
                      placeholder="Search products..."
                      className="focus:outline-none w-40 lg:w-48 bg-transparent text-sm placeholder:text-gray-400"
                      autoFocus
                    />
                    <Search className="w-4 h-4 text-pink-600" />
                    <button 
                      onClick={() => setSearchOpen(false)}
                      className="ml-1"
                    >
                      <X className="w-4 h-4 text-gray-400 hover:text-gray-600" />
                    </button>
                  </div>
                ) : (
                  <button
                    onClick={() => setSearchOpen(true)}
                    className="flex flex-col items-center gap-1 text-gray-600 hover:text-pink-600 transition-colors group"
                  >
                    <div className="p-2 rounded-full group-hover:bg-pink-50 transition-colors">
                      <Search className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-medium">Search</span>
                  </button>
                )}
              </div>

              {/* Account */}
              <Link 
                href="/user/dashboard"
                className="flex flex-col items-center gap-1 text-gray-600 hover:text-pink-600 transition-colors group"
              >
                <div className="p-2 rounded-full group-hover:bg-pink-50 transition-colors">
                  <User className="w-5 h-5" />
                </div>
                <span className="text-[10px] font-medium">Account</span>
              </Link>

              {/* Wishlist */}
              <Link 
                href="/wishlist"
                className="flex flex-col items-center gap-1 text-gray-600 hover:text-pink-600 transition-colors group relative"
              >
                <div className="p-2 rounded-full group-hover:bg-pink-50 transition-colors">
                  <Heart className="w-5 h-5" />
                </div>
                <span className="text-[10px] font-medium">Wishlist</span>
                <span className="absolute -top-1 -right-1 bg-gradient-to-r from-pink-500 to-rose-600 text-white text-[9px] font-bold rounded-full w-4 h-4 flex items-center justify-center">
                  0
                </span>
              </Link>

              {/* Cart */}
              <Link 
                href="/cart"
                className="flex flex-col items-center gap-1 text-gray-600 hover:text-pink-600 transition-colors group relative"
              >
                <div className="p-2 rounded-full group-hover:bg-pink-50 transition-colors">
                  <ShoppingCart className="w-5 h-5" />
                </div>
                <span className="text-[10px] font-medium">Cart</span>
                <span className="absolute -top-1 -right-1 bg-gradient-to-r from-pink-500 to-rose-600 text-white text-[9px] font-bold rounded-full w-4 h-4 flex items-center justify-center">
                  0
                </span>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-gray-600 hover:text-pink-600 transition-colors"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="lg:hidden py-4 border-t border-gray-100 animate-in slide-in-from-top duration-300">
              <nav className="flex flex-col gap-4">
                {navdata.map((item) => (
                  <Link
                    key={item.id}
                    href={item.link}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`px-4 py-2 rounded-lg transition-colors ${
                      pathname === item.link
                        ? "bg-gradient-to-r from-pink-500 to-rose-600 text-white"
                        : "text-gray-700 hover:bg-pink-50"
                    }`}
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>

              {/* Mobile Icons */}
              <div className="grid grid-cols-4 gap-4 mt-6 pt-6 border-t border-gray-100">
                <button className="flex flex-col items-center gap-2 text-gray-600">
                  <Search className="w-6 h-6" />
                  <span className="text-xs">Search</span>
                </button>
                <Link href="/account" className="flex flex-col items-center gap-2 text-gray-600">
                  <User className="w-6 h-6" />
                  <span className="text-xs">Account</span>
                </Link>
                <Link href="/wishlist" className="flex flex-col items-center gap-2 text-gray-600 relative">
                  <Heart className="w-6 h-6" />
                  <span className="text-xs">Wishlist</span>
                  <span className="absolute top-0 right-6 bg-pink-600 text-white text-[9px] rounded-full w-4 h-4 flex items-center justify-center">0</span>
                </Link>
                <Link href="/cart" className="flex flex-col items-center gap-2 text-gray-600 relative">
                  <ShoppingCart className="w-6 h-6" />
                  <span className="text-xs">Cart</span>
                  <span className="absolute top-0 right-6 bg-pink-600 text-white text-[9px] rounded-full w-4 h-4 flex items-center justify-center">0</span>
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}