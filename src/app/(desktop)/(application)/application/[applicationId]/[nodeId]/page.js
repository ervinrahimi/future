'use client'
import Window from '@/components/appWindows/Window'
import styles from './page.module.css'
import React from 'react'
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function NodePage() {

  const containerRef = useRef(null);

  useEffect(() => {
    // انیمیشن باز شدن کانتینر
    gsap.fromTo(
      containerRef.current,
      {
        opacity: 0,
        scale: 1.45,
      },
      {
        opacity: 1,
        scale: 1,
        duration: 0.7,
        delay: 0.5,
        ease: "back.out(1.7)",
      }
    );
  }, []);


  return (
    <div className={styles.container}  ref={containerRef}>
      <Window className={styles.appWindow}>

      </Window>
      
    </div>
  )
}
