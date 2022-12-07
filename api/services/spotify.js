const axios = require("axios");
require("dotenv").config();

const spotifyService = async () => {
  return await axios.get(`${process.env.spotifyAPI}`);
};

module.exports = spotifyService;