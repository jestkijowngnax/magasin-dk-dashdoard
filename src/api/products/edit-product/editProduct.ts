import apiClient from "@/api/apiClient";

import {
  addEditProductPayloadSchema,
  type AddEditProductPayload,
} from "../schemas/addEditProductPayload";

export const editProduct = async (
  id: number,
  product: Partial<AddEditProductPayload>
) => {
  const response = await apiClient.put(`/products/${id}`, {
    data: JSON.stringify(addEditProductPayloadSchema.parse(product)),
  });

  return response.data;
};
