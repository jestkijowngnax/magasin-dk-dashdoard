import { useUsers } from "@/api/users";

export const UsersLayout = () => {
  const { data } = useUsers();

  return (
    <div>
      <h1>Users</h1>
      {data?.users.map((user) => (
        <div key={user.id}>
          <h2>{user.firstName}</h2>
        </div>
      ))}
    </div>
  );
};
