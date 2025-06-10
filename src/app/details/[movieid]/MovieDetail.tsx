"use client";

import { useEffect, useState } from "react";
import { getMovieById } from "@/utils/getMovieById";
import { MovieDetails } from "@/types";
import { MovieTrailer } from "@/components/MovieTrailer";

export const MovieDetail = ({ movieId }: { movieId: string }) => {
  const [movie, setMovie] = useState<MovieDetails>();

  useEffect(() => {
    const getMovie = async () => {
      if (!movieId) return;
      try {
        const data = await getMovieById(movieId);
        setMovie(data);
      } catch (error) {
        console.error("Failed to fetch movie:", error);
      }
    };

    getMovie();
  }, [movieId]);
  console.log(movie);
  return (
    <div>
      <MovieTrailer movieId={movieId} />
    </div>
  );
};