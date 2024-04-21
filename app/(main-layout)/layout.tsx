import MainLayout from "@/layouts/MainLayout"
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'main-layout',
  description: 'main layout',
}
export default function LoginLayout({
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
