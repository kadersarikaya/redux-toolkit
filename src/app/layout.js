import Navbar from "@/components/Navbar"
import { ReduxProvider } from "@/store/provider"
import '@/app/globals.css'
export const metadata = {
  title: 'Next.js',
  description: 'Generated by Next.js',
}

export default function RootLayout({ children }) {
 return (
    <html lang="en">
      <body>
        <ReduxProvider>
          <Navbar/>
        {children}
        </ReduxProvider>
      </body>
    </html>
  )
}