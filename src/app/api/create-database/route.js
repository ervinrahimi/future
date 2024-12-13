// app/api/create-database/route.js
import { db, init } from '@/utils/surrealdb/surreal'
import { NextResponse } from 'next/server'

export async function POST() {
  try {
    await init()

    // بدون IF NOT EXISTS
    // await db.query('DEFINE NAMESPACE erfan; ')
    // await db.query('USE NS erfan; DEFINE DATABASE mehrdad;')
    await db.query('USE NS erfan; USE DB mehrdad; CREATE person SET name = "mamad";')


    return NextResponse.json({ message: 'Namespace و Database با موفقیت ایجاد شدند.' })
  } catch (error) {
    console.error('Error creating namespace and database:', error)
    return NextResponse.json({ error: 'خطا در ایجاد Namespace و Database.' }, { status: 500 })
  }
}
