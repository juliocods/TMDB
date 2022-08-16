import React from "react";
import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";

const SearchMovies = () => {
  const [value, setValue] = useState("");
  const [movies, setMovies] = useState([]);

  const handleValue = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .get(
        `https://api.themoviedb.org/3/search/movie?api_key=425c2d87b8b9c812c4101db1f80fd9e5&language=en-US&query=${value}&page=1&include_adult=false`
      )
      .then((res) => setMovies(res.data.results));

    setValue("");
  };
  return (
    <>
      <div
        className="bg-info bg-opacity-75 py-4"
        style={{ paddingLeft: 400, paddingRight: 400 }}
      >
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <input
              type="text"
              placeholder="Search Movie"
              className="form-control text-center"
              onChange={handleValue}
              value={value}
            />
          </div>
        </form>
      </div>

      <div className="row container-fluid">
        {movies.map((data, i) => (
          <div className="col-2 p-3 pt-5" key={i}>
            <div className="card">
              <img
                src={`https://image.tmdb.org/t/p/original/${data.poster_path}`}
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <Link to={`/${data.id}`}>
                  <button className="btn btn-primary">See Details</button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default SearchMovies;