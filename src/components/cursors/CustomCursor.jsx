// CustomCursor.jsx
'use client';

import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import styles from './CustomCursor.module.css';
import { useCursor } from './CursorContext';

const CustomCursor = ({ followSpeed = 0.03 }) => {
  const { cursorType } = useCursor();
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [visibleCursor, setVisibleCursor] = useState(cursorType);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isVisible, setIsVisible] = useState(true); // برای مدیریت نمایش ماوس هنگام خروج از پنجره

  useEffect(() => {
    if (typeof window === 'undefined') {
      return; // مطمئن می‌شویم که این کد فقط در سمت کلاینت اجرا می‌شود
    }
    let mouseX = 0, mouseY = 0;

    const handleMouseMove = (event) => {
      mouseX = event.clientX;
      mouseY = event.clientY;
    };

    const handleMouseLeave = () => setIsVisible(false); // مخفی کردن ماوس هنگام خروج از پنجره
    const handleMouseEnter = () => setIsVisible(true); // نمایش ماوس هنگام ورود به پنجره

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    const animate = () => {
      setPosition((prevPos) => {
        const newX = prevPos.x + (mouseX - prevPos.x - 8.4) * followSpeed;
        const newY = prevPos.y + (mouseY - prevPos.y - 8.4) * followSpeed;
        return { x: newX, y: newY };
      });
      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [followSpeed]);

  // مدیریت تغییر نرم بین ماوس‌ها
  useEffect(() => {
    if (cursorType !== visibleCursor) {
      setIsTransitioning(true);

      const timeout = setTimeout(() => {
        setVisibleCursor(cursorType);
        setIsTransitioning(false);
      }, 300);

      return () => clearTimeout(timeout);
    }
  }, [cursorType, visibleCursor]);

  return (
    <div
      className={`${styles.cursor} ${styles[visibleCursor]} ${isVisible ? (isTransitioning ? styles.fadeOut : styles.fadeIn) : styles.fadeOut}`}
      style={{ top: `${position.y}px`, left: `${position.x}px` }}
    />
  );
};

export default CustomCursor;

// داینامیک کردن CustomCursor
const CustomCursorDynamic = dynamic(() => Promise.resolve(CustomCursor), { ssr: false });

export { CustomCursorDynamic };
