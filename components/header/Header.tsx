"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Search, User, Heart, ShoppingCart } from "lucide-react";

interface NavItem {
  id: string;
  label: string;
  link: string;
}

const navdata: NavItem[] = [
  { id: "home", label: "Home", link: "/" },
  { id: "shop", label: "Shop", link: "/shop" },
  { id: "collection", label: "Collection", link: "/collection" },
  { id: "offers", label: "Offers", link: "/offers" },
  { id: "contact", label: "Contact", link: "/contact" },
  { id: "blog", label: "Blog", link: "/blog" },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <>
      {/* Top Bar */}
      <div className="flex items-center justify-between border-b text-[12px] px-[5%] text-white bg-[#ec6b81]">
        <div className="flex items-center">
          <p className="border-r py-2 pr-5">
            Express Delivery in 3-7 Business days in All the World
          </p>
          <p className="border-r py-2 px-5">Help & Advice</p>
        </div>
        <div className="border-l">
          <p className="py-2 pl-5">Welcome (Login)</p>
        </div>
      </div>

      {/* Sticky Navbar */}
      <div className="sticky top-0 bg-[#ffffffcb] backdrop-blur-[6px] z-50 px-[5%]">
        <div className="grid grid-cols-2 py-5 gap-10">

          {/* Logo + Navigation */}
          <div className="flex gap-10 justify-between items-center">
            <h2 className="text-[#ec6b81] text-4xl font-bold italic">Cosmetica</h2>

            <div className="flex gap-10 font-semibold">
              {navdata.map((item) => (
                <Link
                  key={item.id}
                  href={item.link}
                  className={`hover:text-[#ec6b81] cursor-pointer ${
                    pathname === item.link ? "text-[#ec6b81]" : ""
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Search + Icons */}
          <div className="flex gap-8 items-center justify-end text-gray-600 text-sm">
            <div className="border border-[#ec6b81] flex items-center px-10 py-2 rounded-3xl">
              <input
                type="text"
                placeholder="Enter your product"
                className="focus:outline-none w-[150px] pr-3 bg-transparent"
              />
              <Search className="size-5 text-[#ec6b81]" />
            </div>

            <div className="flex flex-col justify-center items-center gap-1 text-[#ec6b81]">
              <User />
              <p>Account</p>
            </div>

            <div className="flex flex-col justify-center items-center gap-1 text-[#ec6b81]">
              <Heart />
              <p>Wishlist</p>
            </div>

            <div className="flex flex-col justify-center items-center gap-1 text-[#ec6b81]">
              <ShoppingCart />
              <p>Shop Cart</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
