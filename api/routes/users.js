const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const { SECRET } = require("../config/envs");
const { generateToken, validateToken } = require("../config/tokens");
const { validateAuth } = require("../middlewares/auth");
const Users = require("../models/Users");
const Movies = require("../models/Movies");

router.get("/", (req, res, next) => {
  Users.findAll()
    .then((users) => {
      return res.send(users);
    })
    .catch(next);
});

router.get("/:id", (req, res, next) => {
  const { id } = req.params;
  Users.findAll({ where: { id: id } })
    .then((pages) => {
      res.send(pages);
    })
    .catch(next);
});

router.post("/register", (req, res) => {
  Users.create(req.body).then((user) => {
    res.status(201).send(user);
  });
});

router.post("/login", (req, res) => {
  const { email, password } = req.body;

  Users.findOne({ where: { email } }).then((user) => {
    if (!user) return res.sendStatus(401);
    user.validatePassword(password).then((isValid) => {
      if (!isValid) return res.sendStatus(401);

      const token = generateToken(user.id);

      const payload = {
        id: user.id,
        email: user.email,
        name: user.name,
        lastname: user.lastname,
        token: token,
      };

      res.send(payload);
    });
  });
});

router.get("/secret", validateAuth, (req, res) => {
  res.send(req.user);
});

router.post("/me", validateAuth, async (req, res) => {
  try {
    const verifyToken = validateToken(req.body.token);
    const user = await Users.findByPk(verifyToken.user);

    if (user) return res.send({ name: user.name });
  } catch (error) {
    console.log(error);
  }
});

router.post("/logout", (req, res) => {
  res.clearCookie("token");

  res.sendStatus(204);
});

router.post("/favorites", (req, res) => {
  const { userId, movieId } = req.body;
  console.log("USER ID====== >", userId);
  console.log("MOVIE ID =>>>>>>", movieId);

/*   Users.findByPk(userId)
    .then((user) => user.addFavorite(flightId))
    .then(() => res.sendStatus(200))
    .catch(() => res.status(500).send("Already added")); */
});

module.exports = router;
