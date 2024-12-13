'use client'
import React from 'react'
import { useCallback } from 'react'

import styles from './Navigation.module.css'
import Image from 'next/image'
import { NavigationSelectedItem, NavigationDots } from '@/assets/icons/main/navigationBar'
import Link from 'next/link'
export const Navigation = () => {
  return (
    <div className={styles.container}>
      <div className={`${styles.sliderContainer} ${styles.rtl}`}>
        <NavigationDots className={styles.dots} />
        <div className="embla" ref={emblaRef}>
          <div className={styles.emblaContainer}>
            <div className={styles.emblaSlide}>
              <Link href="#">
                <Image
                  src={'/buildings/soltani-zade/sales.jpg'}
                  width={200}
                  height={200}
                  alt="null"
                />
              </Link>
              <span>ایونت شماره 12</span>
            </div>
            <div className={styles.emblaSlide}>
              <Link href="#">
                <Image
                  src={'/buildings/soltani-zade/sales.jpg'}
                  width={200}
                  height={200}
                  alt="null"
                />
              </Link>
              <span>ایونت شماره 11</span>
            </div>
            <div className={styles.emblaSlide}>
              <Link href="#">
                <Image
                  src={'/buildings/soltani-zade/sales.jpg'}
                  width={200}
                  height={200}
                  alt="null"
                />
              </Link>
              <span>ایونت شماره 10</span>
            </div>
            <div className={styles.emblaSlide}>
              <Link href="#">
                <Image
                  src={'/buildings/soltani-zade/sales.jpg'}
                  width={200}
                  height={200}
                  alt="null"
                />
              </Link>
              <span>ایونت شماره 9</span>
            </div>
            <div className={styles.emblaSlide}>
              <Link href="#">
                <Image
                  src={'/buildings/soltani-zade/sales.jpg'}
                  width={200}
                  height={200}
                  alt="null"
                />
              </Link>
              <span>ایونت شماره 8</span>
            </div>
            <div className={styles.emblaSlide}>
              <Link href="#">
                <Image
                  src={'/buildings/soltani-zade/sales.jpg'}
                  width={200}
                  height={200}
                  alt="null"
                />
              </Link>
              <span>ایونت شماره 7</span>
            </div>
            <div className={styles.emblaSlide}>
              <Link href="#">
                <Image
                  src={'/buildings/soltani-zade/sales.jpg'}
                  width={200}
                  height={200}
                  alt="null"
                />
              </Link>
              <span>ایونت شماره 6</span>
            </div>
            <div className={styles.emblaSlide}>
              <Link href="#">
                <Image
                  src={'/buildings/soltani-zade/sales.jpg'}
                  width={200}
                  height={200}
                  alt="null"
                />
              </Link>
              <span>ایونت شماره 5</span>
            </div>
            <div className={styles.emblaSlide}>
              <Link href="#">
                <Image
                  src={'/buildings/soltani-zade/sales.jpg'}
                  width={200}
                  height={200}
                  alt="null"
                />
              </Link>
              <span>ایونت شماره 4</span>
            </div>
            <div className={styles.emblaSlide}>
              <Link href="#">
                <Image
                  src={'/buildings/soltani-zade/sales.jpg'}
                  width={200}
                  height={200}
                  alt="null"
                />
              </Link>
              <span>ایونت شماره 3</span>
            </div>
            <div className={styles.emblaSlide}>
              <Link href="#">
                <Image
                  src={'/buildings/soltani-zade/sales.jpg'}
                  width={200}
                  height={200}
                  alt="null"
                />
              </Link>
              <span>ایونت شماره 2</span>
            </div>
            <div className={styles.emblaSlide}>
              <Link href="#">
                <Image
                  src={'/buildings/soltani-zade/sales.jpg'}
                  width={200}
                  height={200}
                  alt="null"
                />
              </Link>
              <span>ایونت شماره 1</span>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.selectedItem}>
        <div className={styles.selectedItemContent}>
          <Image src={'/buildings/soltani-zade/logo.jpg'} width={250} height={250} alt="null" />
        </div>
        <NavigationSelectedItem className={styles.selectedFrame} />
        {/* <button className="embla__prev" onClick={scrollPrev}>
          Prev
        </button>
        <button className="embla__next" onClick={scrollNext}>
          Next
        </button>
        <button className="embla__prev" onClick={scrollPrev2}>
          Prev
        </button>
        <button className="embla__next" onClick={scrollNext2}>
          Next
        </button> */}
      </div>
      <div className={styles.sliderContainer}>
        <NavigationDots className={styles.dots} />
        <div className="embla" ref={emblaRef2}>
          <div className={styles.emblaContainer}>
            <div className={styles.emblaSlide}>
              <Link href="#">
                <Image
                  src={'/buildings/soltani-zade/sales.jpg'}
                  width={200}
                  height={200}
                  alt="null"
                />
              </Link>
              <span>فروش</span>
            </div>
            <div className={styles.emblaSlide}>
              <Link href="#">
                <Image
                  src={'/buildings/soltani-zade/security.jpg'}
                  width={200}
                  height={200}
                  alt="null"
                />
              </Link>
              <span>امنیت</span>
            </div>
            <div className={styles.emblaSlide}>
              <Link href="#">
                <Image src={'/buildings/soltani-zade/it.jpg'} width={200} height={200} alt="null" />
              </Link>
              <span>حقوقی</span>
            </div>
            <div className={styles.emblaSlide}>
              <Link href="#">
                <Image src={'/buildings/soltani-zade/it.jpg'} width={200} height={200} alt="null" />
              </Link>
              <span>فناوری و اطلاعات</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
