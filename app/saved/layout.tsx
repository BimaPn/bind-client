import MainLayout from '@/layouts/MainLayout'
import type { Metadata } from 'next'


export const metadata: Metadata = {
  title: 'saved',
}

export default function SavedLayout({
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