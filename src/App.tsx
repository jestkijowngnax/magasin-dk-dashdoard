import { Routes, Route, Navigate } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";
import "./index.css";
import {
  LoginLayout,
  DashboardLayout,
  ProductsLayout,
  UsersLayout,
} from "./pages";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<LoginLayout />} />

      <Route
        path="/"
        element={
          <ProtectedRoute>
            <DashboardLayout />
          </ProtectedRoute>
        }
      >
        <Route index element={<Navigate to="products" replace />} />
        <Route path="products" element={<ProductsLayout />} />
        <Route path="users" element={<UsersLayout />} />
      </Route>
    </Routes>
  );
}

export default App;
