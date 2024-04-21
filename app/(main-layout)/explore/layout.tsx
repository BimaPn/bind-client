import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Explore',
  description: 'Explore something',
}

export default function RootLayout({
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
