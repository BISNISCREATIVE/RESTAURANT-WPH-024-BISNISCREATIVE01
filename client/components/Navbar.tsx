import * as React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "@/store";
import { clearAuth } from "@/features/auth/authSlice";

export default function Navbar() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const user = useAppSelector((s) => s.auth?.user);

  const onLogout = () => {
    dispatch(clearAuth());
    navigate("/login");
  };

  return (
    <header className="w-full border-b bg-white">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <img src="/placeholder.svg" alt="logo" className="w-8 h-8" />
          <span className="font-extrabold">Foody</span>
        </Link>
        <nav className="flex items-center gap-4">
          {user ? (
            <>
              <span className="hidden sm:inline">{user.name ?? user.email}</span>
              <button onClick={onLogout} className="text-sm text-red-600">
                Logout
              </button>
            </>
          ) : (
            <Link to="/login" className="text-sm">
              Sign In
            </Link>
          )}
        </nav>
      </div>
    </header>
  );
}
