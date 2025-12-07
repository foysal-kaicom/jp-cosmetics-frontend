"use client";

import React, { useState } from "react";

export default function Footer() {
  const [email, setEmail] = useState("");

  const subscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    alert(`Subscribed with: ${email}`);
    setEmail("");
  };

  return (
    <footer className="bg-pink-50 text-gray-700">
      {/* Wrapper */}
      <div className="px-[5%]">

        {/* Newsletter */}
        <div className="border-b border-gray-200 py-10 px-6">
          <div className="mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
            <h2 className="text-2xl font-semibold text-gray-800">
              ✨ Stay Beautiful with Our Newsletter
            </h2>

            <form onSubmit={subscribe} className="flex w-full md:w-1/2 max-w-lg">
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                placeholder="Enter your email"
                required
                className="w-full px-4 py-3 rounded-l-lg bg-white text-sm border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-400"
              />

              <button
                type="submit"
                className="relative overflow-hidden w-[150px] rounded-r-lg bg-[#ec6b81] px-6 py-3 font-semibold text-white text-sm shadow-md group"
              >
                <span
                  className="absolute inset-0 bg-[#d85a72] rounded-r-lg -translate-x-full group-hover:translate-x-0 transition-transform duration-500"
                ></span>
                <span className="relative z-10">Subscribe</span>
              </button>
            </form>
          </div>
        </div>

        {/* Footer Links */}
        <div className="mx-auto px-6 py-14 grid grid-cols-1 md:grid-cols-4 gap-10">

          {/* Branding */}
          <div>
            <h2 className="text-[#ec6b81] text-4xl font-bold italic mb-4">Cosmetica</h2>
            <p className="text-sm leading-relaxed text-gray-600">
              Discover elegance & self-care with our exclusive beauty products.
            </p>
          </div>

          {/* Help */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-pink-600">
              Help & Information
            </h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-pink-500">Help Centre</a></li>
              <li><a href="#" className="hover:text-pink-500">Delivery Information</a></li>
              <li><a href="#" className="hover:text-pink-500">Return Policy</a></li>
              <li><a href="#" className="hover:text-pink-500">Voucher Codes</a></li>
              <li><a href="#" className="hover:text-pink-500">Contact Us</a></li>
            </ul>
          </div>

          {/* About */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-pink-600">About</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-pink-500">About Us</a></li>
              <li><a href="#" className="hover:text-pink-500">Corporate Information</a></li>
              <li><a href="#" className="hover:text-pink-500">Privacy & Cookies</a></li>
              <li><a href="#" className="hover:text-pink-500">Terms & Conditions</a></li>
              <li><a href="#" className="hover:text-pink-500">Copyright & Warranties</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-pink-600">
              Contact & Follow
            </h3>

            <ul className="space-y-2 text-sm text-gray-600">
              <li>📍 324 King St. Owosso</li>
              <li>📍 281 Virginia Ave. Westwood</li>
              <li>☎️ +0.888.456.668 (+0122.33.44.55)</li>
              <li>✉️ Supporttheme247@gmail.com</li>
            </ul>

            <div className="flex space-x-4 mt-4">
              <a href="#" className="text-gray-500 hover:text-pink-500">🌸</a>
              <a href="#" className="text-gray-500 hover:text-pink-500">📷</a>
              <a href="#" className="text-gray-500 hover:text-pink-500">🐦</a>
            </div>
          </div>
        </div>

        {/* Bottom Area */}
        <div className="border-t border-gray-200 py-6 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Your Beauty Brand. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
