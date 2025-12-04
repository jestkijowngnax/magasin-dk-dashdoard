import apiClient from "@/api/apiClient";

export const deleteUser = async (id: number) => {
  const response = await apiClient.delete<{
    id: number;
    title: string;
    isDeleted: boolean;
    deletedOn: string;
  }>(`/users/${id}`);

  return response.data;
};
