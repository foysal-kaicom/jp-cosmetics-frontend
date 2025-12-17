"use client";

import React from "react";
import { Star, ShoppingCart } from "lucide-react";
import WebPageWrapper from "../WebPageWrapper";
import Headline from "../Headline";
import ProductCard from "./ProductCard";
import { Product } from "@/types";
export default function HomeProduct() {
  const products: Product[] = [
    {
      id: 1,
      name: "Test Product",
      slug: "test-product",
      product_type: "configurable",
      status: "active",
      primary_image: "/assets/img/product/product1.png",
      category_id: 6,
      brand_id: 1,
      created_at: "2025-12-17T04:49:07.000000Z",
      category: {
        id: 6,
        name: "Test Category",
      },
      brand: {
        id: 1,
        name: "Test Brand",
      },
    },
  {
    id: 2,
    name: "Moisturizing Cream",
    slug: "moisturizing-cream",
    product_type: "simple",
    status: "active",
    primary_image: "/assets/img/product/product3.png",
    category_id: 6,
    brand_id: 1,
    created_at: "2025-12-17T04:49:07.000000Z",
    category: {
      id: 6,
      name: "Test Category",
    },
    brand: {
      id: 1,
      name: "Test Brand",
    },
  },
  {
    id: 3,
    name: "Lip Gloss",
    slug: "lip-gloss",
    product_type: "simple",
    status: "active",
    primary_image: "/assets/img/product/product4.png",
    category_id: 6,
    brand_id: 1,
    created_at: "2025-12-17T04:49:07.000000Z",
    category: {
      id: 6,
      name: "Test Category",
    },
    brand: {
      id: 1,
      name: "Test Brand",
    },
  },
  {
    id: 4,
    name: "Foundation",
    slug: "foundation",
    product_type: "configurable",
    status: "active",
    primary_image: "/assets/img/product/product1.png",
    category_id: 6,
    brand_id: 1,
    created_at: "2025-12-17T04:49:07.000000Z",
    category: {
      id: 6,
      name: "Test Category",
    },
    brand: {
      id: 1,
      name: "Test Brand",
    },
  },
  {
    id: 5,
    name: "Face Serum",
    slug: "face-serum",
    product_type: "simple",
    status: "active",
    primary_image: "/assets/img/product/product2.png",
    category_id: 6,
    brand_id: 1,
    created_at: "2025-12-17T04:49:07.000000Z",
    category: {
      id: 6,
      name: "Test Category",
    },
    brand: {
      id: 1,
      name: "Test Brand",
    },
  }
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
