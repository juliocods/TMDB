const Users = require("./Users");
const Movies = require("./Movies");

Users.belongsToMany(Movies, { through: "favorites_movies" });
Movies.belongsToMany(Users, { through: "favorites_movies" });

module.exports = { Users, Movies };
