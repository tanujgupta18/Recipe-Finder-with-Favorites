import React, { useState } from "react";

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (query.trim()) {
      onSearch(query);
      setQuery("");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full max-w-2xl mx-auto"
    >
      <input
        type="text"
        placeholder="Search for a recipe..."
        value={query}
        onChange={handleInputChange}
        className="w-full px-4 py-3 border border-gray-300 rounded-xl outline-none focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 text-gray-700 shadow-sm"
      />

      <button
        type="submit"
        className="px-6 py-3 bg-yellow-500 text-white font-semibold rounded-xl shadow-md hover:bg-yellow-600 transition-all duration-200"
      >
        Submit
      </button>
    </form>
  );
};

export default SearchBar;
