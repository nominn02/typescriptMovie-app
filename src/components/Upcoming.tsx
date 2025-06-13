'use client'

import { ArrowBigRight, MoveRight } from "lucide-react";
import { MovieCard } from "./MovieCard";
import { useEffect, useState } from "react";
import Link from "next/link";
import { MovieDetails } from "@/types";
import { getUpcomingMovies } from "@/utils/getUpcomingMovies";
import { Button } from "./ui/button";

export const Upcoming = () => {
  const [upcomingMovies, setUpcomingMovies] = useState<MovieDetails[]>([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const upcomingMovies = await getUpcomingMovies();

      setUpcomingMovies(upcomingMovies.results);
    };

    fetchMovies();
  }, []);

  return (
    <div className="flex flex-col gap-8">
      <div className="flex justify-between">
        <h1 className="text-[24px] font-black">Upcoming</h1>
        <Link href={`/upcoming`}>
          <Button variant="ghost">
            see more
            <MoveRight />
          </Button>
        </Link>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
        {upcomingMovies?.map((movie) => (
          <MovieCard key={movie.id} id={movie?.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

