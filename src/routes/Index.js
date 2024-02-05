import express from "express";
import { default as pool } from "./db-connector.js";

const router = express.Router();

// home page
router.get("/", (req, res) => {
  let query1 = `SELECT * FROM games ORDER BY idgames DESC LIMIT 3;`;

  pool.query(query1, function (error, rows, fields) {
    res.render("index", {
      title: "Root of project",
      games: rows,
    });
  });
});

export default router;
