'use client'
import { useEffect, useRef, useState } from 'react'
import styles from './Window.module.css'
import { usePathname } from 'next/navigation'
import gsap from 'gsap'
import {
  AppWindow,
  LeftSideBar,
  LeftSmallSideBar,
  RightSideBar,
  RightSmallSideBar,
} from '@/assets/svgs/appWindow/appWindow'
import Link from 'next/link'
import InMenuNetworkIcon from '@/assets/icons/nodes/nodesInMenu'

import BigSlider from '../ui/slider/BigSlider'

// MyButton.js
import useHoverCursor from '@/components/cursors/useHoverCursor'

export default function Window() {
  const { handleMouseEnter, handleMouseLeave } = useHoverCursor('cross', 500)
  const { handleMouseEnter2, handleMouseLeave2 } = useHoverCursor('default', 500)
  const pathname = usePathname()

  // ساختار داده‌های منو
  const menus = [
    {
      title: 'خانه',
      slug: '/application',
      label: 'خانه',
      description: 'بازگشت به صفحه اصلی',
      subMenus: [
        {
          title: 'Sample 1',
          slug: '/application/nodes',
          label: 'زیرمنوی ۱',
          description: 'توضیح کوتاه زیرمنوی ۱',
        },
        {
          title: 'Sample 2',
          slug: '#',
          label: 'زیرمنوی ۲',
          description: 'توضیح کوتاه زیرمنوی ۲',
          slug: '/application/nodes',
        },
      ],
    },
    {
      title: 'منو شماره 2',
      slug: '/m2',
      label: 'دسته دوم',
      description: 'بخش دوم منو',
      subMenus: [
        {
          title: 'Sample 4',
          slug: '/application/nodes',
          label: 'زیرمنوی ۴',
          description: 'توضیح کوتاه زیرمنوی ۴',
          slug: '/application/nodes',
        },
        {
          title: 'Sample 5',
          slug: '/application/nodes',
          label: 'زیرمنوی ۵',
          description: 'توضیح کوتاه زیرمنوی ۵',
        },
        {
          title: 'Sample 6',
          slug: '/application/nodes',
          label: 'زیرمنوی ۶',
          description: 'توضیح کوتاه زیرمنوی ۶',
        },
      ],
    },
    {
      title: 'منو بدون زیرمنو',
      slug: '#',
      label: 'منوی ساده',
      description: 'این منو زیرمجموعه‌ای ندارد',
      subMenus: [],
    },
    {
      title: 'منو شماره 2',
      slug: '/m2',
      label: 'دسته دوم',
      description: 'بخش دوم منو',
      subMenus: [
        {
          title: 'Sample 4',
          slug: '/application/nodes',
          label: 'زیرمنوی ۴',
          description: 'توضیح کوتاه زیرمنوی ۴',
          slug: '/application/nodes',
        },
        {
          title: 'Sample 5',
          slug: '/application/nodes',
          label: 'زیرمنوی ۵',
          description: 'توضیح کوتاه زیرمنوی ۵',
        },
      ],
    },
    {
      title: 'منو شماره 2',
      slug: '/m2',
      label: 'دسته دوم',
      description: 'بخش دوم منو',
      subMenus: [
        {
          title: 'Sample 4',
          slug: '/application/nodes',
          label: 'زیرمنوی ۴',
          description: 'توضیح کوتاه زیرمنوی ۴',
          slug: '/application/nodes',
        },
      ],
    },
    {
      title: 'منو شماره 2',
      slug: '/m2',
      label: 'دسته دوم',
      description: 'بخش دوم منو',
      subMenus: [
        {
          title: 'Sample 4',
          slug: '/application/nodes',
          label: 'زیرمنوی ۴',
          description: 'توضیح کوتاه زیرمنوی ۴',
          slug: '/application/nodes',
        },
        {
          title: 'Sample 5',
          slug: '/application/nodes',
          label: 'زیرمنوی ۵',
          description: 'توضیح کوتاه زیرمنوی ۵',
        },
        {
          title: 'Sample 6',
          slug: '/application/nodes',
          label: 'زیرمنوی ۶',
          description: 'توضیح کوتاه زیرمنوی ۶',
        },
      ],
    },

    {
      title: 'منو شماره 2',
      slug: '/m2',
      label: 'دسته دوم',
      description: 'بخش دوم منو',
      subMenus: [
        {
          title: 'Sample 4',
          slug: '/application/nodes',
          label: 'زیرمنوی ۴',
          description: 'توضیح کوتاه زیرمنوی ۴',
          slug: '/application/nodes',
        },
        {
          title: 'Sample 5',
          slug: '/application/nodes',
          label: 'زیرمنوی ۵',
          description: 'توضیح کوتاه زیرمنوی ۵',
        },
        {
          title: 'Sample 6',
          slug: '/application/nodes',
          label: 'زیرمنوی ۶',
          description: 'توضیح کوتاه زیرمنوی ۶',
        },
      ],
    },
  ]

  return (
    <div className={styles.container}>
      <div className={styles.appWindowControl}>ss</div>

      {/* <AppWindow className={styles.windowSvgStyle} /> */}

      <div className={`${styles.rightSideBar} ${styles.sideBar}`}>
        <RightSideBar className={styles.mainSideLine} />
        <LeftSmallSideBar className={styles.sideLine} />

        <ul onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          {menus.map((menu, index) => {
            const isMenuActive = pathname === menu.slug

            return (
              <li key={index}>
                <div className={styles.menuTitleContainer}>
                  <div className={styles.iconHolder}>
                    <InMenuNetworkIcon className={styles.icon} />
                  </div>
                  <Link
                    className={`${styles.menuTitle} ${isMenuActive ? styles.activeMenuTitle : ''}`}
                    href={'#'}
                    // href={menu.slug}
                  >
                    {menu.title}
                  </Link>
                </div>

                {menu.subMenus.length > 0 && (
                  <div className={styles.subMenuItems}>
                    {menu.subMenus.map((subMenu, subIndex) => {
                      const isSubMenuActive = pathname === subMenu.slug

                      return (
                        <Link
                          key={subIndex}
                          className={`${styles.subMenuTitle} ${
                            isSubMenuActive ? styles.activeSubMenuTitle : ''
                          }`}
                          // href={subMenu.slug}
                          href={'#'}
                        >
                          {subMenu.title}
                        </Link>
                      )
                    })}
                  </div>
                )}
              </li>
            )
          })}
        </ul>
      </div>

      <div
        className={styles.content}
        onMouseEnter={handleMouseEnter2}
        onMouseLeave={handleMouseEnter2}
      >
        <BigSlider />
      </div>

      <div className={`${styles.leftSideBar} ${styles.sideBar}`}>
        <LeftSideBar className={styles.mainSideLine} />
        <RightSmallSideBar className={styles.sideLine} />

        <ul className={styles.leftMenu}>
          {menus.map((menu, index) => {
            const isMenuActive = pathname === menu.slug

            return (
              <li key={index}>
                <div className={styles.menuTitleContainer}>
                  <div className={styles.iconHolder}>
                    <InMenuNetworkIcon className={styles.icon} />
                  </div>
                  <Link
                    className={`${styles.menuTitle} ${isMenuActive ? styles.activeMenuTitle : ''}`}
                    href={'#'}
                    // href={menu.slug}
                  >
                    {menu.title}
                  </Link>
                </div>

                {menu.subMenus.length > 0 && (
                  <div className={styles.subMenuItems}>
                    {menu.subMenus.map((subMenu, subIndex) => {
                      const isSubMenuActive = pathname === subMenu.slug

                      return (
                        <Link
                          key={subIndex}
                          className={`${styles.subMenuTitle} ${
                            isSubMenuActive ? styles.activeSubMenuTitle : ''
                          }`}
                          href={'#'}
                          // href={subMenu.slug}
                        >
                          {subMenu.title}
                        </Link>
                      )
                    })}
                  </div>
                )}
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}
