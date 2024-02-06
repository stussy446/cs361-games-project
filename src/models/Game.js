"use strict";

import { default as pool } from "../routes/db-connector.js";

class Game {
  constructor(gameName) {
    this.name = gameName;
  }

  async save() {
    let query1 = `INSERT INTO games (name) VALUES ('${this.name}')`;

    const [newGame, _] = await pool.promise().query(query1);

    return newGame;
  }

  static findAll() {}
}

export default Game;
