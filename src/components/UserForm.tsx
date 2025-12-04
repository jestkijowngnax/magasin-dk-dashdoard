import type { FormEvent } from "react";
import { Button } from "@/components/ui/button";
import type { AddEditUserPayload } from "@/api/users/schemas/addEditUserPayload";
import { Spinner } from "./ui/spinner";

interface UserFormProps {
  user?: AddEditUserPayload | null;
  loading?: boolean;
  onSubmit: (formData: AddEditUserPayload) => void;
  onCancel: () => void;
}

export default function UserForm({
  user,
  loading = false,
  onSubmit,
  onCancel,
}: UserFormProps) {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);

    const userData: AddEditUserPayload = {
      firstName: formData.get("firstName") as string,
      lastName: formData.get("lastName") as string,
      age: Number(formData.get("age")),
    };

    onSubmit(userData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="firstName" className="block text-sm font-medium mb-1">
          First Name *
        </label>
        <input
          id="firstName"
          name="firstName"
          type="text"
          defaultValue={user?.firstName}
          required
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div>
        <label htmlFor="lastName" className="block text-sm font-medium mb-1">
          Last Name *
        </label>
        <input
          id="lastName"
          name="lastName"
          type="text"
          defaultValue={user?.lastName}
          required
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div>
        <label htmlFor="age" className="block text-sm font-medium mb-1">
          Age *
        </label>
        <input
          id="age"
          name="age"
          type="number"
          defaultValue={user?.age}
          required
          min="0"
          max="150"
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div className="flex gap-3 justify-end pt-4">
        <Button
          type="button"
          variant="outline"
          onClick={onCancel}
          disabled={loading}
        >
          Cancel
        </Button>
        <Button type="submit" disabled={loading}>
          {loading && <Spinner />} {user ? "Update" : "Add"} User
        </Button>
      </div>
    </form>
  );
}
