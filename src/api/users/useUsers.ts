import { useQuery } from "@tanstack/react-query";
import { getUsers } from "./getUsers";

export const useUsers = () =>
  useQuery({
    queryKey: ["users"],
    queryFn: getUsers,
  });
