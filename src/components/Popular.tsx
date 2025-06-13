
import { ArrowBigRight, MoveRight } from "lucide-react";
import { MovieCard } from "./MovieCard";
import { useEffect, useState } from "react";
import Link from "next/link";
import { MovieDetails } from "@/types";
import { getPopularMovies } from "@/utils/getPopularMovies";
import { Button } from "./ui/button";


export const Popular = () => {
  const [popularMovies, setPopularMovies] = useState<MovieDetails[]>([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const popularMovies = await getPopularMovies();

      setPopularMovies(popularMovies.results);
    };

    fetchMovies();
  }, []);
  return (
     <div>
      <div className="flex flex-col gap-8">
        <div className="flex justify-between">
          <h1 className="text-[24px] font-black">Popular</h1>
          <Link href={`/popular`}>
            <Button variant="ghost">
              see more
              <MoveRight />
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
          {popularMovies?.map((movie) => (
            <MovieCard key={movie.id} id={movie?.id} movie={movie} />
          ))}
        </div>
      </div>
    </div>
  );
};
