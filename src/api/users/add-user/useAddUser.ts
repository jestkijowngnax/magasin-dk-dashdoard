import { useMutation, type UseMutationOptions } from "@tanstack/react-query";
import { addUser } from "./getUser";
import type { AddEditUserPayload } from "../schemas/addEditUserPayload";
import type { AxiosError } from "axios";
import type { User } from "../get-users";

export const useAddUser = (
  options?: UseMutationOptions<User, AxiosError, AddEditUserPayload>
) => {
  return useMutation({
    mutationFn: addUser,
    ...options,
  });
};
