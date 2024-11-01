'use client'
import React, { useState, useEffect } from 'react';
import styles from './page.module.css';
import Image from 'next/image';

export default function LoadingPage() {
  const [videoLoaded, setVideoLoaded] = useState(false);

  const handleVideoLoad = () => {
    setVideoLoaded(true);
  };

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <Image
          src={'/medias/images/future-logo-2.png'}
          width={1000}
          height={1000}
          alt="future-logo"
        />
      </div>
      <div className={styles.videoContainer}>
        <video
          autoPlay
          loop
          muted
          className={styles.backgroundVideo}
          onCanPlayThrough={handleVideoLoad}
          style={{ display: videoLoaded ? 'block' : 'none' }}
        >
          <source src={`/medias/videos/galaxy.mp4?cacheBust=${Date.now()}`} type="video/mp4" />
          مرورگر شما از ویدیو پشتیبانی نمی‌کند.
        </video>
      </div>
      {!videoLoaded && <div className={styles.loadingText}>در حال بارگذاری...</div>}
    </div>
  );
}
