import apiClient from "@/api/apiClient";
import {
  addEditProductPayloadSchema,
  type AddEditProductPayload,
} from "../schemas/addEditProductPayload";

export const addProduct = async (product: AddEditProductPayload) => {
  const response = await apiClient.post("/products/add", {
    data: addEditProductPayloadSchema.parse(product),
  });

  return response.data;
};
