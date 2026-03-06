"use client";

import { useState } from "react";

export default function SearchBar({ onSearch }) {
  const [movieId, setMovieId] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!movieId.trim()) {
      alert("Please enter an IMDb Movie ID");
      return;
    }

    if (onSearch) onSearch(movieId);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex justify-center gap-4"
    >
      <input
        type="text"
        placeholder="Enter IMDb ID (e.g., tt0133093)"
        value={movieId}
        onChange={(e) => setMovieId(e.target.value)}
        className="border border-gray-300 bg-white text-black p-3 rounded-lg w-80 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      <button
        type="submit"
        className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
      >
        Search
      </button>
    </form>
  );
}