import { useUsers } from "@/api/users";
import UserCard from "@/components/UserCard";
import { Button } from "@/components/ui/button";
import type { User } from "@/api/users";
import { Loader } from "@/components/Loader";

export const UsersLayout = () => {
  const { data, isLoading } = useUsers();

  const handleAddUser = () => {
    console.log("TODO: open Add User dialog");
  };

  const handleEditUser = (user: User) => {
    console.log("Edit user:", user);
  };

  const handleRemoveUser = (user: User) => {
    console.log("Remove user:", user);
  };

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="container mx-auto py-10">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-semibold">Users</h1>
        <Button onClick={handleAddUser}>+ Add User</Button>
      </div>
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
