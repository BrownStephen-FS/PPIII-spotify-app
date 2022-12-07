const express = require("express");
const spotifyRouter = express.Router();
const spotify = require("../services/spotify");

spotifyRouter.get("/", (req, res, next) => {
  spotify()
    .then((result) => {
      res.status(200).json(result.data);
    })
    .catch((err) => {
      res.status(500).json({
        error: {
          message: err.message,
        },
      });
    });
});

spotifyRouter.get("/:login", (req, res, next) => {
  spotify()
    .then((result) => {
      res.status(200).json(result.data);
    })
    .catch((err) => {
      res.status(500).json({
        error: {
          message: err.message,
        },
      });
    });
});

module.exports = spotifyRouter;