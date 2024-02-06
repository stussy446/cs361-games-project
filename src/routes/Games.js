"use strict";

import express from "express";
import { default as pool } from "./db-connector.js";
import Game from "../models/Game.js";

const router = express.Router();

// games page
router.get("/", (req, res) => {
  let query1 = `SELECT * FROM games;`;

  pool.query(query1, function (error, rows, fields) {
    res.render("games", { games: rows });
  });
});

router.get("/add", (req, res) => {
  res.render("addGames");
});

router.post("/", async (req, res) => {
  try {
    const name = req.body.name;
    console.log(`received data from the frontend -- ${name}`);

    let newGame = new Game(name);

    newGame = await newGame.save();

    res.json({ message: "Data succesfully Received" });
  } catch (error) {
    console.error("Error inserting data into db", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

export default router;
