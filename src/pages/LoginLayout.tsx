import { LoginForm } from "@/components/LoginForm";
import { useAuth } from "@/hooks/useAuth";

export const LoginLayout = () => {
  const { login, error } = useAuth();

  return <LoginForm onSubmit={login} error={error} />;
};
