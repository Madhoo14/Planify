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
// to create the collection for daily spread
const createDailySpread = async (req, res) => {
  const client = new MongoClient(MONGO_URI, options);

  try {
    await client.connect();
    const db = client.db("planify");

    const result = await db.collection("daily-spread").insertOne({
      _id: "01Jan2021",
      todo: [
        { id: 4288274, text: "walk the cat" },
        { id: 186620, text: "empire company limited" },
      ],
      journal:
        "Beginning of a new year and a new me. I want to try to be better than myself from the day before. ",
      quote: {
        text: "I believe that we are solely responsible for our choices, and we have to accept the consequences of every deed, word, and thought throughout our lifetime.",
        author: "Elisabeth Kubler-Ross",
      },
      overallMood: "satisfied",
      gratitude: "",
      weather: { city: "", temp: "" },
    });
    res.status(200).json({ status: 200, data: result });
  } catch (err) {
    console.log(err.message);
    res.status(500).json({ status: 500, message: err.message });
  } finally {
    client.close();
  }
};

const getDailySpread = async (req, res) => {
  const client = new MongoClient(MONGO_URI, options);
  const db = client.db("planify");
  const _id = req.params.dateId;
  try {
    await client.connect();
    const dailySpreadByDateId = await db
      .collection("daily-spread")
      .findOne({ _id });
    if (dailySpreadByDateId) {
      res.status(200).json({ status: 200, data: dailySpreadByDateId });
      console.log(res.data);
    } else {
      const createNewDailySpread = await db
        .collection("daily-spread")
        .insertOne({
          _id: _id,
          todo: [],
          journal: " ",
          quote: {
            text: "",
            author: "",
          },
          overallMood: "satisfied",
          gratitude: "",
          weather: { city: "", temp: "" },
        });
      res.status(200).json({ status: 200, data: createNewDailySpread });
      console.log(res.data);
    }
  } catch (err) {
    console.log(err.message);
  } finally {
    client.close();
  }
};
module.exports = { createDailySpread, getDailySpread };
