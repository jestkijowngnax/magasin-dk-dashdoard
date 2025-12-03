import { LoginForm } from "@/components/LoginForm";
import { useAuth } from "@/hooks/useAuth";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const LoginLayout = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate("/products");
    }
  }, [navigate, user]);

  return <LoginForm />;
};
