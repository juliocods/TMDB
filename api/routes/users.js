const express = require("express");
const router = express.Router();
const { Users } = require("../models");

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

router.post("/", (req, res) => {
  Users.create(req.body).then((users) => {
    return res.send(users);
  });
});

module.exports = router;
