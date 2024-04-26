import { authOptions } from '@/app/api/auth/[...nextauth]/route'
import ChatMenu from '@/components/menu/ChatMenu'
import ChatListProvider from '@/components/providers/ChatListProvider'
import type { Metadata } from 'next'
import { getServerSession } from 'next-auth'

export const metadata: Metadata = {
  title: 'Chat',
  description: 'Chat',
}

const RootLayout = async ({
  children,
}: {
  children: React.ReactNode
}) => {
  const session = await getServerSession(authOptions)
  return (
      <ChatListProvider>
        <section className="w-full flexCenter">
          <div className='min-h-[93vh] ss:min-h-[81vh] sm:min-h-fit sm:h-[80vh] md:h-[80vh] w-full sm:w-[80%] md:w-full flex gap-6'>
            <ChatMenu userId={session?.user.id as string} />
            {children}
          </div>
        </section>
      </ChatListProvider>
  )
}

export default RootLayout
