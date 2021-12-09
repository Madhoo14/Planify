"use strict";
const { MongoClient } = require("mongodb");
require("dotenv").config();
const { MONGO_URI } = process.env;

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

// not sure if I will need this for the project but
//just in case
// const { v4: uuidv4 } = require("uuid");
// handlers go below this line
