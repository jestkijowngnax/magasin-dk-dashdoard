import apiClient from "@/api/apiClient";
import type { Products } from "./schema";

export const getProducts = async () => {
  const response = await apiClient.get<Products>("/products");

  return response.data;
};
