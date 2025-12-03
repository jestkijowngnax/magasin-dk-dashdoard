import { NavLink, Outlet } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";

export const DashboardLayout = () => {
  const { user, logout } = useAuth();

  return (
    <div>
      <header className="flex justify-between items-center">
        <nav className="flex gap-2">
          <NavLink to="/products" end>
            Products
          </NavLink>
          <NavLink to="/users">Users</NavLink>
        </nav>

        <div className="flex gap-2">
          <p>Welcome, {user?.firstName}</p>
          <p>Email: {user?.email}</p>

          <button onClick={logout}>Logout</button>
        </div>
      </header>

      <main>
        <Outlet />
      </main>
    </div>
  );
};
