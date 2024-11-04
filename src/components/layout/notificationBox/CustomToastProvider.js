// components/CustomToastProvider.js
import React, { createContext, useContext, useState } from 'react';
import CustomNotification from './CustomNotification'; // کامپوننت نوتیفیکیشن سفارشی

// ایجاد کانتکست برای مدیریت نوتیفیکیشن‌ها
const ToastContext = createContext();

// تابع برای استفاده از کانتکست در سایر کامپوننت‌ها
export const useToast = () => useContext(ToastContext);

const CustomToastProvider = ({ children }) => {
  const [toasts, setToasts] = useState([]);

  // تابع برای اضافه کردن نوتیفیکیشن جدید
  const addToast = (toast) => {
    setToasts((prevToasts) => [...prevToasts, toast]);
  };

  // تابع برای حذف نوتیفیکیشن
  const removeToast = (id) => {
    setToasts((prevToasts) => prevToasts.filter((toast) => toast.id !== id));
  };

  return (
    <ToastContext.Provider value={{ addToast, removeToast }}>
      {children}

      {/* نوتیفیکیشن‌ها */}
      <div style={{ position: 'fixed', top: 20, right: 20, zIndex: 9999 }}>
        {toasts.map((toast) => (
          <CustomNotification
            key={toast.id}
            title={toast.title}
            message={toast.message}
            onClose={() => removeToast(toast.id)}
          />
        ))}
      </div>
    </ToastContext.Provider>
  );
};

export default CustomToastProvider;
