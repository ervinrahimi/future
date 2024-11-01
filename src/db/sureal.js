// lib/surreal.js
import Surreal from 'surrealdb.js';

// ایجاد یک نمونه از SurrealDB و تنظیم آدرس سرور
const db = new Surreal('http://localhost:8000/rpc'); // آدرس سرور SurrealDB را اینجا مشخص کن

// تابع اتصال به پایگاه داده
export async function connect() {
  try {
    // ورود به سیستم با نام کاربری و رمز عبور
    await db.signin({
      user: 'root', // نام کاربری
      pass: 'root', // رمز عبور
    });

    // انتخاب دیتابیس و جدول
    await db.use('test', 'test'); // دیتابیس 'test' و جدول 'test' را انتخاب می‌کنیم

    // بررسی اتصال موفق و لاگ کردن پیام در سرور
    console.log('Connected to SurrealDB successfully');

    // برگرداندن نمونه‌ی پایگاه داده برای استفاده در سایر بخش‌ها
    return db;
  } catch (error) {
    // مدیریت خطا در صورت عدم موفقیت در اتصال
    console.error('Failed to connect to SurrealDB:', error);
  }
}
