import { Client } from "surrealdb";

// اتصال به دیتابیس SurrealDB
const client = new Client('http://localhost:8000'); // آدرس دیتابیس

export default async function handler(req, res) {
  if (req.method === 'GET') {
    try {
      const result = await client.query('SELECT * FROM notes');
      res.status(200).json(result);
    } catch (error) {
      res.status(500).json({ error: 'Error fetching notes' });
    }
  }
}
