import React from "react";
import { Link } from "react-router-dom";
import  useAuth  from "../../hooks/useAuth";

const Header = () => {
  const { user, logout } = useAuth();

  return (
    <header className="bg-indigo-600 text-white p-4 shadow-md flex justify-between items-center">
      <Link to="/" className="text-lg font-bold">
        Fasting Tracker
      </Link>
      <nav className="flex items-center gap-4">
        {user ? (
          <>
            <span>Welcome, {user.name}</span>
            <button
              onClick={logout}
              className="bg-red-500 px-3 py-1 rounded hover:bg-red-600"
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <Link to="/login" className="hover:underline">
              Login
            </Link>
            <Link to="/register" className="hover:underline">
              Register
            </Link>
          </>
        )}
      </nav>
    </header>
  );
};

export default Header;
