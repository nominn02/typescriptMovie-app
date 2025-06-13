import { Star } from "lucide-react";
import Link from "next/link";
import { MovieDetails } from "@/types";

export const MovieCarouselItem = ({ movie }: { movie: MovieDetails }) => {
  const imgUrl = movie.backdrop_path
    ? `${process.env.NEXT_PUBLIC_TMDB_IMAGE_SERVICE_URL}${movie.backdrop_path}`
    : "/fallback.jpg";

  return (
    <div className="relative">
      <Link href={`/details/${movie.id}`}>
        <img
          src={imgUrl}
          alt={movie.title}
          className="w-screen min-h-[246px] md:max-h-[600px] md:relative object-cover lg:object-top"
        />
        <div className="flex flex-col gap-[16px] m-[20px] md:absolute top-[178px] left-[120px] md:text-[white] md:w-[404px]">
          <div className="flex w-[335px] h-[52px] justify-between items-center">
            <div>
              <p className="font-normal text-[14px]">Now Playing:</p>
              <p className="font-semibold text-[24px]">{movie.title}</p>
            </div>
            <div className="flex gap-[4px]">
              <Star className="text-yellow-300 fill-amber-300 w-[16px] h-[16px]" />
              <div className="flex">
                <p className="text-[18px] font-semibold text-[black] md:text-[white]">
                  {movie.vote_average.toFixed(1)}
                </p>
                <p className="text-[18px] font-medium text-grey-400">/10</p>
              </div>
            </div>
          </div>
          <p className="text-[12px]">
            {movie.overview.length > 200
              ? movie.overview.slice(0, 200) + "..."
              : movie.overview}
          </p>
          <button className="flex gap-[2px] px-[16px] py-[8px] bg-black text-[white] w-fit rounded-[6px] md:bg-white md:text-[black]">
            {/* Add trailer logic here if needed */}
          </button>
        </div>
      </Link>
    </div>
  );
};
