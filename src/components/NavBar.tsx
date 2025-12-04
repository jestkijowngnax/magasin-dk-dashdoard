import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { useAuth } from "@/hooks/useAuth";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const { user, logout } = useAuth();
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-white border-b sticky top-0 z-50 px-4">
      <div className="flex items-center justify-between py-4 w-full">
        <Link to="/" className="text-xl font-semibold">
          Magasin Dashboard
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6">
          <Link to="/products" className="text-sm hover:text-primary">
            Products
          </Link>
          <Link to="/users" className="text-sm hover:text-primary">
            Users
          </Link>

          {user ? (
            <>
              <Avatar className="h-8 w-8">
                <AvatarImage src={user.image} />
                <AvatarFallback>{user.firstName}</AvatarFallback>
              </Avatar>
              <Button
                className="cursor-pointer"
                variant="outline"
                size="sm"
                onClick={logout}
              >
                Logout
              </Button>
            </>
          ) : null}
        </nav>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setOpen(!open)}>
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden border-t bg-white">
          <nav className="flex flex-col p-4 gap-4">
            <Link to="/" onClick={() => setOpen(false)}>
              Home
            </Link>
            <Link to="/profile" onClick={() => setOpen(false)}>
              Profile
            </Link>

            {user ? (
              <Button
                variant="outline"
                onClick={() => {
                  logout();
                  setOpen(false);
                }}
              >
                Logout
              </Button>
            ) : null}
          </nav>
        </div>
      )}
    </header>
  );
}
