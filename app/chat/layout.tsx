import ChatMenu from '@/components/menu/ChatMenu'
import ChatListProvider from '@/components/providers/ChatListProvider'
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
      <ChatListProvider>
        <section className="w-full flexCenter">
          <div className='min-h-[93vh] ss:min-h-[81vh] sm:min-h-fit sm:h-[80vh] md:h-[80vh] w-full sm:w-[80%] md:w-full flex gap-6'>
            <ChatMenu />
            {children}
          </div>
        </section>
      </ChatListProvider>
    </MainLayout>
  )
}
