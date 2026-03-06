"use client";

import { useState } from "react";
import SearchBar from "../components/SearchBar";
import MovieCard from "../components/MovieCard";
import Loader from "../components/Loader";

export default function Home() {

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSearch = async (movieId) => {

    setLoading(true);
    setError("");
    setData(null);

    try {

      const res = await fetch(`/api/movie?id=${movieId}`);
      const result = await res.json();

      if (result.error) {
        setError(result.error);
      } else {
        setData(result);
      }

    } catch (err) {
      setError("Something went wrong. Please try again.");
    }

    setLoading(false);
  };

  return (
    <main className="min-h-screen p-6 bg-gradient-to-br from-gray-100 to-gray-200 flex flex-col items-center">

      <h1 className="text-4xl md:text-5xl font-bold text-yellow-900 mb-8 text-center">
        AI Movie Insight Builder
      </h1>

      <SearchBar onSearch={handleSearch} />

      {/* Loading */}
      {loading && <Loader />}

      {/* Error */}
      {error && (
        <div className="mt-6 text-red-600 font-semibold">
          {error}
        </div>
      )}

      {/* Movie Result */}
      {data && data.movie && (
        <div className="mt-10 w-full max-w-4xl">

          <MovieCard movie={data.movie} />

          <div className="bg-white mt-6 p-6 rounded-xl shadow">

  <h2 className="text-xl font-bold mb-3 text-gray-900">
    Audience Sentiment
  </h2>

  <p className="text-gray-700 mb-4 ">
    {data.summary}
  </p>

  {/* Sentiment Label */}
  <div className="flex items-center gap-3 mb-3">

    <span
      className={`text-lg font-semibold ${
        data.sentiment === "Positive"
          ? "text-green-600"
          : data.sentiment === "Negative"
          ? "text-red-600"
          : "text-yellow-600"
      }`}
    >
      {data.sentiment === "Positive" && "🟢"}
      {data.sentiment === "Negative" && "🔴"}
      {data.sentiment === "Mixed" && "🟡"}

      {data.sentiment}
    </span>

  </div>

  {/* Progress Bar */}
  <div className="w-full bg-gray-200 rounded-full h-4">

    <div
      className={`h-4 rounded-full transition-all duration-500 ${
        data.sentiment === "Positive"
          ? "bg-green-500 w-[85%]"
          : data.sentiment === "Negative"
          ? "bg-red-500 w-[35%]"
          : "bg-yellow-500 w-[60%]"
      }`}
    ></div>

  </div>

      </div>

        </div>
      )}

    </main>
  );
}