import Sidebar from "./Sidebar";
import SearchMovies from "./SearchMovies";
import Head from "./Head";

import React from "react";

const Home = ({genre, populars}) => {
  return (
    <>
      <Sidebar genres={genre} />
      <SearchMovies />
      <Head populars={populars} />
    </>
  );
};

export default Home;
