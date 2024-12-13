'use client'
import { useEffect } from 'react'
const useScrollToTopOnRouteChange = () => {
  useEffect(() => {
    // اسکرول به بالا در بارگذاری اولیه یا رفرش صفحه
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, []) // وابستگی خالی برای بارگذاری اولیه
}

export default useScrollToTopOnRouteChange
