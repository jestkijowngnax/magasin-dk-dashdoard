import apiClient from "@/api/apiClient";
import type { AddEditUserPayload } from "../schemas/addEditUserPayload";
import type { User } from "../get-users";

export const editUser = async (id: number, user: AddEditUserPayload) => {
  const response = await apiClient.put<User>(`/users/${id}`, user);

  return response.data;
};
