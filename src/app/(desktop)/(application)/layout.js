import CustomCursor from '@/components/cursors/CustomCursor'
import styles from './layout.module.css'
export default function NodesLayout({
  children, // will be a page or nested layout
}) {
  return (
    <section className={styles.layoutContainer}>
      <div>ih</div>
      {children}
      <CustomCursor canUse={true} />
    </section>
  )
}
