import { MovieDetails } from "@/types";
import { Star } from "lucide-react";
import Link from "next/link";
import { Trailer } from "./MovieTrailer";

type MovieCarouselItemProps ={
  movie: MovieDetails
  id: number
}

export const MovieCarouselItem = ({ movie}: MovieCarouselItemProps) => {
  const imgUrl = `${process.env.NEXT_PUBLIC_TMDB_IMAGE_SERVICE_URL}${movie.backdrop_path}`;
  // console.log(imgUrl);
  return (
    <div className="relative">
      <Link href={`/details/${movie.id}`}>
        <img
          className="w-screen min-h-[246px]  md:max-h-[600px]"
          src={imgUrl}
        />
      </Link>
      <div className="flex  flex-col md:absolute gap-[16px] m-[20px] top-[178px] left-[120px] md:text-[white] md:w-[404px]">
        <div className="flex w-[335px] h-[52px] justify-between items-center">
          <div>
            <p className="text-[14px]">Now Playing:</p>
            <p className="text-[24px] font-normal">{movie.title}</p>
          </div>
          <div className="flex gap-[4px] p-[8px]">
            <Star className="text-yellow-300 fill-amber-300" />
            <p className="text-[18px] md:text-[14px] ">
              {movie.vote_average.toFixed(1)}
            </p>
          </div>
        </div>

        <div className="flex w-[350px]">
          <p className="text-[14px]">{movie.overview}</p>
        </div>
        <Trailer movieId={String(movie.id)} />
      </div>
    </div>
  );
};
