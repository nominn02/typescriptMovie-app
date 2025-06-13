import { ArrowBigRight, MoveRight } from "lucide-react";
import { MovieCard } from "./MovieCard";
import { useEffect, useState } from "react";
import Link from "next/link";
import { MovieDetails } from "@/types";
import { getTopRatedMovies } from "@/utils/getTopRatedMovies";
import { Button } from "./ui/button";

export const TopRated = () => {
  const [topRatedMovies, setTopRatedMovies] = useState<MovieDetails[]>([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const topRatedMovies = await getTopRatedMovies();

      setTopRatedMovies(topRatedMovies.results);
    };

    fetchMovies();
    
    
  }, []);

  return (
    <div className="flex flex-col gap-8">
      <div className="flex justify-between">
        <h1 className="text-[24px] font-black">Top Rated</h1>
        <Link href={`/topRated`}>
          <Button variant="ghost">
            see more
            <MoveRight />
          </Button>
        </Link>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
        {topRatedMovies?.map((movie) => (
          <MovieCard key={movie?.id} id={movie?.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};
