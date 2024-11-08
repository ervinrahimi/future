import AppBackground from '@/components/layout/background/AppBackground'

export default function NodesLayout({
  children, // will be a page or nested layout
}) {
  return (
    <>
      <AppBackground />
      {children}
    </>
  )
}
