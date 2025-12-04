import { useMutation, type UseMutationOptions } from "@tanstack/react-query";
import type { AxiosError } from "axios";
import type { AddEditProductPayload } from "../schemas/addEditProductPayload";
import { editProduct } from "./editProduct";

export const useEditProduct = (
  options?: UseMutationOptions<
    AddEditProductPayload,
    AxiosError,
    { id: number; product: AddEditProductPayload }
  >
) => {
  return useMutation({
    mutationFn: ({ id, product }) => editProduct(id, product),
    ...options,
  });
};
