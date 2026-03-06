"use client";

import { motion } from "framer-motion";

export default function MovieCard({ movie }) {

  // avoid crash if movie is undefined
  if (!movie) return null;

  return (
    <motion.div 
      whileHover={{ scale: 1.02 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="max-w-3xl mx-auto bg-white shadow-lg rounded-xl p-6 flex flex-col md:flex-row gap-6"
    >

      {/* Movie Poster */}
      <img
        src={movie.Poster && movie.Poster !== "N/A" ? movie.Poster : "/no-image.jpeg"}
        alt={movie.Title || "Movie Poster"}
        className="w-40 mx-auto md:mx-0 rounded-lg object-cover"
      />

      {/* Movie Info */}
      <div className="text-center md:text-left">

        <h2 className="text-2xl font-bold text-gray-900">
          {movie.Title || "Unknown Title"}
        </h2>

        <p className="text-gray-600 mt-1">
          Year: {movie.Year || "N/A"}
        </p>

        <p className="text-gray-600">
          Rating: ⭐ {movie.imdbRating || "N/A"}
        </p>

        <p className="mt-4 text-gray-700">
          {movie.Plot || "No plot available."}
        </p>

        <p className="mt-4 text-blue-500">
          <strong>Cast:</strong> {movie.Actors || "Not available"}
        </p>

      </div>

    </motion.div>
  );
}