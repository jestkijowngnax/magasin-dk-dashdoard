import { useMutation, type UseMutationOptions } from "@tanstack/react-query";
import { editUser } from "./editUser";
import type { AddEditUserPayload } from "../schemas/addEditUserPayload";
import type { User } from "../get-users";
import type { AxiosError } from "axios";

export const useEditUser = (
  options?: UseMutationOptions<
    User,
    AxiosError,
    { id: number; user: AddEditUserPayload }
  >
) => {
  return useMutation<
    User,
    AxiosError,
    { id: number; user: AddEditUserPayload }
  >({
    mutationFn: ({ id, user }) => editUser(id, user),
    ...options,
  });
};
