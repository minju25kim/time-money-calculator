import Database from "better-sqlite3"

const db = new Database(process.env.DB_FILE)

console.log(db)