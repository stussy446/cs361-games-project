"use strict";

import "dotenv/config";
import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import expressEjsLayouts from "express-ejs-layouts";

import { default as gameRouter } from "./src/routes/Games.js";
import { default as homeRouter } from "./src/routes/Index.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// express configuration
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(expressEjsLayouts);

// route configuration
app.use("/", homeRouter);
app.use("/games", gameRouter);

// sets up ejs
app.set("views", path.join(__dirname, "/src/views"));
app.set("view engine", "ejs");

// sets app to listen to localhost 3000
app.listen(process.env.PORT, () =>
  console.log(`app listening on port ${process.env.PORT}`)
);
