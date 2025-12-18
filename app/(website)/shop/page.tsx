"use client";
import ProductListComponent from "@/components/shop/ProductListComponent";
import apiClient from "@/lib/axios";
import { ProductFilters, ProductList } from "@/types";
import { useEffect, useState } from "react";

export default function Shop() {
  const [productList, setProductList] = useState<ProductList>()
  
  const [productFilters, setProductFilters] = useState<ProductFilters>();
  const getProducts = () => {
    try {
      apiClient
        .get<{ success: boolean; data: ProductList; message: string }>(
          "/products"
        )
        .then((res) => {
          if (res.data.success) {
            setProductList(res.data.data);
          }
        })
        .catch((error: any) => {
          // toast.error(
          //   error?.response?.data?.message || "Can not get products at this moment"
          // );
        });
    } catch (error: any) {
      // toast.error(
      //   error?.response?.data?.message ||
      //     "Can not get subscription plans at this moment"
      // );
    }
  };

  const getProductFilters = () => {
    try {
      apiClient
        .get<{ success: boolean; data: ProductFilters; message: string }>(
          "/products/filter-data"
        )
        .then((res) => {
          if (res.data.success) {
            setProductFilters(res.data.data);
          }
        })
        .catch((error: any) => {
          // toast.error(
          //   error?.response?.data?.message || "Can not get products at this moment"
          // );
        });
    } catch (error: any) {
      // toast.error(
      //   error?.response?.data?.message ||
      //     "Can not get subscription plans at this moment"
      // );
    }
  };

  useEffect(() => {
    getProductFilters();
    getProducts();
  }, []);

  const handlePageChange = (page: number) => {
    // Fetch products for the new page
    console.log("Page changed to:", page);
  };

  const handleFilterChange = (filters: {
    category: string[];
    brand: string[];
    price: number;
  }) => {
    // Apply filters and fetch new products
    console.log("Filters changed:", filters);
  };

  const handleSortChange = (sort: string) => {
    // Sort products
    console.log("Sort changed to:", sort);
  };
  return (
    <>
      {productList && productFilters && productList?.data?.length > 0 ? (
        <ProductListComponent
          products={productList.data}
          paginationData={productList.meta}
          filterOptions={productFilters}
          onPageChange={handlePageChange}
          onFilterChange={handleFilterChange}
          onSortChange={handleSortChange}
        />
      ) : (
        <div className="text-center mt-20 text-gray-500">
          No products found.
        </div>
      )}
    </>
  );
}
