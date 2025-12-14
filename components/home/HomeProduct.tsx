"use client";

import React from "react";
import { Star, ShoppingCart } from "lucide-react";
import WebPageWrapper from "../WebPageWrapper";
import Headline from "../Headline";
import ProductCard from "./ProductCard";

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
          <ProductCard key={index} product={item} />
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
