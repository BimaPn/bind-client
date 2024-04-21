import ChatMenu from '@/components/menu/ChatMenu'
import MainLayout from '@/layouts/MainLayout'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Chat',
  description: 'Chat',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <MainLayout disabledDiscover>
      <section className="w-full flexCenter">
        <div className='h-[93.4vh] ss:h-[83vh] sm:h-[90vh] md:h-[60vh] w-full sm:w-[80%] md:w-full flex gap-6'>
          <ChatMenu />
          {children}
        </div>
      </section>
    </MainLayout>
  )
}
