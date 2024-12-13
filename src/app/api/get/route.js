// app/api/create-database/route.js
import { futureDb, init } from '@/utils/surrealdb/futuredb'
import { NextResponse } from 'next/server'

export async function GET() {
  try {
    await init()

    // بدون IF NOT EXISTS
    // await db.query('DEFINE NAMESPACE erfan; ')
    // await db.query('USE NS erfan; DEFINE DATABASE mehrdad;')
    await futureDb.query('USE NS futureelite; USE DATABASE futureelite')
    // await futureDb.query('SELECT * FROM elite')
    const data = await futureDb.query('SELECT * FROM elite')
    return NextResponse.json({ message: 'Namespace و Database با موفقیت ایجاد شدند.', data: data })
  } catch (error) {
    console.error('Error creating namespace and database:', error)
    return NextResponse.json({ error: 'خطا در ایجاد Namespace و Database.' }, { status: 500 })
  }
}
