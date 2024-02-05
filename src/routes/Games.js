"use strict";

import express from "express";
import { default as pool } from "./db-connector.js";

const router = express.Router();

// games page
router.get("/", (req, res) => {
  let query1 = `SELECT * FROM games;`;

  pool.query(query1, function (error, rows, fields) {
    res.render("games", { games: rows });
  });
});

export default router;
