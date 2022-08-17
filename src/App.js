import axios from "axios";
import { useEffect, useState } from "react";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import Register from "./components/Register";
import { Route, Routes } from "react-router";
import Home from "./components/Home";
import Favorites from "./components/Favorites";
import MovieDetails from "./components/MovieDetails";
import Profile from "./components/Profile";

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
        <Route path="/" element={<Home genre={genre} populars={populars} />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/register" element={<Register />} />
        <Route path="/movieDetails/:movieId"  element={<MovieDetails />} />
      </Routes>
    </>
  );
};

export default App;
