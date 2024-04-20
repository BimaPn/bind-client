import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Login',
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
