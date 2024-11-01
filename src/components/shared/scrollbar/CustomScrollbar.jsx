// components/CustomScrollbar.js
'use client';

import { useEffect, useRef } from 'react';
import { OverlayScrollbars } from 'overlayscrollbars';
import 'overlayscrollbars/overlayscrollbars.css';
import styles from "./CustomScrollbar.module.css"

const CustomScrollbar = ({ children }) => {
  const scrollRef = useRef(null);

  useEffect(() => {
    const instance = OverlayScrollbars(scrollRef.current, {
      scrollbars: { autoHide: 'leave' }
    });

    return () => instance.destroy();
  }, []);

  return <div className={styles.scroll} ref={scrollRef}>{children}</div>;
};

export default CustomScrollbar;
