import { useMutation, type UseMutationOptions } from "@tanstack/react-query";
import { login } from "./login";
import type { LoginPayload } from "./schema";
import type { LoginUser } from "@/entities/login-user";
import type { AxiosError } from "axios";

export const useLogin = (
  options?: UseMutationOptions<LoginUser, AxiosError, LoginPayload>
) =>
  useMutation<LoginUser, AxiosError, LoginPayload>({
    mutationFn: login,
    ...options,
  });
