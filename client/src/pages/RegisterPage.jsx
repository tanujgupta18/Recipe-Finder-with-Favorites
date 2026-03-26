import React, { useState } from "react";
import { register } from "../services/authService";

const RegisterPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [error, setError] = useState(null);

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
      const data = await register(formData);
      if (data.token) {
        localStorage.setItem("token", data.token);
        console.log("Token saved to localStorage after registration");
      }
    } catch (error) {
      console.error(error);
      setError(
        error.message || "An unexpected error occurred. Please try again.",
      );
    }
  };

  return (
    <div className="flex justify-center items-center min-h-[80vh] p-8 bg-gray-50">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md p-8 bg-white rounded-xl shadow-lg text-center"
      >
        <h2 className="text-2xl font-bold mb-6 text-gray-800">
          Create an account
        </h2>

        {error && (
          <p className="bg-red-100 text-red-700 px-4 py-2 mb-4 border border-red-300 rounded-lg text-center">
            {error}
          </p>
        )}

        <div className="mb-4 text-left">
          <label className="block mb-1 font-semibold text-gray-600">Name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500"
          />
        </div>
        <div className="mb-4 text-left">
          <label className="block mb-1 font-semibold text-gray-600">
            Email
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
            placeholder="Create a password"
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
          Register
        </button>
      </form>
    </div>
  );
};

export default RegisterPage;
