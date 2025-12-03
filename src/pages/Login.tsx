import { useState } from "react";
import { useAuth } from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [username, setUsername] = useState("emilys");
  const [password, setPassword] = useState("emilyspass");
  const [error, setError] = useState("");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await login(username, password);
      navigate("/");
    } catch {
      setError("Invalid credentials");
    }
  };

  return (
    <div className="h-screen flex items-center justify-center">
      <div className="flex flex-col gap-2">
        <h2>Sign In</h2>
        <form onSubmit={handleLogin} className="flex flex-col gap-2 w-80">
          <input
            name="username"
            value={username}
            onChange={(e) => {
              if (error) setError("");

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
              if (error) setError("");

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
}
