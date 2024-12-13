'use client';

import { createContext, useContext, useState } from 'react';

const CursorContext = createContext();

export const CursorProvider = ({ children }) => {
  const [cursorType, setCursorType] = useState('default'); // نوع ماوس فعال

  const setCursor = (type) => setCursorType(type); // تغییر نوع ماوس
  const resetCursor = () => setCursorType('default'); // بازگشت به ماوس پیش‌فرض

  return (
    <CursorContext.Provider value={{ cursorType, setCursor, resetCursor }}>
      {children}
    </CursorContext.Provider>
  );
};

export const useCursor = () => useContext(CursorContext);
