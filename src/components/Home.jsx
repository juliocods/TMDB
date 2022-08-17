import Sidebar from "./Sidebar";
import SearchMovies from "./SearchMovies";
import React from "react";
import Populars from "./Populars";

const Home = ({genre, populars}) => {
  return (
    <>
      <Sidebar genres={genre} />
      <SearchMovies />
      <Populars populars={populars} />
    </>
  );
};

export default Home;
