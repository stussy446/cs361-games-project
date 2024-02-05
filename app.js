"use strict";

import "dotenv/config";
import express from "express";
import path from "path";
import { fileURLToPath } from "url";

// Database
const db = require("./database/db-connector");

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

// sets up ejs
app.set("views", path.join(__dirname, "/src/views"));
app.set("view engine", "ejs");

// root of app
app.get("/", (req, res) => {
  res.render("index", {
    title: "Root of project",
  });
});

app.get("/steve", (req, res) => {
  res.render("steve");
});

// shows resource not found error to user if the route does not exist
app.use((req, res) => {
  res.status(404);
  res.send(`<h1>Error 404: Resource not found</h1>`);
});

// sets app to listen to localhost 3000
app.listen(process.env.PORT, () =>
  console.log(`app listening on port ${process.env.PORT}`)
);
