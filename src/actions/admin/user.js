// src/actions/admin/user.js
'use server'; // فعال‌سازی server action در Next.js
import { connect } from '@/db/surreal'; // ایمپورت تابع اتصال از lib/surreal.js

// تعریف اکشن برای دریافت کاربران از پایگاه داده
export async function getUsers() {
  try {
    // برقراری ارتباط با پایگاه داده
    const db = await connect();

    // اجرای یک کوئری ساده برای دریافت تمامی کاربران
    const users = await db.query('SELECT * FROM users');

    // لاگ کردن داده‌های دریافتی از پایگاه داده در سرور
    console.log('Fetched users:', users);

    // برگرداندن داده‌ها برای استفاده در صفحه
    return users;
  } catch (error) {
    // لاگ کردن خطا در صورت وجود مشکل در دریافت کاربران
    console.error('Failed to fetch users:', error);
    return [];
  }
}
