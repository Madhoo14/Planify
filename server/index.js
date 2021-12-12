"use strict";
const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const {
  createDailySpread,
  getDailySpread,
  postDailySpread,
} = require("./handlers");
const PORT = 8000;

const app = express();

app.use(express.json());

// const server = app.listen(PORT, function () {
//   console.info("🌍 Listening on port " + server.address().port);
// });

// express()

app.use(function (req, res, next) {
  res.header(
    "Access-Control-Allow-Methods",
    "OPTIONS, HEAD, GET, PUT, POST, DELETE"
  );
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.use(morgan("tiny"));
app.use(express.static("./server/assets"));
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: false }));
app.use("/", express.static(__dirname + "/"));
// the end points go here below this line

//api to create daily entries document in the daily-spread collection
app.post("/api/add-daily-entries", createDailySpread);

app.get("/dailyspread/:dateId", getDailySpread);

app.post("/api/postdailyspread", postDailySpread);

// end point for when a

app.listen(PORT, () => console.info(`Listening on port ${PORT}`));
