"use strict";

import "dotenv/config";
import express from "express";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

// root of app
app.get("/", (req, res) => {
  res.send("suh dudeeeee!");
});

// sets app to listen to localhost 3000
app.listen(process.env.PORT, () =>
  console.log(`app listening on ${process.env.PORT}`)
);
