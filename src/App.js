import axios from "axios";
import { useEffect, useState } from "react";
import Sidebar from "./components/Sidebar";
import Head from "./components/Head";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import Register from "./components/Register";
import { Route, Routes } from "react-router";
import SearchMovies from "./components/SearchMovies";

const App = () => {
  const [genre, setGenre] = useState([]);
  const [populars, setPopulars] = useState([]);
  useEffect(() => {

    //GENEROS
    axios
      .get(
        `https://api.themoviedb.org/3/genre/movie/list?api_key=425c2d87b8b9c812c4101db1f80fd9e5&language=en-US`
      )
      .then((res) => setGenre(res.data.genres));

    //POPULARES
    axios
      .get(
        `https://api.themoviedb.org/3/movie/popular?api_key=425c2d87b8b9c812c4101db1f80fd9e5&language=en-US&page=1`
      )
      .then((res) => setPopulars(res.data.results));
  }, []);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
      <Sidebar genres={genre} />
      <SearchMovies/>
      <Head populars={populars} />

    </>
  );
};

export default App;
