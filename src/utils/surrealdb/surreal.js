// db/surreal.js
import { Surreal } from 'surrealdb';

const SURREALDB_URL = process.env.SURREALDB_URL || 'http://127.0.0.1:8000/rpc';
const SURREALDB_USER = process.env.SURREALDB_USER || 'root';
const SURREALDB_PASS = process.env.SURREALDB_PASS || 'root';
const SURREALDB_NS = process.env.SURREALDB_NS || 'my_namespace';
const SURREALDB_DB = process.env.SURREALDB_DB || 'my_database';

// ایجاد نمونه Surreal
export const db = new Surreal();

export async function init() {
  // اتصال به SurrealDB
  await db.connect(SURREALDB_URL);

  // ورود با استفاده از username و password
  await db.signin({
    username: SURREALDB_USER,
    password: SURREALDB_PASS,
  });

}

// تنظیم namespace و database
// await db.use("test", "test");