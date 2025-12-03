import type { LoginPayload } from "@/api/auth";

import { useState } from "react";

interface LoginFormProps {
  error: string | null;
  onSubmit: (payload: LoginPayload) => void;
}

export const LoginForm = ({ error, onSubmit }: LoginFormProps) => {
  const [username, setUsername] = useState("emilys");
  const [password, setPassword] = useState("emilyspass");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    onSubmit({ username, password });
  };

  return (
    <div className="h-screen flex items-center justify-center">
      <div className="flex flex-col gap-2">
        <h2>Sign In</h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-2 w-80">
          <input
            name="username"
            value={username}
            onChange={(e) => {
              setUsername(e.target.value);
            }}
            placeholder="username"
            className="border border-gray-300 rounded-md p-2"
          />
          <input
            type="password"
            name="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            placeholder="password"
            className="border border-gray-300 rounded-md p-2"
          />
          {error && <p className="text-red-500">{error}</p>}
          <button
            type="submit"
            className="bg-blue-500 text-white rounded-md p-2"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};
