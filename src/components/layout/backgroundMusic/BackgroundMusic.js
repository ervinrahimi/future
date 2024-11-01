"use client";
import { Howl } from 'howler';

const BackgroundMusic = (() => {
  // ایجاد یک نمونه صدا با Howler.js
  const sound = new Howl({
    src: ['musics/time.mp3'], // مسیر فایل صدای شما
    loop: true,
    html5: true, // برای کیفیت بهتر
  });

  // تعریف توابع پخش و توقف
  const playSound = () => {
    if (!sound.playing()) {
      sound.play();
    }
  };

  const stopSound = () => {
    if (sound.playing()) {
      sound.stop();
    }
  };

  // ذخیره توابع در window برای دسترسی در صفحات دیگر
  window.playBackgroundMusic = playSound;
  window.stopBackgroundMusic = stopSound;

  // کامپوننت هیچ خروجی JSX ندارد
  return null;
})();

export default BackgroundMusic;
