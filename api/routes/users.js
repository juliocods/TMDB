const express = require("express");
const router = express.Router();

const { Users } = require("../models");
const { generateToken } = require("../config/tokens");
const { validateAuth } = require("../middlewares/auth");

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

      const payload = {
        email: user.email,
        name: user.name,
        lastname: user.lastname,
      };

      const token = generateToken(payload);
      
      res.cookie("user", token);
      
      console.log(token);
      res.send(payload);
    });
  });
});

router.get("/secret", validateAuth, (req, res) => {
  res.send(req.user);
});

router.get("/me", validateAuth, (req, res) => {
  res.send(req.user);
});

router.post("/logout", (req, res) => {
  res.clearCookie("token");

  res.sendStatus(204);
});

module.exports = router;
