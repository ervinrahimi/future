'use client'
import React from 'react';
import styles from './page.module.css';
import Image from 'next/image';
import ReactPlayer from 'react-player';

export default function LoadingPage() {
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
        <ReactPlayer
          url="/medias/videos/galaxy.mp4"
          playing
          loop
          muted
          className={styles.backgroundVideo}
        />
      </div>
    </div>
  );
}
