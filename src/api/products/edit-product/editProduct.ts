import apiClient from "@/api/apiClient";

import {
  addEditProductPayloadSchema,
  type AddEditProductPayload,
} from "../schemas/addEditProductPayload";

export const editProduct = async (
  id: number,
  product: Partial<AddEditProductPayload>
) => {
  const response = await apiClient.put<AddEditProductPayload>(
    `/products/${id}`,
    addEditProductPayloadSchema.parse(product)
  );

  return response.data;
};
