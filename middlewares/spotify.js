const express = require("express");
const spotify = express.Router();
const spotifyCtrl = require("../controllers/spotify");

spotify.get("/login", spotifyCtrl.login);
spotify.get("/auth", spotifyCtrl.jwt, spotifyCtrl.auth);
spotify.get("/search", spotifyCtrl.jwt, spotifyCtrl.search);

module.exports = spotify;
