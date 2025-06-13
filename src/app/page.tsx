'use client'

import { MovieCarousel } from "@/components/MovieCarousel";
import { Popular } from "@/components/Popular";
import { TopRated } from "@/components/TopRated";
import { Upcoming } from "@/components/Upcoming";


const Home = () => {
  return (
    <div className="w-full lg:max-w-[1278px] mx-auto container" >
      <MovieCarousel/>
      <Upcoming/>
      <Popular/>
      <TopRated/>
    </div>
  );
};

export default Home;
