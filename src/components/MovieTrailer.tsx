import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { MovieTrailerProps } from "@/types";
import { getMovieTrailer } from "@/utils/getMovieTrailer";
import { useEffect, useState } from "react";
import YouTube from "react-youtube";

export const MovieTrailer = ({ movieId }: { movieId: string }) => {
  const [trailer, setTrailer] = useState<MovieTrailerProps[]>([]);

  useEffect(() => {
    const getMovieTrailerById = async () => {
      if (!movieId) return;
      try {
        const data = await getMovieTrailer(movieId);
        console.log(data);
        setTrailer(data.results);
      } catch (error) {
        console.error("Failed to fetch movie trailer:", error);
      }
    };
    getMovieTrailerById();
  }, [movieId]);

  const movieTrailer = trailer.find(
    (video) => video.name === "Official Trailer"
  );

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Watch Trailer</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-fit">
        <YouTube
          videoId={movieTrailer?.key}
          opts={{
            height: "561",
            width: "997",
            playerVars: {
              autoplay: 1,
            },
          }}
        />
      </DialogContent>
    </Dialog>
  );
};