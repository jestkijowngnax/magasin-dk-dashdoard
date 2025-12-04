import apiClient from "@/api/apiClient";

export const deleteProduct = async ({ id }: { id: number }) => {
  const response = await apiClient.delete(`/products/${id}`);

  return response.data;
};
