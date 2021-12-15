"use strict";
const { MongoClient } = require("mongodb");
require("dotenv").config();
const { MONGO_URI } = process.env;
const { API_KEY } = process.env;
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
      weather: { city: "", Min: "", Max: "", description: "" },
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
  const emptySpread = {
    _id: _id,
    todo: [],
    journal: " ",
    quote: {
      text: "",
      author: "",
    },
    overallMood: "",
    gratitude: "",
    weather: { city: "", Min: "", Max: "", description: "" },
  };
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
        .insertOne(emptySpread);
      res.status(200).json({ status: 200, data: emptySpread });
      console.log(res.data);
    }
  } catch (err) {
    console.log(err.message);
  } finally {
    client.close();
  }
};
const postDailySpread = async (req, res) => {
  const client = new MongoClient(MONGO_URI, options);
  const db = client.db("planify");
  const _id = req.body._id;

  try {
    await client.connect();

    // if (dailySpreadByDateId) {
    //   res.status(200).json({ status: 200, data: dailySpreadByDateId });
    //   console.log(res.data);
    // } else {
    const postNewDailySpread = await db.collection("daily-spread").replaceOne(
      {
        _id: _id,
      },
      req.body
    );
    res.status(200).json({ status: 200, data: postNewDailySpread });
    console.log(res.data);
  } catch (err) {
    console.log(err.message);
  } finally {
    client.close();
  }
};

const postAnnualGoals = async (req, res) => {
  const client = new MongoClient(MONGO_URI, options);
  const db = client.db("planify");
  // const _id = req.body._id;
  // const annualGoals = req.body;
  console.log(req.body);
  try {
    await client.connect();
    const createAnnualGoals = await db
      .collection("annual-goals")
      .insertOne(req.body);
    res.status(200).json({ status: 200, data: createAnnualGoals });
    console.log(res.data);
  } catch (err) {
    res.status(500).json({ status: 500, error: err.message });
    console.log(err.message);
  } finally {
    client.close();
  }
};

const getAnnualGoals = async (req, res) => {
  const client = new MongoClient(MONGO_URI, options);
  const db = client.db("planify");

  const _id = req.params.year;
  console.log(_id);
  const emptyGoals = {
    _id: _id,
    goals: [],
    notes: "",
  };
  try {
    await client.connect();
    const annualGoals = await db
      .collection("annual-goals")
      .findOne({ _id: _id });

    if (annualGoals) {
      res.status(200).json({ status: 200, data: annualGoals });
    } else {
      const newEmptyGoals = await db
        .collection("annual-goals")
        .insertOne(emptyGoals);
      res.status(200).json({ status: 200, data: emptyGoals });
    }
  } catch (err) {
    res.status(500).json({ status: 500, error: err.message });
  } finally {
    client.close();
  }
};

const postMonthlyGoals = async (req, res) => {
  const client = new MongoClient(MONGO_URI, options);
  const db = client.db("planify");
  // const _id = req.body._id;

  console.log(req.body);
  try {
    await client.connect();
    const createMonthlyGoals = await db
      .collection("monthly-goals")
      .insertOne(req.body);
    res.status(200).json({ status: 200, data: createMonthlyGoals });
    console.log(res.data);
  } catch (err) {
    res.status(500).json({ status: 500, error: err.message });
    console.log(err.message);
  } finally {
    client.close();
  }
};
const getMonthlyGoals = async (req, res) => {
  const client = new MongoClient(MONGO_URI, options);
  const db = client.db("planify");

  const _id = req.params.month;
  console.log(_id);
  const emptyGoals = {
    _id: _id,
    goals: [],
    notes: "",
  };
  try {
    await client.connect();
    const monthlyGoals = await db
      .collection("monthly-goals")
      .findOne({ _id: _id });

    if (monthlyGoals) {
      res.status(200).json({ status: 200, data: monthlyGoals });
    } else {
      const newEmptyGoals = await db
        .collection("monthly-goals")
        .insertOne(emptyGoals);
      res.status(200).json({ status: 200, data: emptyGoals });
    }
  } catch (err) {
    res.status(500).json({ status: 500, error: err.message });
  } finally {
    client.close();
  }
};

module.exports = {
  createDailySpread,
  getDailySpread,
  postDailySpread,
  postAnnualGoals,
  getAnnualGoals,
  getMonthlyGoals,
  postMonthlyGoals,
};
