const S = require("sequelize");
const bcrypt = require("bcrypt");

const db = require("../config/db");

class Movie extends S.Model {}

Movie.init(
  {
  },
  {
    sequelize: db,
    modelName: "Movie",
  }
);

module.exports = Movie;
