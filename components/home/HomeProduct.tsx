"use client";

import React from "react";
import { Star, ShoppingCart } from "lucide-react";
import WebPageWrapper from "../WebPageWrapper";
import Headline from "../Headline";

type Product = {
  mainImg: string;
  subImg: string;
  rate: number;
  prevprice: number;
  price: number;
  label: string;
  badge: string;
  discount: string;
  catId: number;
};

export default function HomeProduct() {
  // 👉 Inline JSON (same structure as Vue)
  const categories = [
    { img: "/assets/img/cat/cat1.png", label: "skin care", qty: "13" },
    { img: "/assets/img/cat/cat2.png", label: "health care", qty: "13" },
    { img: "/assets/img/cat/cat3.png", label: "Makeup Tools", qty: "13" },
    { img: "/assets/img/cat/cat4.png", label: "Makeup", qty: "13" },
    { img: "/assets/img/cat/cat3.png", label: "skin care tools", qty: "13" },
  ];

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
    },
    {
      mainImg: "/assets/img/product/product3.png",
      subImg: "/assets/img/product/product4.png",
      rate: 3,
      prevprice: 60.99,
      price: 49.99,
      label: "Luxury Makeup Kit",
      badge: "new",
      discount: "10% off",
      catId: 1,
    },
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
    },
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
    },

    {
      mainImg: "/assets/img/product/product3.png",
      subImg: "/assets/img/product/product4.png",
      rate: 3,
      prevprice: 60.99,
      price: 49.99,
      label: "Luxury Makeup Kit",
      badge: "new",
      discount: "10% off",
      catId: 2,
    },
    {
      mainImg: "/assets/img/product/product4.png",
      subImg: "/assets/img/product/product1.png",
      rate: 3,
      prevprice: 60.99,
      price: 49.99,
      label: "Luxury Makeup Kit",
      badge: "new",
      discount: "10% off",
      catId: 2,
    },
    {
      mainImg: "/assets/img/product/product2.png",
      subImg: "/assets/img/product/product4.png",
      rate: 3,
      prevprice: 60.99,
      price: 49.99,
      label: "Luxury Makeup Kit",
      badge: "new",
      discount: "10% off",
      catId: 2,
    },
    {
      mainImg: "/assets/img/product/product2.png",
      subImg: "/assets/img/product/product3.png",
      rate: 3,
      prevprice: 60.99,
      price: 49.99,
      label: "Luxury Makeup Kit",
      badge: "new",
      discount: "10% off",
      catId: 2,
    },

    {
      mainImg: "/assets/img/product/product3.png",
      subImg: "/assets/img/product/product1.png",
      rate: 3,
      prevprice: 60.99,
      price: 49.99,
      label: "Luxury Makeup Kit",
      badge: "new",
      discount: "40% off",
      catId: 3,
    },
    {
      mainImg: "/assets/img/product/product2.png",
      subImg: "/assets/img/product/product1.png",
      rate: 3,
      prevprice: 60.99,
      price: 49.99,
      label: "Luxury Makeup Kit",
      badge: "new",
      discount: "40% off",
      catId: 3,
    },
  ];

  return (
    <WebPageWrapper>
      <Headline
        className="mb-10 scroll-fade-up"
        mainText="Our Products"
        subText="Add our products to weekly line up"
      />

      <div className="grid grid-cols-5 gap-8">
        {products.map((item, index) => (
          <div
            key={index}
            className="max-w-xs bg-white rounded-lg overflow-hidden shadow-sm drop-shadow-md group hover:drop-shadow-md hover:shadow-md transition-all duration-300"
          >
            <div className="relative h-64 overflow-clip">
              {/* Hover swap image */}
              <img
                src={item.subImg}
                alt="Product"
                className="size-full object-cover scale-0 group-hover:scale-100 transition-transform duration-500"
              />
              <img
                src={item.mainImg}
                alt="Product"
                className="size-full object-cover group-hover:scale-0 transition-transform duration-500 absolute inset-0 z-10"
              />

              {/* Badge 1 */}
              <span className="absolute z-20 top-3 left-3 bg-[#ec6b81] text-white text-xs font-semibold px-3 py-1 rounded-full shadow-md">
                {item.badge}
              </span>

              {/* Badge 2 */}
              <span className="absolute z-20 top-11 left-3 bg-[#52b857] text-white text-xs font-semibold px-3 py-1 rounded-full shadow-md">
                {item.discount}
              </span>
            </div>

            <div className="p-5 space-y-3 text-center">
              <h3 className="text-lg font-semibold text-gray-800 group-hover:text-[#ec6b81] transition-colors duration-300">
                {item.label}
              </h3>

              {/* Rating */}
              <div className="flex justify-center gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    className={`size-5 ${
                      star <= item.rate ? "text-amber-500" : "text-gray-300"
                    }`}
                  />
                ))}
              </div>

              {/* Price */}
              <div className="flex justify-center items-center gap-2">
                <p className="text-lg font-bold text-[#ec6b81]">
                  ${item.price}
                </p>
                <p className="text-sm text-gray-400 line-through">
                  ${item.prevprice}
                </p>
              </div>

              {/* Buttons */}
              <div className="flex items-center justify-between gap-5">
                <button className="relative w-[160px] overflow-hidden rounded-full bg-[#ec6b81] p-1 font-semibold text-white shadow-md group">
                  <span className="absolute inset-0 bg-[#d85a72] rounded-full -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></span>

                  <div className="relative z-10 flex items-center gap-2 text-sm">
                    <p className="p-2 bg-white text-black rounded-full">
                      <ShoppingCart className="w-5 h-5" />
                    </p>
                    <p>Add to Cart</p>
                  </div>
                </button>

                <button className="capitalize text-gray-500 hover:text-[#ec6b81] duration-500 text-sm font-semibold">
                  Quick view
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Show all button */}
      <div className="flex justify-center mt-5">
        <button className="relative w-[160px] overflow-hidden rounded-md bg-[#ec6b81] p-1 font-semibold text-white shadow-md group">
          <span className="absolute inset-0 bg-[#d85a72] rounded-md -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></span>

          <div className="relative z-10 flex items-center justify-center text-sm px-8 py-2">
            Show All
          </div>
        </button>
      </div>
    </WebPageWrapper>
  );
}
