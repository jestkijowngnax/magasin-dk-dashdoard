import { useUsers } from "@/api/users";
import UserCard from "@/components/UserCard";
import { Button } from "@/components/ui/button";
import type { User } from "@/api/users";

export const UsersLayout = () => {
  const { data } = useUsers();

  const handleAddUser = () => {
    console.log("TODO: open Add User dialog");
  };

  const handleEditUser = (user: User) => {
    console.log("Edit user:", user);
  };

  const handleRemoveUser = (user: User) => {
    console.log("Remove user:", user);
  };

  return (
    <div className="container mx-auto py-10">
      {/* Top bar */}
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-semibold">Users</h1>
        <Button onClick={handleAddUser}>+ Add User</Button>
      </div>

      {/* Card grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {data?.users.map((user) => (
          <UserCard
            key={user.id}
            user={user}
            onEdit={handleEditUser}
            onRemove={handleRemoveUser}
          />
        ))}
      </div>
    </div>
  );
};
