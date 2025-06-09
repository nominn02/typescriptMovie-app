'user client'

import { ArrowBigRight } from "lucide-react";
import { MovieCard } from "./MovieCard";

import { useEffect, useState } from "react";
import Link from "next/link";
import { getUpcomingMovies } from "@/lib/api/get-upcoming-movies";
import { Movie } from "@/types";

export const Upcoming = () => {
  const [upcomingMovies, setUpcomingMovies] = useState<Movie[]>([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const upcomingMovies = await getUpcomingMovies();

      setUpcomingMovies(upcomingMovies.results);
    };

    fetchMovies();
  }, []);

  return (
    <div className="flex flex-col gap-8 px-5 md:px-0">
     <div className="flex justify-between w-[1277px] h-[36px]">
        <h1 className="text-2xl font-semibold pl-1  ">Upcoming</h1>
        <Link href={`/category/Upcoming`}>
          <button className="flex py-2 px-4 gap-1 text-sm font-medium">
          See more
          <ArrowBigRight className="h-[16px] w-[16px]"/>
        </button>
        </Link>
      </div>
      <div className="grid gap-2 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {upcomingMovies.slice(0, 10)?.map((movie) => (
          <MovieCard key={movie.id} id={movie?.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

