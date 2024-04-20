import type { Metadata } from 'next'
import { useParams } from 'next/navigation'

export const metadata: Metadata = {
  title: 'username',
  description: 'User Login',
}

export default function LoginLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
        {children}
    </>
  )
}
