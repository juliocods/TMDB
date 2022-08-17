import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const Profile = () => {
  const userNoparse = localStorage.getItem("user");
  const user = JSON.parse(userNoparse);
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:3001/api/users/favorites/${user.id}`)
      .then((res) => setFavorites(res.data));
  }, []);

  console.log(favorites);

  return (
    <>
      <div className="row p-2 " style={{ backgroundColor: "#111d4a" }}>
        <div className="col-3 ">
          <img
            src={`https://happytravel.viajes/wp-content/uploads/2020/04/146-1468479_my-profile-icon-blank-profile-picture-circle-hd.png}`}
            className="card-img-top"
            alt="..."
          />
        </div>
        <div className="col-9">
          <h1 className="text-light">
            {(user.name + " " + user.lastname).toUpperCase()}
          </h1>
        </div>
      </div>

      <div className="row pt-2" style={{ backgroundColor: "#F8F7F9" }}>
        <div className="col-7">
          <div className="p-3 text-center">
            <h1 className="pt-5" style={{ color: "#2B2D42" }}>
              {" "}
              {favorites.length} Favorites{" "}
            </h1>
          </div>
        </div>
        <div className="col">
          <div
            id="carouselExampleControls"
            class="carousel slide"
            data-bs-ride="carousel"
          >
            <div class="carousel-inner">
              {favorites.map((data, i) => (
                <div class="carousel-item active">
                  <div class="card mb-3">
                    <div class="row g-0">
                      <div class="col-md-4">
                        <img
                          src={`https://image.tmdb.org/t/p/original/${data.img}`}
                          className="card-img-top"
                          alt="..."
                        />
                      </div>
                      <div class="col-md-8">
                        <div class="card-body">
                          <h3 class="card-title">{data.title}</h3>
                          <p class="card-text">
                          {data.description.slice(0, 200) + "..."}
                          </p>
            
                        </div>
                      </div>
                    </div>
                  </div>
                  {/*                   <div className="card text-center" style={{ width: "12rem" }}>
                    <img
                      src={`https://image.tmdb.org/t/p/original/${data.img}`}
                      className="card-img-top"
                      alt="..."
                    />
                    <div className="card-body">
                      <h5 className="card-title">{data.title}</h5>
                    </div>
                  </div> */}
                </div>
              ))}
            </div>
            <button
              class="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleControls"
              data-bs-slide="prev"
            >
              <span
                class="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button
              class="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleControls"
              data-bs-slide="next"
            >
              <span
                class="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
        </div>
        <div className="col-1"></div>
      </div>
    </>
  );
};

export default Profile;
