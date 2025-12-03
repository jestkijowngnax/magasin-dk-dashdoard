import {
  createContext,
  useEffect,
  useState,
  type PropsWithChildren,
} from "react";
import { useLogin, type LoginPayload } from "@/api/auth";
import type { LoginUser } from "@/entities/login-user";
import { useNavigate } from "react-router-dom";

type AuthContextType = {
  user: LoginUser | null;
  error: string | null;
  login: (payload: LoginPayload) => void;
  logout: () => void;
};

const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({ children }: PropsWithChildren) => {
  const navigate = useNavigate();
  const [user, setUser] = useState<LoginUser | null>(() => {
    const stored = localStorage.getItem("user");
    return stored ? JSON.parse(stored) : null;
  });

  const [error, setError] = useState<string | null>(null);

  const { mutate: login } = useLogin({
    onSuccess: (data) => {
      setUser(data);
      localStorage.setItem("user", JSON.stringify(data));
      navigate("/products");
    },
    onError: () => {
      setError("Invalid username or password");
    },
  });

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  useEffect(() => {
    if (user && window.location.pathname === "/login") {
      navigate("/products");
    }
  }, [navigate, user]);

  return (
    <AuthContext.Provider value={{ user, login, logout, error }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext };
