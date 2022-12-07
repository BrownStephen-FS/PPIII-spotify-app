const express = require("express");
const spotifyRouter = require("../router/spotifyRouter");

const app = express();

app.get("/", (req, res, next) => {
    res.status(200).json({message: "Service is working"});
});

app.use("/:spotify", spotifyRouter);

app.use((req,res,next) => {
    const err = new Error("HTTP Status: 404 Not Found");
    err.status = 404;
    next(err);
});

app.use((err,req,res,next) => {
    res.status(err.status || 500).json({
        error: {
            message: err.message,
            status: err.status,
            method: req.method,
        }
    })
});

mongoose.connect(process.env.mongoDBURL, (err) => {
    if (err) {
      console.error("Error: ", err.message);
    } else {
      console.log(messages.connectionSuccessful);
    }
  });

module.exports = app;