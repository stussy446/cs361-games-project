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

  async deleteGame() {
    let query1 = `DELETE FROM games WHERE name='${this.name}'`;

    const [deletedGame, _] = await pool.promise().query(query1);

    return deletedGame;
  }
}

export default Game;
