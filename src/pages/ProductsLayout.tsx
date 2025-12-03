import { useEffect } from "react";
import apiClient from "@/api/apiClient";

export const ProductsLayout = () => {
  useEffect(() => {
    // Using the new API client with automatic token injection
    apiClient
      .get("/products")
      .then((response) => console.log(response.data))
      .catch((error) => console.error("Failed to fetch products:", error));
  }, []);
  return <div>ProductsLayout</div>;
};
