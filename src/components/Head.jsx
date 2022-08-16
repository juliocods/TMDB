import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";

const Head = ({ populars }) => {
  const userNoparse = localStorage.getItem("user");
  const user = JSON.parse(userNoparse);

  const addFavorites = (id) => {
    axios.post("http://localhost:3001/api/users/favorites", {
      userId: user.id,
      movieId: id,
    });
  };

  return (
    <>
      <div className="container text-center">
        <h1 className="pt-5">Populars</h1>
        <div className="row">
          {populars.map((data, i) => (
            <div className="col-3 mt-5" key={i}>
              <div className="card" style={{ width: "18rem" }}>
                <img
                  src={`https://image.tmdb.org/t/p/original/${data.poster_path}`}
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">{data.original_title}</h5>
                  <p className="card-text">
                    {data.overview.slice(0, 80) + "..."}
                  </p>
                  <button
                    className="btn btn-primary"
                    onClick={() => addFavorites(data.id)}
                  >
                    Add To Favorites
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Head;
