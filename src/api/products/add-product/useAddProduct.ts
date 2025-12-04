import { useMutation, type UseMutationOptions } from "@tanstack/react-query";
import { addProduct } from "./addProduct";
import type { AxiosError } from "axios";
import type { AddEditProductPayload } from "../schemas/addEditProductPayload";

export const useAddProduct = (
  options?: UseMutationOptions<
    { id: number },
    AxiosError,
    AddEditProductPayload
  >
) => {
  return useMutation({
    mutationFn: addProduct,
    ...options,
  });
};
