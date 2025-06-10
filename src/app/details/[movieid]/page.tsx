import { MovieDetail } from "./MovieDetail";

const Page = async ({ params }: { params: Promise<{ movieId: string }> }) => {
  const { movieId } = await params;
  console.log(movieId);

  return (
    <div>
      <MovieDetail movieId={movieId} />
    </div>
  );
};
export default Page;