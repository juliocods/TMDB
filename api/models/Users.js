const S = require("sequelize");
const db = require("../config/db");

class User extends S.Model {}

User.init(
  {
    name: {
      type: S.STRING,
      allowNull: false,
    },
    email: {
      type: S.STRING,
      allowNull: false,
      validate: {
        isEmail: true,
      },
    },
    password: {
      type: S.STRING,
      allowNull: false,
    },
  },
  { sequelize: db, modelName: "user" }
);


module.exports = User;
