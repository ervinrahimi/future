import { CursorProvider } from '@/components/cursors/CursorContext'
import CustomCursor from '@/components/cursors/CustomCursor'
import AppBackground from '@/components/layout/background/AppBackground'

export default function NodesLayout({
  children, // will be a page or nested layout
}) {
  return (
    <>
      <AppBackground />
      {/* <CursorProvider> */}
      {/* <CustomCursor canUse={true} /> */}
      {children}
      {/* </CursorProvider> */}
    </>
  )
}
