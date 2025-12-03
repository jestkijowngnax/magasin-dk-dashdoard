import { useMutation, type UseMutationOptions } from "@tanstack/react-query";
import { login } from "./login";
import type { LoginPayload } from "./schema";
import type { User } from "@/entities/user";
import type { AxiosError } from "axios";

export const useLogin = (
  options?: UseMutationOptions<User, AxiosError, LoginPayload>
) =>
  useMutation<User, AxiosError, LoginPayload>({
    mutationFn: login,
    ...options,
  });
