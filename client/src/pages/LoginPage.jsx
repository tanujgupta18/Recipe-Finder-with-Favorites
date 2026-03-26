import React, { useContext, useState } from "react";
import { login as loginService } from "../services/authService";
import { useNavigate } from "react-router-dom";
import AuthContext from "../context/AuthContext";

const LoginPage = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState(null);

  const navigate = useNavigate();
  const { login } = useContext(AuthContext);

  const handleChange = (e) => {
    if (error) setError(null);
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    try {
      const data = await loginService(formData);
      if (data.token) {
        localStorage.setItem("token", data.token);
        login(data);
        navigate("/");
      }
    } catch (err) {
      setError(
        err.message || "An unexpected error occurred. Please try again.",
      );
    }
  };

  return (
    <div className="flex justify-center items-center min-h-[80vh] p-8 bg-gray-50">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md p-8 bg-white rounded-xl shadow-lg text-center"
      >
        <h2 className="text-2xl font-bold mb-6 text-gray-800">Welcome Back!</h2>

        {error && (
          <p className="bg-red-100 text-red-700 px-4 py-2 mb-4 border border-red-300 rounded-lg text-center">
            {error}
          </p>
        )}

        <div className="mb-4 text-left">
          <label className="block mb-1 font-semibold text-gray-600">
            Email Address
          </label>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500"
          />
        </div>

        <div className="mb-6 text-left">
          <label className="block mb-1 font-semibold text-gray-600">
            Password
          </label>
          <input
            type="password"
            name="password"
            placeholder="Enter your password"
            value={formData.password}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500"
          />
        </div>

        <button
          type="submit"
          className="w-full py-3 bg-yellow-500 text-white font-semibold rounded-lg hover:bg-yellow-600 transition"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
