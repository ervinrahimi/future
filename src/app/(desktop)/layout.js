import '../../styles/global.css'
import '../../styles/variables.css'

import CustomCursor from '@/components/cursors/CustomCursor'
import { jakarta, jakartaItalic, kahroba, nuestadt, yekanBakh } from '@/fonts/fonts'
import Desktop from './desktop/[desktopId]/page'
import LoadingPage from './loading/page'



export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* <body className={`${geistSans.variable} ${geistMono.variable}`}> */}
      <body
        className={`${kahroba.variable} ${yekanBakh.variable} ${jakarta.cairo} ${jakartaItalic.cairo} ${nuestadt}`}
      >
        <Desktop />
        {children}
        <CustomCursor />
        <LoadingPage />
      </body>
    </html>
  )
}