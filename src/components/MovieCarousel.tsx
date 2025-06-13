import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

import { useEffect, useState } from "react";
import { getNowPlayingMovies } from "@/utils/getPlayingNow";
import { MovieDetails } from "@/types";
import { MovieCarouselItem } from "./MovieCarouselItem";


export const MovieCarousel = () => {
const [nowPlayingMovie, setNowPlayingMovie] = useState<MovieDetails[]>([]);


  useEffect(() => {
    const fetchMovies = async () => {
      const movies = await getNowPlayingMovies();

      setNowPlayingMovie(movies);
    };

    fetchMovies();
  }, []);

  return (
    <Carousel
      className="relative"
      plugins={[
        Autoplay({
          delay: 2000,
        }),
      ]}>
      <CarouselContent>
        {nowPlayingMovie?.map((movie) => (
          <CarouselItem key={movie.id}>
            <div className="p-1">
              <MovieCarouselItem movie={movie} id={movie.id}/>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="invisible lg:visible absolute left-10 top-1/2 -translate-y-1/2" />
<CarouselNext className="invisible lg:visible absolute right-10 top-1/2 -translate-y-1/2" />

    </Carousel>
  );
};
