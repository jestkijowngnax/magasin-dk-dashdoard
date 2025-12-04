import { useMutation, type UseMutationOptions } from "@tanstack/react-query";
import { deleteProduct } from "./deleteProduct";
import type { AxiosError } from "axios";

export const useDeleteProduct = (
  options?: UseMutationOptions<
    {
      id: number;
      title: string;
      isDeleted: boolean;
      deletedOn: string;
    },
    AxiosError,
    { id: number }
  >
) => {
  return useMutation({
    mutationFn: deleteProduct,
    ...options,
  });
};
