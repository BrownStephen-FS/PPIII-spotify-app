require("dotenv").config();
const querystring = require("querystring");
const axios = require("axios");
const randomstring = require("randomstring");
const SpotifyToken  = require("../models/spotifytoken");
const qs = require("qs");

const basicAuth =
  "Basic " +
  new Buffer.from(process.env.SPOTIFY_CLIENT_ID + ":" + process.env.SPOTIFY_CLIENT_SECRET).toString(
    "base64"
  );
const redirect_uri = "http://localhost:3001/spotify/v1/auth";
const now = new Date().getTime();

const requestToken = (code, grant_type, token) => {
  let data =
    grant_type === "refresh_token"
      ? qs.stringify({ refresh_token: code, grant_type })
      : qs.stringify({ code, grant_type, redirect_uri });
  return axios({
    method: "POST",
    url: "https://accounts.spotify.com/api/token",
    data,
    headers: {
      Authorization: basicAuth,
      "Content-Type": "application/x-www-form-urlencoded",
    },
  })
    .then(({ data }) => {
      data.expires_in = new Date().getTime() + data.expires_in;
      token.update(data);
      return token.save();
    })
    .catch((error) => {
      return false;
    });
};

const jwt = async (req, res, next) => {
  req.token = await SpotifyToken.findOne({ where: {} });
  if (!req.token && !req.query.code) {
    return next();
  }
  if (!req.token && req.query.code) {
    req.token = await requestToken(
      req.query.code,
      "authorization_code",
      SpotifyToken.build({})
    );
  } else if (now > req.token.expires_in) {
    req.token = await requestToken(
      req.token.refresh_token,
      "refresh_token",
      req.token
    );
  }
  if (!req.token) {
    res.json({ error: "JWT could not be requested..." });
  }
  return next();
};

const auth = async (req, res) => {
  if (req.token) {
    res.redirect("http://localhost:3000");
  } else {
    res.redirect("http://localhost:3000/login");
  }
};

const login = async (req, res) => {
  const state = randomstring.generate(16);
  res.redirect(
    "https://accounts.spotify.com/authorize?" +
      querystring.stringify({
        response_type: "code",
        client_id: process.env.SPOTIFY_CLIENT_ID,
        redirect_uri,
        state,
      })
  );
};

const search = async (req, res) => {
  await axios({
    method: "GET",
    url: "https://api.spotify.com/v1/search",
    params: {
      type: "album,artist,track",
      q: req.query.q,
      limit: 3,
    },
    headers: {
      Authorization: "Bearer " + req.token.access_token,
      "Content-Type": "application/json",
    },
  })
    .then(({ data }) => {
      res.json(data);
    })
    .catch((error) => {
      res.json(error);
    });
};

module.exports = {
  search,
  auth,
  login,
  jwt,
};
