import apiClient from "../../apiClient";
import type { Users } from "./schema";

export const getUsers = async () => {
  const response = await apiClient.get<Users>("/users");

  return response.data;
};
