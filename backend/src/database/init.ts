import sqlite3 from "sqlite3";
import path from "path";

sqlite3.verbose();

const databasePath = path.join(
  __dirname,
  "../../../career-tracker.db"
);

export const db = new sqlite3.Database(
  databasePath,
  (err) => {
    if (err) {
      console.error(
        "Failed to connect to database:",
        err.message
      );
      return;
    }

    console.log("Connected to SQLite database");
  }
);