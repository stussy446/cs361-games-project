"use strict";

import "dotenv/config";
import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import pool from "./src/routes/db-connector.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// express configuration
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

// sets up ejs
app.set("views", path.join(__dirname, "/src/views"));
app.set("view engine", "ejs");

// *
//  ROUTES
// *

// home page
app.get("/", (req, res) => {
  let query1 = `SELECT * FROM games ORDER BY idgames DESC LIMIT 3;`;

  pool.query(query1, function (error, rows, fields) {
    res.render("index", {
      title: "Root of project",
      games: rows,
    });
  });
});

// games page
app.get("/games", (req, res) => {
  let query1 = `SELECT * FROM games;`;

  pool.query(query1, function (error, rows, fields) {
    res.render("games", { games: rows });
  });
});

// sets app to listen to localhost 3000
app.listen(process.env.PORT, () =>
  console.log(`app listening on port ${process.env.PORT}`)
);
