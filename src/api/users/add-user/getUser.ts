import apiClient from "@/api/apiClient";
import type { AddEditUserPayload } from "../schemas/addEditUserPayload";
import type { User } from "../get-users";

export const addUser = async (user: AddEditUserPayload) => {
  const response = await apiClient.post<User>("/users/add", user);

  return response.data;
};
