import { useMutation, type UseMutationOptions } from "@tanstack/react-query";
import type { AxiosError } from "axios";
import { deleteUser } from "./deleteUser";

export const useDeleteUser = (
  options: UseMutationOptions<
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
  return useMutation<
    {
      id: number;
      title: string;
      isDeleted: boolean;
      deletedOn: string;
    },
    AxiosError,
    { id: number }
  >({
    mutationFn: ({ id }) => deleteUser(id),
    ...options,
  });
};
