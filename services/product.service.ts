import apiClient from "@/lib/axios";
import { SingleProduct } from "@/types";

export const getSingleProduct = async (slug: string): Promise<SingleProduct> => {
  try {
    const response = await apiClient.get(`/products/show/${slug}`); 
    return response.data?.data;
  } catch (error) {
    console.error("Failed to fetch Popular Products Info", error);
    return {} as SingleProduct;
  }
};