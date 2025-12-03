import apiClient from "@/api/apiClient";
import { loginSchema, type LoginPayload } from "./schema";

export const login = async (payload: LoginPayload) => {
  const response = await apiClient.post(
    "/auth/login",
    loginSchema.parse(payload)
  );

  localStorage.setItem("user", JSON.stringify(response.data));

  return response.data;
};
