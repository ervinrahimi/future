import { Client } from "surrealdb";

const client = new Client('http://localhost:8000');

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { title, content } = req.body;
    try {
      await client.query('CREATE note SET title = ?, content = ?', title, content);
      res.status(201).json({ message: 'Note created successfully' });
    } catch (error) {
      res.status(500).json({ error: 'Error creating note' });
    }
  }
}
