// app/api/surrealdb/route.js

import { Surreal } from 'surrealdb';

const db = new Surreal();

db.connect('surrealkv://localhost:8000'); // اتصال به SurrealDB با استفاده از URL و پورت مناسب

export async function POST(req) {
  try {
    const { databaseName, namespace, tableName } = await req.json();

    // اتصال به دیتابیس و نیم‌اسپیس
    await db.use(databaseName, namespace);

    // ایجاد جدول
    await db.query(`CREATE TABLE ${tableName} (id INT, name STRING, email STRING)`);
    return new Response(JSON.stringify({ message: 'Table created successfully!' }), { status: 200 });
  } catch (error) {
    console.error('Error:', error);
    return new Response(JSON.stringify({ error: error.message }), { status: 500 });
  }
}

export async function GET(req) {
  try {
    const { databaseName, namespace, tableName } = await req.json();

    // اتصال به دیتابیس و نیم‌اسپیس
    await db.use(databaseName, namespace);

    // Fetch کردن داده‌ها از جدول
    const result = await db.query(`SELECT * FROM ${tableName}`);
    return new Response(JSON.stringify(result), { status: 200 });
  } catch (error) {
    console.error('Error:', error);
    return new Response(JSON.stringify({ error: error.message }), { status: 500 });
  }
}
