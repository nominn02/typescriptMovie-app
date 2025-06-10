import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

import { MovieCarouselItem } from "./MovieCarouselItem";
import { useEffect, useState } from "react";
import { getNowPlayingMovies } from "@/utils/getPlayingNow";

export const MovieCarousel = () => {
  const [nowPlayingMovie, setNowPlayingMovie] = useState([]);

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
        {nowPlayingMovie?.map((movie, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <MovieCarouselItem movie={movie} id={movie.id} />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="invisible lg:visible absolute left-10 to-50%" />
      <CarouselNext className="invisible lg:visible absolute right-10 to-50%" />
    </Carousel>
  );
};
