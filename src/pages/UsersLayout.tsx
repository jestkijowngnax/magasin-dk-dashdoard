import { useUsers } from "@/api/users/get-users";
import UserCard from "@/components/UserCard";
import { Button } from "@/components/ui/button";
import type { User } from "@/api/users/get-users";
import { Loader } from "@/components/Loader";
import { useAddUser } from "@/api/users/add-user";
import { toast } from "sonner";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import UserForm from "@/components/UserForm";
import { useEditUser } from "@/api/users/edit-user";
import { useDeleteUser } from "@/api/users/delete-user";

export const UsersLayout = () => {
  const { data, isLoading: isLoadingUsers } = useUsers();

  const [{ isOpen, initialState }, setAddEditUserDialogState] = useState<{
    isOpen: boolean;
    initialState: User | null;
  }>({
    isOpen: false,
    initialState: null,
  });

  const handleEditUser = (user: User) => {
    setAddEditUserDialogState({
      isOpen: true,
      initialState: user,
    });
  };

  const handleCancel = () => {
    setAddEditUserDialogState({
      isOpen: false,
      initialState: null,
    });
  };

  const { mutate: addUser, isPending: isLoadingAddUser } = useAddUser({
    onSuccess: () => {
      toast.success("User added successfully");
      handleCancel();
    },
    onError: (error) => {
      console.error("Error adding user:", error);
    },
  });

  const { mutate: editUser, isPending: isLoadingEditUser } = useEditUser({
    onSuccess: () => {
      toast.success("User edited successfully");
      handleCancel();
    },
    onError: (error) => {
      console.error("Error editing user:", error);
    },
  });

  const { mutate: deleteUser } = useDeleteUser({
    onSuccess: () => {
      toast.success("User deleted successfully");
      handleCancel();
    },
    onError: (error) => {
      console.error("Error deleting user:", error);
    },
  });

  if (isLoadingUsers) {
    return <Loader />;
  }

  return (
    <div className="container mx-auto py-10">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl">Users</h1>
        <Button
          onClick={() => {
            setAddEditUserDialogState({
              isOpen: true,
              initialState: null,
            });
          }}
        >
          Add User
        </Button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {data?.users.map((user) => (
          <UserCard
            key={user.id}
            user={user}
            onEdit={() => handleEditUser(user)}
            onDelete={() => deleteUser({ id: user.id })}
          />
        ))}
      </div>

      <Dialog open={isOpen} onOpenChange={handleCancel}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{initialState ? "Edit User" : "Add User"}</DialogTitle>
          </DialogHeader>
          <UserForm
            user={initialState}
            loading={isLoadingAddUser || isLoadingEditUser}
            onSubmit={(data) => {
              if (!initialState) {
                addUser(data);
              } else {
                editUser({ id: initialState.id, user: data });
              }
            }}
            onCancel={handleCancel}
          />
        </DialogContent>
      </Dialog>
    </div>
  );
};
