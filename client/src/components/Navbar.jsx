import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Navbar = () => {
  const { user, logout } = useAuth();

  const handleLogout = () => {
    logout();
  };

  return (
    <nav className="flex justify-between items-center px-8 py-4 bg-white shadow-md sticky top-0 z-50">
      <div>
        <Link to="/" className="text-2xl font-bold text-yellow-500">
          RecipeFinder
        </Link>
      </div>

      <ul className="flex items-center gap-6">
        {user ? (
          <>
            <li className="text-gray-600 font-medium">Welcome, {user.name}!</li>
            <li>
              <Link
                to="/favorites"
                className="text-gray-800 font-medium hover:text-yellow-500 transition"
              >
                My Favorites
              </Link>
            </li>
            <li>
              <button
                onClick={handleLogout}
                className="border border-yellow-500 text-yellow-500 px-4 py-1.5 rounded-lg font-medium hover:bg-yellow-500 hover:text-white transition"
              >
                Logout
              </button>
            </li>
          </>
        ) : (
          <>
            <li>
              <Link
                to="/login"
                className="text-gray-800 font-medium hover:text-yellow-500 transition"
              >
                Login
              </Link>
            </li>

            <li>
              <Link
                to="/register"
                className="text-gray-800 font-medium hover:text-yellow-500 transition"
              >
                Register
              </Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
