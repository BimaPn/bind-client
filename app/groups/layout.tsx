import MainLayout from '@/layouts/MainLayout'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'groups',
  description: 'groups',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <MainLayout>
        {children}
    </MainLayout>
  )
}