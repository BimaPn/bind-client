import './globals.css'
import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import PostContext from '@/components/providers/PostContext'
import AuthProvider from '@/components/providers/AuthContext'
import 'react-loading-skeleton/dist/skeleton.css'
import DarkModeProvider from '@/components/providers/DarkModeProvider'
import ChatCountProvider from '@/components/providers/ChatCountProvider'

const roboto = Roboto ({ 
  weight: ['400', '500', '700'],
  subsets: ['latin'] })


export const metadata: Metadata = {
  title: 'Home',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <body>
        <DarkModeProvider>
          <AuthProvider>
            <PostContext>
              <ChatCountProvider>
                {children}
              </ChatCountProvider>
            </PostContext>
          </AuthProvider>
        </DarkModeProvider>
        </body>
    </html>
  )
}
